// Fetch and display tracked times with delete buttons
chrome.storage.local.get(null, (data) => {
  const list = document.getElementById("list");
  let totalMinutes = 0;

  list.innerHTML = ""; // clear existing items before adding

  for (const [domain, seconds] of Object.entries(data)) {
    const minutes = Math.floor(seconds / 60);
    totalMinutes += minutes;

    const li = document.createElement("li");
    li.textContent = `${domain}: ${minutes} min`;
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";

    // Create delete button
    const delBtn = document.createElement("button");
delBtn.textContent = "✕";
delBtn.title = "Delete this site";
delBtn.style.background = "#e74c3c";
delBtn.style.border = "none";
delBtn.style.color = "white";
delBtn.style.borderRadius = "6px";
delBtn.style.minWidth = "28px";
delBtn.style.height = "28px";
delBtn.style.cursor = "pointer";
delBtn.style.fontWeight = "700";
delBtn.style.fontSize = "16px";
delBtn.style.lineHeight = "1";
delBtn.style.textAlign = "center";
delBtn.style.padding = "0";
delBtn.style.display = "flex";
delBtn.style.justifyContent = "center";
delBtn.style.alignItems = "center";

// Confirmation before delete
delBtn.addEventListener("click", () => {
  const confirmed = confirm(`Do you really want to remove tracking for "${domain}"?`);
  if (!confirmed) return;

  chrome.storage.local.remove(domain, () => {
    li.remove();
  });
});


    li.appendChild(delBtn);
    list.appendChild(li);
  }

  // Submit user score
  document.getElementById("saveUser").addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    if (!username) {
      alert("Please enter your name!");
      return;
    }

    let leaderboard = JSON.parse(localStorage.getItem("leaderboard") || "[]");

    // Update existing or add new
    const existing = leaderboard.find(entry => entry.name === username);
    if (existing) {
      existing.minutes = totalMinutes;
    } else {
      leaderboard.push({ name: username, minutes: totalMinutes });
    }

    // Sort descending by minutes
    leaderboard.sort((a, b) => b.minutes - a.minutes);

    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    displayLeaderboard();
  });

  // Clear leaderboard button
  document.getElementById("clearLeaderboard").addEventListener("click", () => {
    if (confirm("Clear the leaderboard? This cannot be undone.")) {
      localStorage.removeItem("leaderboard");
      displayLeaderboard();
    }
  });

  // Export leaderboard button
  document.getElementById("exportLeaderboard").addEventListener("click", () => {
    const leaderboard = localStorage.getItem("leaderboard") || "[]";
    const blob = new Blob([leaderboard], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "leaderboard.json";
    a.click();

    URL.revokeObjectURL(url);
  });

  // Import leaderboard button (trigger file input)
  document.getElementById("importLeaderboard").addEventListener("click", () => {
    document.getElementById("importFile").click();
  });

  // Handle file input change
  document.getElementById("importFile").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        if (Array.isArray(imported)) {
          localStorage.setItem("leaderboard", JSON.stringify(imported));
          displayLeaderboard();
          alert("Leaderboard imported successfully!");
        } else {
          alert("Invalid leaderboard format.");
        }
      } catch {
        alert("Failed to parse leaderboard JSON.");
      }
    };
    reader.readAsText(file);
    event.target.value = ""; // reset file input
  });

  // Show leaderboard initially
  displayLeaderboard();
});

function displayLeaderboard() {
  const list = document.getElementById("leaderboard");
  list.innerHTML = "";

  const leaderboard = JSON.parse(localStorage.getItem("leaderboard") || "[]");

  leaderboard.forEach((entry, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${entry.name} - ${entry.minutes} min`;
    list.appendChild(li);
  });
}
