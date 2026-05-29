# ⚛️ React Todo App — Setup Guide
>
> **Progress:** Day 3 - 29/05/2026 : 12:45 pm

---

## 🐣 For Noobs — Getting Started

### Step 1

Admit you are a noob if you do not know how to clone a repo.

### Step 2

Pat yourself on the back because you are about to learn.

---

### Step 3 — Create a Project Folder

Create a new folder on your Desktop (or anywhere you prefer).

Then open **Command Prompt**:

- Press `Win` and search for **cmd**
- Open it and run:

```bash
cd C:\Users\YOUR_USERNAME\Desktop\NOOBFOLDER
```

> 📝 Replace `YOUR_USERNAME` with your PC's username, and `NOOBFOLDER` with whatever you named your folder.

<details>
<summary>💡 Why are we doing this?</summary>

We want to run commands inside a specific folder, so we first need to point Command Prompt to that folder.

</details>

---

### Step 4 — Clone the Repository

<details>
<summary>🔧 Don't have Git? Check here first</summary>

Run this to see if Git is already installed:

```bash
git --version
```

If it's not, download and install it from: <https://git-scm.com/download/win>

Then come back and continue.

</details>

Now run:

```bash
git clone https://github.com/24ct048-lab/todo-mern-bootcamp.git
```

⚠️ **Keep Command Prompt open after this.**

---

### Step 5 — Enter the Project Folder

```bash
cd todo-mern-bootcamp
```

<details>
<summary>💡 What just happened?</summary>

You now have a local copy of the repository, and your terminal is pointed inside that project folder.

</details>

---

### Step 6 — Install Dependencies

```bash
npm install
```

<details>
<summary>💡 Why is this needed?</summary>

The `node_modules` folder isn't included in the repo — uploading it to GitHub would make the repo enormous.

Running `npm install` tells Node Package Manager to read `package.json` and `package-lock.json` and download everything the project needs.

</details>

---

### Step 7 — You're Done! 🎉

To start the project, run:

```bash
npm run start
```

> 💡 You can run this from VS Code's terminal, or from Command Prompt if you're already in the project folder.

---

> 🗜️ **Prefer not using Git?** You can also click the **Download ZIP** button on the GitHub page and extract it manually.

