# Express (Backend) Template

The server part of this template provides a basic [ExpressJS](https://expressjs.com/) template, i.e., the basic infrastructure for an Express application.

Read more on the backend part in [server/README.md](server/README.md)

# Vue.js (Frontend) Template

The client part of this template provides a basic [Vue.js](https://vuejs.org/) template, i.e., the basic infrastructure for a frontend SPA page.

Read more on the frontend part [client/README.md](client/README.md)

# Cloning the Repository

```bash
# Without Gitlab Registration
git clone https://gitlab.com/dit341/express-template.git

# With Gitlab Registration
git clone git@gitlab.com:YOUR_USERNAME/express-template.git
```

# Deployment

Deployment instructions for Heroku are found in [DEPLOYMENT.md](DEPLOYMENT.md)

# Requirements

* [Git](https://git-scm.com/)
* [Nodejs](https://nodejs.org/en/) (v10) with [NPM](https://www.npmjs.com/)
* [MongoDB](https://www.mongodb.com/) (v4) must be running locally
* Everything else is installed through npm

# Getting updates from original repo

In Assignment A1, you should have created a fork from this repository (we will refer to it as the "original repo" from now on).
Of course you can create another fork of the original repo, and in this way get all the updated contents.
However, git also allows you to fetch contents from the original repo into your fork.

To do so, follow these instructions (A longer, more detailed version is found [here](https://digitaldrummerj.me/git-syncing-fork-with-original-repo/)):


1. Just in case, make sure you have all important changes committed and pushed to your own repository.
2. Add the original repository as a so-called upstream repo:  
```git remote add upstream https://gitlab.com/dit341/express-template.git```
3. Fetch all changes from the original repo:  
  ```git fetch upstream```
4. Merge the changes in the original repo with your local master branch:  
```git merge upstream/master```  
Note that this might cause conflicts that you have to resolve manually!
5. Once you are done, you can push the merged repository to your own (remote) repository:  
```git push origin master```