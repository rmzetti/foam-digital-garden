## what site?

This is a working site designed to integrate with a second brain or digital garden.

$$ y=\sin(x_1)^2 $$

### Note and info creation

Information can be created in markdown note form using a note taker like obsidian or vscode.
Any note taker that produces markdown files in a folder that can be synced with a folder in the local version of this repo can be used.

The note taker(s) can be on mobile - simply sync each to the appropriate local repo folder.

Other info can be imported as markdown, html, pdf, etc. files, and linked in the notes via markdown links.
These files will still be accessible even if they are not specifically linked.

VSCode can maintain the repo locally and sync changes to the associated Github repo.

### Site creation and update

The site may be immediately viewed from VSCode by using [Live Server](vscode:extension/ritwickdey.LiveServer). When the extension is installed, right-click `index.html` in VSCode explorer and select `Open with Live Server`. 'Live' means that the server will continue working in the background, and changes made will be immediately visible in the browser.

The simplest external site creation is by using Github pages:

 - In the Github repo settings page, click Actions in the TOC column and check "Allow all actions and reusable workflows"
 - Then click Pages in the TOC column, set the source as "Deploy from a branch", set the Branch as "main" or "master", then click save.

When this is done, as soon as changes are committed and pushed to Github, Github actions will auto-activate and create or update the site.

The digital garden or second brain is then accessible as https://yourname.github.io/what, just as this one is https://rmzetti.github.io/what.

