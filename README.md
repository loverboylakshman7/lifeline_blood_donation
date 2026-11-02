# LifeLine — Blood Donation Network

A responsive college-project website demonstrating a voluntary blood donor network.

## Run locally
This is a static HTML/CSS/JavaScript version and needs no build tools.

1. Download or clone this repository.
2. Open `index.html` in a browser.

For local development, you can also use the VS Code **Live Server** extension.

## Deploy on GitHub Pages
1. Create a GitHub repository (for example, `lifeline-blood-donation`).
2. Upload all files and folders from this ZIP to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select `main` and `/ (root)`, then Save.
6. Wait for GitHub Pages to publish the site. Your public URL will appear in the Pages settings.

## Features
- Responsive home page and navigation
- Donor directory with blood-group, city and availability filters
- Donor registration form with basic validation
- Blood request form with emergency disclaimer
- Eligibility and safety information
- Mobile-friendly layout

## Important project limitations
- This ZIP is a static demonstration build.
- Donor and request submissions are saved only in the visitor's browser using `localStorage`; they are not sent to a server or shared between users.
- Donor entries and impact statistics are fictional sample data. Do not contact them as real donors.
- There is no production admin login, database, SMS/email notification, donor verification, or medical eligibility workflow.
- Replace the demo contact email and content before publishing.
- Final donor eligibility must be determined by a qualified blood bank or medical professional. This website does not replace emergency services or guarantee blood availability.

## Suggested next step
For a production full-stack version, connect a backend database, authentication, coordinator permissions, secure contact-data handling, and server-side validation before accepting real donor or patient information.
