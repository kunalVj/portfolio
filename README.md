# Kunal Vijay Portfolio

A responsive, voxel-inspired software engineering portfolio built with plain HTML, CSS, and JavaScript.

## Run locally

No build step is required. Open `index.html` directly, or serve the folder locally:

```bash
python3 -m http.server 3000
```

Then visit `http://localhost:3000`.

## Push to GitHub

Create an empty repository in your personal GitHub account, then run these commands inside this folder:

```bash
git init
git add .
git commit -m "Add portfolio"
git branch -M main
git remote add origin https://github.com/kunalVj/YOUR-REPOSITORY-NAME.git
git push -u origin main
```

Replace `YOUR-REPOSITORY-NAME` with the repository name you create.

## Deploy on Vercel

1. Sign in to Vercel.
2. Choose **Add New → Project**.
3. Import the GitHub repository.
4. Leave the framework preset as **Other**.
5. Leave the build command empty and use `.` as the output directory.
6. Deploy.

Vercel will provide a public `*.vercel.app` URL. You can change the project name before deployment to influence that URL.

## Project files

- `index.html` — page structure and portfolio content
- `styles.css` — responsive voxel-inspired design
- `script.js` — project dialogs and interactive experience controls
- `KunalVijay-Resume.pdf` — downloadable résumé
