// Lesson 181. The Flex-Grow Property

We have additional properties that apply to flex items, not to the container, but to the actual elements

in the flex container.

And the first one we're going to look at is called Flex.

Flex is actually a shorthand property for three other properties.

So I kind of lied when I said we're going to start with Flex.

We're actually going to start with the first one here called Flex Grow, but just know that the three

of them work together when we use the flex shorthand.

So just like we have a background shorthand, a border shorthand, same concept, but here we have three

separate properties and honestly, each one can be a little confusing on its own.

So we're going to step through it one piece at a time.

Now, just to show you what I'm referring to on the docs, you can see Flex.

That's the name of the property.

It's a shorthand property that sets how a flex item will grow or shrink to fit the space available in

its container. -> flex: flex-grow, flex-shrink, flex-basis



So flex grow dictates when we have extra space in a flex container, if any of the elements in it should

take up additional space, if they should grow to take up to basically conquer any empty space.

And the way that it works is that it expects a unit less number one, two, three, four, something

like that, or zero if you don't want it to grow.

And if I have one element with flex grow of one and another element with flex grow of two, this element,

it's all proportional.

It will take up twice as much of the available space as this one, so twice as much.

Or if I did three, it would take up three times as much as this one.

So we don't use a length.

It's all about a unit list value and I think it's easiest to show

summary: dictates how much of the available space inside the flex container the item should take up -> a flex item with a flex-grow of 2 will take up twice as much space as an item in the same container with a flex-grow of 1.


Now, Flex grow will still respect things like a minimum or a maximum width.

if only a single flex item has a flex-grow property assigned, it will take up all of the extra space. once another item is assigned a flex-grow value it will take up space relative to the value assigned to it compared to the other flex item flex-grow value. -> e.g. one flex item has flex-grow 2 and another has flex-grow 1, the item with a flex grow value of 2 will take up twice as much space as the item with a value of 1. This means that as the size of the document/browser changes these sizes will adjust dynamically to maintain their relative flex-grow sizing. Keep in mind flex-grow still respectcs min and max widths



how it works.

It's about the proportion of empty space to take up.

It is not about the proportion of the size of the elements, and that's very important.

I've seen students who think, Och, you're saying this thing is ten times bigger than this thing?

No.

They could start at a totally different size and it's only about the empty space.

What percentage or what proportion of the empty space they take.

So that's the first of these flex item properties called flex grow.

It tells the individual item.

So we don't set it on the container.

We tell the items how much of the available space, if there is any, an item should take up.

And it's one piece of this flex shorthand property.

In the next video, we'll look at the second one called Flex Shrink.

// Lesson 182. Controlling Shrinkage With Flex-Shrink

yet, the next one is called Flex shrink.

It's similar to flex grow, but the concept is if there's not enough space in the element in the container,

if things are too big, well how much does each one shrink down to get to the right amount of space?

So it sets what we call the shrink factor for each item.

And if the size of those flex items is too big, then for the container, if they're going to overflow,

they won't fit.

How will they be shrunken, shrinking, shrunk.

So if I set flex shrink to three, again, it's a unit less number, not a length, it's just a proportion.

This element would shrink three times faster than this one that has a flex shrink of one.

And by default, every element in a flex container.

All the flex items have a shrink factor of one.

They all shrink at the same rate.

summary: sets the flex shrink factor of a flex item. if the size of all flex items is larger than the flex container, items shrink to fit according to flex-shrink. a flex item with a flex-shrink value of 3 will shrink 3 times as fast as a flex item in the same flex container with a flex shrink value of 1

So that's flex shrink.

If you're still confused on how it works, remember, it is not about saying this thing is ten times

smaller than this thing.

It's all about the proportion.

When there's not enough space, at what rate do they shrink?

It's saying this will shrink ten times faster than this one, but that doesn't mean it's going to be

ten times smaller.

Very different.

Same thing with Flex Grow.

We use a unit less number and it's all about the comparison between the values.

// Lesson 183. Flex-Basis: Important & Confusing

flex-basis sets the initial main size of a flex item. it sets the size of the content box unless otherwise set with box-sizing (width/height)


It sets the initial ideal size of a flex item.

So it will be used to determine the size of the content box unless we otherwise set it with box sizing,

which is just width and height.

And flex spaces again is going to set the initial size of the flex item unless we set width slash,

height or self.

Flex spaces is not explicitly setting only the width or only the height.

It is setting one of those too dependent on the type of layout we have.

So if we have a row layout, it's setting the width.


It will set the width or the height dynamically, depending on what type of layout.

We have a row versus column layout.


But there's another reason we use flex spaces, which is that we can easily set all three flex, grow,

flex, shrink and flex spaces using the flex property.

So in the next video I'll show you examples of that, but it makes it very easy to say, okay, I want

this thing to initially start at this size of 500 pixels and then grow X amount and shrink X amount

relative to other elements.

So instead of setting the width separately or the height separately, which is totally fine to do,

and sometimes I will do that if you don't want to do that.

Flex Spaces is part of this flex trio and you can set all three together because it's something you

generally do.

At the same time, you establish the initial size, something starts as flex spaces and then how much

it should grow and shrink.



tend to set all three together, flex, shrink, grow and basis using the flex property.

But just remember that flex spaces is a way of saying this is the initial size.

I want this element to start as and try to put it in this container and then take into account flex,

grow and shrink if needed to change the size.

And it's not exactly the same as setting the width, although in this case it would be right if I set

this to be a 500 pixel width.

We get the same result where it starts at 500 pixels, but then it grew to fill the container.

It has no competition, so it grew to take up all the space.

But the difference is if I made this a column layout, I'm still setting the width here.

But if I did this and I made it a column layout, it's now going to set the height because flex bases

will set the width in a row layout, but the same property sets the height in a column layout.

// Lesson 184. The Flex Shorthand Property

A one value unit.

This number will set flex, grow to that number, and then flex bases will be equal to zero. -> flex-grow 1 equals flex 1


Of course, if I had the sidebars active.

Like this, and maybe I'll just do one sidebar for now.

And no flex basis there either.

If I set flex to one, what do you think will happen?

So we have two elements side by side, a sidebar and a paragraph.

Neither of them has a width set or a flex base is set.

They just have flex set to one.

This is what we see, right?

They share the extra space evenly.

So that's just an easy way to say, I want you to take up the same amount of extra space.

Of course.

Then if I say flex four, the paragraph is two.

It will take twice as much of the empty space, and that's the result.


Okay, then we could also set it just to a single united unit.

Did a single length value.

Let's say that like ten M's 30%.

I pretty much never do this.

This will only set flex basis again.

Pretty rare to do that in my experience.


And then we have the option to provide two values, one of which is unit less followed by a length.

So in this example, one followed by 30 pixels sets flex grow to one, as the docs say, and flex bases

to 30 pixels.


I can set it to be a flex grow of one and a flex basis of 200 pixels.

So that's the initial size it starts at and then grows from there.

And then I'll say for the paragraph flex two, I want you to start at 1000 pixels and your flex grow

is two and this is what we end up with.

So it's the same as me saying Flex, grow two flex spaces, 1000 This guy is going to take up twice

as much of the extra space.

Then this one and this one starts at 200 pixels ideally, and this one starts at 1000 pixels.

Now, if we don't have enough space right, then we have to think about flex shrink, and then we have

this option to specify two unit values.

So this will be flex grow, followed by flex shrink or three values, flex, grow, flex shrink, both

of which have to be unit lists and then some sort of length, a percentage, VH pixels, whatever you

want, some length measurement.

So this is grow and then shrink and then flex basis.

But now let's talk about some of these other keywords.

There's also a great explanation of the one, two and three value syntax here, but we have the keyword

initial auto and none.

So let's take a look at initial.

If we set flex to initial, it says the item is sized according to its width and height properties,

it shrinks to its minimum size to fit the container but does not grow to absorb any extra free space.

It's equivalent to setting flex zero one auto.

So zero would be flex grow, one would be flex shrink auto is for the flex basis and it says to use

the width in the height.


There's also a great explanation of the one, two and three value syntax here, but we have the keyword

initial auto and none.

So let's take a look at initial.

If we set flex to initial, it says the item is sized according to its width and height properties,

it shrinks to its minimum size to fit the container but does not grow to absorb any extra free space.

It's equivalent to setting flex zero one auto.

So zero would be flex grow, one would be flex shrink auto is for the flex basis and it says to use

the width in the height.

So we can try that too, if you want to.

If I set flex to initial and on this guy flex to initial and then if I had a height set or rather a

width on one of them, Right.

Width of 500 pixels on this guy and a width of 200 pixels on the sidebar, you'll see they do not grow

like I said, or like the doc said, it's equivalent to zero for flex, grow one for shrink and auto

for flex spaces, which just means to look at the width or the height, depending on if it's a row or

column based layout.

So that's one.

Then we have auto itself.

If you set flex to auto, it still uses flex basis based upon the width of the height.

So that's the same.

But it will grow to absorb any extra space in the container.

So this one's pretty common in my experience.

If we have this one one auto again, you could instead just write auto and this just basically says

you take the wheel flex box, start with this as the flex basis, but then grow and shrink one one and

this is what we end up with.

So this guy is not growing.

The sidebar stays the same and this guy will grow to take up any space.

And then we have none.

None is going to set flex bases to be based upon width or height.

So whatever the width slash height is set to depending on a row or column based layout, but it is fully

inflexible.

The element will not shrink and it will not grow in relation to its container.

So if I do this, this paragraph will be 500 pixels wide and that's it.

It doesn't flex, it doesn't grow or shrink.

Now this sidebar is set to initial, which I know I'm throwing a lot at you, but when we set initial,

remember that says no growing but one factor of one for shrinking.

So if you look closely, this sidebar on the left will start to shrink right there.

It's shrinking.

The paragraph does not budge.

It stays 500 pixels.


Just remember that this flex shorthand is used to set the three important properties for a flex item,

how much it grows, how much it shrinks, and what its initial ideal size is.

// Lesson 185. The Order Flex-Item Property

It's different, but it's also easy to pick up.

You don't have to worry so much about main axis, cross axis alignment, all that stuff.

Basically, it is a property we can apply to a flex item to change the order that the elements are sorted

by in that container.

So the default of course is just to use the source order.

The order elements are defined in the markup.


But we can change the order that they're rendered in without changing the order in the actual markup.

You might be wondering why I'll talk about that towards the end of this video, but let me just show

you how it works.


It tells us items in the container are sorted by ascending order value and again by default, the order

is set by the source order.

But I can come in and select one of these elements.

How about the last one and actually say, I want you to come before every other element.


So that's how we can use order.

You can change the rendering order of elements and make it different than the actual source order that

we define them in.

Now this is a flex property, so it's not going to do anything if we don't have Flexbox enabled.

If I turn display flex off, it's just first, second, third, fourth.

So it's a flex specific property.


But let's say we're using Flexbox.

What I want to do is have this date up top, but if I define the date first in my HTML, right.

If I had something like this.

Where if I had a card and then I'm just going to write the word date and then title, and then after

that we have the preview text or something.

Obviously, this isn't going to work, but let's just imagine that's what I had.

Well, if someone's using a screen reader, the first thing they're going to encounter is the date,

which makes for a very bad experience.

So to make things more accessible, to make it more obvious, what matters in this card, what we could

actually do is put the date down here, for example, in the original markup, and then use the order

property to display it to change where it's rendered so that it's actually up top in the right corner.

So that way anybody with a screen reader will encounter the title.

First, it will be read out loud to them, right?

It will say something like, Whatever.

You know this article How to use Flexbox Guide.

It's not going to say January 22nd, 2024 or something like that.

It will read out the title, but then we can visually change where this goes when it's rendered.

So the date comes first.

Maybe it's on the right side, the left side, it doesn't matter without actually altering the markup.

And that's really the main use case for order.

You can also use it if you have responsive layouts where you have some content in some order like we

see here.

And then as I shrink the screen, which we don't know how to write responsive layouts yet with media

queries, maybe I want a totally different layout where this last box goes above everything else and

takes up a whole line.

For example, we can do that using order so we can dynamically reorder elements not just for accessibility

purposes, although that is an important reason, but also to change the the layout dynamically as a

screen size changes.

So we might want this to be at the end on a big screen, and then when I shrink it down, there may

be some reason we want it to go before everything or switch with some other element.

We'll see how to do that when we talk about media queries.

For now, just remember there's an order property and it's a property we assign to flex items and elements

will be sorted based upon their order in ascending order.

So one comes before two and two comes from four, three negative, one comes to four one and so on. -> useful for accessibility and media queries

// Lesson 186. Flexbox Patterns: Building A Simple Navbar

I want to show you some common patterns, some real use cases for Flexbox.

So in general, the first thing that I'll say is that we don't use Flexbox all that often to lay out

an entire Web page.

We're going to learn about CSS grid in a little bit, and that is a bit better suited to full page layouts

to making grids of content.

You could use Flexbox to do what you see right here.

But generally, CSS grid is a better fit.

A more common use case for Flexbox would be something like a nav bar here or the inside of each one

of these cards.

Or if we keep going down here, having some content in this box, share the space with this image here

and having it scale or this footer down here would be a good use case for Flexbox.

Now, there's a lot of overlap between what we could do with Flexbox, what we could do without Flexbox

just using margin and padding and width and percentages and what we can do with CSS grid.

All that I'll say is that yeah, we don't usually use Flexbox to do a full page layout.

It generally is best for components like a nav bar.

So if I selected that last one, let's add a class called.

Right.

And then I select that class if I try a line self flex end or something like that.

You can see it does work, but again, it's on the cross axis.

We're working with Justify Content, which is the main axis, so I don't have a way using flex properties

to move this guy over here.

What I can do though, and this is a pretty common trick, I don't I guess I wouldn't call it a trick.

It's a common tactic is to use a margin auto.

So if I set margin left on this guy to be auto, then he goes all the way over to the right and then

I could add some extra margin.

Right?

If that's too far over, I could do margin, right?

It's actually 100 pixels.

Right.

And so now we have extra space there.

But that's a really common pattern set, some sort of justify content value on all elements, of course,

because you set it on the container and then on an individual item, I can set margins something to

auto margin left or right, and that will push the content all the way over to the right and now as

I shrink this down, right, that space right now is just going to shrink.

We haven't done anything with flex grow or flex shrink or anything like that, and that's fine.

Normally I would just keep these guys the same size and then once they get too small, like right around

here, when we learn about media queries, we'll see how we could immediately very easily turn this

into a column.



// Lesson 187. Flexbox Patterns: Nested Flex Containers

But what's pretty common is to actually make one of these or all of these boxes into their own flex

containers, and they'll have their own content that we can then use Flexbox and justify content or

align items and all that stuff in different directions.

So I have a flex container now where it's nested inside of another flex container.

So this red box is both a flex item.

It's a child of the main header flex container, but it itself is also a flex container and we can control

the links inside of it this way.


// Lesson 188. Flexbox Patterns: Centering Content

And there is our perfect circle with the text centered in the circle.

And the circle itself also centered within the body.

So this is another example of nesting flex containers where I made the body a flex container.

Anything in the body will be centered horizontally and vertically.

And then I also went ahead and took this div with the class of circle and made it itself a flex container.

And that way I could center the number right in the middle.

And then this thing also is centered right in the middle of the body so it doesn't get more common as

far as Flexbox patterns, then centering stuff horizontally and vertically and at the same time nesting

flex containers.

// Lesson 189. Flexbox Patterns: Building A Card Layout

So as you can see, the card footer for each one of these cards is in a very different place.

It all just depends on how much content there is in each one of the cards.

So they're all the same height.

That's just thanks to Flexbox.

They'll all be the same height based on the tallest one, which is this guy.

But the footers are not at the bottom of the boxes of the actual cards.


But the footers are not at the bottom of the boxes of the actual cards.

And I want them to be.

So this is where Flexbox could come into play.

Basically, if I make each card itself a Flexbox container, then I can make it a column based layout

and push the card footer to the end.



Okay, so now we can clearly see the footers are all at very different heights.

But if I make each card itself a nested container, a flex container right there all inside of a container

right now.

But if I make each card a Flexbox display flex, it's not quite what we want yet because it's a row

layout.

By default, flex direction is going to be a row.

So it goes from left to right, does not look great.

Instead, I'm going to say flex direction is a column OC, so we're not quite done.

But now we are back to a column based layout.

And now I can use things like justify content if I want to make all of this aligned vertically so I

could do something like justify content space between and then we'll look okay.

Right.

It does push all of the card footers to the bottom and all of the headings to the top.

But then we have the actual text content that is now just spaced evenly.

Any extra space is put between the footer and the paragraph and then between the heading and the paragraph.

And that's maybe okay in certain situations, but I kind of liked having all of the headings and the

paragraphs aligned together at the top.

And then I just want the footer to be pushed down.

So I don't want to necessarily space all of these out using space between or space around.

I'm going to keep it at Flex start.

Remember, it's a column layout, top to bottom.

Flex start is at the top.

So just to push the footer down, I can use the trick that I showed you.

It's not really a trick, but I can use margin auto on the footer margin top auto and in a flex container

that will then push this element down to the bottom.

If we're in a column layout, just like with our nav bar, when I set margin left to auto, it pushed

one element over to the right.

Same thing here.

Look at our beautiful cards.

So now every footer is down at the bottom.

It's anchored to the bottom and then the content up top is just aligned, right.

Everything at the top.

And then the paragraphs come in and then there might be a bunch of empty space for a short card, but

all of them have a footer aligned at the bottom.

And that's pretty hard to do without Flexbox because we don't know the heights of this or the height

of this.

We can't account for that easily.

But if we use Flexbox, it's fine.

It's super easy.

As long as you remember to use margin auto, which again helps you when you want to align one element

differently, push it to the right, push it to the left, to the top, to the bottom.

Of course, it depends if you're working in a row or a column layout where you're going to actually

write that margin.

But margin auto in this case says push it to the very bottom of its container.