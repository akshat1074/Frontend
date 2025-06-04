# ED3HUB REPOSITORY

## Basic Rules

- All code should be written in **TypeScript**.
- Use **pnpm** as your package manager.

## 🧑‍🎨 Setup Instructions

You can refer to the following articles on basics of Git and Github

- [Forking a Repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
- [Cloning a Repo](https://help.github.com/en/desktop/contributing-to-projects/creating-an-issue-or-pull-request)
- [How to create a Pull Request](https://opensource.com/article/19/7/create-pull-request-github)
- [Getting started with Git and GitHub](https://towardsdatascience.com/getting-started-with-git-and-github-6fcd0f2d4ac6)
- [Learn GitHub from Scratch](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources)

<br>

**1.** Fork [this](https://github.com/Ed3hub/Frontend.git) repository.

**2.** Clone your forked copy of the project.

```
git clone https://github.com/<your_user_name>/Frontend.git
```

**3.** Navigate to the project directory :file_folder: .

```
cd Frontend
```

**4.** Add a reference(remote) to the original repository.

```
git remote add upstream https://github.com/Ed3hub/Frontend.git
```

**5.** Check the remotes for this repository.

```
git remote -v
```

**6.** Always take a pull from the upstream repository to your master branch to keep it at par with the main project (updated repository).

```
git pull upstream main
```

**7.** Create a new branch.

```
git checkout -b <your_branch_name>
```

**8.** Perform your desired changes to the code base.

**9.** Track your changes:heavy_check_mark: .

```
git add .
```

**10.** Commit your changes .

```
git commit -m "Relevant message"
```

**11.** Push the committed changes in your feature branch to your remote repo.

```
git push -u origin <your_branch_name>
```

**12.** To create a pull request, click on `compare and pull requests`.

**13.** Add appropriate title and description to your pull request explaining your changes and efforts done.

**14.** Click on `Create Pull Request`.

**15.** Wait for your pull request to be reviewed and merged into the main branch.