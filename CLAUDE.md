# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Academic personal website and blog for Mohamed Amine Kerkouri, built with **Jekyll 4.3** and served via GitHub Pages at `https://kmamine.github.io`. Static site: no application code, no test suite. Design language is "Refined Academic": warm-paper light theme (default) + a calm dark theme, Fraunces (serif display) + Inter (sans body), a single indigo accent, hairline borders, generous whitespace.

## Commands

```bash
bundle install                              # install gems (first time)
bundle exec jekyll serve                    # local dev server at http://localhost:4000
bundle exec jekyll serve --livereload       # + auto-reload on file changes
bundle exec jekyll build                    # build to _site/ (use to verify a change compiles)
```

No tests/linters. Verification = the build succeeds and pages render correctly in **both** themes. (Note: the Jekyll toolchain may not be installed in every environment; when it isn't, validate `_data/*.yml` with a YAML parser and check Liquid `{% %}` / if / for balance by hand.)

## Deploy

Push to trigger GitHub Pages. Branch ambiguity persists: the working branch is `main`, but `origin/HEAD` points to `master`, and the README says deploy is on push to `main`. Confirm the intended branch before pushing. No CI workflow exists. The Gemfile pins Jekyll `~> 4.3` while GitHub Pages' default builder uses an older Jekyll; `jekyll-feed` and `jekyll-seo-tag` are both whitelisted, so this generally works, but local build output can differ subtly. Posts use `permalink: /blog/:year/:month/:day/:title/` (set in `_config.yml`).

## Architecture

**Layout chain.** `_layouts/default.html` is the base shell: `<head>` (fonts, CSS, `{% seo %}` + `{% feed_meta %}`, a **flash-free theme-init inline script**, and conditional KaTeX), then `{% include header.html %}` / `footer.html`, then a deferred `{% include %}`-free `assets/js/main.js`. `page.html` and `post.html` both set `layout: default`. Posts get their layout auto-assigned via `defaults` in `_config.yml`. Don't add `layout:` to post front matter.

**Theming (important).** **Light is the default** (`:root` holds the light/paper palette); dark is the `[data-theme="dark"]` override; this is inverted from the earlier version, so check both. **All colors must go through the CSS custom properties** in [assets/css/style.css](assets/css/style.css) (`var(--bg)`, `var(--text)`, `var(--accent)`, …); hardcoding a hex color breaks one theme. Theme resolution happens in two places: a tiny inline script in `default.html`'s `<head>` sets `data-theme` before first paint (reads `localStorage.theme`, else system preference) **and adds a `js` class to `<html>`**; the toggle button handler lives in `assets/js/main.js`.

**Reveal-on-scroll.** Elements with class `reveal` fade in via an IntersectionObserver in `main.js`. Hiding is scoped to `.js .reveal`, so **no-JS visitors and crawlers still see everything**. Keep that `js`-gating if you touch the reveal CSS.

**Math.** Set `math: true` in front matter to load KaTeX (deferred, CDN). Delimiters `$…$` inline, `$$…$$` display.

## Content model: data-driven

Structured content lives in `_data/*.yml` and is rendered by Liquid. **Edit the YAML, not the HTML**, to change these:

- **`_data/publications.yml`**: the master publication list (title, authors with `M.A. Kerkouri` as self, venue, year, `type`, `topics`, `citations`, `featured`, `links`). Powers: the homepage "Selected work" cards (`featured: true`, sorted by citations) and the whole [publications.html](publications.html) page (grouped by year, topic filter chips, search, per-paper links, and a **client-side BibTeX** "Cite" button). Filtering + BibTeX generation live in `assets/js/main.js` (keyed off `data-*` attributes and `[data-pub-root]`).
- **`_data/projects.yml`**: open-source projects (name, description, tags, language, stars, `featured`, `repo`, optional `paper`). Powers the homepage "Open source" preview (`featured`) and [projects.html](projects.html). Descriptions are best-effort from GitHub; verify before relying on them.
- **`_data/news.yml`**: reverse-chronological homepage "News & highlights" feed (newest first; `date` is free text, `link` optional).

The `publications` collection declared in `_config.yml` is still **unused** (no `_publications/` dir, `site.publications` referenced nowhere); publications come from the data file above, not the collection.

**Blog posts**: `_posts/YYYY-MM-DD-title.md`. Paper posts use `categories: [research, publications]`; open-source posts use `categories: [projects, open-source]`. First paragraph is the excerpt shown on cards (homepage + blog). When writing posts about this researcher's work, **do not invent metrics, datasets, baselines, or SOTA/citation numbers**; describe contributions qualitatively and link to the paper.

**Navigation and footer are hardcoded** in [_includes/header.html](_includes/header.html) (nav links + active-state + theme-toggle button) and [_includes/footer.html](_includes/footer.html) (social links). Adding a page means adding its nav entry there manually. Site metadata (author, social handles) lives in `_config.yml`.
