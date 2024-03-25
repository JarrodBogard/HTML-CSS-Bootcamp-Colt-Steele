// Lesson 42. Working Within Inline Styles

So we have inline styles, internal styles and external styles.

We're going to cover all three.

But in this video, I'm going to start with the first and objectively worst option inline styling.

So with inline styling, we directly embed our style information in individual HTML elements, right

inline.


Let's take this first paragraph and you could do this on any element, but I'll do this first paragraph

right here and let's change its color.

So I'm going to say style.

That's the attribute we always use for inline styles and then double quote and I'll just set color colon

to be about green and then a semicolon and I'll save.

And here we are.


For now, we'll stick with the basics and you'll see we do have an H one that is teal.

So that's the basic concept of writing inline style so we can directly inline in any element, a style

attribute that will control the styles for that one element and only that one element.

So this means we often have to duplicate things.

Not to mention if I want to change the color of all paragraphs, well, if I want it to now go to purple,

I'm going to change it here.

And then I have to come down here and change this one to purple.

It's kind of a huge pain in the real world when we might have dozens or hundreds of elements we need

to style, but now they're all purple, so this is valid.

There's nothing inherently bad about it, but as a developer it's not great because of some of those

limitations I just highlighted.

If I want to have similar styles across a bunch of elements, I have to duplicate all those styles and

put them on individual elements and in line and basically clutter my HTML markup with a bunch of styles.

And then the second problem is that if I want to change things, I have to change them everywhere.

And there's no sharing of styles between other documents.

Even if I had a second web page, this is Amadeus.

But if I had another movie page or even thousands of movies and I want them all to have a teal h one,

I'm going to have to duplicate that in every page.

// Lesson 43. Writing Internal Styles

So next step, we're going to look at our second option for writing styles, which is to write internal

CSS.

Now, the way that this works is that we actually can embed CSS directly inside of HTML using this style

element.

So this is a little bit different than in lining.

First of all, we are not writing styles inside of individual elements.

Instead we've extracted them and move them into this separate chunk of content, the style element.

But more importantly, I can use a different syntax in here that can really reduce the amount of code

I have to write.

And that syntax is called CSS, and that's what we're going to learn in this course.


So typically we put our style elements if we're going to use them at all, which we won't actually use

them all that often because of our third option.

I'll show you soon, but if we are going to use it, we put it in the head.

It's not a requirement, but the head is for metadata and stuff that is not content on the page.

This is all the content, the structure of the page.

Usually this is where we would put the styling information.


That is because of the instructions we wrote right here using CSS, make all paragraphs orange.

So already there's a clear advantage to using this style of writing styles instead of doing everything

in line.

We just have to write far less text.

And if I want to change the color or any other property, it's a single, single thing I have to edit.

Right?

If I want to go to Red.

Well, that's all I have to do.

It doesn't matter how many paragraphs I have, it's just a single line that I edit.

So that's the basics of using internal styles.

// Lesson 44. External Styles: The Best Way To Write Styles

Next up, we move on to our third and best option for writing styles, which is to write external CSS.

External meaning that we write our CSS in a separate file and then we can link to it inside of the HTML

file.

But we're writing separate things, HTML and one file or 100 files.

It doesn't matter.

And then our styles in a separate file or files that we can then selectively include in those HTML documents.

And what makes it all work is the link element.

So link is a self closing element, meaning it doesn't have an opening and closing tag.

It's just a single tag link.

And then the most important piece is this h ref part right there.

H ref equals and that has to be set to some URL or some location of a file that has your stylesheet.

So if I call this app CSS, then I'm going to link to Apks assuming that they're in the same folder.

the file extension for the css file must be css just like the html file must have an html file extension and js files must have a js file extension



I just wrote a file of styles that has nothing to do with any of my HTML, but if I come into my HTML

document and I write a link tag just like this, it's a self closing tag.

And I set the ref to be the name of my file or the path needed.

If I had a folder called Styles, then it would be styles slash apks.

But for me it's just the name of my file because they're in the same location app CSS.

And then I'm going to add in this second attribute on the slide.

You can see it there.

Rel equals stylesheet and rel I think it's relationship or actually I can just find it out here.

Yeah, it is relationship.

I couldn't remember what it stands for, but the idea is we can use the link tag to link to other resources

like font files for example, but that's not a font file, that is a stylesheet.

So if we say that this is a stylesheet, here's where you find it.

I save and I head over to my browser, my styles are applied and I'm now getting magenta paragraphs

everywhere.

But remember, I can reuse this now.

I can link to this same document from any number of HTML files.

So here's my second file Dances with Wolves.

I'll link to that same apks.

And we get magenta paragraphs.

So now I have one single source of styles that I can change if I want both of those documents to have.

I don't know what's the color we haven't used yet.

How about coral?

I only have to make that change in one place and then any of my HTML documents that link to this stylesheet

will have that change reflected.

As you can see here, we have coral and we have coral.

All my paragraphs are now coral.

All right.

So the syntax of what we're writing in here is not that important.

We're going to hammer that a lot in this course.

What is important, though, is the concept of writing our styles in a separate file, calling it something

dot CSS and then linking to that in an HTML file using the link element.

And this typically goes in the head because it's sort of a meta thing.

It's not actual content that is on the page, it is information about that content, how to style it.

It will work if it's not up here, but this is where it usually goes.

All right.

Set the ref to the path to find that particular style file and then set rel relationship to be stylesheet

to tell the browser.

This is a stylesheet that we're linking to and that's it.

// Lesson 45. Quick Note on Codepen

// Lesson 46. Anatomy of CSS

selectors  / properties / values

All paragraphs and then curly braces make their color coral and semi colon.

But I want to show some other examples and show some other properties and talk about this pattern we'll

use from here on out.

So this is a slightly more complicated example, but it's the same idea.

We select some element or elements.

Now what this means is a little different than saying all paragraphs, This is something different.

We're going to learn about it in a bit, but we have to select something that we're trying to style.

And then inside of the curly braces, we then specify the properties how we want to style those elements.

And here's a bunch of properties width, height, border radius, background position.

There's a lot of these.

There's hundreds of different properties and thousands of potential values, more than thousands probably.



We're going to get to that in time, but it means some selection.

That's all we care about.

We specify what we're trying to style and then how to style it.


So when I say anatomy, that also applies to the individual properties that we write within each of

these rules.

So we have our curly braces and then we specify top is zero, width is 50%, opacity is 0.6, whatever

those key value pairs are, it follows this pattern, the name of the property, lowercase, and then

a colon and then a value.

And what these properties are and what the values that are accepted are is pretty much the bulk of this

course.

So I'm going to show some examples, but just look at the big picture.

So we have our property name lowercase colon and then a value and then semi colon.

And that's very important.

If we don't have that, it won't work.

I made a little slide just to emphasize that you need the colon and the semi colon.


And the last thing I mentioned is around the capitalization.

You'll see everybody in all the documentation, everything out there do all lowercase.

Technically, I think you can get away with whatever casing you want.

The browser will ignore it.

If I save without formatting, it still works.

We get the coral, but this is not a good idea.

So all lowercase colon and then some value and then a semicolon.

And that's the basic anatomy of a CSS rule.

We select something, we have curly braces, and then we write our.

Individual properties inside those curly braces.


Next up, we'll see the first of many different CSS selectors, which is the element selector.

Now, recall from the previous video that a selector is the first portion of any CSS rule like this

right here that tells CSS, it tells the browser This is what I want to style.

And this example that we're looking at here, the element selector allows us to select based off of

the element type in a document, select all the paragraphs.


There's a lot of different ways to form the selection, to tell the browser what specifically we're

targeting and then how we're targeting it.

So this is kind of recap, but there are many other types of selectors, like a class selector, which

we're going to learn soon, or an ID selector or even fancier things like adjacent sibling selectors

and descendant selectors.

We're going to learn all about that in combinations and pseudo classes and pseudo selectors.



But of course we're starting with the most basic selector, which is the element selector.

So with the element selector, I put the name of an element, although that's not exactly true.

We're putting the name of the tag.

For example, if I have links on this page, the name of that element is the anchor element, but we

don't have a right anchor.

That's just what the documentation would tell you.

But the actual tag name is A And so if I want to select all links and give them a different color,