# Grace & Asa — Wedding Website

Live at [graceandasa.com](https://graceandasa.com)

---

## Deploying to GitHub Pages

### 1. Create the GitHub repo

```bash
git init
git add .
git commit -m "Initial wedding website"
# Create a NEW repo on github.com named e.g. "wedding-website"
git remote add origin git@github.com:YOUR_USERNAME/wedding-website.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under *Source*, select **Deploy from a branch** → `main` → `/ (root)`
3. Click **Save**. GitHub will publish the site in ~1 minute.

### 3. Connect your custom domain

1. In repo **Settings → Pages → Custom domain**, enter `graceandasa.com` and save.
   (The `CNAME` file is already committed, so this should auto-populate.)
2. Log in to your domain registrar and add these DNS records:

   | Type  | Host | Value                  |
   |-------|------|------------------------|
   | A     | @    | 185.199.108.153        |
   | A     | @    | 185.199.109.153        |
   | A     | @    | 185.199.110.153        |
   | A     | @    | 185.199.111.153        |
   | CNAME | www  | YOUR_USERNAME.github.io |

3. Check **Enforce HTTPS** in GitHub Pages settings once DNS propagates (~24 h).

---

## Setting up the RSVP form (Google Forms)

1. Go to [forms.google.com](https://forms.google.com) → **+** New Form.
2. Add your questions (name, attending yes/no, meal choice, dietary needs, song request, etc.).
3. Click **Send → Embed** (the `<>` icon) → copy the `src` URL from the iframe snippet.
4. Open `index.html` and replace the placeholder `src` on the `.rsvp-iframe`:

   ```html
   src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
   ```

5. Commit and push — the form will appear live on the site.

---

## Customising the site

| What to change          | Where                                      |
|-------------------------|--------------------------------------------|
| Fonts                   | `<link>` in `<head>` + `--font-*` in CSS  |
| Colours / palette       | `--color-*` variables at top of `css/style.css` |
| Names, date, venue      | `<!-- TODO -->` comments in `index.html`   |
| Hero photo              | Replace `assets/images/hero-bg.jpg`        |
| Story photos            | Uncomment the `<img>` tags in `.story-photos` |
| Story text              | The `<p>` tags in the `#story` section     |
| Travel & hotel info     | The `#travel` section in `index.html`      |

---

## File structure

```
/
├── index.html
├── CNAME                  ← custom domain
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    └── images/
        └── hero-bg.jpg    ← replace with your photo
```
