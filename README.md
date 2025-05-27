
Digital Wellbeing Tracker
The Digital Wellbeing Tracker is a Chrome extension designed to help users monitor their time spent on websites and receive gentle "nudges" to encourage breaks. It tracks activity per domain, displays it in a popup, and allows users to manage their tracked data and participate in a leaderboard.

Features
Website Time Tracking: Automatically tracks time spent on different websites (domains).
Nudge Notifications: Provides an alert every 15 minutes of continuous activity on a single site, prompting the user to consider a break.
Tracked Time Display: The extension's popup shows a list of domains and the total time (in minutes) spent on each.
Delete Tracked Data: Users can remove tracking data for specific websites directly from the popup.
Leaderboard: Submit your total tracked time under a username to a local leaderboard.
Leaderboard Management: Clear, export, and import leaderboard data.
Installation
To install the Digital Wellbeing Tracker Chrome extension:

Download the project files: Get all the files (background.js, content.js, manifest.json, popup.html, popup.js, style.css, and the icons folder with icon48.png).
Open Chrome Extensions: Go to chrome://extensions/ in your Chrome browser.
Enable Developer Mode: Toggle on "Developer mode" in the top right corner.
Load Unpacked: Click the "Load unpacked" button.
Select Project Folder: Navigate to and select the folder containing all the downloaded project files.
The extension should now appear in your Chrome extensions list and its icon will be visible in your browser toolbar.

Usage
Automatic Tracking: Once installed, the extension automatically starts tracking the time you spend on different websites.
Accessing the Popup: Click on the Digital Wellbeing Tracker icon in your Chrome toolbar to open the popup.
View Tracked Time: The "Tracked Time" section in the popup displays a list of websites you've visited and the minutes spent on each.
Delete Site Data: To remove tracking for a specific site, click the "✕" button next to its entry in the "Tracked Time" list. You will be asked for confirmation.
Submit to Leaderboard:
Enter your desired username in the "Enter your name" field.
Click "Submit My Score" to add your total tracked time to the leaderboard.
Leaderboard Actions:
Clear Leaderboard: Click "Clear Leaderboard" to erase all entries. A confirmation will be required.
Export Leaderboard: Click "Export Leaderboard" to download the current leaderboard data as a .json file.
Import Leaderboard: Click "Import Leaderboard" and select a .json file to load leaderboard data from it.
Files
background.js: This is the service worker script that runs in the background. It listens for tab changes and updates, calculates time spent on domains, and sends "nudge" messages to active tabs.
content.js: This script is injected into web pages and listens for messages from the background script, specifically for the "nudge" alert.
manifest.json: This file defines the extension's properties, permissions (tabs, storage), background script, content scripts, and popup HTML.
popup.html: The HTML structure for the extension's popup interface, including sections for tracked time and the leaderboard.
popup.js: The JavaScript logic for the popup. It fetches and displays tracked time, handles delete operations, manages leaderboard submissions, and provides import/export functionality.
style.css: Provides basic styling for the body and h1 elements within the popup.
icons/icon48.png: The icon displayed for the extension.