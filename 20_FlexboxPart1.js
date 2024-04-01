// Lesson 168. Introducing Flexbox

summary: flexbox is a layout method for laying out items in rows or columns. its a relatively recent addition to css, created to address the difficulty of creating layouts. Flexbox allows us to distribute space dynamically across elements of an unknown size, hence the term flex


I can instead allow Flexbox to distribute the space for me.

So that's what it does.

Flexbox is a layout method for laying out items in rows or columns, and it allows us to very easily

distribute space across elements.

And those elements could be of an unknown size, hence the term flex.

It is flexible and this is especially important nowadays where people might view your your website,

your application on all sorts of different sizes of screens.

So you might say something needs to be have space of 200 pixels between each one of these boxes.

But if someone's on a really big screen or a really small one, that might not be the right number,

the right amount of space, and you can instead leave it up to the browser to figure it out by using

Flexbox.

// Lesson 169. Display: Flex and Flex Axis

The way that Flexbox works is that we'll have a bunch of items, right?

The actual stuff, the content that lives inside of some container.

And in order to enable Flexbox, we will turn this container into a flex container.

And the way we do that is by setting display to flex.

We'll do it in just a moment.

So when we say a flex container, it refers to some parent element that is set to display a flex.

It basically turns on Flexbox on the inside of that container.

And then the items inside that container we would call the flex items.

I'll just call them boxes.

Half the time.

It doesn't really matter.

But flex container is an important piece of terminology.


What we're going to do is enable Flexbox in this container.

The thing with the border, and we're going to see an immediate change.

So, again, the way that we do that is by setting display.

To flex.

And this governs how the inside of the container behaves.

We're setting the container box, the div to be flex enabled on the inside.

And as soon as I save, we're going to see something very different.

Now, all of a sudden, all of our boxes are in a nice line together.

They're no longer block ish elements, right?

That are forcing each other onto separate lines.



We've enabled Flexbox and we get some different behavior.

Now all the boxes immediately move to the left as far as they can.

There's no space between them and any extra spaces on the right side.


We set display to flex on whatever we want to use Flexbox inside of.

So all of these properties that we're about to learn, if I go back to this list, align content, align

items, the line self, flex spaces, flex flex direction, all of these things are only going to work

inside of a container that has display set to flex.


We have to talk about the concept of the main axis and the cross axis.

In Flexbox, we have these two axes that will refer to often we have the main axis, which in this diagram

looks like it's going from left to right.

But don't get confused.

Don't trip up.

It is not always from left to right.

It could easily be from top to bottom.

It's just a name for the direction that our content is going to flow.

So right now my content is going from left to right.

But if I was working in a browser where I had the language settings change, where I had right to left

in a enabled for text, well then it would be going from right to left.

So right now my content is going from left to right.

It's kind of in the order of the rainbow.

But also I put numbers in there to help you visualize.

Right.

One, two, three, four, five, six.

It is going from left to right.

That means my main axis is going from left to right.

But again, we are just about to see in the next video how to invert that, how to go from right to

left, from top to bottom, from bottom to top.

We have a lot of flexibility.

So we don't use the term x axis and y axis.

It's still just two axes used to describe the two planes, rows and columns in the directions, but

we don't use X and Y because X and Y kind of have their own meaning, right?

Y is always top to bottom.

X is left to right, but in Flexbox we can move the main axis and make it be vertical and make our content

go into a column.

Or we can reverse the axis and go from right to left.

So those are all things we're going to learn how to do.

I just want to introduce those terms.

Main axis, That's the direction our content flows.

And then perpendicular to that is the cross axis.

And the main axis may be from left to right, like what we see right here.

And the cross axis right now would be top to bottom, but we can switch it.

I could have my content flowing from top to bottom in a column and then the cross axis would be left

to right.

// Lesson 170. Working With Flex-Direction

Flex dash direction.

And this will control the direction of the main axis in our content.

So remember, the main axis could go from left to right, right to left, but also top to bottom or

bottom to top.

So this property is really important.

It's how we can go from a row based layout to a column based layout if we wanted to.

And if you take a look at the docs, go to flex direction.

There's great examples of how it works.

It says it sets how flex items are placed in the flex container.

There's that terminology again, defining the main axis and its direction normal or reversed.

So by default, when I enabled display set to flex that turned on flex in this container, it's now

a flex container.

We saw that everything just went from left to right, right in a row.

And I started with red and ended with green, which is a little bit confusing.

I'm realizing now because my slides start with green and end with red.

So don't look at the colors, Look at the numbers that I put in here.

So this is our first element second, third, fourth, fifth, sixth.

And if I turn off display flex, this is what happens, right?

This is the order they're in in the document.

Each one, it's a block element, it's just a div.

I turn flex back on and it starts out in a row going from left to right, and that's the default behavior.

So I could set this manually.

I could say flex direction, flex dash direction is row and we won't see a difference.

That is the default value.

So we don't really need to specify that if we want it to be a row.

But what we can do also is change the direction of that row to go from right to left.

What's really confusing though, is that it's not always right to left.

It's right to left.

If I set it to be row reversed, if it's normally left to right, if my text direction is set to be

left to right, like for English and a lot of languages.

But if I have CSS set to go from right to left, like for Arabic for example, then if I set direction

to be a row, it will go from right to left and the reverse then would be left to right.

So it's hard when you look at the docs because they avoid using left to right, right to left and that

sort of language because it really does depend on the direction of your text.

But because everything in this course is done in English, it's left to right.

I'm just going to use those terms.

It's easier to understand.

So for me, in English, with left to right text, nothing tweaks, no settings changed.

When I set flex direction to row, our content goes from left to right horizontally.

If I set it to be row reversed, it still is a horizontal row, but now it goes from right to left.


So the main axis is still horizontal, but now it starts here and it ends over here.

And when I had flex direction set to regular row, it started on the left and ended on the right.

But there are two other values that we can use column and column reverse.

So if I set flex direction to column, our content is going to now go from top to bottom.

In a column, the main axis would go from the top of the page or the top of the container down to the

bottom of the container.

So let's take a look at that.

And there we go.

My content goes from top to bottom one, two, three, four, five, six.

And then we also have column reverse.

And now it goes from bottom to top.

So try and visualize that main axis.

That's the direction of the content from bottom to top right now.

// Lesson 171. Flexbox Exercise 1

// Lesson 172. Flex-Wrap

The default behavior is to prevent any wrapping of the content and instead shrink the content down to

fit within a single row or a single column if we're working with a column based direction.

So right now what?

There's six of them.

They're each 200 pixels wide if my container is 1200 pixels, so it's ignoring 150 pixels of width.

What I can do if I want them to instead wrap over onto a second or third or however many rows are necessary

is enable wrapping by turning on flex wrap, setting it to wrap.

So let's check that out.

I do this all in the container Flex, wrap, wrap.

And now my elements are truly the right size I told them to be and they wrap onto a second line.


So let's check that out.

I do this all in the container Flex, wrap, wrap.

And now my elements are truly the right size I told them to be and they wrap onto a second line.

And if I made them a lot bigger, like 500 pixels, well, that's a bad example.

Let's do 700 pixels.

Now they all wrap onto their own line because the container is 1200 pixels wide, so two of them can't

share the same row.

So that's the basic concept of flex wrap.


The default, as I mentioned, is called.

I don't know if I mentioned actually it's called no wrap, so you can manually set that and we get the

same behavior we had at the beginning.

Obviously, these are not 700 pixels wide, they are 200 pixels wide based on the size of this container.

They just take up as much space as they can.

We'll all sharing a row.


Let's go back to a column based layout and we get what we had before.

I mean, I made them wider, so that doesn't really matter.

Let's go back to, let's say 150 pixels, but they're all sharing one column and I haven't actually

set a height on this container.

So if I do increase the height of this, like each one is now 300 pixels, the container will actually

just grow to accommodate that.

It's different than width because if we look at the container, I set a manual width, but now if I

set a specific height like 1000 pixels.

These guys have shrunk so they can all fit within 1000 pixels.

I said they're supposed to be 300 pixels tall.

That is not the case.

But again, if I turn rapping on now, they rap over into a second column.

regardless of the the flex items width/height, they will adjust to fit the dimensions of the flex container, if the flex container has specified dimensions and the flex items dimensions are larger than what the flex container is set too (the flex items will adjust down in size to meet the needs of the flex container sizing if they are too large). otherwise the flex items will be sized according to their dimensions within the flex container. 

the rows or columns of flex items will automatically be spaced to fit the flex containers main axis flow. This could result in white spacing between or at the end of the rows or columns depending on the size of the flex items and the size of the flex container

flex-direction default direction is row

the flex wrap property controls/adjusts the cross axis according to the main axis (flex container flow). flex-wrap default behavior is nowrap


wrap reverse will invert the cross axis container flow just like row or column reverse will invert the main axis container flow

additionally using wrap will allow for the flex items to be sized according to their dimensions - if they were to small to fit the flex container before setting flex-wrap (flex-wrap default behavior is no wrap) and flow/wrap onto another row or column in the cross axis direction


Most important is to understand the difference between no rep, the default behavior, where our elements

get smushed together and don't take up this, the potentially don't take up their full width that we

assign or their full height if we're working with a column versus changing it to rep where the content

now does, feel free to wrap on to a second line and then where that second row or third row goes is

dependent on whether we use rep or rep reverse.

// Lesson 173. Justify-Content

Next up, move on to one of the most critical Flexbox properties, which is justify content.

The name is a little clunky, in my opinion, but what it does is it allows us to tell the flex container

how to distribute the space along the main axis so we can do things like have everything bunch up on

the end of the main axis, in this case on the right or in the middle, or distribute the space evenly

or put space around all the elements.

So we'll take a look at all of these options.

But let's start with the basic one.

The default value that we already see is called Flex start.

So if we don't specify, we get flex start.


So I have extra space over here, as we can see, and by default all that space is on the right and

all my content is on the left.

And that's because my main axis is going from left to right.

So if my main axis was going from right to left, my content is on the right, the space would be on

the left so I can move my content over to the right if I want by justifying the content, justify content,

and then I use flex end.


so I can move my content over to the right if I want by justifying the content, justify content,

and then I use flex end.

So there is a value left and there's a value right that you can use.

But most people use flex and flex flex start, which is the default.

So we won't see anything different.

But if I do flex end now, my content moves to the right side and the spaces on the left.


But if I do flex end now, my content moves to the right side and the spaces on the left.

But notice the order is still preserved from left to right.

My main axis goes this way from left to right, my content is distributed along the main axis.

It's just that it's moved over to the ending side of that main axis a.k.a to the right side.

So it's not the same thing as me doing Row dash reverse.

In this case, the content is on the right side, but the order is different.

It starts here and then it moves left.

One, two, three, four, five, six.

When I set it to row and then I have justify content flex end, it's going from left to right.

One, two, three, four, five, six in order left to right.

But it's moved over to the end of the main axis.

So that's flex start and flex end.

We also have center and this is a really useful one and we've actually seen it in action a couple of

times when we centered things vertically and horizontally.

I wrote Justify Content Center, like when we made those transform buttons and recover transitions,

we use this exact property in this value.

This will distribute all the space on the left and the right of the content, forcing everything into

the middle.

So this only matters if we have space to distribute, but in this case we do.

Our content gets smushed together in the middle.

There's no space between each element, but there is space on the left and the right, regardless of

the size of this container.

So if I make it much bigger, 1800 pixels, our content is still centered together in the middle of

our container, and everything I'm showing you right now is for a row.

But the same applies for a column and we'll take a look at that in a bit.


We have space between space between will force whatever our content is to go all the way to the left

and all the way to the right and then distribute space evenly between the remaining elements.

So our content will go up against the edge.

Let's try this space between.

It goes up against the edge of our container and then any space is distributed evenly between.

This is pretty useful if you're doing things like building a nav bar where you have a couple of links

in the nav and you give it some set width 800 pixels.

Who cares how much space is left over?

You can distribute it between all of the elements.

So that's space between.

Just to make it clear, if I shrink this down, well, not 100 pixels, about 1000 pixels still are.

Content goes all the way to the left, all the way to the right, and then space is distributed between.

So there's no space on the left edge or the right edge.

And that is different from the next option, which is space around space around will take whatever space

is left in our container and evenly add it to the right and the left of every element.

So that includes the ones on the extreme left and right.

So let's try that space around.

And this is what we end up with.

Let's make it a bit more obvious.

I don't know.

1300 pixels.

There we go.

We have space on the right of this space on the left of this space, on the right of this, and the

left all the way over.

Every single element has the same amount of space on the left and the right.

I tend to find myself using space between more often.

I don't know why that is.

I guess I just like having my elements go up against the edge and then I can add margin to the container

itself if I want space on the left and the right.

But there's a whole bunch of situations where you could use space around, but I hope that difference

is clear.

Space between content goes all the way to the edge of the container space around every element has the

same amount of space on all while on the on the left and the right sides in this example.

So all of this that we've seen has to do with rows so far.

And it doesn't matter if it's row or row reverse.

That's going to change the order of my content, but the space is still distributed around the content.



But let's take a look at a column layout.

So let's go to column and then I'm going to enable a height again of 1000 pixels.

And we can keep them at 150 pixels.

Sure.

So there's a little bit of space at the bottom here.

Right now, my content is aligned to the flex start, meaning the start of the flex or the main axis,

which goes from top down to the bottom.

So if I did flex end for justify content.

My content is still in the same order, but now there's space at the top and my content is pushed to

the end of the main axis, which ends down here.

It goes from top to bottom.

And then things like center.

We'll center our content along the main axis.

It just happens to be that our main axis is vertical.

Top to bottom.

And we have space between it pushes our content to the very top and the very bottom and then evenly

distributes the space between them and then finally space around.

And it didn't save.

There we go.

So there's a little space there.

A little space here.

Top, bottom, top, bottom.

They all have the same amount of space evenly distributed around each element.

And then in the case of this column, there's a lot of space because there's only two elements and they're

pretty small.

There's a lot of leftover space that's distributed evenly across the main axis.

If we do center, all the elements in each column will be centered based on that main axis.

And then let's just do one more example this time.

Let's go to a row dash reverse.

Okay.

So again, the main axis goes from right to left now, because I did row reverse and the content is

still centered, right?

The order is different because of the flex direction, but justify content doesn't care about the order.

In this case, at least it's just going to center the content.

Now, it does matter if I do things like flex start or flex end, flex end, remember, it's going to

push the content over to the end of the main axis, which in our case is the left side.

So we have our content going from right to left, smushed against the left.

And then the last thing I'll show is if we have wrap enabled and I make these wider like 300 pixels

wide, now we have two rows.

Both of them are going to be aligned.

The justified content property is set to flex and they're going to be pushed to the end of the main

axis and any space will be on the right side and if I center them.

I'm only centering them within each row right along that main axis.





We have a couple of different values as we saw Flex start, which is the default flex, and we'll push

the content over to the end of the main axis.

And any extra space is on the start of the main axis, in this case, the left side.

But remember, if we're working with columns, it's very different.

If we're working with a reverse column, it's different if we're working with reverse row.

So when I say left and right, it's only pertaining to the exact examples on this slide.

It's all sort of relative, which makes it confusing.

Anyway, Centering is easy, right?

The space is going to be distributed evenly along that main axis, whether it's horizontal or vertical.

Then we have space between and space around similar but different space between goes all the way to

the edges of the container and then distribute space between the elements.

But nothing on the far extreme sides versus space around evenly shares the space around every element

// Lesson 174. Flexbox Exercise 2
// Lesson 175. Align-Items

But a line items is used to align elements along the cross axis.

So remember perpendicular to every main axis if it's going from left to right.

In this case, there's a cross axis that would be vertical in this example.

So a line item.

So lets me say I want these things to be aligned to the top of this container or the bottom, or I want

them to be centered in this case vertically or even stretched, which we'll see in just a moment.



What do you think will happen if I have no height set on a box?

It's 150 pixels wide, but no height.

This is what happens by default.

A line item is set to stretch the value called stretch, which will stretch out the elements along the

cross axis to take up all the space.

In this case, it's vertical space.

But if I change the direction to a column and then I'll just turn off the width and the height just

to demonstrate this, our elements stretch all the way across horizontally, and that's because the

main axis goes from top to bottom.

The cross axis goes from left to right in this case, and the default behavior for a line items is to

stretch the content.

If I haven't set a width or if I'm working with rows, if I don't set a height, they'll stretch.

But then as soon as I say actually just kidding, I want them to be exactly 240 pixels.

Now it respects that height, so I don't use Stretch all that often, but it is the default behavior.

If you don't set anything or you can manually say a line items stretch and this will stretch the elements

along the cross axis.


And the first one we'll look at is flex start.

If I want my elements to be aligned to the beginning of the cross axis, which is what we have right

now, because I've set a height manually, they're not stretching, they are aligned to the top in this

case, but I can also move them to the end of the cross axis if I do flex end and now my elements are

pushed down to the end of that cross axis.

Remember, it's all relative whether we're working with a row or a column.

So instead of thinking of it in terms of pushing them to the bottom, which is not always the case,

if I'm working with a column, it's a totally different setup.



If I set up my flex direction to be a column, the main axis now goes from top to bottom and then the

cross axis goes from left to right.



And then we also have center, which we have seen when we want to center something vertically and horizontally.

If we set a items to center and justify content to center, which we've done a couple of times in this

course without really understanding it, we get content vertically and horizontally centered in a container.

This is super useful.

So if nothing else, just take those two away just by content center, align item center and we can

center basically anything within a container.



The most important thing to remember is that justify content is going to align your content in one direction

the direction of the main axis.

In this case, we're centering it along the main axis right from top to bottom.

It's in the middle and then align items is going to control the alignment along the cross axis in this

case, left to right, or we can center it as well.

// Lesson 176. Flexbox Exercise 3
// Lesson 177. Align-Content

And the first thing you have to know about it is that it won't do anything if we don't have multiple

rows or multiple columns that have wrapped.

So we have to enable flex wrap in order to see anything happen with a line content, because the line

content will control the space between our columns or between our rows.


So we also have center and this is now how I can have multiple rows of content that are centered horizontally

and vertically, all smushed together like we see right here.



And then we can center our columns if we wanted to center.

And there we are.

And then we also have, as we saw before, let's do space between.

And now our columns are pushed to the far left and right and any space is put between those two columns.

And again, if I had more than one three columns, four columns, the space would then be distributed

evenly in the middle.

So that's all there is to align content.

But remember, it only matters if our content wraps.

So as soon as I don't allow it to wrap anymore, it doesn't matter what I do with aligned content that

only controls the space when we have multiple columns or multiple rows that have wrapped unlike a line

items, which is always going to control the alignment along the cross axis, whether we have multiple

rows, multiple columns or just a single row or column.

So align items controls that space.

In this case, let's say I want to move them all to the middle.

// Lesson 178. Flexbox Exercise 4
// Lesson 179. Align-Self

And align self is the same concept as align items where we use it to specify how all the items in a

flex container should be aligned along the cross axis.

But what's different about it is that we actually apply aligned self to an individual flex item.

So in this case I'm targeting this one green box and I'm aligning it to the end of the cross axis.

So it's a way to call out individual elements and align them differently.



So this is the first example of a flex property we apply to the individual item.

Everything else we've done on the whole flex container and we're just using a broad paintbrush that

applies styles to every item in the container until now.

That is with aligned self.

I can call out individual items and align them differently.


So if you understand the line items, you pretty much already understand a line self.

It's just an individual level property.

We apply to call out specific elements rather than every element in the container, which is where we

use a line items OC.

// Lesson 180. Flexbox Exercise 5
