# How to Contribute to the "a-tasbih-app" Project on GitHub

## Overview

Contributing to the "a-tasbih-app" project involves forking the repository, creating a branch from your fork, and making your changes. Follow these steps to ensure a smooth contribution process.

## 1. Fork the Repository

1. **Navigate to the Repository:**
   - Open your web browser and go to the [a-tasbih-app GitHub repository](https://github.com/iotb-tech/a-tasbih-app).

2. **Fork the Repository:**
   - Click the **Fork** button located at the top-right corner of the page.
   - GitHub will create a copy of the repository in your own GitHub account.

## 2. Clone Your Fork

1. **Copy the URL:**
   - Go to your forked repository on GitHub (e.g., `https://github.com/your-username/a-tasbih-app`).
   - Click the **Code** button and copy the URL under **HTTPS** or **SSH**.

2. **Open Terminal (or Git Bash):**
   - On your local machine, open your terminal or Git Bash.

3. **Clone Your Fork:**
   - Run the following command, replacing `your-username` with your GitHub username and `a-tasbih-app` with the repository name:
     ```bash
     git clone https://github.com/iotb-tech/a-tasbih-app.git
     ```
   - Navigate to the project directory:
     ```bash
     cd a-tasbih-app
     ```

## 3. Create a Branch

1. **Check Out a New Branch:**
   - Create and switch to a new branch based on the `main` branch. It’s a good practice to use a descriptive name for your branch:
     ```bash
     git checkout -b your-branch-name
     ```
   - For example, if you’re fixing a bug, you might name your branch `fix-bug-issue`.

2. **Verify Your Branch:**
   - Ensure you are on the correct branch by running:
     ```bash
     git branch
     ```

## 4. Make Your Changes

1. **Edit Files:**
   - Use your preferred code editor to make changes to the project files.

2. **Test Your Changes:**
   - Make sure to test your changes to ensure everything works as expected.

## 5. Commit Your Changes

1. **Stage Your Changes:**
   - Add the files you’ve modified or added:
     ```bash
     git add .
     ```
   - You can also specify individual files if you prefer:
     ```bash
     git add path/to/your/file
     ```

2. **Commit Your Changes:**
   - Commit your changes with a descriptive message:
     ```bash
     git commit -m "Your descriptive commit message"
     ```

## 6. Push Your Changes

1. **Push to Your Fork:**
   - Push your branch to your forked repository:
     ```bash
     git push origin your-branch-name
     ```

## 7. Create a Pull Request

1. **Open GitHub:**
   - Go to the original repository (e.g., `https://github.com/your-username/a-tasbih-app`).

2. **Create a Pull Request:**
   - Click on the **Pull Requests** tab.
   - Click the **New Pull Request** button.
   - Select the branch you created from your fork as the source branch and the `main` branch of the original repository as the target branch.
   - Add a descriptive title and comment for your pull request explaining your changes.
   - Click **Create Pull Request**.

## 8. Participate in Code Review

- **Monitor Your Pull Request:**
  - Keep an eye on your pull request for any feedback or comments from the project maintainers.
  
- **Make Updates:**
  - If required, make additional changes based on feedback and push them to your branch. The pull request will automatically update.

## 9. Merge and Celebrate

- **Wait for Approval:**
  - Once your pull request is reviewed and approved, it will be merged into the `main` branch by the project maintainers.

- **Celebrate Your Contribution:**
  - Congratulations! You’ve successfully contributed to the "a-tasbih-app" project. 🎉

## Additional Tips

- **Read Contribution Guidelines:** Always check the project's `CONTRIBUTING.md` file or other documentation for specific contribution guidelines.
- **Keep Your Fork Updated:** Regularly pull changes from the original repository to keep your fork up to date.

---

By following these steps, you’ll be able to contribute effectively to the "a-tasbih-app" project. Thank you for your contributions!
