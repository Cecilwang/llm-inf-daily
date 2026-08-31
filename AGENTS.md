# Maintenance instructions

## Canonical source

- The canonical upstream is `https://github.com/Cecilwang/llm-inf-daily` on `main`.
- Work in the Codex Sites lifecycle checkout for project `llm-inference-daily`; its `origin` is the deployment repository.
- Keep the GitHub repository configured as remote `github`. Fetch and integrate `github/main` before editing and again immediately before pushing.
- Never force-push, discard remote commits, or replace the history/ledger with an older snapshot.

## Daily update contract

- All published content is English.
- Publish the Site before sending Slack messages.
- Preserve every dated issue in `data/issues/`; the homepage displays the newest seven days and archive navigation exposes older dates.
- Read `data/selected-items.json` before selection. Treat it as an append-only deduplication ledger and preserve its canonical URL/title, first-seen, last-summarized, content-hash, and status fields.
- A revision or alternate link to an existing paper/repository is not a new item. Update the existing record when materially changed.
- Every article must include a non-empty analysis covering: problem, importance, prior approaches and limitations, method/comparison, and results. Use primary-source URLs.
- Update the dated issue and ledger in the same commit.

## Synchronization and publishing

1. Run the Sites lifecycle `edit --slug llm-inference-daily` command and use the returned checkout.
2. Ensure remote `github` points to `https://github.com/Cecilwang/llm-inf-daily.git`.
3. Fetch `github/main`, integrate it without losing local or remote work, then edit.
4. Run the relevant tests and production build/checkpoint validation.
5. Commit, fetch/rebase `github/main` once more, and push the commit to `github main`.
6. Push the identical commit to the Sites deployment source, save a Site version, deploy, and verify the terminal deployment status.

If concurrent updates conflict, merge by date and canonical item identity. Preserve all unique issues and selected-item records, and regenerate the homepage/history view from the merged data.
