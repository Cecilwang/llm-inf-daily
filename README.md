# LLM Inference Daily

Source for the public [LLM Inference Daily](https://llm-inference-daily.cecilwang95.chatgpt.site) site.

The site publishes an English daily digest of high-signal LLM inference papers, repositories, pull requests, and engineering articles. The homepage keeps the latest seven daily issues, with newer issues first and older dates available from the archive navigation.

## Repository policy

`Cecilwang/llm-inf-daily` is the canonical maintenance repository. The Codex Sites repository is retained only as the deployment transport for the existing public Site.

Every maintenance session must:

1. Open the existing Site checkout with the Sites lifecycle command.
2. Fetch `github/main` and integrate it before editing. Never overwrite newer remote work.
3. Update the dated issue and the persistent selected-item ledger together.
4. Validate the project, commit once the digest is coherent, and push the same commit to GitHub.
5. Publish that exact source state through Codex Sites, then verify the deployment.

For concurrent sessions, fetch and rebase from `github/main` again immediately before pushing. Resolve conflicts by preserving all non-duplicate dated issues and ledger entries.

## Content model

- `data/issues/YYYY-MM-DD.json`: immutable-by-date issue archive. Correct errors in place; do not replace other dates.
- `data/selected-items.json`: append-only deduplication ledger containing canonical URL/title, first seen, last summarized, content hash, and status.
- `app/page.tsx`: renders the current issue, seven-day homepage history, and archive navigation.
- `.openai/hosting.json`: binds this source tree to the existing Codex Site. Do not replace its `project_id`.

Before adding an item, check the ledger by canonical URL, arXiv ID, repository, and normalized title. Revisions may update an existing record; they must not be republished as new items.

## Local validation

Requires Node.js `>=22.13.0`.

```bash
npm ci
npm test
npm run build
```

Do not commit `.env*`, build output, dependency directories, or credentials.
