# GitHub Pages Build & Deployment Guide
## Alagappa University Real-Time NME Portal

### 1. Automated GitHub Actions Deployment Workflow
The repository is configured with an automated GitHub Actions deployment workflow located at `.github/workflows/deploy.yml`.

Whenever code is pushed to the `main` branch:
1. GitHub Actions automatically checks out the repository.
2. Installs dependencies in `frontend/`.
3. Builds the production Vite React bundle.
4. Publishes the compiled site directly to the `gh-pages` branch.

---

### 2. Enabling GitHub Pages on GitHub Repository Settings

To activate the live URL for your site (`https://vijaymahes9080.github.io/Alagappa_NME/`):

1. Open your repository on GitHub: **[https://github.com/vijaymahes9080/Alagappa_NME](https://github.com/vijaymahes9080/Alagappa_NME)**
2. Click **Settings** (top menu bar).
3. On the left sidebar, under **Code and automation**, click **Pages**.
4. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions** (or **Deploy from a branch**).
   - If using **Deploy from a branch**: Select branch **`gh-pages`** and folder **`/ (root)`**.
5. Click **Save**.
6. GitHub will build and display your live URL: **`https://vijaymahes9080.github.io/Alagappa_NME/`**.
