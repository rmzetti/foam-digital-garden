# Link styles and outcomes

Zetti is designed to be used with systems like Foam and Obsidian, and so uses link styles which are compatible with these approaches. This file identifies the link styles and the outcomes for each. On-site files are those in the same site as the file being viewed, off-site files are those in other sites.

## Links to markdown files on site
Wikilinks [\[osmos]\]: [[osmos]] ... [\[osmos.md]\]: [[osmos.md]] 
Markdown links \[ ... ]\( ... ): [osmos.md](osmos.md) ... [?osmos.md](?osmos.md) ... [?file=osmos.md](?file=osmos.md)

## Links to HTML files on site
Wikilinks [\[osmos.html]\]: [[osmos.html]]
Markdown links [osmos.html](osmos.html) ... [?osmos.html](?osmos.html) ... [?file=osmos.html](?file=osmos.html)
Bare links:  https://whatamigoingtodonow.net/zetti/?osmos.html opens in app
and https://whatamigoingtodonow.net/zetti/osmos.html opens in new tab

## Links to HTML files off site
Wikilinks [\[osmos.html]\]: [[https://osmoscraft.github.io/osmosfeed-examples/default-solarized-dark/]]
Markdown links [osmos...html...](https://osmoscraft.github.io/osmosfeed-examples/default-solarized-dark/) ... [?osmos...html...](?https://osmoscraft.github.io/osmosfeed-examples/default-solarized-dark/) ... [?file=osmos...html...](?file=https://osmoscraft.github.io/osmosfeed-examples/default-solarized-dark/)
Bare links as above.

## Embedding site images
| *![\[yanomami_icon.png]\]* | *!\[test\]\(img/yanomami_icon.png\)*  |
| :----------------------------:  | :----------------------------------------: |
|   ![[yanomami_icon.png]]     |    ![test](img/yanomami_icon.png)      |

## Embedding off-site images
![Test image](https://lh3.googleusercontent.com/6ZNquT6hm9XFbb1pb_VfMObjz1mTUBwLFykwC7BWQCe95yEGwo8sapAFZ-CoOdjYUjdki1vRmskVSB-Kwed6OVKJs-RDJ8S0JAJ7hfSBY7qfL-iURcKM_cyeNfUGsjlw4Z09ESM7hAo=w240)

## Image links
[\[opens in new tab\]\(image_link\)](https://lh3.googleusercontent.com/6ZNquT6hm9XFbb1pb_VfMObjz1mTUBwLFykwC7BWQCe95yEGwo8sapAFZ-CoOdjYUjdki1vRmskVSB-Kwed6OVKJs-RDJ8S0JAJ7hfSBY7qfL-iURcKM_cyeNfUGsjlw4Z09ESM7hAo=w240) ... [\[opens in-app\]\(?image_link\}](?https://lh3.googleusercontent.com/6ZNquT6hm9XFbb1pb_VfMObjz1mTUBwLFykwC7BWQCe95yEGwo8sapAFZ-CoOdjYUjdki1vRmskVSB-Kwed6OVKJs-RDJ8S0JAJ7hfSBY7qfL-iURcKM_cyeNfUGsjlw4Z09ESM7hAo=w240)

## More examples including pdf's

#### For on-site files

***Wikilinks:***
[\[Math.md]\], [\[KeepNotes]\], [\[syntax]\], [\[katex]\], [\[My Obsidian Vault]\] and [\[My Obsidian workflow]\]
 ... produce: [[Math.md]], [[KeepNotes]], [[syntax]], [[katex]], [[My Obsidian Vault]] and [[My Obsidian workflow]].
Spaces are ok in wikilinks (as above).

***Markdown links:***
The markdown link style will open in app, eg. \[syntax]\(syntax.md): [syntax](syntax.md).
Markdown links with spaces in the link are ok:
eg. \[markdown link]\(manuel/Public/Cleaned up my daily notes.md) gives: [markdown link](manuel/Public/Cleaned up my daily notes.md) 

***Standard html \<a> links***
These open in a new tab, eg. <a href="?manuel/Public/Cleaned up my daily notes.md">cleaned up my notes</a>
to open in app, start the link with a `?`, 
ie. \<a href="?manuel/Public/Cleaned up my daily notes.md">cleaned up my notes\</a>

***For pdf files:***
Straight wikilink [\[The Portable Dragon.pdf]\] opens in app: [[The Portable Dragon.pdf]] 
Can also add a page number: [what/The Portable Dragon.pdf#page=40](what/The Portable Dragon.pdf#page=40)

***For html files:***
Wikilink: [[Headaches.md.html]]; markdown: [headaches](what/health/Headaches.md.html) 
Using html \<a> opens directly in new tab: <a href= "nutrition/nuvegan.html">vegan</a>
unless you add a `?` to the link, eg. <a href="?nutrition/nuvegan.html">vegan</a>

#### Links to other sites:
***For pdfs:***
For a markdown link to a [pdf from an external site](https://gotellilab.github.io/Bio381/Scripts/Feb07/RegularExpressionsTutorial.pdf#page=166) the default handler will be used (which in mobile is a download & app view)...
Use html \<a> links to use the <a href="https://docs.google.com/viewer?url=https://gotellilab.github.io/Bio381/Scripts/Feb07/RegularExpressionsTutorial.pdf">google docs pdf viewer</a>

***For sites:***
To open an external link to stellarium as a tab can use normal \<a> link: <a href="https://stellarium-web.org/" title="stellarium">stellarium</a>
or a [markdown link](https://stellarium-web.org/), ie. \[stellarium\]\(https://stellarium-web.org/\)
or use a bare url: https://stellarium-web.org/
Markdown with (?link) will attempt to show in app: [\[stellarium\]\(?https://stellarium-web.org/\)](?https://stellarium-web.org/)
Another example markdown with (?link): [external link in app](?https://css-tricks.com/a-complete-guide-to-calc-in-css)
VSCode using html \<a> link: <a href='https://vscode.dev/'>Link</a>
Wikipedia using html \<a> link: <a href="https://en.wikipedia.org/wiki/Bildungsroman" title="Bildungsroman">bildungsroman</a>
or using markdown with (?link): [bildungsroman](?https://en.wikipedia.org/wiki/Bildungsroman)
ycombinator raw feed site using  \<a> link: <a href="https://news.ycombinator.com/rss">rss feed</a>
Insecure markdown http link: [bactra notebooks](http://bactra.org/notebooks/), internal (?link): [bactra notebooks](?http://bactra.org/notebooks/)
[Flick electric](https://myflick.flickelectric.co.nz/dashboard/day)

***Some sites cannot be embedded*** 
Some sites (eg. github) will not allow opening the link in app, usually to avoid cross-site scripting vulnerability...
eg. ycombinator raw feed using markdown ?link [rss feed](?https://news.ycombinator.com/rss) doesn't work.
Codepen using markdown ?link [pearl earring in app](?https://codepen.io/louflan/pen/JjGVbjY) doesn't work,
but markdown link [pearl earring](https://codepen.io/louflan/pen/JjGVbjY) opens normally (amazing css!).

