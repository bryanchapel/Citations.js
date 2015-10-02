# Citations.js
## A simple jQuery plugin that bundles links inside posts/articles/tutorials etc, and displays them in one location for the reader's easy reference.
<p>Frequently, when reading long articles, blog posts, tutorials, etc, I come across plenty of links within the text that I may want to explore. When I finish said articles I often wish there was a tidy little box at the bottom, that contained a wrap up of all of the relevant resources the article linked to. After all, the author thought they were important to the piece, so I should probably check them out to get a better understanding of what I just read.</p>
        <p>But there's never such a box. And I understand why. Loads of links in a longform article would take the author quite a bit of time to catalog at the end. But then I thought, why hasn't anyone scripted it?</p>
        <p>So I did. I call it Citations.js (Mostly out of a tongue-in-cheek nod to all the other NOUN+JS libraries, frameworks, and plugins out there.) Citations.js is a super simple jQuery plugin that basically works like this:</p>
        <p>You have a bunch of links strewn throughout your article, like so...</p>
        <p>This is a paragraph. <a href="http://www.google.com" title="How To Train Your Dragon: 5 Simple Steps">And this is a link.</a></p>
        <p>This is another paragraph. <a href="http://www.yahoo.com" title="Gumby Was A Pretty Stretchy Dude">And this is a second link.</a></p>
        <p>This is another paragraph. <a href="http://www.bing.com" title="You Did What??">And this is a third link.</a></p>
        <p>This is another paragraph. <a href="http://www.chasemountains.com" title="How Many Links Are In This Article, Anyway?">And this is a fourth link.</a></p>
        <p>This is another paragraph. <a href="http://www.bryanchapel.com" title="Just One More">And this is a fifth link.</a></p>
<p>1. How To Train Your Dragon: 5 Simple Steps, http://www.google.com/</p>
<p>2. Gumby Was A Pretty Stretchy Dude, http://www.yahoo.com/</p>
<p>3. You Did What??, http://www.bing.com/</p>
<p>4. How Many Links Are In This Article, Anyway?, http://www.chasemountains.com/</p>
<p>5. Just One More, http://www.bryanchapel.com/</p>
        <p>And Citations.js bottles up all the links, and sticks them into a div with an id of '#Citations'. You can put the div anywhere you like, but I think the best position is right after your main content area. This gives your reader easy access to all the resources you've linked to. You can style the links themselves by adding the class '.citations-js' to your stylesheet.</p>
        <p>The links are given a number in the order in which they appear in the article, and Citations.js uses your link's title and href attributes to display the links.</p>
        <p>This is very handy to stick into a template for blog posts, articles, etc, and will be a real treat for your readers.</p>
        <p>It's very simple, but very helpful to your site's visitors. Sometimes, it's the little things that add up to a better experience for our users.</p>

