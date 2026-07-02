/* Site interactions: mobile nav, theme toggle, scroll reveal,
   publication filtering, and client-side BibTeX generation. */
(function () {
    "use strict";

    /* ---------- Mobile navigation ---------- */
    var navToggle = document.querySelector(".nav-toggle");
    var navMenu = document.querySelector(".nav-menu");
    if (navToggle && navMenu) {
        navToggle.addEventListener("click", function () {
            var open = navMenu.classList.toggle("active");
            navToggle.classList.toggle("active", open);
            navToggle.setAttribute("aria-expanded", open ? "true" : "false");
        });
        navMenu.addEventListener("click", function (e) {
            if (e.target.tagName === "A") {
                navMenu.classList.remove("active");
                navToggle.classList.remove("active");
                navToggle.setAttribute("aria-expanded", "false");
            }
        });
    }

    /* ---------- Theme toggle ---------- */
    var themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            var current = document.documentElement.getAttribute("data-theme");
            var next = current === "dark" ? "light" : "dark";
            document.documentElement.setAttribute("data-theme", next);
            try { localStorage.setItem("theme", next); } catch (e) {}
        });
    }

    /* ---------- Scroll reveal ---------- */
    var revealEls = document.querySelectorAll(".reveal");
    if (revealEls.length && "IntersectionObserver" in window) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in");
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
        revealEls.forEach(function (el) { io.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add("in"); });
    }

    /* ---------- Publications: filter + search ---------- */
    var pubRoot = document.querySelector("[data-pub-root]");
    if (pubRoot) {
        var chips = pubRoot.querySelectorAll(".filter-chip");
        var searchInput = pubRoot.querySelector(".pub-search");
        var items = pubRoot.querySelectorAll(".pub-item");
        var groups = pubRoot.querySelectorAll(".pub-year-group");
        var emptyMsg = pubRoot.querySelector(".pub-empty");
        var activeTopic = "all";

        function applyFilters() {
            var q = (searchInput && searchInput.value || "").trim().toLowerCase();
            var anyVisible = false;

            items.forEach(function (item) {
                var topics = (item.getAttribute("data-topics") || "").toLowerCase();
                var haystack = (item.getAttribute("data-search") || "").toLowerCase();
                var topicOk = activeTopic === "all" || topics.indexOf(activeTopic) !== -1;
                var searchOk = !q || haystack.indexOf(q) !== -1;
                var show = topicOk && searchOk;
                item.style.display = show ? "" : "none";
                if (show) anyVisible = true;
            });

            groups.forEach(function (group) {
                var visible = group.querySelectorAll('.pub-item:not([style*="display: none"])');
                group.style.display = visible.length ? "" : "none";
            });

            if (emptyMsg) emptyMsg.style.display = anyVisible ? "none" : "block";
        }

        chips.forEach(function (chip) {
            chip.addEventListener("click", function () {
                chips.forEach(function (c) { c.classList.remove("active"); });
                chip.classList.add("active");
                activeTopic = (chip.getAttribute("data-filter") || "all").toLowerCase();
                applyFilters();
            });
        });
        if (searchInput) searchInput.addEventListener("input", applyFilters);
    }

    /* ---------- Projects: category filter ---------- */
    var projRoot = document.querySelector("[data-projects-root]");
    if (projRoot) {
        var pChips = projRoot.querySelectorAll(".filter-chip");
        var cards = projRoot.querySelectorAll(".project-card");
        var pGroups = projRoot.querySelectorAll(".project-group");
        var pEmpty = projRoot.querySelector(".pub-empty");
        var activeCat = "all";

        function applyProjFilters() {
            var anyVisible = false;
            cards.forEach(function (card) {
                var cat = (card.getAttribute("data-category") || "").toLowerCase();
                var show = activeCat === "all" || cat.indexOf(activeCat) !== -1;
                card.style.display = show ? "" : "none";
                if (show) anyVisible = true;
            });
            pGroups.forEach(function (group) {
                var visible = group.querySelectorAll('.project-card:not([style*="display: none"])');
                group.style.display = visible.length ? "" : "none";
            });
            if (pEmpty) pEmpty.style.display = anyVisible ? "none" : "block";
        }

        pChips.forEach(function (chip) {
            chip.addEventListener("click", function () {
                pChips.forEach(function (c) { c.classList.remove("active"); });
                chip.classList.add("active");
                activeCat = (chip.getAttribute("data-filter") || "all").toLowerCase();
                applyProjFilters();
            });
        });
    }

    /* ---------- Publications: BibTeX ---------- */
    var modal = document.getElementById("cite-modal");
    if (modal) {
        var citePre = document.getElementById("cite-pre");
        var citeCopy = document.getElementById("cite-copy");

        function slug(s) { return (s || "").toLowerCase().replace(/[^a-z0-9]/g, ""); }

        function makeBibtex(d) {
            var firstAuthor = (d.authors || "").split(",")[0] || "anon";
            var last = slug(firstAuthor.split(" ").pop());
            var titleWords = (d.title || "work").split(/\s+/);
            var firstWord = "work";
            for (var i = 0; i < titleWords.length; i++) {
                if (titleWords[i].length > 3) { firstWord = titleWords[i]; break; }
            }
            var key = last + d.year + slug(firstWord);
            var authors = (d.authors || "")
                .replace(/,?\s*et al\.?/i, "")
                .split(",").map(function (s) { return s.trim(); })
                .filter(Boolean).join(" and ");
            var isJournal = d.type === "journal";
            var entry = isJournal ? "article" : (d.type === "preprint" ? "misc" : "inproceedings");
            var venueField = isJournal ? "journal" : (d.type === "preprint" ? "howpublished" : "booktitle");
            return "@" + entry + "{" + key + ",\n" +
                "  title     = {" + d.title + "},\n" +
                "  author    = {" + authors + "},\n" +
                "  " + venueField + " = {" + d.venue + "},\n" +
                "  year      = {" + d.year + "}\n" +
                "}";
        }

        function openModal(data) {
            citePre.textContent = makeBibtex(data);
            if (citeCopy) citeCopy.textContent = "Copy";
            modal.classList.add("open");
        }
        function closeModal() { modal.classList.remove("open"); }

        document.querySelectorAll(".cite-btn").forEach(function (btn) {
            btn.addEventListener("click", function () {
                var item = btn.closest(".pub-item");
                if (!item) return;
                openModal({
                    title: item.getAttribute("data-title"),
                    authors: item.getAttribute("data-authors"),
                    venue: item.getAttribute("data-venue"),
                    year: item.getAttribute("data-year"),
                    type: item.getAttribute("data-type")
                });
            });
        });

        modal.addEventListener("click", function (e) {
            if (e.target === modal || e.target.hasAttribute("data-close")) closeModal();
        });
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") closeModal();
        });
        if (citeCopy) {
            citeCopy.addEventListener("click", function () {
                var text = citePre.textContent;
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(text).then(function () {
                        citeCopy.textContent = "Copied!";
                        setTimeout(function () { citeCopy.textContent = "Copy"; }, 1600);
                    });
                }
            });
        }
    }
})();
