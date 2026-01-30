# How to Use GitHub in technical writing

GitHub is a version control platform that helps you manage your documentation and source files with version control. For example, if you store your project files only on your local machine, accessing them from different locations becomes difficult. By hosting your files on GitHub, you can access your documentation from anywhere with an internet connection and collaborate with other writers.

## How to Create a GitHub Repository?

A repository in GitHub is similar to a folder on your local machine. It contains all files and subfolders relevant to your project. You can create a repository in two ways:

1. Create it directly on GitHub's website.
2. Create a project folder locally and push it to GitHub using Git Bash or GitHub Desktop.

### Creating a GitHub Repository Online

Follow these steps to create a repository directly on GitHub:

1. Go to https://github.com/. If you don't have an account, click **Sign up** to create one. Otherwise, click **Sign in** with your credentials.

2. In the header, click the plus (**+**) icon on the right side and select **New repository** from the dropdown menu.
   
   The **Create a new repository** page appears.

3. Enter your desired repository name in the **Repository name** field. Fill in optional fields under the **General** and **Configuration** sections (you can update these later if needed).

4. Click **Create repository**.
   
   Your new repository is now created.

![Sample Repository](images/image.png)

## How to Clone a Repository?

Cloning creates a local copy of a remote repository on your machine. Before cloning, create a folder where the repository will be stored.

1. Create a folder on your local machine where you want to clone the repository.

2. Navigate to that folder, right-click, and select **Git Bash Here**.

3. Go to your GitHub repository page in your browser.

4. Click the **Code** button and copy the repository URL (it will look like `https://github.com/username/reponame.git`).

5. In Git Bash, paste the command:
   ```bash
   git clone https://github.com/username/reponame.git
   ```

6. Press Enter. The repository is now cloned to your local folder.
