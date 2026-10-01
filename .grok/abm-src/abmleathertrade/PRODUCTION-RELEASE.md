# ABM Leather Trade production release runbook

## Before staging

1. Export a full database dump and complete file archive outside the public web root. Restore both into an isolated environment before making changes.
2. Create a password-protected staging copy with a separate database. Set `WP_ENVIRONMENT_TYPE=staging`; block indexing and outbound mail.
3. Update WordPress, Astra, Elementor, and plugins one at a time on staging. Remove a plugin only after confirming it has no site or data dependency.

## Required server environment values

Set these at the host level, outside this repository and public web root:

```text
WP_ENVIRONMENT_TYPE=production
ABM_ENQUIRY_RECIPIENT=quotes@example.com
ABM_SMTP_HOST=smtp.example.com
ABM_SMTP_PORT=587
ABM_SMTP_USERNAME=...
ABM_SMTP_PASSWORD=...
ABM_SMTP_ENCRYPTION=tls
ABM_SMTP_FROM=quotes@example.com
ABM_SMTP_FROM_NAME=ABM Leather Trade
```

Rotate WordPress salts, database credentials, hosting credentials, and SMTP credentials at cutover. Never place real secrets in `wp-config.php`, a theme, or source control.

## Release gate

- Verify backups, restores, HTTPS/certificate, canonical redirects, cron, PHP error logs, and cache purging.
- Submit a controlled enquiry; confirm the private WordPress record, SMTP delivery, Reply-To address, and inbox placement.
- Test desktop/mobile navigation, form validation, privacy/terms links, XML sitemap, robots, 404 behavior, images, and page speed.
- Monitor uptime, error logs, mail failures, and enquiry submissions for 30 minutes. Roll back if the homepage, login, or enquiry flow fails.

## Ongoing ownership

Assign an ABM owner for enquiry responses and weekly updates. Verify daily off-site backups, monthly restore tests, and monthly security/plugin updates.
