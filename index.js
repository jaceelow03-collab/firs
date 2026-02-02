// --- PART 1: STICKY NOTES LOGIC ---
function addNote() {
    const noteInput = document.getElementById("noteText");
    const text = noteInput.value.trim();
    if (text === "") { alert("Please write something"); return; }

    const notesArea = document.getElementById("notesArea");
    const note = document.createElement("div");
    note.className = "note";
    note.innerText = text;

    const delBtn = document.createElement("button");
    delBtn.className = "del-note";
    delBtn.innerText = "X";
    delBtn.onclick = () => {
        note.style.transform = "scale(0)";
        setTimeout(() => note.remove(), 300);
    };

    note.appendChild(delBtn);
    notesArea.appendChild(note);
    noteInput.value = "";
}

// --- PART 2: TASK EXECUTION & ATTENDANCE LOGIC ---
function createTask() {
    const nameInput = document.getElementById("taskName");
    const daysInput = document.getElementById("taskDays");
    const listContainer = document.getElementById("daysList");

    const name = nameInput.value.trim();
    const days = parseInt(daysInput.value);

    if (name === "" || isNaN(days) || days <= 0) { alert("Fill all fields"); return; }

    listContainer.innerHTML = "";
    const taskHeader = document.createElement("div");
    taskHeader.className = "task-title";
    taskHeader.innerHTML = `<h3>Current Task: ${name}</h3>`;
    listContainer.appendChild(taskHeader);

    for (let i = 1; i <= days; i++) {
        const row = document.createElement("div");
        row.className = "day-row";
        row.innerHTML = `
            <div class="day-info">Day ${i}</div>
            <div class="day-actions">
                <button class="btn-status btn-done" onclick="setStatus(this, 'Done')">✔ Done</button>
                <button class="btn-status btn-not-done" onclick="setStatus(this, 'Not Done')">✖ Not Done</button>
                <div class="status-label">-</div>
            </div>`;
        listContainer.appendChild(row);
    }
    nameInput.value = ""; daysInput.value = "";
}

function setStatus(btn, status) {
    const label = btn.parentElement.querySelector(".status-label");
    label.innerText = status;
    label.className = status === 'Done' ? "status-label done-text" : "status-label not-done-text";
}
