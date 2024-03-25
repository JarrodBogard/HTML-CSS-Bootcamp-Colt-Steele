// Lesson 10. Introducing HTML

What is HTML?

Well, it stands for Hypertext Markup Language.

And out of all of that, the most important part is the M, the markup part or ML the markup language.

Don't worry about hypertext.

HTML is a markup language.

And I like to explain this to my students as if you ever wrote an essay, a paper, a poem that was

graded by a teacher, often with a red pen, at least for me, where they would go through, my teacher

would go through and mark things up.

I would write the text, they would cross things out, underline things, circle things if I misspelled

them.

We kind of go through the same process with HTML.

The whole point of HTML is to take regular text, like what you see here and mark it up to give it structure.


And that's actually what HTML was originally created for the sharing of research papers across universities

and the ability of it to provide a structure to those research papers.

So when we write HTML, we'll take text and add markup, we'll add HTML into it to then transform it.

So the browser knows to make this a link, to make this a heading, to make this a paragraph, to make

this bold and all that stuff, which is exactly what my next slide says.

I got ahead of myself here, make this text a link, make this a heading, make this a paragraph.

That is the sort of thing that we tell the browser to do with HTML.


Remove the style links, don't care about the colors, don't care about the spacing, just notice the

content that is all HTML.

So it's not just text necessarily.

It's things like buttons and form controls, images, things that we can add to a document and it's

all done with HTML.

// Lesson 11. The Basic HTML Workflow

But it's a little bit different when we're actually developing the content ourself.

When we're building the website, we don't have a server necessarily.

We're not requesting something, we're just doing it locally on our machine.

So what we'll do is write code in a file, we'll save the file, and then we can actually just open

up a file in our browser and it will be rendered for us.

So that's the basic workflow.



And now the next part of this workflow is typically we make changes to our document, right?

So I'm going to have Hello everyone.

And then maybe a bunch more exclamation points I have to save in order to see these changes reflected.

So I just saved that little icon one away, but I'm not going to see my change reflected here.

I still have to refresh the page so I can click refresh.

I can use a shortcut and now I can see the refreshed version.

And that is our very, very basic workflow that we will follow all the time.

So we have an HTML file and we put content in there.

We're going to learn all about what that content can be.

Let's put a little smiley face in there, I guess, and we save.

File save.

Command s whatever shortcut you prefer or whatever option you prefer.

Then we go back to our browser and we refresh the page and we see our changes.

// Lesson 12. The Paragraph Element

HTML basically consists of a bunch of elements that we can pick from and add into our documents.

So we have different elements to make a link or a heading or a paragraph or bold text, images, buttons,

form controls.

All these different things are created using different elements that all the browsers recognize.


So if I put a bunch of whitespace in there and refresh, it doesn't matter.

The browser doesn't respect that whitespace.

We have to use something like a paragraph element to tell the browser.

Wait a second, this is a standalone paragraph and this is a standalone paragraph and the syntax looks

like this.

We wrap our text with what we call an opening paragraph tag in a closing paragraph tag.

So the way that we write this is the same as the H one where we use the angle brackets, but instead

of H one we're going to put the letter P in there and that tells the browser this is a paragraph.

So as I start to type it, you can see VTS code starts to auto complete it.

For me.

This is the closing version.

So it's exactly the same, except there's a forward slash before the letter P and this is a pattern



And the most important takeaway from this video is the syntax of using the less than design or the angle

brackets where we put a tag name inside like P, and then we put that around text and then we close

it off with the same tag, but prefixed with a forward slash.

And that's how the browser knows.

This is the beginning of the paragraph and this is the end.

If I'm missing one of those.

Right, and I only have the beginning tags and I refresh the browser can sometimes figure out what I

want, but sometimes it won't figure it out.

// Lesson 14. Chrome Developer Tools

// Lesson 15. Document Structure

So here's the basic structure.

We start with what's called the duck type declaration.

And this is the weirdest part.

It doesn't have a closing tag.

It looks like this exclamation point duck type in all caps, space, HTML.

This basically tells the browser, Hey, we're using HTML here specifically.

It tells it what mode of HTML.

It doesn't really matter.

Just put it at the top of your document so we can start with that.

In our case or in our HTML document, we should start with exclamation point duck type.

HTML and inside of angle brackets.

But we don't close it like this.

It's just a single tag.

Then we have an HTML element and this tells the browser.

Everything inside of this opening and closing tag is to be treated as HTML.

So if you have questions about this stuff, you can ask them.

But also it's just the sort of thing we always do.

So I'm going to get rid of all of my code for a moment.

I'll just cut it out, keep it on my clipboard.

We have our opening tag and closing tag, and all of our content goes in here.

No HTML should be down here.

All of it is inside of the HTML element.

And then we have the body.

Let's start there.

This is the easiest part.

The body is where we put all of the content that you see on the page, all of our elements we've learned

so far.

So I'm going to paste in my H one element, my paragraphs.

Everything we learned for the next while is going to go in here.

But then we also have this thing called the head.

And the head is where we put metadata and information about the document.

It's also where we'll link to style sheets and font files when we get to us.

So it has a purpose.

But for us right now, we don't have much to put in there, but let's put it in here anyway because

we're supposed to have it.

So head opening and closing tags.

Here it is.

And then the body comes second.

So just make sure you see that head and then body.

And then inside the head we usually have what's called a title element in this title won't have a visual

impact on what we see on the page, but it will be used to determine what is shown in the browser tab.

Right there, right there, right there.

Those are all the titles of the web page.

And Google also uses the title and other web web crawlers use the title when crawling across your web

page to categorize and give your page a name.

So we should always have a title.

It goes in the head.

So opening head, closing head, we put the title inside, and then in here I'll put some name like

our first web page, and then I'm going to save.

If I go back to my browser and I refresh the page, watch the tab right here.

It now has our title, our first web page, but it never shows up in the actual content.

This is the body.

Everything we see here is in the body.

The head is for more metadata about the page links to style sheets when we get their fonts and the title.

So it can be annoying to type this out yourself and you can forget, especially when you're starting

out exactly what you're supposed to have and what order.

Fortunately, VS Code gives us a very easy shortcut.

We're just going to cut this all out in an HTML document.

If I type an exclamation point and then I hit tab, look at what it makes for me.

Doc type html, html head title body.

Now it puts some other stuff in here.

We're not going to worry about this.

This is not bad to have in there.

These are called meta tags.

They're good to put in there.

It's not a problem, but you don't need to type them out yourself.

They come with the exclamation point tab and then you can fill in your title.

You can fill in whatever content goes in the body and you don't have to type that whole structure yourself.

So whatever you prefer, type it out yourself.

Use the shortcut.

Just remember the shortcut.

It's exclamation point tab and that's it.

For our basic structure, we are now conforming to the rules of HTML.

We're not relying on the browser to fix our issues.

And the most important thing to remember is the head is for meta stuff.

The body is for the actual body of your web page.

All of your content goes in there.

// Lesson 16. Creating HTML Comments

Next, we're going to talk about comments which aren't really an element, but they are a piece of syntax

that comes in handy in HTML.

Comments allow us to basically tell the browser, ignore this, don't treat this as code, don't treat

this as anything, and they serve two main purposes.

Basically, we can leave notes for our self.


So this is where comments come in handy.

We can use this syntax, which I'll show you a shortcut for, because it's kind of a pain to type less

than or opening angle bracket, exclamation point, dash dash.

And then on the other side of it, dash, dash greater than sign.

So we can do that here less than exclamation point dash, dash.

And then corresponding I call it the arrow on the end of it and you can see that VTS code now treats

this differently.

It gives it sort of a grayed out italicized styling.

If I save and I refresh the page, it's now gone.

The browser completely ignores it.

It pretends well, it doesn't pretend it basically doesn't exist in the eyes of HTML.

So you can leave yourself notes this way.

That's the first use case.

The other one is if you're writing code and you temporarily need to turn something off.

So for whatever reason, I want to get rid of this first paragraph, I don't want to delete it.

I still want a record of it.

I can wrap it in our comment tags like this.

It's grayed out in VTS code that's just visually showing me that this is a comment.

The browser is going to ignore it.

I save refresh the page and the browser does ignore it.

But again, it's still here.

So I can toggle things on and off and decide if I want to reintroduce it without having to retype it.

I still have a record of my earlier code save and now it's back.


There is a shortcut in VTS code.

If I select something like this h one and I type command forward slash I believe on windows it is control

forward slash, it's something forward slash.

It might be option.

It will toggle that on and off.

And if you're not sure what the shortcut is like, I'm not sure right now for Windows what it is if

I hold command shift P and I know on Windows this is control shift P, it opens something called the

command palette.

And in here I can search.

If I do comment, you'll see down at the bottom toggle line comment.

For me, it shows the shortcut is command forward slash.

I can also just click this and it toggles a comment there, but I would just use that to find out what

the correct command is on your platform.

And then if I'm on this line and I hold that command forward slash, it turns the whole line into a

comment, refresh the page that H one no longer shows up, I can then undo it by doing command forward

slash and you can see I'm toggling it on and off.

I use this all the time.

If I wanted to just get rid of this stuff for a moment, select it, use the shortcut, command forward

slash and one more time to find out what that shortcut is.

You can do command shift P or control, shift P and search for comment and it will show you all the

different comment related commands.

And the one we want is toggle line comment.

// Lesson 17. Creating Headings

Well, technically, we've seen one, which is the H one.

So we're going to learn five new elements.

These all have to do with creating headings.

They go from an H one down to an H six, and these headings are used to add structure to our document,

to add well headings and to designate section headings in a document.

So when I say a section heading, I'm referring to things like this right here.

This is just a random page.

The box shadow page on MSDN doesn't matter if you know anything about Box Shadows or not.

We're going to learn them later.

But this is a heading, right?

This tells us this is the main piece of content on this page or the main topic of the page, rather,

not the content.

This tells us what the whole article is about.

So within that we then have other headings like this is probably a heading, this is a heading, here's

another heading, here's a heading.

These are all different headings and they look slightly different and they have different sizes and

generally those sizes are going to indicate different levels of structure.

So for example, this is some sort of a heading and then within it we have smaller subheadings, HTML

and then CSS and then result.

So these are not paragraphs of text.

Typically a heading is a couple of words or maybe a line.

It can be as long as you want, but it has meaning to it.

A heading is supposed to be a section heading that tells you something about the content to follow and

a great place to see headings in action in the real world is to go to Wikipedia, click on any article.


So these are all subsections of content and they each have a corresponding heading that tells you what

this section is about.


So this is why we have six levels of headings H one down to H six, and by default they all have a different

font size and H one will be the largest font size all the way down to an H six, which is the smallest.

But please remember we can always change the font size.

You should not use an h one just because you want to make something.

Have big text only use an h one when it's appropriate.

As far as the structure of the page goes.

So let's talk about what that structure should be.


We're going to write an article about my pets.

So that's going to be the main topic of the page.

My pets.

So I'm going to use an H one and H one is reserved for the main topic of your page, the very most important

section heading.

And there's really only supposed to be 1h1 per page.

There should only be one main topic on your page.

Buffalo Bills.

In this case, that's what the whole page is about.

You can put as many as you want.

Technically, the browser won't care, but from a meaning perspective, in a structure perspective,

you should just have one.

So that's kind of invalid.

What I just did technically valid, but I wouldn't recommend it.

And you can see that it definitely gets a large font size by default.

You can see there's definitely a difference in the font size as well as the font weight.

This is bolded, but we can change all of that with CSS.

So don't use headings because you want big text, although often headings are big because they are important.

Right?

This text is bigger than this and this text here is bigger than a regular paragraph.

Anyway, I would use an H one for the first level of headings, but then let's say I have more content.

I'm going to have a little piece of content about my cats.

I cannot believe I'm saying this, but I have four cats.

It's a little excessive.

I would agree.

I didn't plan on getting for cats, but let's say this is the next.

Chunk of content and I have a whole bunch of stuff about cats.

I'm going to do Lorem ipsum and just pretend to have more content there.

And I want to have a heading to tell everyone this is about my cats.

I wouldn't use an H one because that is supposed to be the main topic of the page.

This is a subheading, so I could use an h two, which is the next level down.

So an H two says this is a secondary topic on the page and in here I'll say cats and by default an H

two does get a smaller font size.

It's still big and it's bold, but it's smaller than an H one.


In this case, this would be our main heading.

The main topic.

These three things are on the same level, so they would be an H two and then these would be an H three

because they are smaller topics.

They're kind of nested subtopics beneath an H two.



So we could go all the way down to an H six if we had that many levels of headings.

But we should never use an H six if we don't have an H five and a four and a three and a two and a one,

we shouldn't use an H four if we don't also have H threes and twos and ones.

Think of them as nested levels in a hierarchy.

An outline of your document.

I could technically make this an H six, but it kind of ruins the structure of the document so the browser

doesn't care.

There's an H six.

It's pretty small, still bolded, but not very big compared to the other headings.

And while it's valid, it does mess up the meaningfulness of my page and the structure, because now

this kind of implies if someone's using a screen reader or if a web crawler is coming across this page,

it implies that there's other headings and that this is less significant than this.

But they're supposed to be the same significance in my case at least.

So I would use an H three.

So you don't have to get too bogged down in all the rules.

The browser doesn't care, really.

You can do whatever you want, but the general rule is only 1h1 per page.

It is the most important topic of your page.


So just as an example, you could have made that in H three or four or five, but then the relationship

between these two things is messed up by making it an H two, we're saying this is the next most significant

thing or the next subheading below the main topic.

So use 1h1 per page and then only go in order.

Don't use an h three unless you also have H twos and ones.

So that is a lot about headings, but they are important.

They come up all the time.

We use them to create section headings and structure a document.


Make sure you go back and watch that video where I talk about how to structure your headings and there's

significance, there's meaning to something being an H two versus an H one and an H three versus an

H two.

It's not about the font size, it's about the structure and the relationship between topics and headings.

And then we have a bunch of paragraphs and that's really all we know other than duct type HTML, everything

goes in HTML.

Inside, we put a head and a body, all of our content goes in the body and then we put a title in the

head and that's it.