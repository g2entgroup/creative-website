# Creative Platform Website

## Git Workflow

- Default branch: `master`
- **Always fetch and pull before branching:**
  ```bash
  git fetch origin
  git checkout master
  git pull origin master
  ```
- **Create feature branches from up-to-date `master`:**
  ```bash
  git checkout -b feature/<description> master
  ```
- **Branch naming:** `feature/*`, `fix/*`, `chore/*`
- **Rebase before pushing:**
  ```bash
  git fetch origin
  git rebase origin/master
  ```
- **Never commit directly to `master`** — always use feature branches + PRs
