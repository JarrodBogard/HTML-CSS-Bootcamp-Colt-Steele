// Lesson 79. Introducing The Box Model

Another very important concept, which is the box model.

Now we have more stuff to cover with selectors specificity, the Cascade inheritance.

Some of that can get a little dry.

So we're going to look at the box model in the meantime and then come back for part two of the nitty

gritty details.

It's all important, including the box model.

But I just want to give you the lay of the land, I guess.

So the box model is a concept that every single element in the browser is a box, and we can control

different properties of each box.

We've seen some of it in action already.

We've added borders to elements.

We have done a tiny bit with margin in that one project, the little mini project Cantilever.

We used margin to move things around a tad, but the general properties are width and height padding,

border and margin.

We're going to learn all about those and a few other properties as well.

In this section they all have to do with boxes.

Every element is a box and we can change parts of that box. -> width, height, margin, padding, borders



And this matters a lot because if everything is a box and these are the properties we use to change

boxes, then we're going to be using these properties a lot, and we'll take time to cover each one

in detail.

But let's just start with an overview of how they work together.

So every element has generally has some content and has what we call the content box.

So an easy example would be right here.

This h1i assume it is that content box is in blue and we can control that size using width and height.

We'll see this in the next video.

Then outside of the content, the obvious thing that we know about is the border.

The border is something that goes around the edge of the box.

We can set the thickness, the color, the style.

We can only have a border on the top or the right, but the border is outside the content box.

What maybe it's not as obvious is that we can add padding between the content and the border.

So we're going to see all of this in the next video.

But let me just show you, if I add a border to pixels solid red to our H one, there's our border.

But I can add in this thing called padding, and I'll set it to be 100 pixels just as an example.

And now when I hover over this element, you'll see we have a blue box that shows us the content box

that was always there.

We have the border, which is that little red line there.

When I hover, it turns sort of orange, but now we have space in between and that is what padding is.

It's kind of like if you've ever gotten a picture framed, which is always incredibly expensive, there's

the actual picture itself, there's the frame that you've paid for or whatever.

You picked out a wooden frame, and then there's usually a mat that could be a couple of inches, even

on big prints between the photo and the actual frame.

Now, if you have never gotten a picture framed, don't worry, it doesn't matter.

But that's the key concept here.

We have the content box.

We can control that the width and the height.

We can control the border if it shows up.

If it doesn't show up, what color, what size?

All that, but also the space in between those two things.

Padding goes on the inside of an element.

And then we have the final property we're going to learn about, which is margin.

And margin is outside the border.

It's like a force field around the element.

We can control that spacing.

How many pixels is there between this border and the thing next to it or the edge of the page, for

example?



I just wanted to make it clear that we've got a lot of boxes on the Web page.

Even things that don't look like boxes are represented as boxes behind the scenes.

And we can control different properties the size of the content box itself, the border, the padding

and the margin, which is the force field around an element.

It's how much space there is between the element and whatever is next to it.

// Lesson 80. Working With Borders

There are multiple properties that we use to control the border of an element, and we've already seen

some borders.

I've used it here and there as a way to illustrate selectors, but we're going to dive deeper into how

it works.

So there are three main things we control with a border the color, the width.

Is it skinny?

Is it fats?

And then the style.

So the border style could be no border, it could be dotted, it could be inset.

It's usually well, I shouldn't say usually, but a lot of the time it's solid.

We have a bunch of different options, as you can see listed here, dotted dash, solid double Groove

Ridge inset outset.

And then what's even more complicated is that we can supply different values for color and style and

width for the top, the bottom, the left and the right.


can put any color you want in there

as long as it's a valid color.

I'm using names, but of course you can use hex, you can use RGV colors, anything and border width

for now is just always going to be some pixel value and it usually is always a pixel value.

But just to show you, we don't know what REMS are, but I can set it to be one REM and that's what

it looks like.

Zero point I don't know.

Two REMS looks like that.

So we can have other units in there, but we're going to stick with pixels for now.


Honestly, most of the time I just use solid and that's what you'll see all over the place.

And in today's world, most of the time you see very thin borders that are very light.

You don't get these big blocky chunky borders like what I'm showing you right now.

Technically, each one of these properties is a shorthand because we have four different sides we're

setting at once.

So this means I could let's focus on color.

I could have a border left color, border right color, border, top color, Border, bottom color.

And if I want to do that, I can do border and then top color.

And that was done using border top color, Right color, bottom color and left color.

We have the same for variants for width.

So we can have border left with border top with right, left, bottom.

And same thing for style.

So I could have a different style just on the bottom border.

Bottom style will be dotted.

Of course, I used yellow and it's very hard to see, but it is dotted right there, but only on the

bottom.

So we have all these individual properties, but we also have the overall border shorthand, which is

just called border.

We've actually used it a few times already and this allows us to set the width, the style and the color

all in one go.

And just like most of the shorthands we've seen, there are different ways, different sin taxes, where

you could do only a width in a style, only a style, and then a color, or most often a width, a style

and a color.


The one other thing that I'll show you this gets kind of overwhelming is that we even have separate

shorthands just for the bottom, the top and the left and the right.

So if I only want to have a border on the bottom, but I want to set the color, the width and the style,

I can do border dash bottom and then provide, let's say, three pixel dashed magenta.

And this will add that border only to the bottom.

But I don't have to use three separate properties.

I don't have to say border, bottom color, border bottom with border, bottom style.

// Lesson 81. Width, Height, and Percentages

the box are All right, so how do we change

the size of this box?

We use the width and height properties, so let's start with


All right, So we have our border, and I want to change the width of the content box inside.

I just use the width property and then I provide a measurement, a length.

We only know pixels for now, so we'll stick with pixels.

Let's make it 500 pixels wide and you'll see that this box is smaller, right?

If I when I inspect it now and I hover, you can see that blue box is only going to extend 500 pixels.

And if you're not sure how many pixels that actually is in the devtools, if you go to computed when

you have an element selected, we can see right here, see if I can make this larger.

The size of the content box, the computed size is 500 pixels wide by 36.8.

Hi.

Now, I didn't set that.

That's just based off of the text, but we can control that as well.

And then the border is two pixels, so we see that as well, right?

It's two pixels.

That's what it's supposed to be.

So let's set the height.

Let's set height to be 60 pixels and now this elements box is higher, now the text is unchanged.

We can change that using font size.

We're simply changing the underlying box.

Now when I hover over the H one, I look at this computed tab.

It tells me this middle content box, the core little nut at the center of this box model is 500 by

60.

And then there's no padding.

We haven't covered that yet.

And there's a border of two pixels and that's it for width and height.

Now I'm going to show you another unit right now.

But as far as the properties go, width and height, they're very straightforward.

You have a box, every element has a box.

You set a width and height.

It controls that size of that inner box.

But that doesn't mean it's going to stretch the content that we see.

Like the text, for example, the text is still the same.

And one very important note is that so far I'm doing all of this with an H, one of what we call a block

level element.

So a div, a heading, a section, paragraph, those are all block level.

There are some quirks in the behavior of width and height and some of the properties I'm going to show

you when it comes to working with inline elements like a link or, or a span or something like that.

So if you try changing the width and height on other elements and you're surprised that it doesn't work

the way you thought it would, there's a reason we're going to cover that in just a couple of videos.

So I said I was going to show you another unit we can use.

We've seen it at least once in passing, which is the percentage unit.

So instead of hard coding a number of pixels, I can say that I want the element to be 50% or 30% of

its container.


And by default, it stretches all the way across the containing element, which in this case is this

container div.

So that's the behavior of block level elements.

They're going to stretch all the way across to fill whatever container they're in horizontally.


So if I put a percentage in here, like 50%, I use the percent sign.

This means that the width of this element or this selection should be 50% of its containing element

of its container.


So if this thing was a square, the container, if it was 400 by 400, well, then this will be a square

because it's 50% of the height and 50% of the width.

But if the dimensions are different on here, whatever, I change this to the box class elements will

always be 50% of that width and 50% of that height.

So these are relative units.

It's relative to the size of the container that they're in, and that's it for width and height.

We use them to set the width and the height of the inner content box.

And then we have the border on the outside of that.

// Lesson 82. Adding Padding to Elements

But the grouping here is all about padding.

Padding is the space that optionally can be added between the edge of the content box and the border

on an element.

And we can control padding separately for the top, the right, the bottom and the left, or do it all

together at the same time.

Because remember, padding is between the content and the border.


padding is displayed as green in chrome.

So margin, which we haven't covered is orange, padding is green, the content box itself is blue and

the border is like a yellowy orange color, but margin is a darker orange.


I'll just prove that we can use other units, even though we don't know other units yet.

Here's one REM on the bottom and we get some number of pixels there.

It turns out to be 16 pixels.

So this is always going to show me pixels here.

Even though I used a different unit, this is going to be resolved into a number of pixels.


So instead of setting all of them individually, which you can do, we also have a shorthand property

just called padding.

And the easiest way to use it is to provide a single value like 20 pixels that will apply 20 pixels

to the top right, left and bottom at the same time.


So that's the easiest way of using the padding shorthand.

This will apply ten pixels to the top, bottom left and right, but we can also control them individually.

If you go to the documentation, it explains the different options.

If you provide four values, it expects them to be in clockwise order.

So top and then right.

And then bottom and then left.


There's also another option to only specify two values, two links, and the first one will correspond

to the top and bottom padding.

And the second one is to the left and right padding.


There's even an option to use three values.

The first one will be for the top.

The second one is for the left and right, and the third one is for the bottom.

// Lesson 83. Working With Margins

The next piece of the box model will cover is margin.

So margin is the space is the force field outside the edge of the box outside the border.

So it's a space between an element and other elements.

And the syntax for it is very similar to padding in that we can set all four sides to have the same

margin.

Or we could set margin left and margin top and margin bottom to be one thing.

And then margin right can be something else.

We have the same sort of pattern for the properties.


So all of that space is outside the elements border and it is a force field around that element pushing

other content away.

Now our anchor tag is further down the page.

It doesn't have any margin if I inspect that, but it's pushed away by the H one margin.

It's a force field.


So this is the simple way of setting margin.

All four sides get the same value.

We also have individual properties like margin, top margin bottom.

And of course, we can set this to be something other than pixels.

You've heard it a million times so far in the course, but we only know pixels.


So if I want to set the bottom to be 89 pixels and then I want the other side to have zero, right now

that's not exactly what's happening because remember, there's default margin.

We're still getting this margin here, even though I didn't set that so I could say, all right, margin

zero everywhere except the bottom.

And now if we inspect, there's a lot of margin on the bottom and nowhere else.

And we also have margin top left and right to set each side individually.

Or we can use the shorthand property that I showed you first.

But instead of setting all values at once, we can provide for values just like with padding, and it

goes, it goes clockwise.

So let's do ten pixels on the top, 20 on the right, maybe 40 on the bottom and 80 on the left. -> remember default margin on some block elements


So margin and padding have the same pattern.

Provide two.

The first one is the top and bottom.

The second one is left and right provide for it goes clockwise around in a circle top, right, bottom

left, provide one value and it will be assigned to the mat, the padding or margin on all four sides.

And then if you prefer, we have the individual properties margin top left, right and bottom, just

like with padding.

All right.

So that's margin.

It is the space between an element the outside of that element's border and other elements.

// Lesson 84. The Alternate Box Model

There are two different ways of calculating the overall dimensions of an element.

So far, we've seen what we call the regular box model, the default box model.

When I set the width of an element to be 300 pixels and the height to be 200 pixels, that sets the

width and height of the content area itself.

But any padding and any border are in addition to that height.

So in this example, if I have a box that is 300 pixels wide, 200 pixels tall, but it has 20 pixels

of padding on all four sides and five pixels of border on all four sides, then the overall dimensions

would be 250 pixels tall, right?

200 plus 20 plus 20 plus five plus five gives us 250 and then the width is 350.

It started as 300, but we added 40 pixels of padding 20 and 20 and then ten pixels of border.

So the overall dimensions are not controlled by height and width only the inner content box is controlled

by height and width and that is fine.

That's how the default box model works.

But there is an alternate mode that we can change into if we set a special property called box Sizing

Equal to border box.

This now tells the browser, Hey, I'm using the alternate box model and when I set the width and the

height, I want that to be the actual width of the whole element border padding and content included.

So margin is different because margin is on the outside of the element anyway.

So that's not included in either of these examples.

But when we set width and height with border box for our box sizing, then the height and width control

the overall size of the entire box.

So if I said width is 300, height is 200, and I'm using this alternate box model, well, the actual

content inside that box or the content box will be 250 pixels by 150 because we set padding to be 20,

border to be five, and the browser figured out if you're going to have five for the border, you're

going to have 24 padding and the overall size has to be 300 by 200.

That means the inner content will be 150 by 250.

So it's shrinking this inner content as we add on border and padding so that it equals exactly the width

and the height for the entire element that we specified.

Once again, compare that to the regular box model.

Whatever we set for width and height only controls the inner content padding and border are in excess

of that. -> alternate box model -> with box-sizing set to border-box, the width and height now control the overall dimensions of the entire visible box (does not include margin).

regular box model does not account for the padding and border dimensions when setting width and height properties to the specified dimensions


But what I'm going to change now is for the alternate div, I'm going to select that ID.

And use this property that I showed you.

Box sizing and we're going to set it to border box.

And there's only two values, by the way.

Content box is the default.

That's what's happening with all of our divs until I specify explicitly border box.


This is the regular box model.

We see that it has 200 pixels of width and 200 pixels of height and then ten pixels of padding, five

pixels of border.

We don't care about margin for now, that's totally separate.

If we look at the alternate version, it has 170 by 174, it's width and height and then it has ten

pixels of of padding and five of border, meaning the overall dimensions are 200 by 200.

If you add this up, if we do the height 170 plus five plus ten plus ten plus five plus the border in

the padding, that's going to give us 200.

Same thing going the other direction.


So there's pros and cons to both approaches.

Border Box is in some ways more intuitive because you can say I want the whole element to always be

200 by 200 pixels.

And that means if I added a lot more border, let's just say to this one example, border is actually

now 50 pixels of solid green.

It's going to look horrible.

But if I do that, the box shape doesn't change.

It's still 200 by 200.

If I had added that border to both of them, we're going to get a much larger box up here.

Right.

It just adds the border on.

So this inner purple area, the inner content is still 200 by 200.

The padding is still ten on all sides.

The border, though, adds 50, 50, 50, 50.

So if you needed to know the overall size of an element, you would have to take the width, the height,

add the padding, add the border.

But when we use this alternate box model, we know that that whole element, everything all summed up

will be 200 by 200.

So there's pros and cons and we're going to use both throughout the course to get a chance on some projects

to use border box on other projects we won't.

For now, I just want you to know that there's a difference.

It's a pretty significant difference, as you can tell here.

These are identical in every way except box sizing is set to border box on the second div and it makes

a big impact. -> border box contains the size of the overall element to its width and height dimensions regardless of how much padding and border is added -> thus it will shrink the content size in order to make room for the padding and border dimensions. content box does the opposite it does not contain the overall size of the element to its width and height dimensions -> it says the width and height props as the content size and then adds the additional border and padding onto that content

// Lesson 85. The Display Property

block elements: breaks onto a new line, width and height are respected, padding, margin, and border cause other elements to be pushed away from the box, 
the box extends in the inline direction to fill available space in the container (unless styled otherwise)

inline elements: box does not break onto a new line, width and height do not apply,
vertical padding, margin, and borders apply but do not cause other inline elements to move away from the box, 
horizontal padding, margin, and border will apply and cause other boxes to move away.

inline-block elements: hybrid of inline and block, 
box does not break onto a new line,
width and height are respected,
padding, margin, and border will cause other elements to be pushed away from the box

Next up, we're going to talk about a very important property called display.

But first, I'm going to try and motivate why we're covering it with an example.

So I'm going to get rid of all my styles and I'm going to get rid of the two divs that I have in here.

I'm just going to make a paragraph with some Lorem ipsum.

I'll type Lorem and hit tab and then around one of these words, How about right there?

I'll just make a span.

OC.

So I have this span there.

Let's give it an idea of word.

And I'm going to give everything some styles, the paragraph.

Maybe I'll make a bit larger 30 pixel font size, and then I'll select word and give that maybe a border

one pixel solid teal.

And there is our beautiful span there.

Now, I'm actually going to modify this slightly.

I'm going to put some more text on top of it and you'll see why in a moment.

So I'm just going to type Lorem again, you could just type gibberish, but I want to have text above

and below this word, whatever that word is.

So this is an element, right?

It's a span element.

And that means that it's a box behind the scenes.

We've already seen that.

When I draw the border there it is a box around those words.

So I can do things like change the border size and let's see what happens If I make the border ten pixels

wide.

No problem.

It gets wider.

Now you'll see here it overlaps with this eye.

So it's not pushing this away, is it?

What if I add padding?

What if I do padding 20 pixels on all sides?

Well, it does get the padding added, but our content on the other lines is still exactly where it

would be otherwise.

It's not pushed away, so padding will apply to this example, but it works slightly different than

what we may have seen before.

And the most different one would be margin.

What if I add 30 pixels of margin to all four sides?

We can see that we get margin on the left side, we get margin on the right side.

But on the top and the bottom, it's not doing anything.

Margin in the previous video or a couple of videos ago was pushing everything away like a force field.

Why is it not pushing the words away like a force field when I hover over this?

We look at the margin in the devtools.

It's only on the left and the right that it's taking effect.

This has to do with the fact that a span is an inline element, right?

It fits right in line with our other content.

It doesn't take up a whole block compared to something like if I have an H one in here.

Which we've already seen.

Hello.

I am h one.

I'll just style all h ones.

And I'll just copy the same styles I gave to my word span.

Okay, So we have the border, we have this padding and we have the margin, which is pushing the H

one away from the top of the page and from the left and from the right and from the other content below

it.

That did not happen over here.

So this is the illustration of what I want to cover in this video, which is the display property.

These two elements are different, of course, they're different ones in H one when it's a span, but

they also have a different initial value for the display property.

So the display property can be quite complicated.

If you look at the documentation, you'll see a whole bunch of different options for what we can set

it to.

In this video, we're going to look at three and only three options.

The three most common.

But before that, let's just talk about what it does according to MDM.

It says the display property sets whether an element is treated as a block or inline element.

There's a second piece.

We're going to learn about this later where we can use the display property to change the behavior on

the inside of an element to make it a grid or flex container.

But we're not talking about that yet.

Those come much later in the course.

There are very big topics.

All we care about for now are the values that we can use to change the behavior of the element itself

and how it's treated in relation to other elements around it.

So we can use the display property to make this span be treated like a heading in the sense that it

takes up a whole block.

That margin actually works.

Or we could make an H one behave like an inline element, like a span where margin doesn't really work,

at least not vertically.

So let's talk about the differences.

First of all, block elements will break onto a new line.

So a heading, a paragraph, they always take up the entire width of the screen by default or the entire

width of their container.

You can change that, of course, with width, but by default, they break onto a new line.

You can set the width in the height.

They are both respected padding margin and border will push other things away from the box.

And as I already said, the box extends in the inline direction.

Basically, for now, that just means horizontally to fill up all the space it can horizontally unless

we say otherwise.

So I didn't even show what happens with width and height.

But if we set a height on an H one, we know what happens, right?

If I set that to be 300 pixels, it takes up 300 pixels if I do the same thing on the span.

Nothing happens.

I'm refreshing.

It is not taking up 300 pixels, and that's because it's an inline element.

And inline is different than block.

So inline elements do not break onto a new line.

They fit right in line.

Width and height will not apply.

So I just set that height of 300 pixels.

It did not work.

I set the width.

It's not going to work.

Additionally, vertical padding margin and borders will apply, but they're not going to move things

away.

They don't act as a force field.

Horizontal padding, margin and border do apply and they cause other boxes to move away.

And we've already seen this, right?

I added margin and will I added padding and margin and border, but only in the horizontal direction

is anything being pushed away.

That's where the force field is acting vertically.

The top and the bottom, they just overlap other content so they can apply, right?

The padding works.

We have space in here, but it is not pushing stuff away like it would with an H one or other block

elements.

And now what I'm going to show you is that we can change how they work.

So I can take this h one and say, actually your display property is now set to inline.

You are an inline element and all of a sudden let me just show you if I go back to having height set

to 300.

It's not set to 300 as I refresh.

It is not 300 pixels tall.

Margin is not working in the vertical direction.

It is working from left to right, but not vertically.

And if I have other content, for example, how about just an anchor tag right afterwards?

I am a link.

It fits right in line.

This one doesn't take up a whole block.

It's not pushing anything around.

But of course, the default behavior is that an H one is a block element and it will push stuff around.

But we can change that like we just did by saying display is inline and I can go the other way.

I can take my span right here and say display is block.

And now a very different result.

It's 300 pixels tall.

It goes all the way across the containing element, which is the paragraph.

The margin is respected.

On the top, the bottom, the left and the right and elements are being pushed away or content is being

pushed away.

Like it's actually a force field.

It's not just overlapping like we had before.

So those are two values that are very important to know for the display property.

Don't get caught up in all the other things here where you see flex and grid, those are different.

Those actually control what happens to the inside of an element.

We will get there when we talk about Flexbox and Grid.

But there is one other special value that's a little confusing inline block.

So inline block is a hybrid.

It will allow us to treat an element as basically a block that also fits in line within other content.

So like an inline element, it does not break onto a new line.

It doesn't force content onto a separate line.

It fits in inline with other content.

The width and the height are respected like a block element, padding margin and border are respected

and will push stuff away like a block level element.

So I can take my span with the idea of word, which right now is a block element.


So it's a block level element right now.

It takes up this whole block, it pushes stuff down, but I'm going to change it to be inline.

Dash block.

And now we have a very different result.

So it is still fitting in line.

I'll zoom out.

You can see a better you can have a better idea of what it would look like.

It's fitting in line.

It doesn't take up a whole block, doesn't push things down, but it does respect the height, the width,

the margin, the padding and content is pushed away.

And you can see it pushed the text above and to the left and to the right.

And even this line down below the spacing is quite high.

There's a lot of spacing between each line because of this inline block element.

Now, this isn't really where we would use inline block.

I'll show you an example right now.

Imagine I'm making an image gallery, so I'll leave this all for now, but I'm going to go down below

maybe an add an H two that just says inline block and then below it I'm going to add two divs that each

have the class of box.

All right.

And I'm going to have two boxes.

We won't see anything just yet, so I'm going to select them dot box and give them a border.

One pixel solid red and a height.

Now what?

Div by default is a block container.

So it's a block element and a width of 200.

I'm just going to make them squares and by default they go on to separate lines because they're block

elements.

So they push the next element afterwards onto a separate line.

But what if I want them side by side?

I want to have a grid of images, pretend these are photos of images going across the page.

I want to have two pieces of text side by side, two paragraphs.

Well, if they're blocked, that's not going to work.

If they are in line, if I set display to be in line, it's also not going to work because remember,

width and height are not respected for inline elements.

But if I say inline dash block now we get the best of both worlds.

At least in this situation where width and height are respected, margin and padding and border, they

all push content away, but they behave like inline elements in that they don't push things off into

separate lines.

They flow in line with other content.

And so now I could have a grid of images going across the screen.

Now, this has been a long video.

It can be a little tedious to explain that distinction, but hopefully I made it clear some elements

by default or block elements, some by default or inline, but we can change all of that using the display

property

// Lesson 86. Display: None

So this is important because I'm going to show you a special value for display we've seen.

BLOCK Right.

To make something a block element, we've seen inline, we've seen inline block, but there's also a

value called none and display none.

I'll show you where it comes up as well.

Basically hides an element and removes it entirely from the document.

So it's not hidden, right?

If I did opacity zero instead of display none, the element is still there.

It's just invisible, right?

It's fully transparent, but it still takes up space.

And sometimes we want that when we come to when it comes to animations, when it comes to making something

slightly translucent, we could give it a value of 0.5.

But when we're trying to hide something entirely and get it off the document, we can use display none

that will remove it from the flow of a document.

It doesn't take up any space.

It's not there.

So why would we do this?

A common situation is when we have different layouts where we show and hide elements on different screen

sizes.

We'll learn how to do this.

But if I just show you this project we're going to make later in the course.

Watch this nav bar right here.

This nav bar completely hides on a small screen size.

It turns into a mobile draw.

And we have these this what we call the hamburger button here, these three bars that animates on a

full wide screen size.

This is completely hidden, right?

It's gone.

It's not on the page anywhere.

And then this is visible on a small screen size.

This instead is hidden and this thing becomes visible.

So what I'm doing there is using display and setting it to none.


We haven't talked about media queries, but that is where display none comes in.

I can show and hide elements selectively at different sizes.

Otherwise, I don't use it very often.

I mean, maybe there's a situation you always want something to have display none if you want it lurking

on the page for some reason, but it won't be visible and screen readers won't see it.

It won't be in the document, it won't take up space.

So very different from opacity.

And the other thing to know is that display none is not animated at all, even though we don't know

animations yet.

Opacity is animate able.

So if I want to have something fade in, I wouldn't set display to none.

I would probably set opacity to zero like this.

And then I could write an animation, which I'm not going to do right now, but if I select it, here's

our opacity.

I could write an animation to make it 0.10.2, 0.3 and have it fade in.

This is the clunky way of doing it by typing it manually, whereas display none, it's just removed

entirely.

So that's the display.

Non value won't have a lot of use for us just yet, but when we get to making responsive sites, it

helps us show and hide things selectively.

// Lesson 87. Negative Margin & Margin Auto

Now, when I say margin, I'm talking about the margin shorthand, but this also will apply to margin

top and margin bottom and all of those four individual sides.

But most of the time I work with the shorthand that allows me to do all four sides at once.


So the first thing I want to show you is that we can set negative margins.


So it acts as the opposite of a force field, if you will.

Right.

It's it's taking space away from the top, from the bottom, the left and the right.

So now the PN is also off the left side of the screen.

I don't use negative margins all that much, but if you weren't aware that they exist and you saw it,

it might be very confusing.

So that's really all there is to negative margins.

It's just a negative value, right?

You can use it with any unit.

We only know pixels, but you could do negative rams or M's or something else.


Generally the auto keyword just means, all right, browser.

You pick the margin that makes sense here, but usually what it will do is center our content.

If we set the left and the right margin to be auto, we'll get centered content or a centered element.

Now, this is not foolproof.

It's not always going to work, but I'll show you an example.


Say, all right, inside that container, the h3i could do this.

I could say text a line center and that looks like it centered the element, but it hasn't really centered

the element.

It just centered the content inside the H three.

So if I give this h3a border solid black, the element takes up the entire width.

It's a block level element.

I haven't adjusted the width so it goes all the way across.

The text is centered, but it's only centered within that element.

So if I give that h3a new width, let's say give it a width of 250 pixels.

Well now it's not centered overall in this container box, it's just centered within the H three.

So text centering is something totally different than what I want to do.

I want to center this element in the container.

So this space on the right is actually going to be divided evenly. text align centers the text within the current element however it does not center the element within the container element


So instead of hard coding a margin value there, if all I want to do is center it horizontally, I want

to have the same margin on the left as I do on the right.

I can set margin auto for the horizontal margin, the left and the right.

And there we are.

Take a look.

That margin was decided for me on the left and the right.

I can make this container much wider or smaller.

I could make this 300 pixels and it still stays centered, make it 600 pixels.

It still is centered in there.

But this will not work in the vertical direction.

So we have all this space here.

If I wanted it to be centered vertically, it does not work.

If I say auto on both sides, it just doesn't.

It's just not how it works.

We'll learn how to center things vertically in a container later.

It's a little bit trickier, but if we want something to have space divvied up equally on the left and

the right side, we can set margin auto on the left and right side.

So this is pretty common, if not zero auto.

Some number here I could do 100 pixels and that will be the top and the bottom.

But the left and the right will just be picked by the browser to whatever will center that element.

// Lesson 88. Margin Collapsing: WTF?

Even though both of these elements have margin, this one has margin on the top.

This one has margin on the bottom.

But if you look, it's collapsed down into a single space that is 20 pixels tall.

We're not getting 40 pixels.

They don't add up.

And this is what happens when we have margin with two block level elements vertically on top of one

another.

It will collapse and use the larger of the two margins.

So if instead I said, all right, these paragraphs have 20 pixels on the top and zero on the right

and 50 pixels on the bottom, zero on the left.

We don't see 70 pixels, we don't see 20 pixels in between.

What we see is 50 pixels, because that is the larger number and that's just how it works.

I honestly don't know exactly why it behaves this way or who made that decision.

I'm sure there's a good reason for it, but that's how it behaves when we have two elements that have

vertical margin interacting with one another, they don't push each other away and just sum together

like you would expect, but instead the larger number wins. -> if two block elements are stacked on top of each other with the same top and bottom margins, the larger margin value will dictate the margin between the two stacked block elements -> it will not use both margin values, just the larger value. -> the smaller margin value simply collapses into the larger margin value



And one thing that's even more confusing is when you have two negative margins, the larger number,

if you ignore the negative sign, I guess you would say the absolute value will win.

So -50 will win over -20, even though technically this is a bigger number, right?

This is smaller.

It's negative.

That's not how it works.

So it's the larger magnitude of the number, I guess. -> the absolute value of the number


If I want 70 pixels of margin right here, instead of doing 50 and 20, I can just say, all right,

you don't have any margin on top and every element has 70 on bottom.

And now we have 70 pixels of margin there.

Now, when we learn about Flexbox and CSS grid, we don't have to worry about margin collapsing.

We only worry about it with the default, what we call the flow model.

Right now, flow layout, it's everything we've done is in the flow layout.

We haven't touched Flexbox or grid, but just know it is not something you always have to worry about

because this can it's kind of annoying.

Why does it behave that way versus if these two things, if I just gave him a width of like 200 pixels,

these two paragraphs and then I stack them or put them side by side, let's make them display inline

block like this.

If I give them a margin on the left and the right of, let's say 20 pixels, so nothing on top and bottom

but 20 on the left and 20 on the right, you can see they don't collapse.

So there's a 40 pixel gap in there, 20 from this margin on the right side of that left element and

20 right here from the left side of the left element.

So we have 20 and 20 right.

You can see there's no overlap.

They are not collapsing.

So horizontal margins don't collapse ever.

Vertical ones will.

And that's confusing, seems inconsistent, but it's something you just need to know about.

There's not an easy fix.

I'm going to show you where you can just turn it off.

That is how margins work with what we know so far.

So it's not the end of the world, but it's a quirk you need to know about.

// Lesson 89. A Common Layout Pattern

I want to show a very common pattern that you'll encounter when building websites that involves wrapping

elements in some sort of container and then giving the container some margin or padding.

If you look here, this this hero section, this is our final project In the course.

We've got a heading, we've got a paragraph, we've got a button, and they're all aligned together.

So one way of doing that would be, let's say I have a heading that just says heading.

I have a paragraph that has a bunch of flower ipsum in there and then I have a button and this button

says, Click me.

Let's just imagine we're recreating what we see here, heading paragraph button.

So there they are.

They're all aligned to the left.

But I want them to have, let's say, on the left edge, 80 pixels of margin.

So I could say H one has a margin left of 80 pixels, right?

And then I could do the same thing for my paragraph and then the same thing for my button.

And this approach could work.

It does work, especially if I have different margins that I want them to each have.

But if I'm just trying to put them in the same spot, essentially right, move them over together exactly

what we see here, aligned, aligned, aligned.

Or if we look at like Mozilla developer network, I'm sure.

Yeah, here's an example.

This is aligned and this is aligned or all of this stuff is aligned.

Same thing here, this, this, this, this.

They all have the same sort of spacing on the left side or on the right side, depending on what you're

doing.

Instead of doing this, where I set a margin individually on each element, a much more common pattern

in a better approach is to wrap them in some sort of div.

I'll give it a class of container and then I can apply the margin to that div.

So now it's just one element I need to style.

I'll select my container div and give it a margin left of 80 pixels.

And we get the same exact result.

But now, instead of each element having its own margin, it's just one element that has margin.

And these guys are all inside that element.

And then if I wanted to change it and do something more extreme, like 200 pixels, I change it in one

place.

So this is a strategy will employ all the time in our projects.

We group things together in some sort of container element and then apply spacing either margin or padding.

Same thing's going on here where all this content has spaced on the left and the right.

There's some sort of container wrapping everything that you see all of this to give it space on the

left and the right side instead of doing it individually to each individual element, that would be

a huge pain.

// Lesson 90. Min and Max Width

These have to do with the box model.

They control the maximum and minimum size of something.


Okay, so I'm going to make this go in the middle.

I'm going to center it in one way of doing that with what we know so far is as simple as margin zero

on the top or whatever I want on the top and the bottom.

And then auto on the left and right and now it's in the center.

So instead of making it a hardcoded width of a number of pixels, let's use a percentage.

Let's say I want it to be 60% of the container's width.

Remember how percentages work for width and height.

It's based off of the containing element, in this case the body.

So 60% of the body's width.


Instead of just a block.

There's text in here, there's a layout, and I want my layout to at some point.

Stop being 60% because this is really skinny now and my screen is skinny.

Let's say there's text in there or images hypothetically, just pretend there's content in here that's

pretty small.

So what I can do is add a minimum width.

I can say, all right, you're going to try to be 60%.

As long as that 60% is greater than, let's say, 300 pixels.

And you'll see it stops shrinking.

Right about where?

Right there, I believe.

And now if I inspect, I'll select that div and let's look at what it says it sizes.

So right now it's 397 pixels wide, 452 pixels wide, and it will always be 60%, but then it stops

being 60% of the body.

As soon as we get to 300 pixels and it stays 300 pixels, as you can see there.

So we have min width, we also have max width.

So I could say, All right, I want you to be 60% as long as you are not greater than 600 pixels.

So I don't even know are we going to hit 600 pixels?

That might have been ambitious, Let's say let's say it's 80%.

So now we still can't be smaller than 300, as you can see there.

But then once we start getting past 300.

We're going to hit 600 right here and it stops growing.

It's hard to tell, but it does stop at 600.

I cannot make this box larger by making the body any larger.

And maybe I should have done 500.

But the point stands.

You can see how these work, right?

We can use percentages or some other unit.

Doesn't have to be a percentage, although it doesn't really make sense to use pixels.

I could do this and say width is always 400 pixels.

It has to be greater than 300 and less than 500.

Well, yeah, it's always going to be 400, so I can do that.

There's just no real use to add in Min and max unless we have some relative unit like a percentage.

So one more time back to 80%.

It's now boxed by 300 on one side and then it can be 80% up until a point where we hit 500 and it stops

growing.

That's the maximum height or maximum width.

So that's min and max width.

We use these somewhat often when we're building responsive layouts and websites, which is something

we're going to talk a lot more about in this course.

And we have analogous properties for height, so you can do min height and max height.

They're not as common because often we're making things respond and have fluidity horizontally across

different screen widths, but you can definitely do it for height as well.

It's max height and min height.

// Lesson 91. Rounding Elements With Border Radius

kind of related to the box model and boxes.

It is called border radius.

It helps us change the rounding of corners on all of the boxes that underlie every element.

So we can do a lot with it.

As you can see in these examples, we can round all the corners, the same amount, we can use a length,

we can use a relative unit like percentages.

We can also round each corner differently if we provide for different values.

Most often I think in my experience it's used just to round all four of the same way.


Or I could do something a lot more, including a percentage like 50%, which if you set border radius

on any square to be 50%, you end up with a nice circle.


So in this case, a percentage with the border radius property is relative to the width and the height

of that very element, which is different than if I set 50% here.

This is relative to the parent element.

It gets confusing basically.

What percentage is referred to changes from one property to another.

In this case, it refers to the very element that the border radius is set on 50% of that element's

width and height, and this is what we get.

Now that only works if you have a square.

So if this is 200 by 100, we're going to get an overly shape.

It's not going to be a perfect circle.

And that's pretty much all that I'm going to show you.

We do have individual properties like border top left radius.

Let's set that to be 30 pixels and only that one.

And that's how we can get that corner to be very curved.

Or we can set all four.

And that's done with the border radius shorthand.

So I could do something like ten pixels, 20 pixels, 30 pixels and 40 pixels, and it's going to start

here top left and move clockwise.

So ten, 20, 30.

And then 40 is the example that I did, and that's all there is to border radius.

We'll use it a few times throughout the course.

It's nice to make circular images as an example, to add a little bit of curvature to buttons.

There's a lot of uses for it and that's all there is to border radius.

So it's a shorthand technically for for underlying properties that are very long names, border top

left radius, border bottom left radius.

I don't know if I've even seen that in a code base.

Pretty much always see this, just the shorthand and then provide for values if you want, or more commonly

just provide a single value.

And we get that on all four corners.

// Lesson 92. Box Shadows

It adds shadows around the box, the frame of an element.

So there are a couple of options for how we use it.

But let me just show you some examples.

Here's a box, right?

This white box with the black border, it has a red shadow and it sort of is blurred.

Here's one that has a teal shadow that is not blurred at all.

Here's one that has a translucent, purply lavender shadow.

This one has an inset shadow.

I almost never used that.

This one has two shadows.


So we use shadows typically in like modern web design, at least with the way trends are right now,

pretty light shadows, typically nothing like you see here, just something that is a light gray or

black that is very diluted and very spread out.


So the simplest option is to provide an offset X and offset Y and a color.

So a box shadow is offset from the original box.

As you can see here, this one is offset to the right and to the bottom.

This one is offset to the top and to the right.

And then we provide a color.

So let's do a simple one box shadow.

Let's do an X offset of ten, a Y offset of ten, and then a color of red just to make it obvious.

And there it is.

So we moved over by ten pixels, move down by ten pixels, and it's solid red.



Normally I'm using an GBA color, so something like possibly full black that is very transparent.

0.2 it still doesn't look good because we have a third parameter that we can introduce, or I guess

it's a fourth one, which is the blur radius.

So the blur radius dictates.

I'm sure they explain it better than I can here.

The larger the value, the bigger the blur.

So the shadow becomes bigger and lighter.

Negative values are not allowed.

I should show you can use negative values here.

So if I did -40 pixels for the y offset, it's now offset 40 pixels above and it gets cut off.

Right?

It's at the edge of the page.

Same thing.

If I did negative ten pixels for the x offset, that's a shadow on the left.


But if I introduce a blur, a blur radius of 20 pixels, you can see what we get.

It takes 20 pixels for this to blur and fade out.

If I do something way more extreme, 100 pixels, we get a serious shadow there.

And if I do something like two pixels, it's slightly blurred at the edges.

Hopefully that conveys in the recorded video.



Here's an example.

So what's happening here is that there's multiple box shadows provided in the same line or the same

property, which we can do.

I'll just show that quickly.

Let's make a red box shadow here.

And then if I add a comma, I can do another box shadow.

Let's do negative two pixels, negative two pixels, a ten pixel blur radius of blue.

And so we end up with our first box shadow is here and our second one is there and I can keep going.

And this would allow me to add a whole bunch of different box shadows to the same element.


Most of the time I'm just looking at examples that I like, or there's also these generator applications

or these websites where you can play around with your box shadows and create one just visually by dragging

things, blurring it more, making it spread more, changing the color, and then you can copy the box

shadow that they provide right here.

// Lesson 93. Working With Overflow

The core things I want you to take from this section are margin padding, width and height and box sizing.

Everything else is nice to know, but it's not critical.

And this falls into that not critical category.

It's a property called overflow.

This property allows us to specify what should happen when the content of an element is too big to fit

in its block or in its box.




One option is to set overflow to be hidden, and if I do that, all of that overflowing content will

just be cut off and that's it.

So it's as if there's nothing else below it.

There's no extra content.

As soon as it hits the bounds of that box, it's gone.

So it actually cuts this line off, what, halfway through the line, basically.

That's one option.


We have another option, though, which is scroll and scroll.

We'll cut the content off.

It doesn't allow it to overflow, but it does allow me to scroll.

It puts a little scroll bar in there and it's now a scrollable element.

So that's another option.

Those are the three main ones.

So the default, which is visible.

Which is what we had at the beginning.

Hidden which doesn't let us scroll.

It just completely cuts off the content.

I can't scroll in here and then scroll, which does cut off the content that overflows, but also allows

us to scroll through it.



And then we also have overflow X and overflow Y if I want to control one direction versus the other.

Currently, our content is only overflowing in the Y direction because it's text.

It's wrapping in this box.

It is not overflowing to the X direction.

But if I put something else in here just to make this, let's make another, I don't know, a span or

a box.


OC So now our content is overflowing in the X direction.

What I can do is control how that happens and control that behavior using overflow X and I can set that

to be hidden, but only in the x direction.

And what we see here is that my content is not scrollable in the x direction.

My box or the span is cut off, but then I can scroll in the Y direction or I could go the other way

around and say overflow y is hidden and now I can't scroll inside of here vertically, but I can scroll

horizontally because I said overflow y is hidden, meaning I can't scroll, it's just cut off.

But overflow x is not.

So it continues to overflow and the default is to have me scroll left and right.

So that's overflow x and y.

And then we just have the general overflow property.

If I say overflow hidden, that's going to be in both directions.

There's no scrolling.

If I set overflow to visible, which is the default whoops, almost closed that, then it overflows

in both directions.

And if I set it to scroll, we can scroll in both directions up and down and left and right, assuming

that there is overflowing content in both directions.


So this comes up sometimes you want something to scroll like this.

It also comes up if sometimes you want to hide extra content.

So let me show you an example of that.

This is a fancy animated button that will learn how to make later in the course.

When I hover, it fills up with red or pink or whatever color that is.

And the way that this is done involves transitions and pseudo pseudo elements called before and after.

We're going to learn all about this later on.

But if I inspect what we'll see, the way that it actually works is that overflow is set to hidden on

this button.

And if I turn that off, you'll see that there's just a box here.

When I hover, that box moves over the button.

So that's without overflow set to hidden.

That's the default.

This element right here is part of this button and it's overflowing.

And I did that on purpose.

But then what I do is make it hidden so you can't see it until you actually hover.

It then fills in this button, but you still only see the parts that are part of the button, right,

that are within the bounds of the element.

So that's an example of where we will use overflow and deliberately set it to hidden.

We don't want it to show the overflowing content because otherwise this is what we see not as effective

of an animation.

So we're going to learn to do this.

You don't need to worry about it for now.

I just wanted to show you an example.

It's not only about making something scrollable, which sometimes that's what you want, but sometimes

you want to deliberately hide overflowing content and so you can set overflow to hidden.

And now everything outside of the bounds of this green box are completely hidden.