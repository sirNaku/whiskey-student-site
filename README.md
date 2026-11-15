# The Whiskey Student — public website

The public site: home page with the 100-glass Whiskey Counter, the tasting log, a page per tasting (notes, flavor chart, Buy / Bar Pour / Pass), Watch, Guides, About and Work with me.

Your tastings and videos come from the **Whiskey Student app** (Data → Publish to your website). The app writes `src/data/tastings.json` and `src/data/videos.json`, and GitHub rebuilds the site in about a minute.

Already set: Instagram **@mayo_whiskeypapi**. To add your YouTube channel or a contact email, see "Change your links" below.

## 1. Put it on GitHub with GitHub Desktop

1. Unzip this file and move the **whiskey-student-site** folder to **Documents**.
2. GitHub Desktop: **File → Add Local Repository… → Choose…**, pick the folder, **Add Repository**.
3. It says the folder isn't a Git repository yet. Click **create a repository**, keep the name `whiskey-student-site`, then **Create Repository**.
4. Click **Publish repository**, **untick "Keep this code private"**, then **Publish Repository**.

GitHub Desktop includes the hidden `.github` folder automatically, so the build workflow comes along.

## 2. Turn on GitHub Pages

1. On github.com, open the repo: **Settings → Pages → Source: GitHub Actions**. Don't choose a template; the repo has its own workflow.
2. **Actions** tab → wait for **Deploy site to GitHub Pages** to show a green ✓ (1–2 minutes).
3. The site is at **https://sirnaku.github.io/whiskey-student-site/**.

It starts with an empty shelf (0 of 100) until you publish from the app.

## 3. Connect the app

1. Create a fine-grained token on GitHub: **Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token**. Set repository access to **Only select repositories → whiskey-student-site**, and permissions to **Contents: Read and write**.
2. In the app: **Data → Publish to your website → GitHub settings**. Username `sirNaku`, repository `whiskey-student-site`, branch `main`, folder `src/data`, paste the token, **Save settings**.
3. Tick **Show on my website** on a pour, then **Publish now**.

## Change your links

Edit `src/site.config.ts`. You can do it on github.com with the pencil icon, or in any text editor and then **Commit** and **Push** in GitHub Desktop:

```ts
youtube: 'https://www.youtube.com/@YourChannel',
email: 'you@example.com',
```

Any link left empty (`''`) is hidden on the site. A newsletter form appears once you paste a Buttondown, Kit or Beehiiv form URL into `newsletterAction`.

## Guides

Markdown files in `src/content/guides/`. `maryland-rye-trail.md` is a draft skeleton (hidden until you set `draft: false`) for after your Frederick trip.

## Before you push changes from your Mac

The app commits to this repo whenever you publish. In GitHub Desktop, click **Fetch origin** (then **Pull**) before you edit, so you have the latest tastings.

## Preview on your Mac (optional)

Node 22 or newer:

```sh
npm install
npm run dev:sample   # with sample tastings
npm run dev          # with your real published data
```
