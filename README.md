# 🌱 Digital Wellbeing Tracker – Chrome Extension

The **Digital Wellbeing Tracker** is a Chrome extension that helps users become more mindful of their web usage by tracking time spent on websites and delivering gentle nudges to take breaks. It also includes a leaderboard feature to gamify digital wellbeing.

---

## 🚀 Features

- ⏱ **Website Time Tracking**  
  Automatically tracks time spent on different websites (domains).

- 🔔 **Nudge Notifications**  
  Sends alerts every 15 minutes of continuous activity on a single site, encouraging breaks.

- 📊 **Tracked Time Display**  
  Popup displays a list of domains and the total time (in minutes) spent on each.

- 🗑️ **Delete Tracked Data**  
  Easily remove tracking data for specific websites from the popup interface.

- 🏆 **Leaderboard**  
  Submit your total tracked time under a username to appear on a local leaderboard.

- ⚙️ **Leaderboard Management**  
  - Clear all leaderboard data  
  - Export leaderboard to `.json`  
  - Import leaderboard from `.json`

---

## 📦 Installation

1. **Download Project Files**  
   Clone or download the following files into a single folder:

2. **Open Chrome Extensions Page**  
Go to: `chrome://extensions/`

3. **Enable Developer Mode**  
Toggle the "Developer mode" switch in the top right corner.

4. **Load Unpacked**  
Click the "Load unpacked" button and select the folder containing your extension files.

5. The extension will now appear in your Chrome toolbar.

---

## 💡 Usage

- **Automatic Tracking**  
Begins tracking time spent on websites immediately after installation.

- **Access Popup**  
Click the extension icon in the Chrome toolbar.

- **View Tracked Time**  
The "Tracked Time" section lists all domains visited with the total minutes spent.

- **Delete Site Data**  
Click the ✕ next to any domain to remove its tracked data (confirmation required).

- **Submit to Leaderboard**  
- Enter a username in the input field  
- Click **Submit My Score** to add your total time to the leaderboard

- **Leaderboard Actions**
- **Clear Leaderboard** – Remove all entries (confirmation required)  
- **Export Leaderboard** – Save current leaderboard data as `.json`  
- **Import Leaderboard** – Load leaderboard data from a `.json` file

---

## 📁 Project Files

| File | Description |
|------|-------------|
| `background.js` | Runs in the background, tracks tab activity, and sends nudge messages |
| `content.js` | Injected into webpages to handle nudge alerts |
| `manifest.json` | Defines extension metadata, permissions, and scripts |
| `popup.html` | Structure of the popup interface |
| `popup.js` | Handles popup logic: display data, leaderboard actions |
| `style.css` | Basic styling for the popup |
| `icons/icon48.png` | Icon for the extension |

---


