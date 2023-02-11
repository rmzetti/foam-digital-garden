-----------------------------------------------------------------------------
title: Home page (markdown) with examples
----------------------------------------------------------------------------

<div hidden markdown>
</div>

## Zetti

*Zetti* is a showdown based static site generator for a personal knowledge base, or digital garden. Files are stored mainly in markdown format (notes), and can be edited in any text editor. A range of other files is supported, including html, pdf, txt, image and javascript files. The site is generated using a vscode or node.js script for initial setup and github pages for deployment, and can be hosted on any web server.

Yes - but why?

In "A Life of One's Own", Marion Milner (as Joanna Field) wrote (in 1932):

> The reason for writing the book was not the same as the reason for publishing it. It was written in the spirit of a detective who, baffled by the multitude of his facts, goes over and makes a summary of the progress of his investigations in the hope of finding something he has missed. So, when I began to write this book, in the fourth year of my enterprise, I did not know, or could only perceive very dimly, what the end would be. In this sense the book is a contemporary journal of an exploration which involved doubts, delays, and expeditions on false trails, and the writing of it was an essential part of the search.
> The reason for publishing the book is that although what I found is probably peculiar to my own temperament and circumstances, I think the method by which I found it may be useful to others, even to those whose discoveries about themselves may be the opposite of my own. The need for such a method in these days is obvious, a method for discovering one's true likes and dislikes, for finding and setting up a standard of values that is truly one's own and not a borrowed mass-produced ideal.

'Keeping notes', whether of one's own life, or of one's work, is a way of exploring and discovering. It is a way of making sense of the world, and of oneself. It is a way of learning, and of understanding. Publishing those notes is a way of sharing, and of communicating.

*Zetti* provides a fairly simple and straightforward means for publishing one's notes, thoughts and research in a form that is accessible to both oneself and to others, and which can be used for further exploration and discovery.

### Links and embedding

Zetti is designed to be used with systems like Foam and Obsidian, and so uses link styles which are compatible with these approaches.
[This note](links.md) identifies the link styles and the outcomes for each. 'On-site' files/notes are those in the same site as the file/note being viewed, 'off-site' files are those in other sites.

### Example notes & files

See [headaches](what/health/Headaches.md)

### Katex

Latex math - use 	&#36;&#36; as delimiter - can surround with html to center or increase size:

<h2 style="text-align:center;margin-top: 10px;"> $$ x=\frac{ -b\pm\sqrt{ b^2-4ac } } {2a} $$</h2>

Same but with no surrounding html: $$ x=\frac{ -b\pm\sqrt{ b^2-4ac } } {2a} $$

In line $$ x=2, b_1=3 \implies b_1 x=6 $$ works ok.

Multiline within $ delimiters using two backslashes:
$$ E=mc^2 \\ E=\frac{1}{2}mv^2 \\ E=mc^2 $$

Color: $$\fcolorbox{aqua}{aqua}{\color{black}$F=ma$}$$

### Scripts and editable/executable javascript codeblocks

The following `js` codeblock is editable, and ctrl-click will execute the code. Note that it is also using a script, defining test()', which can be included in the markdown but, like all scripts, will be hidden when the html is displayed. To be available to the codeblock script, any variables defined in the 'hidden' script must be global (ie. do not use "`var x=..`" or "`let x=..`" just use "`x=..`")


<scriptz>
b='goodbye';
test=function (x) {
  setTitle(x);
  return 'check title';
}
</scriptz>

```js
let a='hello'
a+' and '+b;
```

This is another test

```js
let a='hello'
test(a+' and '+b);
```

### Turndown
Turndown produces markdown from html

Turndown repository has changed its URL to https://github.com/mixmark-io/turndown

#### Installation

npm: `npm install turndown`

Browser:
`<script src="https://unpkg.com/turndown/dist/turndown.js"></script>`

For usage with RequireJS, UMD versions are located in `lib/turndown.umd.js` (for Node.js) and `lib/turndown.browser.umd.js` for browser usage. These files are generated when the npm package is published. To generate them manually, clone this repo and run `npm run build`.

#### Usage in node.js
```js :node
var TurndownService = require('turndown')
var turndownService = new TurndownService()
var markdown = turndownService.turndown('<h5>Hello world!</h5>')
console.log(markdown)
```
##### Hello world!

Turndown also accepts DOM nodes as input (either element nodes, document nodes, or document fragment nodes):

`var markdown = turndownService.turndown(document.getElementById('content'))`


### Blogless

Blogless blogging platform [here](https://blogless.datenbrei.de)

<div style="padding-bottom:60%; position:relative;display:block; width:100%;overflow: hidden;">
<iframe style="position: absolute; top: 0; left: 0; width: 90%; height: 100%;" frameborder=0  src="https://blogless.datenbrei.de"></iframe>
</div>

Also see
[rtnF md](?https://altilunium.my.id/p/rtnf_md_en) is either :
- Web-based text-processing software. You can use it to draft your next article. Markdown formatting, autosave feature, stored locally inside your own browser.
- Anonymous blogging platform. You can publish your article anonymously (no login!) by simply clicking the light green button.





