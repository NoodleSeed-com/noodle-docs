# Noodleseed Documentation

This is the documentation site for Noodleseed, built with React and deployed on GitHub Pages.

## Development

To run the development server:

```bash
npm install
npm run dev
```

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch, using the GitHub Actions workflow defined in `.github/workflows/deploy.yml`.

To manually build the site:

```bash
npm run build
```

This will generate the static files in the `dist` directory.
