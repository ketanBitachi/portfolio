# Ketan Kumar Behera — Personal Portfolio

A static, mobile-responsive website built with HTML, CSS and a tiny bit of JavaScript. No npm, build tools, API keys, or framework needed.

## File structure

```text
ketan_portfolio_site/
├── index.html           <-- REQUIRED assignment landing page
├── style.css            <-- layout, theme, typography
├── script.js            <-- mobile menu and current year
├── .nojekyll            <-- tells GitHub Pages to serve static files directly
└── assets/
    ├── data-workflow.svg <-- REQUIRED image (original illustration)
    └── favicon.svg
```

## Before publishing

1. Confirm that the degree/experience descriptions from your resume are current.
2. Review each project description and the ~25% improvement claim; it is sourced from your resume but should be published only if accurate.
3. The website includes an email address for professional contact; remove it if you don't want your email public.
4. Your connected GitHub account confirmed the username `ketanBitachi`, so the site links to `https://github.com/ketanBitachi`. The LinkedIn URL is still unverified and intentionally omitted. Add it after checking your public profile. No personal photograph is included.

## Easy publish with GitHub Pages — no command line

1. Log in to github.com.
2. Click **+** (top right) → **New repository**.
3. Repository name: `portfolio` (or `ketan-portfolio`). Choose **Public**.
4. Click **Create repository**.
5. Select **uploading an existing file** or **Add file → Upload files**.
6. UNZIP the downloaded project first. Upload the **files and assets folder inside** the unzipped directory, not the ZIP file itself and not the outer folder.
7. Confirm **index.html** is at the repository root next to `style.css` and `script.js`.
8. Click **Commit changes**.
9. Open **Settings → Pages**.
10. Under **Build and deployment**, set Source to **Deploy from a branch**, Branch to **main**, Folder to **/(root)**, then **Save**.
11. Once GitHub Pages finishes deploying, open the published URL from **Settings → Pages → Visit site**.
12. Open the live URL in a private/incognito window and on a phone; test images, menu, and links.
13. Submit **the public URL** in Canvas, not the ZIP file. Paste this URL into your resume as a clickable portfolio link.

For your verified GitHub username, the likely portfolio URL after creating a public repository named `portfolio` and enabling GitHub Pages is `https://ketanBitachi.github.io/portfolio/`. This URL is a **prediction, not a live or verified published site**. Use the link displayed by GitHub under Settings → Pages after deployment.

## Change the text

Open `index.html` in VS Code, Notepad, or another text editor. Search for `Ketan Kumar Behera`, `about`, `project-card`, or `experience` and change the visible words. Save. Refresh the page.

## Change the theme

Open `style.css`; the first line with `:root` defines the color palette. For example `--cyan` affects the accent and `--bg` the background. Save and refresh.

## Change the image

Replace `assets/data-workflow.svg` with a photo file you own, then update the `<img src="assets/data-workflow.svg">` path in `index.html` to the new filename, such as `assets/profile.jpg`. Keep meaningful `alt="..."` text. Do not publish anyone else's private photos or student data.

## How to add your verified GitHub and LinkedIn links

Add links to your hero or contact area in `index.html` only after verifying your own public profiles. Example:

```html
<a href="https://github.com/YOUR-USERNAME" target="_blank" rel="noopener noreferrer">GitHub</a>
<a href="https://www.linkedin.com/in/YOUR-VERIFIED-SLUG/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
```

## Codex (optional)

For first use, open the website folder in VS Code, then use the Codex extension or Codex desktop app. Sign in with your ChatGPT account if supported. **Tell Codex not to invent facts** and ask it to show proposed edits before you accept them.

Prompt:

> Review this simple GitHub Pages personal portfolio without changing the truthful resume details. Keep `index.html` in the repository root and retain a local `<img>` element and accessible alt text. Improve small-screen layout and accessibility, fix any broken links, and explain your edits. Do not add React, a build pipeline, database, fake projects, fake achievements or stock profile portraits.

## Assignment rubric (6 points)

- [x] `index.html` created as the landing page (HTML source provided)
- [x] Short bio about the student
- [x] HTML headings (`h1`, `h2`, `h3`), paragraphs (`p`), and sections/divs
- [x] Image tag loading a local original SVG illustration
- [x] CSS for polished appearance (optional enhancement)
- [ ] Published to a public hosting URL (must be done in your GitHub account)
- [ ] Submitted published URL in Canvas (must be done by you)

**Your GitHub username and profile image are not needed to complete the assignment with this version.**

## User edits preserved in this version

This version retains the latest supplied `index.html` content: full name in navigation, simplified section labels, updated project copy, and the original navigation choices. It also includes a full-page back-to-top target and repositions the decorative dot so the KB initials are centered.
