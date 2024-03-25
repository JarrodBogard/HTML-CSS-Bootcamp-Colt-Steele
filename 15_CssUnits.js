// Lesson 122. Absolute Units: Pixels, Centimeters, and More!

We're talking about CSS units, different ways of specifying lengths.

So I'm not going to show you any new properties.

Instead, it's all about the values that we can use when we set a property.

But the point is we've seen some different units that we can use to specify lengths, and there are

lots and lots of properties that expect us to provide a length if you go to pretty much any property

on Mozilla developer network, like if you remember Tex Jato, we saw how to make Tex Shadow.

If you don't remember how to do it, it's okay.

But there are certain values it expects.

It wants to know what color, what color is the text shadow, but then also the offset for the X and

the Y and then potentially a blur radius.

But if you keep scrolling down, it will tell you exactly what those values can and cannot be.

So it expects a color value to specify the color.

And there are certain types of color values.

We've seen them rugby, hexadecimal, rugby A and so on.

We have named Colors.

This page explains all the different valid ways of specifying a color.

But then we have things like the size of the blur radius and it will tell you this is a length.

So let's click that link for length and it tells us CSS data type length represents a distance.

Value lengths can be used in a whole bunch of different properties with height, margin, blah, blah,

blah.

And then it will tell us the different ways we can specify lengths.

And there are lots of units, but they all follow a pattern.

We'll have some number followed by one of the units that's listed below.

So we're going to see a whole bunch of different units, but we've already seen things like ten pixels

or 10% or even ten.

VH But we'll see ten M's or Rams, and I'm using ten as the example.

But this can be any number followed by one of the units, and they all have different meanings.


So back to this slide, there are many types of units, but there's really two categories of those units.

There are relative and absolute units.

Relative units are going to specify a length relative to some other value.

So things like a percentage, if I say that the width of a box, it's 50%, well, that is 50% of the

parent's width, right?

So it's relative to something else.

Same thing with VH and VW, Those are relative to the size of the viewport.

M's and Rams is a little bit different, but they're still relative units.

We'll get there.

But then we have absolute units like pixels, which are not relative to anything.

If I say something is ten pixels, it's supposed to be ten pixels.

It doesn't matter how big the parent element is or how big the viewport is.

So there are many other absolute units that are pretty unused in my experience, things like centimeters

and inches and millimeters.

We have a weird unit called Q Let me just show you real quick.

This is the documentation for the CSS specification.

This is a big documentation or a big document that says exactly how CSS is supposed to work.

It is the standard for CSS.

And in here there's a section about absolute lengths and we can see things like pixels, but then also

Q quarter millimetres inches pikas or pikas point centimeters, millimeters, all different absolute

units and they all have some equivalents on the right side.

That's supposed to explain the formula, right?

That one Q is supposed to be 1/40 of one centimeter and one centimeter is supposed to be 96 pixels divided

by 2.56.

Why 96 pixels?

Well, if we look at what an inch is supposed to be defined as, it's supposed to be 96 pixels.

And if we look at pixels, it's supposed to be defined as 1/96 of an inch.

And this is the most confusing part about these absolute units especially.

The pixel.

You might think if I make something one pixel by one pixel, it should be exactly the size of a pixel

on my machine.

But there is a huge difference.

There's a separation between the physical hardware pixel on my computer, on my display.

Right.

The little tiny pixels all over the place that make up my display.

There's a distinction between that and the actual CSS unit called or pixel.

They are not the same.

If I make some box in here, I have a new HTML document.

It has a single div with a class of box.

If I select that box and I give it a background color of purple maybe and then I give it a height of

ten pixels and a width of ten pixels.

Where are you?

There it is.

Let me move it over a bit with just some margin.

Let's do like 200 pixels on all sides.

Margin 200 pixels.

OC.

This box right here is ten CSS pixels by ten CSS pixels, but it is not ten physical pixels on my display.

In other words, if I made this one by one, it is not one It's hard to find.

But somewhere there it is.

Maybe you can see that in the video, depending on how compressed it gets.

That is not one pixel on my display.

Originally, maybe it could have been on an older display where there were a much lower density of pixels.

But in today's world, pixel density continues to go up as this chart shows here.

This is on a Mozilla blog post.

I'll include a link to it.

It talks about CSS links and how they are arrived at, but it makes it very clear that pixel density

goes up.

So the size of a pixel is basically goes down over time and has gone down and that instead of trying

to tie a CSS pixel to a physical pixel, the approach instead is to tie it to a rough length of 1/96

of an inch.

They're supposed to be 96 pixels, six pixels in an inch, but that isn't guaranteed in any way.

It also depends on viewing distance.


But this blog post does explain a lot about what a CSS pixel is and what it means, but this is probably

the most important part.

A CSS pixel will be displayed in different physical dimensions, but it will always be displayed in

the correct size in which the viewer will find comfortable.

By leveraging this principle, we can safely set the basic dimensions to a fixed pixel size independent

of device form factors.

Basically, it's saying a pixel is not one actual device pixel, it's a separate unit of measurement

and that's fine.

So please don't worry about it too much.

I just need to make that clear that a pixel is not a physical pixel, but it is an absolute unit of

measurement.

So if I make this box, let's do 20 pixels by 20 pixels.

There it is.

That is an absolute size.

It will always be whatever that size is, at least within this window.

Now, it could be a different size on your computer.

It could be a different size, of course, if I'm zoomed in.

But if I have two of these boxes.

Here they are.

They are going to have the exact same measurements, the same size.

Nothing is relative to anything else here.

It's all pixels.

It is a hard coded number, 20 pixels by 20 pixels.

By the way margin.

I'm using pixels too.

That spacing is always going to be ten times whatever this is, right?

Because I'm using an absolute unit 200 versus 20.

It's ten times bigger.

Anyway, that's all we need to know about pixels.

We use them all the time.

They are great to specify certain types of measurements, but there's a big drawback with them, which

is that they don't scale, they're not responsive, unlike some of the other units I'm about to show

you.

So pixels have a place, but we probably won't be using them as much as we have going forward because

soon we're going to have a whole bunch of other units at our disposal.

Now I do want to quickly touch on point and centimeter an inch and millimeter.

You can use those in place of any of these units.

So any time we have a length instead of doing 20 pixels, I could say 20 centimeters by 20 centimeters,

although that might be a lot bigger than I actually want.

This is not linked to 20 centimeters in the real world.

If you got a ruler out, it's not going to measure probably won't measure 20 centimeters.

It's not guaranteed to measure that.

It is all based upon the size of the pixel.

Remember, we go back to the docs here or the specification for CSS.

A centimeter is supposed to be 96 pixels divided by 2.54.

Right?

It's based off of an inch, which is 96 pixels converting inch to centimeter.

So all of these sizes are based around pixels.

At the end of the day, they are not based on a real world centimeter or a real world inch or anything

like that.

So we have other units like point, we have Q Very weird units like Pica or Pica.

I don't know how you pronounce it, never used those really.

Some of these come up with print, making newspapers or making articles to be printed out, but still

not that common out of this entire list.

Pixels is really the only one that I would expect you to use day to day and soon we're going to add

// Lesson 123. Working With Percentages

summary: percentages are always relative to some other value
sometimes, it's a value from the parent and other times it's a value from the element itself.

width: 50% - half the width of the parent
line-height: 50% - half the font-size of the element itself


But basically percentages are a relative unit, right?

They're always relative to some other value.

It's intrinsic in the whole concept of something being a percent, it's a percentage of some other value.

The thing is that it's not always the same other value that the percentage is based on.

For example, if we talk about something like width, if I set width of a div to be 50%, that is saying

50% of the width of its parent element.


Olive best color there is, as you know, and a width of a 50%.

And I don't know why I enunciated that so much, but a height of 50%.

All right.

We have both of those.

This value is relative to the parents element.

So in this case, it's the container, the width of that element, or in the case of height, it's relative

to the height of that element.


But as I said, that's not always how it works for other properties.

When I use a percentage, that percentage might be relative to some other value.

For example, the property line height.

If I say line height is 50% on a piece of text, that means it's supposed to be half 50%, the font

size of the actual element itself.

Now it might be confusing to remember how this all works, but that's where the documentation comes

in.

If I look at something like line height, here's the MD on page for line height, it explains how it

works and it shows you can use a percentage, right?

It says right here you can specify a number, a length, a percentage, or this keyword called normal.

But if we scroll down to percentage, it tells us percentage is relative to the font size of the element

itself.


So again, just an example of how percentages change what they're relative to based on the exact property

that you're specifying.

Something like margin.

If I look at margin, scroll down, it will tell me, yep, you can use a percentage the size of the

margin as a percentage relative to the width of the containing block.

That's a fancy way of saying the width of the parent.



So again, just an example of how percentages change what they're relative to based on the exact property

that you're specifying.

Something like margin.

If I look at margin, scroll down, it will tell me, yep, you can use a percentage the size of the

margin as a percentage relative to the width of the containing block.

That's a fancy way of saying the width of the parent.

So there we are.

Right?

It behaves differently from one property to the next.

I would say most of the time though, I'm using percentages to specify widths and heights, maybe sometimes

margin and padding.

But as we'll see in just a bit, we have other units that work better when we're working with font sizes

that I think work better.

So that's it for percentages, right?

It's a relative value relative to some other value.

But what that other value is changes depending on the property.

That can seem confusing.

A lot of the time it's the height or the width of a parent element, but it's not guaranteed to be.

Sometimes it's a font size.

If the element itself you can always find out by looking at the docs.

// Lesson 124. The Joy of Rem Units

summary: relative to the root html elements font-size. often easier to work with. If the root font-size is 20px, 1 rem is always 20px, 2rem is always 40px, etc


Rams r relative to the root HTML elements, font size.

So every page that you load up is going to have a default font size for the root element.

And the root element means if I inspect here the HTML element itself.

Now, sometimes I might set that myself, although usually it's best to rely on the default browser

size and in most browsers that is 16 pixels, but a user can change it.

And that part is important because if we set something relative to that font size and then a user changes

it, let's say a user wants a larger page or a smaller font size, everything will scale down or scale

up.

So again, there's some default font size that starts usually at 16, 16 pixels for the root element.

And then any time I specify a value using REMS, it's relative to that root font size.

So if the root font size was 20 pixels, one ram is always 20 pixels, two REM is always 40 pixels.

But if a user changes what the default root font size is to 40 pixels, then everything scales up or

scales down.


So if I use REMS to set the size of this H one, this H two and this paragraph, they will be set according

to the size of that root element's font size.


So if I say all h ones now have a font size of let's say eight rems, that will be eight times whatever

the root element's font size is eight times 16 in my case, and we get a pretty large heading.


And then that relationship is set in stone, but the corresponding font sizes could scale up and down

as a user.

Tweaks their preferences.


But again, I'm not writing it in such a way that I care about exactly how many pixels this is.

I'm instead setting a relationship.

I'm setting a size for each element based on the root element size.

And then if a user goes and changes their preferences, if I go to my settings in Chrome, I'll zoom


So it scales up and down as a user changes that root element font size.

Now they're not writing CSS to do that.

They're writing or they're changing a setting in their browser, but it makes a web page way more accessible

or responsive.


The pixels down here stay exactly the same.

They still stay 96.

64 and 32.

But the ones that I used REMS for scale because the root element font size is changing, these actual

computed sizes will change along with that route element.

So whatever that routes font size is, this is six times it, this is four times, this is two times.

And it goes all directions, right?

Very small.

My pixel units, they're still pixels.

They haven't scaled at all.

But these guys have because I used REMS.


But that's the main concept.

Everything we specify using Rams is relative to the route HTML elements.

Font size one RAM is exactly one time.

The route elements font size two Rams is two times that font size and that font size can be adjusted

by a user.

And if a user does change those settings, as we've already seen, our text will scale.

And that's generally a good thing, right?

We want our text to grow in scale or shrink in accordance to a user's preferences.

// Lesson 125. Understanding The Em Unit

with font-size, 1em quals the font-size of the parent. 2em's is twice the font-size of the parent, etc.

with other properties, 1em is equal to the computed font-size of the element itself


Now, M's are relative units.

Just a quick side note before we go any further.

About the name M comes from the typography world where it's based initially not necessarily in CSS,

but on the width of a capital.

I think it's a capital letter M so that's why it's pronounced M instead of M It doesn't really matter

though.

So how exactly does it work?

Well, let's talk about font size first.

When we set the font size to be one.

MB that's saying that it's equal to the font size of its parent element.

So it's not relative to the root like a root M it's relative to whatever the parent element is.

So two M's would be twice the font size of the parent element.

So big difference to REMS is twice the font size of the root element.

So everything on the page, if you set it to two REMS, they're going to be the same size.

That's not necessarily true if you do two M's and I'll show an example of that.


So that's the simplest explanation for EMS.

If you set a font size using M's, that will be relative to the parent's font size.

If I change this to be ten the parent font size, then everything shrinks.

If I change it to be 30, everything grows.

So this does allow me to set scalable text, right?

Where if this is 30 pixels, this is four times that, this is 1.5 times it.

If I change this size, then this font size and this font size will change.

But it's based off of a parent child relationship, whereas Roots M's are based off of the root HTML

elements, font size.

And that has an important distinction.

When I use EMS, it depends on their position and their parent child relationships in the document.


But there's more to EMS.

If we set other properties that are not font size, then the definition changes in that case.

One MB is equal to the actual computed font size of the element itself.

So for everything that is not font size, one MB is relative to the font size of the element.

And you can see that here on the specification for CSS again and the standard, it says an MB unit is

equal to the computed value of font size for the element on which it is used.

So if I set line height to be 1.2 MB, that is 1.2 times the font size of the element.


If I use M's and I do margin left, for example, and I set that to be one M, this is where it gets

kind of confusing.

One M is going to be the font size of the element itself, but the font size here is set to four M's

and that is going to be based off of the parent's font size times four.

Long story short, whatever this number ends up being, at the end of the day it will be computed,

right?

This is a relative unit.

It will be turned into a hard number, a real number that is not relative.

And then margin left will be set to one times that.

And there we are.

As you can see, I have margin left.

If I go to computed, it's exactly 120 pixels and that happens to be the computed font size for that

element.

So if I did 1.5 M's is 1.5 times the font size of that element.

So margin left ends up being 180 pixels.

And that's the most confusing part about M's, right?

It changes what its relative to depending on the property.

The good news is it's easy to remember there is only one property that behaves differently, which is

font size.

When you use M's to specify a length for any other property like margin or padding or something that

will be relative to the elements.

Actual computed font size.

It has nothing to do with the parent in that case.

And here I did set font size using M's and margin left using M's.

I don't have to.

If I set this to be 80 pixels, this will be 1.5 times 80 pixels and we see that it's set to 120.

That's 1.5 times 80.


M's are relative to the parent element's font size, at least when we're setting the font size, whereas

Route M's are relative to the root HTML elements.

Font size, it doesn't matter what the parent element is, it's always relative to that top level root

element.

// Lesson 126. Vw and Vh Units

1vw is 1% of the width of the viewport
1vh is 1% of the hieght of the viewport
e.g. height: 100vh would make an element take up the full height on the screen

We've seen one of them, v h, but we also have v w, and both of these are relative units that have

to do with the size of the viewport.

So what exactly is the viewport?

Basically, it is the visible area in your browser window.

So on this page, the viewport extends all the way from right up there, all the way down to the bottom

right corner.

But let's say I open the developer tools.

Well, now the viewport is this right here.

Or if I change the size of a browser window, like, Oh, this is full screen, so I can't change it.

Hang on, here we go.

This is now the viewport.

So it's not the size of the entire screen itself, right?

My screen is much larger than the viewport.

It's the size of the visible part of the browser window.

So VW and v H, which are for viewport width and viewport height, allow us to specify proportions based

upon the width of the viewport and the height of the viewport.

We typically use these for larger layout concerns, so not like a font size or something or padding

or margin typically, but more like I want to make something take up 50% of the visible area or 100%

of the visible area.

Except instead of using percentages, we use VW and v h.

And if we just quickly look at the CSS standard, once again you'll see VW is 1% of a viewport width.

Of course, you could have two, three, four, five, but just a single one is 1% of the view ports

width and then v h is for height.


So a div with the class of container and I'm going to select that container and give it a background

color of magenta.

And then I'll set a hard width of like 500 pixels to start and height of 500 pixels as well.

And refresh, there we are.

Here's our beautiful purple or magenta div.

Now if I want to make this go all the way across the screen, I could do something like width is 100%

and in the case of width a percentage is relative to the parents width, right?

So it does go all the way across the screen.

But what about if I want it to be as high as the screen, as as much as you can possibly fit into this

space without making me scroll, if I set it to be 100%, well, that work.

No, because the body itself, the parent element, doesn't really have a height.

It would work.

If I had set a height on the body.

I could say the body now has a height of 800 pixels, for example.

And now my div, the container has 100% of that height.

But still I'm having to pick a number.

And guess what do I set that to?

What if I set the body to be a 100% tall, 100% of what?

It's relative to the height of the parent and there is no height there.

So this isn't really going to work with is a different story as we saw.

But if I want something to take up 100% of the visible area vertically or horizontally and I'm just

starting with 100%, we can also do less.

That's where VW and VH comes in.

So if I set the height here to be 100 VH, that means 100% of the viewport height.

There we are.

It's exactly the height of the viewport.

Now there's a little bit of margin or padding on the body, it looks like.

So if I inspect.

And look at the body.

Yeah, there's a little bit of margin, so I'm going to get rid of that.

If I set margin to be zero on the body, which you don't have to do.

But just to make this more obvious, how it's working, I am going to get rid of all margin.

And there we go.

Now, I can't scroll the page.

There is no content to see beyond this purple.

It is exactly the height of my viewport.


You'll see now that this first one takes up 100% of the viewport height.

And I scroll down and the second one is 100% of that viewport height as well.

So I've made almost like two little pages and it really is 100% of that height.

So if I change the height here, you can see now it is smaller.

The height has changed, the viewport size has changed, but it still is 100% of that viewport, 100%

cyan, 100% magenta, and the same goes for width.

So if I wanted to set the width instead of just all the way across, I could say 100 VW.

And this is different in meaning than saying 100%, 100% means 100% of the parents with this means 100

of the viewport width, 100% of the viewport.

So that could be different if the parent element was smaller or it had a size that is not all the way

across the viewport, then we'd get a different result.

But here you can see it's exactly the same.

And I could change that to be something else.

Like know I want this to be 80% or 50% of the viewport width.

Now my cyan goes 50% across the screen.

Again, I'm saying percentages because it is 50% of the viewport size, but it's not the same as me

saying 50% width -> 50% viewport width/height is different than 50% width (of parent element)

i.e. using vw and vh decouple the width and height of the respective container from any parent element and simply refer to the viewport for their respective sizing


I use them pretty frequently to accomplish basically what you're seeing here, something that takes

up the full height of the viewport.

And just to show one more time, I'm going to totally resize this.

This purple box magenta, rather, is 100% of the viewport height.

The viewport is quite small here, 100% of the viewport height, 50% of the viewport width.

In this case, it scales as my viewport changes.

So we'll talk more about when to use those.

I mean, you could use them for a font size or margin, but usually it's used for setting things like

width and height and doing layouts.

// Lesson 127. Which Units Should You Use?

So generally I recommend avoiding pixels for font sizes.

You definitely can use them, but as we saw, they don't scale.

They're not responsive.

If a user changes their browser, font size pixels don't change, but sometimes you want unchanging

or absolute units for things like borders.

If you want a very small border, one pixel border, an underline using border bottom shadows, there

are definitely places for pixels.

Anytime you really need small adjustments that you don't really care about scaling very much.

Then we have REMS and EMS.

I use those for font sizes all the time.

I tend to prefer REMS because they're easier to work with.

In my experience, both of them are going to scale, right?

They're both.

They can be responsive.

But what's nice about REMS is that it's just easier to keep things size relative to one another.

In my experience, I can make an H 110 REMS or that's kind of extreme, but, you know, eight REMS

and then an H, two six REMS, and then an H and so on.

Keep coming down and make paragraphs one REM or two rams or 1.5 and they'll all scale in unison up or

down.

I don't really have to worry about what the parent element is.

With that said, there are times that M's are nice as well.

When you do care about something relative to its own font size or to its parent's font size.

But all that I'll say for now is that both of them are better than pixels.

And then we have percentages.

I generally use those for things like layouts and widths or heights, not so much for font sizes or

sometimes padding in margin if I need to split some space, maybe.

But when we get to things like Flexbox and Grid, we'll have a lot more flexibility there.

So all of that, I'll say, is that percentages are useful, right?

They come up.

We've seen them before.

If I want to make something half the width of its parent, well, I'm going to use a percentage.

Generally, though, it's for setting widths and heights and basic layout stuff.

And then we have VH and VW, which I use for larger layout concerns, pretty much only if I want something

to take up the full width of the viewport or make an overlay that's covers everything a user can see.

Maybe sometimes I'll do something smaller 50 or VW, but a lot of the time when I use it, I'm just

maxing it out 100 V 100 VW to make something full screen or full viewport.

So that's the basic breakdown.

Again, these are not hard rules.

You'll see people use pixels everywhere.

You might see people use percentages for fonts.

Even there's they're all valid.

Technically, they're all units that we can use to specify a length.

But again, there are basic conventions I like to follow.

And from here on out, we'll try to stick to most of them.

summary: pixels(px) - avoid for font-sizes. I use px for small details like borders, shadows, etc.

rem/em - my go to choice for font-sizes and often padding/margin

percentages (%) - useful for defining layouts and widths 

vh/vw - used for larger layout concerns

// Lesson 128. Working With Floats

float tells an element to position itself in the left or right side of its container. it gets removed from the normal document flow, which allows text and inline elements to wrap around it


Float originally was created to facilitate common layouts.

You might see in newspaper articles where you have an image and then text flowing around it.

Right?

The text is respecting the bound to this image, but then also flowing underneath it.

Or here's a different example where it's on the other side.

This is really the intended purpose of float.

There's a whole article on Mozilla developer network about this that it was originally for floating

images inside blocks of text.

But then something weird happened, which is that it started to be used for many other purposes that

have to do with creating layouts.

Before we had modern tools like Flexbox and CSS grid, it was pretty difficult to create layouts on

a web page to move content over here and over here and have other content in the middle and have nav

bars and all this stuff sharing space.

It was not easy to do.

So people would use float to accomplish this.

However, with the advent of these new tools like Grid and Flexbox, we don't really use float or we

shouldn't use float as much for creating layouts, and instead we should use it for its original intended

purpose to float images or other things inside blocks of text.

example: I've got an image and I've got text.

The default value for float is none.

So if I set float to none on the image, nothing changes.

That's the default.

My image is first, then I have the text.

It is not flowing around it, right?

It's not sharing the space.

That's just how things work by default.

But if I set float to be left, this image is taken out of the normal flow of the document and instead

it's pushed to the left of the container.

And then the content that remains in here flows around it.

As you can see right here.

And we have the opposite.

If I set float to right, the image will be removed from its normal place.

Normal flow of the document pushed over to the right side of the container and then the text content

will flow around it.

But now what happens if I do things like try to apply a margin to this image?

What if I want to do margin?

Top 100 pixels.

Well, it seems to be working.

What about margin?

Right?

100 pixels also seems to be working.

Och, well, that's good to know.

But now what about the paragraph?

What if I give the paragraph a margin left of 100 pixels?

Hmm.

Take a look at what happens.

That margin is respected on the left edge of the paragraph element, but anywhere where it meets with

the floated element, it's not being respected.

And that's because when we float something, it's taken out of the flow of the document.

It has special rules.

It's floating on its own above.

It's not necessarily actually above everything, but it's floating on its own.

And so margin, the forcefield between an element and other elements won't apply, but it does apply

if I add the margin to the floated element itself. -> applying margin to the floated element works. trying to apply margin to the element wrapping around the floated image will not work where it is touch the floated element.


So to summarize, when we set Float to write on an element, that element will be glued or attached

to the right side of its parent container and other content.

Text content will flow around that element, right?

So it goes up to the bound to that element and then wraps over.

But then once it gets below that element, then it goes full width like it normally would.

And then we have the same thing for left right.

If we float to the left, our element is attached to the left side of its container and then the content

flows around it.

And then the one gotcha is that margin and padding applied to the element that's floated will apply.

But if I try and apply margin to this paragraph or to this text content here, it will not have an effect.

I have to apply the margin to the floated element itself.