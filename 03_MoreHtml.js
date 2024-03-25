// Lesson 19. Working With HTML Lists

So next up, we are going to talk about lists, unordered lists and ordered lists, which are two separate

elements.

But the way that we create either type of list is by actually combining two elements together.

You can see I have a UL element that stands for Unordered List, and then I have three LEA elements.

Each Lea is supposed to be a list item, so this is one item in a list, second item and a third item.

All three of them are grouped together in an unordered list.

So it's two elements together and we also are nesting these elements, as you can see.

So we open the UL and then inside the opening and closing tags, we then nest in these allies.

So we use unordered lists when we have lists of elements that are not supposed to be ordered.

So by default they are displayed with bullet points.

You can change that.

You can turn the bullet points off completely.

unordered lists use the ul tag and ordered lists use the ol tag. they each use nested li tags for their list items

There isn't an order.

It's not a hierarchy.

It's not a structured list that says this is the most important second, most and third, most.


Then we have an ordered list where we use an ol element for ordered list.

We still use the same allies inside.

It's the same structure where we nest them inside.

So it's not technically valid to do this.

As far as the HTML is concerned, you should never have an ally on its own.

They belong in one of those two types of lists.

Now, if I do this, the browser will still try and figure it out and it makes it an unordered list

for me.

But you should not do that.

Allies belong in a list, so let's try an ordered list.


So there's an order implied here.

It's an ordered list.

Each ally is still just an ally, but because it's in an OL, they're displayed differently and we see

numbers.


We can also change that.

We can make that Roman numerals.

We can remove the numbers entirely.

But that key difference there is in the structure and the meaning behind a ul versus an o l.

There is no order here.

There is an order here.

And so by default we get numbers.


Okay, so that's the basics of lists.

One thing that we can do with them is nest them.


And I want to show you how to nest a list inside.

What I can do is inside of this lie right in there, I can add another unordered list.

And inside of this unordered list, I can add another list item.

Let's go with canned tomatoes.

And then a second one for fresh tomatoes.

OC.

So if I refresh my page after saving, you can see that we get extra indentation.

The default styles are still bulleted, but it's a slightly different bullet point that's not filled

in just to show a difference.

But you can change all of that with CSS.

So now I've said there's not only one unordered list, there's a second one and it's actually nested

inside of this list item.

There's a connection here.

So don't do this.

This is tempting, but this is technically invalid.

The browser still figures it out, but as far as structuring our markup goes, the UL should go inside

an ally in this case.

And also I could make this an ordered list.

It wouldn't really make sense because is there an order really between canned tomatoes and fresh tomatoes?

Probably not.

It's just a shopping list or a recipe list, but the browser doesn't care.

It will render it as an ordered list so we can nest things that way.

And that's really all that there is.

I'll go back to an unordered list.

So these are all about providing structure to tell the browser.

This is a list of connected elements.

They're all related and they either are ordered or they're unordered.

We can change the default styles and how they're displayed, but the default is that an unordered list

will get bullets and in order to list gets numbers.

Now let me wrap up by just showing some examples of where we might use a list.

It's not always a simple bulleted list like we saw in Wikipedia or a simple numbered list.

A list really is just any group of connected elements that are somehow tied together in a list.

// Lesson 20. The Em, Strong, B, and I Elements

And the first one is called the emphasis element.

We write it using m tag's m for emphasis, and we use this whenever we want to add a stressed emphasis

to a piece of text relative to its surrounding text.

Now, there's a lot of situations where this can come up by default.

It will be styled with italics, but soon when we cover CSS, we'll see.

We can turn that off, we can change the color.

So don't use it just to italicize something.

Use it because it has a meaning.

When you want to stress something relative to the rest of the text.

So a simple example is something like this where we have just do it already.

The DU is wrapped in an m, so just do it already.

And for people with visual impairments who are approaching our website with a screen reader with software

that's reading it out loud, they'll encounter that emphasis element and it does read it differently.

It implies some meaning.

It adds meaning to our markup.

What makes it a little confusing is that there's another element called the IE element, which stands

for idiomatic text element.

At least that's what it stands for today.

But with a tiny bit of history, I'll just explain what happened.

Originally, there was no m element, there was no emphasis element.

We had the IE element which stood for italics and we would use this to italicize text.

And that still is the default behavior of the IE element.

It makes it italicized, whatever you wrap it around.

But now we're not supposed to use it purely to make text italicized.

There's been a movement in CSS in the last one and a half decades or so to move away from adding styles

in our markup.

Just like an H one should not be used to make text big.

It should instead be used to indicate the main topic of your content.

It has meaning.

It has structure.

The same is true here, so instead of using an italics element to make anything italicized, we can

do all of that with CSS and instead we use elements to encode meaning in our documents and we can make

anything we want italicized with CSS.

So this used to be called italics.

Now it's called idiomatic text.

Basically, I would use this element when we have things that are traditionally italicized, like technical

terms, Latin terms like you see right here, right.

Moussa is one of two or three genera in the family.

Moose.

Moose.

I see.

I don't I don't know how to read Latin out loud.

It includes bananas and plantains or the term bandwidth.

This is italicized because it's supposed to be italicized when you have a keyword, right?

It's offset from the regular text.

This gets a little confusing.

It honestly doesn't matter.

Some people still today only use the I element, but we have the M element which we use whenever we're

trying to actually add stress emphasis.

So get out of bed now.

We had to do something about it.

This is not a drill.

You wouldn't italicize those because they're keywords or Latin terms or taxonomic things like you would

with the I element.

So it is confusing.

Good news is no one's going to report you if you use the wrong element, just try and focus on the meaning

of your text.

use the <em> element for text that has a stressed emphasis relative to the surrounding text.  most browsers will render it in italics, but you can change this via css

use the <i> element for text that is set off from the normal text for some reason (latin terms, technical words, etc)

use it for text that is traditionally italicized, only when there is not a more suitable element


Let's do just a paragraph of text that says I really need to get to bed.

I'm going to emphasize really, so I'm going to wrap em around it.

Just like that.

And it will be italicized by default as we see there.

I really need to get to bed.

We wouldn't use the AI element there, although it will look exactly the same.

It also italicize it.

But that implies a different meaning.

When we use the M, we're adding stress emphasis and so this would be a better use case for it or even

something like this.

If we had an H one that said something like, I am a designer and an engineer, which I would not say

I'm a designer.

If I want to stress designer and engineer, I could wrap them with m elements.

I wouldn't use an AI element or idiomatic text, but instead I emphasize them with M, even if the outcome

is the same.

I am a designer and an engineer, right?

I'm making them stand out in some way and then I could turn off the italics.

I can change their color, I can make them bigger, add an underline whatever I want using CSS.

Then we have the AI element.

So a situation.

I don't use it very often, but if I have something that needs to be traditionally italicized.

So if I'm writing a web page about moose, there's a moose in my yard a couple of days ago.

And the Latin name is Alex.

Alex.

Alex.

Alex.

I'm going to copy that and put a piece of text in here that says, I just saw a moose and then in parentheses

I'll put Alex else's and then I'll wrap that in an AI element and the same outcome.

Right.

It's still italicized, but now it's not stressed.

There's no emphasis relative to the rest of the text.


is confusing, again, there's no hard rule that says you have to use an m here, but that's the general

pattern and the general focus.

The mindset in CSS and HTML has moved to separate styles from the markup.

So instead of cluttering your markup by saying this is italicized, this is italicized.

Technically, what we're saying is this is idiomatic text and the default behavior is to italicize that.


And we have a similar pair of confusing elements that have to do with bolding text.

So there's an element called Strong, which is a newer element, kind of like M We use this to indicate

special significance by default.

It will be bolded by the browser, but you can also change that via CSS.

So something like this, whatever you do, do not let the cats out.

That strength there is encoded by the strong element.

It will be bolded, but more importantly it says something about the content.

It says that this is stronger, it's more important in some way.

It's more significant than the rest of the text.

And a screen reader will also recognize that and change the tone of its voice.

So if you look at the strong element on Mozilla developer network, it tells us basically to use it

for strong importance, seriousness, urgency.

So something like this, the rule you can never forget, no matter how much he cries, no matter how

much he begs, never feed him after midnight.

So you don't use this just to make something bold.

You use it when you're trying to make something special and significant.

Make sure to put on your safety goggles.

Right.

So if I just copy this example from Mozilla Developer Network.

We see that it is bolded, but of course I can change that before proceeding.

Make sure you put on your safety goggles.

If you change your tone there, you get more serious or strong.

You might want to use the strong element.

// summary: use the strong element for text that has special significance . browsers will display it as bold, but you can change this via css


But then we also have the B element, which used to be the bold element, kind of like the AI element

used to be for italics.

But again, the trend, the mindset in HTML has moved away from using this purely to make something

bold.

It's been renamed to the bring attention to text element.

It's a long name.

You use it for things that are traditionally bolded, but only when there is not a more suitable element.

So an example would be this is an HTML course.

Am I really making that stronger?

Probably not.

I could use a strong element, but I'm not trying to encode special significance.

I guess I just wanted to stand out a little bit or highlight it.

This is an HTML course, so I'll show you an example of that.

// summary: use the <b> element to bring attention to text. use it for text that is traditionally  bolded, only when there is not a more suitable element.


HTML, CSS, and JavaScript are bolded.

Our attention has been brought to them, but it's a different meaning than this, which has special

strength.

// Lesson 21. Nesting Elements

We nest things all the time and if you look at any web page, let's just go to the MDM home page.

But more than that, we often will nest elements, many levels deep, and we'll get some practice with

// Lesson 22. Superscript and Subscript

// use the <sup> tag to designate text as superscript (raised baseline with smaller text)

// So exponents is a classic example or the ordinal.

I think this is called ordinal numbers where you do first, second, third, fourth, fifth.

The PH there is elevated off the baseline.

You can use this for citations.

We don't use it though, just to make text smaller.

There's many ways of doing that with CSS, but you should only use the soup element's soup for superscript

when something is supposed to be superscript.


// use the <sub> tag to designate text as subscript (lowered baseline with smaller text)


And then we have subscript, which is typically a text that's made smaller and then lowered.

So below the typical baseline as you see there.

So things like chemical formulas is a classic example, right?

h20 Where the two is down below, it's smaller.

Again, don't use this just to make your text tiny, but only use it when something is supposed to be

subscript.

So I'll just do an h20 example h20 is going to look like

// Lesson 23. Inline Vs. Block Elements

Well, there's two types of elements, let's put it that way.

Certain elements like a paragraph, for example, if I put some text in there, let's just start with

that and then let's try working with an emphasis element that says chickens for no reason.

Let's do this.

Refresh the page.

This is what we see, right?

So we have our emphasis element in our paragraph.

But there's a very important difference.

If I highlight this and I inspect, I'll open up my dev tools side by side.

When I hover over this paragraph, you can see that there's a blue box there.

Hopefully you can see that blue box on the left.

It goes all the way across the whole container, the whole body in this case.

And it doesn't actually matter how big my text is in there.

So I could just have a single little word in there like Lorem.

Refresh the page when I highlight my paragraph, it goes all the way across the screen.

Now, if I look at the m element, it does not it doesn't have this big box that extends all the way

across.

And this is because certain elements, like a paragraph or a heading, take up a full block by default.

They just go all the way across.

We can change all of that with CSS and then other elements like spans m superscript subscript, they're

known as inline elements.

They don't take up a whole block, they just take up the little bit of space that's required for their

content.

So if this M just had the word or the letter C that is the width of that.

M Just that little C right there, that blue box compared to the paragraph, it has the letter.

L It's still going to extend all the way across.

And why this matters is, let's say I restore this back to what I had.

If I had another M after this paragraph right there.

Right.

So chickens and then Lorem ipsum and then chickens.

If I refresh the page, the chickens is forced onto its own line because this paragraph takes up a whole

block horizontally.

It goes all the way across.

It won't share the space with anything, but an m will share the space if I have two of them right next

to each other like this.

They play nice.

They don't push each other onto separate lines like a paragraph does.

So a paragraph kind of has a force field around it, pushing things below it.

It takes up a whole horizontal block.

We can change all of that with CSS and other elements like in H one, do the same thing or let's do.

Sure, let's do another H one here heading.

Even if it's very short, it still extends all the way across the screen.

But EMS spans some of the other elements.

We're going to learn all the strong b i superscript subscript.

Those are inline elements.

They wrap around a piece of text and they won't push other content away, but things like headings and

paragraphs they do.

// block elements take up a whole "block" on the browser display regardless of the size of their content whereas inline elements only take up the space they require to display there content (e.g. blocke elements p, h1, h2, etc) (e.g. inline elements span, em, etc)

// Lesson 24. Creating Links

Each one of these is a link.

That's something I can click on and go to another document, another page, although it's not always

just a link to another page, although, you know, here's one to take me to Twitter for example.

So that takes me to a completely different website.

These will take me to a different page on Mozilla developer network.

But then if I look at one of these pages like the M element, if I click one of these links over here,

like where it says example, that takes me to a different part of the same page.

So there's lots of different links.

We can link to our own website at a different web page, right?

Like if I click this, it's still Mozilla developer network or I can link to a totally separate external

web page like Google or Facebook or GitHub.

Finally, I can link to a different part of the same page like I'm doing right here.

Well, I'm not doing it.

I'm clicking these links.

I'm interacting with them.


And links are our first example of an element that actually requires two pieces of information.

There's the text of the link, right?

This link right here says the word HTML.

I click it though, and it takes me to a particular destination.

So there's two pieces of data.

What does the link say and where does it go when you click it?


And here's how we create one.

We use an element called the anchor tag.

So we use the A letter, the A letter.

We use an A in our tag name.

And we put text in there like go to Reddit.

And then the most important piece is this thing right here where it says h ref h ref equals https something,

something, something in quotes.

This H ref is something known as an attribute.

It's like a separate property that we can provide and it has to be called a ref in this case, because

that's what the anchor element is expecting.

And this goes inside the opening tag.

So notice there's my angle bracket and my other angle bracket.

It goes inside that opening tag and then we set that H ref to be double quotes, single quotes you can

get away with, but it's supposed to be double quotes and then some URL inside.

And that tells the browser when a user clicks this link that says, Go to Reddit, take them to this

location.

an attribute controls an elements behavior and it goes inside the opening tag of an element


I'll make just an anchor element that says, Sure, we'll do Reddit.

Go to Reddit, which you normally wouldn't say, Go to Reddit, just be Reddit.

And as you'll see, if I don't provide an href, it's just a piece of text.

But as soon as I provide an href in here and remember this goes in the opening tag after the letter

A we put a space and then h ref equals and then some URL.

So http colon slash slash w w w dot, and then we'll do reddit dot com slash r slash puppies to go to

the puppy subreddit.

If you don't know Reddit, it doesn't matter.

It's just any URL.

Put whatever you want in there.

Okay, now I'm going to refresh the page and it now looks like a link.

It's blue, it's underlined.

You can change the color, you can change the underline.

All of that using CSS.


Notice, by the way, that if I inspect this is another inline element, meaning that it doesn't.

Here, let me put this back on the side.

The devtools.

It doesn't push content onto its own line, so it just fits in with the rest of whatever comes before

and after it.

So I can nest an anchor element inside of things like a paragraph.


We provide the text, which is just like any other element, like a paragraph or an m element in H one.

It's just text between tags, but this is what makes the link work.

It says this is the destination of this link.

// Lesson 25. Other Types of Links

Because that's a totally separate document.

So what I can do is just edit my URL to get there because it's in the same folder and it's called contact

dot HTML.

And this is one way of doing it.

And we see, do not contact me, please write.

Here's our first web page, here's the contact page, but I want to connect them.

I'm going to add a link here in my lie or in a new ally in my UL that says Contact page or contact us

or something.

And I need to put in the correct URL to locate this page called contact.

Now, this is a very simple example.

They're in the same folder so I don't have to do anything fancy.

I can just write contact dot html so I don't do w w w or I don't do http colon, none of that stuff.

It's not a separate website, it's not some external website someone else created.

It's just a different file.

So if I save and I go back to my first web page, here's my contact us link.

If I click it, it takes me now to contact dot HTML.

Now if I had different folders, right, If this was nested in a folder called other pages, I could

then reference it like this.

Other pages slash contacts html.

But that folder doesn't exist.

So if I refresh the page and I try to click this link, I'm going to get an error.

It says I can't find that file.

So the path that I use the name and the location really matters, just like it does with a website,

right?

If you misspell this, you're kind of out of luck.

Same thing here.

So that's an example of a relative link.



create links to elements on the same page if the element has an id assigned to it


We add a special attribute to our section, the destination, whatever I want to link to.

This attribute is called an ID.

So we're going to learn more about IDs when we cover CSS.

But think of it as just, well, an identifier, a name for an element.

So this can be anything.

I wouldn't put a space in there though, that's going to cause problems.

But I can just call it like chickens.

That's what this H two is about.

I'll call it chickens.

It doesn't change anything about the display refresh.

It looks exactly the same.

However, behind the scenes it now has an identifier.

And then I can create a link with the H ref that corresponds to the name of that ID.

So I'll do that now.

Let's make an ly with an anchor tag and the text will just say my chickens.

Then this ref, it has to start with what's called the octave thorpe or pound symbol or whatever hash,

whatever you want to call this above the three key right shift three.

And then the name of my ID, which was chickens.



So it must be spelled the same way.

This is just a way to say, hey, there's a sticker, basically a label on this element.

Whatever it is, it doesn't have to be a heading, but it often is.

And then whatever that name is, you link to it with a pound symbol in front.


An ID is supposed to be unique, so we'll learn more about IDs when we get to see us.

They have other uses, but for now, if we set up an ID, it's just a label on some element.

I can then link to it using an anchor tag where I prefix the name of that ID with a pound sign.

// Lesson 26. Creating Images

the default size for an image tag is the size of the image that is uploaded


So I can't I mean, I could just go to GitHub marketing page and copy one of these image URLs and put

it in one of my websites.

But I shouldn't do that because it's not licensed for that purpose.



Unsplash.com are licensed for us to use.

So if I find an image I like, like this fox right here, I can download the image or I can actually

just right click and copy the image address and then make my own image element element, put the image

source and paste that whole URL.

So this is the location of that image.

It's not on my computer locally, like this one.

It's hosted somewhere else.

If I refresh my page, we get a very large fox image and there it is.

So.

Typically it's better to have images if you're going to be making a real website, something that you

know, you plan on, on other people using.

It's best to download those images and have them locally in case this URL ever changed.

For example, I'd be out of luck.

If Unsplash disappears, they go out of business, then this link breaks.

But if I download the image like I have for my space cat, it's always here.

I don't have to worry about that, but both of them are totally valid.

You could call it the opening tag, I guess, or just the image tag.

It's something that we call a self closing element and it makes sense.

There's no text content, right?

Other elements that we've seen before, you put text between the opening and closing tags, the name

of the link or the text or the link paragraph text the title of a page.

But if it's an image, there is no text really, that we could provide.

All that we do is write image and then provide a source attribute.

CRC So this is like a ref, right?

Ref is for a link.

Source is the image location, it's the source of the image.

And then we'll talk about Alt in just a moment.

the default size for an image tag is the size of the image that is uploaded


So I can't I mean, I could just go to GitHub marketing page and copy one of these image URLs and put

it in one of my websites.

But I shouldn't do that because it's not licensed for that purpose.



Unsplash.com are licensed for us to use.

So if I find an image I like, like this fox right here, I can download the image or I can actually

just right click and copy the image address and then make my own image element element, put the image

source and paste that whole URL.

So this is the location of that image.

It's not on my computer locally, like this one.

It's hosted somewhere else.

If I refresh my page, we get a very large fox image and there it is.

So.

Typically it's better to have images if you're going to be making a real website, something that you

know, you plan on, on other people using.

It's best to download those images and have them locally in case this URL ever changed.

For example, I'd be out of luck.

If Unsplash disappears, they go out of business, then this link breaks.

But if I download the image like I have for my space cat, it's always here.

I don't have to worry about that, but both of them are totally valid.

summary: create image elements using the <img/> tag. note that it does not have a closing tag!

the src attribute specifies the location of the image to be displayed.


Then that brings us to this final piece, the alt attribute.

Alt.

This stands for alternate text and whatever we put in there, it won't be displayed normally, but it

will be read out by screen readers.

So if somebody can't see the image, if they're visually impaired, they still will know what the image

is depicting.

And then also, if our image fails to load, this text will be displayed.

So if I add some alt text, we typically typically want a short description, not like a paragraph or

anything, but let's just call it cat astronaut, cat

in space.

And I deleted it.

Quote It looks like astronaut cat in space.

I refresh the page.

We don't see any of that text, but if I break this URL so that this image cannot be found now, it

does say astronaut cat in space.

Did I type cat twice?

What am I?

Geez, it says astronaut cat in space.

So that's one reason to put alt text in.

But honestly, the way more important reason is to add descriptive text for people using screen reader

software.

This will be read out loud.

And then one other thing to know about alt text is if you have a purely decorative image that has nothing

to add to the document.

So most of the images you'll see I mean, like on Wikipedia, this image is providing context.

It's related to the content.

I'm sure it has some alternate text.

Let's see what it says.

Yeah, well, it's not very helpful, but it says Moose Superior to JPEG.

Yeah, that's kind of terrible.

Alternate text, but still, there should be alternate text provided for these images that are important

there.

Their content.

Right?

It's related to the document.

But sometimes what we'll do is have an image that is purely decorative, often in the background of

things we might have, like a fancy rainbow effect in the background of the whole page.

Does that really matter to the content?

No.

If someone's using a screen reader instead of making the screen reader read out loud something like,

you know, rainbow background across the entire page, what you can do is leave the alt attribute blank.

And this tells the screen reader, just skip it.

There's nothing important here.

So it's not critical that you remember that right now.

You just need to know that alt text provides an alternative description of your text if it fails to

load or if someone is using screen reader software, that text provided will be read out loud as a description

for the image.

And then if you leave it blank, not just leave it off, but if you leave it empty, that tells the

screen reader there's nothing important here.