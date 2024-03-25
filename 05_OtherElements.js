// Lesson 36. Spans

spans are generic inline elements. they have no special meaning but can be styled later using css

divs are generic block containers that have no inherent meaning. they are used to group content together for styling


So we'll start with the span element.

A span is just a generic container for inline content.

So remember the difference between inline and block, right?

If we look at our document here, I'm just going to delete everything we have go away.

I have my H one.

I have a paragraph.

Sure.

Put some Lorem ipsum text in there.

And then let's do something like a button that goes right here.

Button.

Hello.

What do you expect our page to look at as far or look like As far as the contents layout, what will

be on its own line and what will not be on its own line.

Let's take a look.

I'll refresh the page.

And what we see is that every single element is on its own line because an H one is a block element.

It goes all the way across the screen or across the container, which happens to be the whole screen.

So as a paragraph, it goes all the way across and forces content onto a separate line.

And then our poor little button is just here on its own.

But that is an inline element.

I could put a button in the paragraph just to show.

And that's just part of the paragraph now, as you can see right there.

I can have five buttons together.

None of them are going to be on their own separate line.

They share the space.

Each button just takes up the least amount of space that it can.

It doesn't push content around like a paragraph or an H one or other block elements.

So this matters because a span is a generic inline element.

Other inline elements besides buttons that we've seen are things like labels, EMS or emphasis elements,

bold italics, anchor elements.

That's an obvious one.

If I put a link in this H one and it goes to Google, it just has some fake URL that fits right in.

It doesn't go on its own line because it is an inline element.

Anyway, a span is an inline element, but it's a generic inline element that has no explicit inherent

meaning.

It doesn't do anything except provide a hook.

Basically for us to style later.


It's purely a way to hook into our code and style, something to target it directly.

And it's an inline element.


Imagine in my paragraph for some reason I want to make this one word a different color or bigger or

have some fancy animation, but just that one word.

The way we would accomplish this, barring the fact that we don't know CSS is I would need to somehow

select this one word on its own so I could use something like a strong element and emphasis element

if they made sense in that situation.

But sometimes we want to style things and it doesn't really have much meaning.


So spans provide a way to specifically target an element or pieces of text, usually call them out and

do something differently.

And when we get to CSS, we'll do that a lot.


But that is the span element.

It's a generic element.

Only use it for styling purposes.

It does not have any meaning.

// Lesson 37. Divs

Next up, we move on to an element that is closely related to a span.

It's called the div.

Divs are generic containers just like a span.

But the key difference is that they are block elements.

They don't flow in line like a span.

They're just a generic box essentially, so we can use them to group together content and then style

that content.

And we'll do this all the time.


So it's not a border around this anchor tag.

It's not a border around the heading.

It's not a border around the paragraph.

It's actually apparent div It's just a container that groups the three things together.

So then we can give them a border and we use divs for that purpose all the time.


But that's the bounds of our div container.

So inside of it we have the H to the paragraph and the anchor tag, but around it is the whole div and

now I could style it and do something like this.

We don't know borders, but I'll say border two pixels solid purple.

The div itself is just a vessel for us to then style, so it's just like a span.

They serve the same purpose, but a div is a block element as you can see here.

If I had elements afterwards, just another anchor element which is an inline element, it's forced

onto its own line, right?

It doesn't share the space because the div takes up all the space and pushes content down like an H

one does, like a paragraph, does not like an anchor element or a button or a span.

Those are all inline elements.

So a div is a box.

It's not going to show up as a box until we style it, but it is a box that we put stuff inside specifically

so that we can style the content.

// Lesson 38. Tables

We can use HTML to create tables.

Basically rows and columns.

Write data that is displayed in a tabular format.

So this example from Wikipedia is the mineral content of common cheeses.

So we have our different cheeses and then the mineral content, right?

And the different cells that correspond to the different rows and columns.

And the way that we make tables can be a little overwhelming.

There's tons of different elements, and this is why we're not going to dive into full detail and why

I have a whole section on tables in a separate course.

There's a lot to them, but we'll step through it step by step.

The first thing you need to know is that we have a table element.

So table is the parent element.

It doesn't show up as anything.

It doesn't look like anything If I get rid of all my content in my example HTML, I'll just put tables

as the H one.

If I make a table element refresh the page, we don't see a thing.

I have to then populate it with rows and then cells.

So we use a t r element, which is the table row element to make a row.

So this example that you see here has three rows.

This is high grossing movies.

I think it's the highest grossing movies.

So Avatar, Avengers, Endgame, Titanic, I think actually now Avatar two is, well, I don't know,

somewhere on this list.

It might have changed since I made this slide a couple of weeks ago.

Anyway, each one of these is a row, so if I put a table row in here, a TR element, I still won't

see anything because I have to populate it with TDs and a TD stands for Table Data Cell.

I believe it's an individual cell, a single item.

So this is one.

This is one.

This is one, that's another one.

Every piece of data is a single table data cell.

So one right there, there, there, there.

And that's how we build our tables.


And you can see it goes on its own row and each of the columns is then aligned.


Now you can style them.

We're not going to, but you can so that they have borders and background colors, as you see here.

Because right now, I mean, it looks like a table, I guess, but you could make this with just separate

paragraphs or spans or whatever you want, but you shouldn't.

If you have tabular data that needs to be displayed in a table, you should use the table element and

its associated elements.

And if I inspect, you can see each cell just takes up a little bit of space.

It will grow like this one grew to accommodate hot chocolate because it's long, right?

It's the longest word there, the longest data cell.

So it takes up more space.

Now, this is just a single one that has or a simple table that has two columns and three rows.

If I wanted another column over here for quantity, I would just add a TD to each row at the end.


We need to properly label each column, and that's where our next element comes in, which is the PH.

It stands for table heading or header.

One of those two.

We use it in place of a table data cell, a TD to specify the headings of our table, so we put them

in their own row.

And in this case I have movie title in worldwide.

GROSS And you can see that they're bolded by default, right?

They're centered.

You can change all of that.

But that's the basic concept.

So I could add a row to the very top of my table.

And to be clear, I could use a TD that just says item another TD that says Price and one more that

says quantity.

However, this is not the best approach because it doesn't have the right meaning.

A page indicates that it's an actual heading for the table.

A TD indicates that it's just a piece of data.

So we should always use the more specific, more meaningful element when we can, which is a PH here.

And we'll also get some styles for free, although you can change all of that.

There we are.

We get bolded right center aligned headings.

Not beautiful, but still it adds some meaning.


You can change the styles of every single part of a table colors, fonts, bolding the layout, the

borders, whatever you want.

We're not going to, but you can.

So this is now a close to properly structured table, but we're actually still missing something else,

which is there are specific elements we can add in to group the content of a table to specify where

the headings are, where the body of the table is, and then potentially where the footer of the table

is.

So our table doesn't really have a footer, but it certainly has the heading section and then it has

the body section.

And we can add this in ourselves just to add more meaning to our table by saying, okay, everything

right here and below.

This is all part of the table body.

So we use the RT body element.

We won't see anything different.

But we're just calling out a chunk of the table and saying this is the bulk of the table, this is the

body.

If I refresh, nothing changes and then we should do the same thing for this TR here.

And we should say this is the table head.

And if we had multiple rows of headings that you can, you should put them all in the head.

Again, no difference.

But now our table has some extra meaning and some structure.

This is beneficial both for screen readers and for styling purposes and also for web crawlers coming

across our page.

This calls out the headings right here.

It says, Hey, this is where all the heading content is, and this is where all the data, all the

body content is.

And sometimes we can have a footer.

I'll show an example of that.

This is the MDM page for Ht Foot and they show an example of this.

Here's a table, right?

It has headings up top, so that would be the DT head.

Then we have two rows that are in the DT body, but at the bottom we have a summary row.

So this is different from the rest of the data.

It is a footer, it's summary.

It's often for things like well sums, averages, any aggregation at the bottom.

We wrap this with a DT foot.

As you see right there.

And this ht foot specifies that this is the footer of the table.

Not a dealbreaker if you don't have one.

Our example table doesn't need one, but it's good to know that that's an element that exists that you

can use to structure a pretty complicated table that may have a footer at the bottom.

So that's all you need to know about tables for now.

Like I said, it's good to know them, but they're not going to come up in the rest of this course.

I wanted to explain and just introduce their existence to you, but I also possibly overwhelmed you

because there are so many different elements that make up a table and we actually skipped some things.

We didn't talk about call span and row span and captions.

So there's more that we could worry about, but we're not going to.



We use them to create tabular charts, right?

Rows and columns of information that's arranged in a table.

// Lesson 39. Semantic Markup

html tags should say something about the meaning of their content

Semantic markup is a fancy way of saying that when you write HTML, your tags should be meaningful.

They should say something about the content that they contain the meaning of that content.


And now I've got a big heading looking thing for my document.

But this is not meaningful.

If we look at how we made this heading, we used a span which means absolutely nothing.

A better option would be to use a heading element like an H one.

Again, we can always change the font size of everything.

And when we talked about H one, I kind of introduced this concept of semantic markup without referring

to it as semantic markup.

We talked about how an H one is meaningful.

It should be the main heading for a page and it contains the main topic of the page.

And so again, I can change that font size.

I could say, All right, let's make that h one bigger to be 60 pixels, just like I did with the span.

But the difference is that a span means nothing and h one means something.

It means this is a heading, not only a heading, it is the main heading compared to an H two or three,

four, five, six.

And it should contain something that is the main topic of the page.

Just like a paragraph means something.

It contains a paragraph of text.

Now semantic markup often refers to a big group of elements that were sort of introduced to HTML later

in the life of HTML, meaning they weren't around at the beginning.

And these are elements like article A side details, footer header, main nav section, summary time.

These are new ish elements.

When I say new, they're still like ten plus years old, but they're not 20 or 30 years old.

And before they existed, we would write documents that looked like this tons and tons of divs generic

containers all over the place.

Div dave Dave div div div div div div div div div.

Anytime we want to box.

Any time we want to group something into a section, a concept, a sidebar, a nav bar or a footer,

we would use divs.

An example of this is actually the wikipedia web page or website.

It is riddled with divs that are used to organize everything together.

So we've got you can see here div div div div div.

So we've got a div for this nav bar, we have a div for the main content here.

And then this sidebar I'm sure is a div.

Yep.

There's a div div div div.

So just generic containers used everywhere for a long time.

That was really your only choice to group content together.

But now and for the last ten plus years we have a bunch of new elements that we can use that are meaningful.

These are semantic elements, things like NAV aside, main article section.

Now they're still just containers.

They don't do anything.

You won't see them unless you style them.

They behave exactly the same as a div, but they provide meaning If something is inside of a nav element,

you know that it's probably navigational content.

When you see the main element on a page that tells you this is the main content of the page instead

of just div div div div.

So there's a couple of benefits to this.

There's two main ones.

The first one is accessibility.

It's way more accessible and screen reader friendly.

When your website says this is the nav bar, this is the footer, this is the main content, right?

When things are called out, if you're a user using a screen reader, your screen reader can immediately

identify this is the nav bar, but if it's just div div div div div it can be a lot harder for a screen

reader to know where it is on a page and what the point is of a piece of content.

Now if we look at something like an MD RN, this is a very accessible website.

If I just inspect anywhere on this page, we'll see a lot of semantic elements.

Now there's still a lot of divs and that's totally fine, but we'll see a nav element right here for

navigational content.

We see the main element for the main content of the page.

So if you're reading a screen or if you're using a screen reader and you want to read an article and

get to the main part of the web page, your screen reader can immediately identify where that is because

we used Main.

But if it's just 1000 divs, it's a lot harder just a simple example.

The second reason has to do with SEO and search engines.

When code is crawling across your web pages, if it is marked up using semantic elements, that code,

let's call it Google's web spider, for example, it's able to identify what your website means.

It knows.

All right, well, here's the navigation bar, Here's the main content.

Here's the main topic of the page.

It's in an H one.

Here's an article, here's a sidebar, here's a footer.

And it can use that to understand the web page, right?

If we call something out as the main topic, well then Google will probably pay special attention to

that content and categorize it and store it in such a way that, you know, we get better results than

if we just said this is a div and this is another div.

Now there's a lot of other uses.

That's kind of a simplified explanation, but in general we're improving accessibility to people using

screen readers, but also making our code more accessible to other code to crawlers.

To parsers, to web scrapers.

And we're doing that by adding meaning to our markup.

And then the final reason is a less common one, but it's still worth noting is developer sanity.

It's a lot easier to work on a web page like this one where we have main and a side and article and

nav and footer compared to the Wikipedia example where it's just div after div, after div after div.

If I'm trying to find the main content of this page and edit it or work on it, I'm going to have to

find some one div somewhere is the main content div, whereas it's a lot easier on MD to have our content

organized.

But remember at the end of the day these elements don't change anything in terms of the behavior or

the appearance of the web page.

It's all about using these other elements to improve accessibility and search engine accessibility of

your web pages.

// Lesson 40. Semantic Elements

And they all are similar in the sense that they don't actually do anything new, but they provide meaning

to your content or to the markup, rather.


So we have things like Main, we'll start there.

The main element again will act just like a div, a generic container, except it's not generic anymore.

The main element says that this, whatever it contains is the main content, the dominant content of

the body of the document.

So if you have some article, like if we're looking at Wikipedia, right, the main content here is

basically all of this stuff.

On down.

Up until we hit this footer, probably.

And it doesn't include the sidebar or the nav bar.

That's how I would structure it, right?


I can put a main element, wrap it around our main article, if that's what this is.

This is the main content of the page.

I refresh.

Nothing different.

But now we've identified to screen readers.

We've identified two search engines that this is the main part of the page.

So we also have things like header, right?

So header represents any introductory content that often will be things like navigational elements,

logos, search forms.

So if we look at Wikipedia, I would say all of this would be heading or header content, all of that

stuff.

And then we also have the other side of things which is footer, right?

Which is usually at the end of some content.

So that can be footnotes, that can be this little copyright symbol down there.

Footers can be both the footer of an entire web page, but also the footer of a section of content or

of a piece of content.

So on this naked Mole Rats web page, I would say that this stuff all the way at the bottom, actually

this is really the footer for the entire page, but then this is maybe the footer for the main content

or for a whole section of content.

There's a lot of room for interpretation, so there's no hard rules.

But by using footer, no matter what, if you're using it at least properly in the sense that it's describing

it is using or you're using it to section footer content, that's way more meaningful and that's a big

improvement over just using a div.



It doesn't change anything as far as appearances, but it also does make it easier to style later on.

I can hook into that footer, but otherwise it's just a container.


So nav is used for navigational content and that can be all sorts of navigational content like this

sidebar here should be a nav.

All of this up here should be enough.

All this sidebar on the left should be enough.

This little navigational content here, these breadcrumbs.

That should be a nav.

Let's start by looking over here at this sidebar.

Navigational content.

Yep, it is a nav.

So inside that nav then we can have divs and whatever else, we can have sections, we can have all

sorts of stuff.

But it says this is navigational content.

And the same goes for these links up here I would imagine.

Yep, those are also a nav.

So instead of just using a div, you use a nav, it calls it out as navigational content.

You can read the official definition on MD and it represents a section of a page whose purpose is to

provide navigation links either within the current document or to other documents.

So in this example of Wikipedia, I would make this a nav element.

I don't think they do it.

Nothing against Wikipedia, but I don't think that they use NAV.

Yeah, they don't.

It's just a div.

I would make that a nav because it provides meaning.

All of this on the left that could be a nav.

It's navigational content, this is navigational.

All the stuff down at the bottom, this is navigational.

And by highlighting that, it makes it way more accessible because a huge part of interacting with a

web page is navigating the links, moving to other web pages, moving within the sections.

And if you're using a screen reader, that becomes hard unless you identify what is navigational content.

So we could quickly add a NAV down here in the footer if we wanted to.

That just had a couple of links, maybe a ul with an ly with an anchor tag that goes to HTTP colon slash

w w w dot google.com.

And this will just say Google, Google, Google.

Sure.

It's just three links to Google.

The content isn't going to matter for us, but we have called it out as navigational content contained

within this chunk.


I'll show you aside.

This represents a portion of a document whose content is only indirectly related to the documents.

Main content.

They're frequently presented as sidebars or call outs.

So an example would be this here.

If we've got a whole article about salamanders, and then there's a little aside about the rough skinned

Newt by calling that out.

Using the side element, we have said something about the content of this element.

It contains an aside to the main content of the document, and then there's others that are more specific,

like time.

Time is an inline element that you can wrap around.

Instead of using a span, you can wrap it around any time information on a page.

It can represent a 24 hour clock, a date.

So it's date or time and it's not going to look any different here.

They've bolded it.

You can see here.

I'll turn that off, though.

Oops.

And now you can't tell that there's a time element here.

But this can be very useful, mostly for SEO purposes for Google.

If you have this concert listing that Google is coming across, it's able to figure out this is a date

here July 7th, and you can actually provide an attribute saying exactly what the date is.

And then Google will understand when this concert is.

So by calling that out as a time and providing the time, we've added a lot of meaning.

So we don't really need to do this ourselves in an example.

But I think it's important to know that all of these elements exist.

So there's article and details and figure and all these other ones.

We're not going to go into detail, but it's good for you to know that they exist.

But at the end of the day, the main takeaway of this section is that there is such a thing as semantic

markup, and it's important that you try to add as much meaning as possible to the markup itself as

you write the markup.

So don't use a million spans and divs if you can avoid it, that doesn't mean don't use them at all.

But always ask yourself if there's a more meaningful element you could use in place of a div or in place

of a span.

And this again is important for accessibility purposes for SEO and search engines, and then also for

your own sanity and other developers looking at your code.

If you call out something as a main or a header or a footer or a nav, it just makes more sense to everyone

involved.