---
title: How to use GitHub in technical writing
layout: post
date: 2026-02-10
tags: [github, technical writing, workflow, version control, documentation]
---

# How to use GitHub in technical writing

GitHub is a version control platform that helps you manage your documentation and source files. If you store your project files only on your local machine, accessing them from different locations is difficult. By hosting your files on GitHub, you can access your documentation from anywhere with an internet connection and collaborate with other writers.

## Create a GitHub repository

A repository in GitHub is similar to a folder on your local machine. It contains all files and subfolders relevant to your project. You can create a repository in two ways:

1. Create it directly on the GitHub website.
2. Create a project folder locally and push it to GitHub using Git Bash or GitHub Desktop.

### Create a repository online

To create a repository directly on GitHub:

1. Go to https://github.com/. If you don't have an account, select **Sign up** to create one. Otherwise, select **Sign in** with your credentials.

2. In the header, select the plus (**+**) icon on the right side and select **New repository** from the menu.
   
   The **Create a new repository** page appears.

3. Enter your repository name in the **Repository name** field. Fill in optional fields under the **General** and **Configuration** sections. You can update these later if needed.

4. Select **Create repository**.
   
   Your new repository is created.

![Sample Repository](images/image.png)

## Clone a repository

Cloning creates a local copy of a remote repository on your machine. Before you clone a repository, create a folder where you'll store it.

1. Create a folder on your local machine where you want to clone the repository.

2. Navigate to that folder, right-click, and select **Git Bash Here**.

3. Go to your GitHub repository page in your browser.

4. Select the **Code** button and copy the repository URL. It looks like `https://github.com/username/reponame.git`.

5. In Git Bash, paste the command:
   ```bash
   git clone https://github.com/username/reponame.git
   ```

6. Press Enter. The repository is cloned to your local folder.
