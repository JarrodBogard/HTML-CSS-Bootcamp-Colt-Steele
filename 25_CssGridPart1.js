// Lesson 216. Introducing CSS Grid

Grid Excel is set dividing a page into major regions or defining the relationship in terms of size,

position and layer between parts of a control built from HTML.


And another really nice thing about GRID is that it makes it very easy to make responsive layouts so


As I already said, Grid is a layout system that is recent ish as far as CSS history goes, and it's

a bunch of properties we use to manage layouts.

It makes our life easy.

summary: grid is a layout system built into CSS.  it has/is a collection of css properties used to manage layouts far easier than before.


And just like with Flexbox, we have some basic terminology.

What we'll do is we turn some parent element a container into a grid container, and then inside of

that element we can position and move around grid items.

So we have a flex container and flex items and a grid container and grid items.

It's basically the same concept.

We have some box like if we go to our project example, there's a big container around all of the images

you see here.

And in that container we turn on grid, we say, You are a grid container just like you would turn on

Flexbox display flex.

Well, we set displayed a grid, and then we can have these individual items that we change, reposition.

We change their columns and rows, how big they are, how many rows they span, all of that stuff we

do to the individual items.

So we take some container, we turn grid on, and then we start using grid properties inside of it.

And just a quick little note about how it's different from Flexbox.

Flexbox generally helps us work in a single dimension.

We're making elements in a row with space between them or a column with space around them or centered

or whatever the alignment is with GRID.

We can work with both dimensions at the same time, rows and columns.

summary: a css grid is primarily made up of a grid container with grid items inside of it. grid containers are parent elements while grid items are children of the parent.


flexbox is ideal for a single dimensions either rows OR columns
grid is ideal for both dimensions rows AND coloumns

// Lesson 217. Enabling CSS Grid

grid containers are just parent elements set to either display grid or display inline-grid


Instead, we're going to set display to be grid.

So this is how we turn on grid inside of some container.

We just set it to be display of grid.



The div, the container is a block element.

All divs are by default, but if I turn on inline grid, it's still on the inside behaves as a grid

container, but on the outside relative to other elements, it is an inline element.

So sometimes you want your grid to be a block element and grid inside.

Sometimes you want it to be an inline element with grid inside.

Those are the two options we have inline grid and grid.


So the next thing to know is that grid containers work with rows and columns, hence the grid, right?

It's x and y rows and column based layouts.

And we can specify how many columns we want and how many rows we want.

In the simplest way, by using grid template columns and grid template rows.


grid containers can define columns and rows (i.e. grid tracks) using grid-template-columns + grid-template-rows


Each element goes all the way across in a single column.

But if I switch this up, I'm going to write something here that's going to look very weird.

One f, r space, one f, r, and I'm going to save.

We now have a two column layout.

So one column here and then the second one over here, very easy.

I didn't have to say 50%, I didn't have to do anything with the height.

It just automatically made me two columns.

So what is an f r f r stands for fraction, and it basically just represents some proportion of the

grid.

So instead of having to calculate, let's say I want two columns instead of having to do 50%, 50%,

which does work, we still get a two column layout, I can say one fraction and then another fraction,

and that will give me a two column layout or one fraction.

One fraction.

One fraction.

Right.

This would be 33 and a third, 33 and a third, 33 and a third.

And now we have a three column layout.

Now we only have eight elements.

So of course we have some empty space.

The background color of my container is black, so any time we see black, that's just empty space. 

summary: fr stands for fraction - it represents an even proportion of the grid, which is useful when we don't want to calculate % widths.

// Lesson 218. Grid-Template-Columns

Okay, So let's continue on with grid template columns as we saw in the previous video.

We can use it to define the number of columns, but it's not just the number of columns, it's also

the size of the columns in our grid.

Right now, when I do one for one fr one fr, that's basically saying make me three equally sized columns

and whatever size this container is.

If I shrink this, we still have three equally sized columns.

I'll go back to 700 pixels, but I'm not limited to evenly sized columns or just one fraction at a time.

I can do something like this where I have one for, two for one for and remember it's fraction.

So one fraction, two fraction, one fraction on the right.

So this would divide all of our space into four fractions, four pieces, and two of them go in the

middle and then one on the left, one on the right.

And this is what we see now.

Our middle column is a lot bigger, right?

Let's inspect.

We can look at the overall size.

If we go to layout know computed, it's 350 pixels versus this guy is 175.

And the one on the right is also 175.

So it's all about proportions.

Instead of having to say 50%, 25, 25, which also would work, right?

I can do this 25%.

50%, 25%.

Same end result.

I can instead use fractions one fraction, two fraction, one fraction.

Or I could even have four in a row.

Right.

I can do this.

I just can't type for evenly spaced columns.

And there we are.

And so far we've just been using percentages and fractions.

But I could also do something like have a 50 how about 100 pixel column and then a 200 pixel column

and that's it.

And this is what we get, 100 pixels.

200 pixels, and that's it.

We have a bunch of empty space because I've said that our container is 700 pixels by 700 pixels.

So of course when we have 300 pixels of column width, then we're going to have 400 pixels of leftover

space.

But I can also do things like this.

I want a 150 pixel column and 150 pixel column.

Whoops.

On the right.

Let's call this like a sidebar.

So a left and right side bar and in the middle I want anything left over so I can do 1fr.

So the way that fractions work is that they will use any of the available space.

So any length gets precedent first 150 pixels on the left, then 150 pixels on the right, and then

all of that, whatever's left over, we're going to just have one proportion of that one fraction in

the middle.

It's just a way of saying everything left over, and this is what we get 150, 150, and then whatever

this is 400, I think.

Right.

If it's 700 -300 doesn't really matter.

But yes, it is 400 pixels.

All right.

So we can mix and match our units.

I can also do things like two fractions.

Let's do a left column of 100 pixels, a right column of 100 pixels, and then in the middle we'll split

the remaining space into a one fraction and two fraction.

So this will be twice as big as this one.

And this is what we see.

So again, this guy here with third has a width of 333 pixels and this one is 166, so it's twice as

big.

But if I change the size of the container, if I make it a lot wider, like 900 pixels, the left and

the right are still going to stay 100 pixels.

So I've established four columns.

Two of them are always the same width.

And then these guys split up the remaining space.

You can also use rams percentages, pixels, whatever units you want, but fractions are very common.


Another thing I didn't highlight, but hopefully it's obvious is the direction of our content for now

is going from left to right, right first, then second, then third, then fourth.

Now if we have settings such that we're working with a right to left language, then it goes the other

direction, but it still will be row based.

So it rolls over first and then second, and then it moves back to the left third and then fourth.

And it's all based on the order.

I defined my elements in the actual HTML markup first, second, third, fourth and so on.

And that's it for this video.

On grid template columns, we still have more to learn about grid template columns.

It's a mouthful to say, but what we've learned so far is that we use it to define the size of our columns

in a grid.

// Lesson 219. Grid-Template-Rows

Next up, we're going to talk about the grid template rose property, which is the property we use to

define the sizing of our grid rows.

The docs are a little confusing because they also tell you you can use them to define the line names

and the sizing of grid rows.

We don't know about line names yet, so just don't worry about that.

But we can use grid template rows just in the same way we use grid template columns.

Obviously it applies to rows instead.


If I have three values, like 100 pixels, 100 pixels and 100 pixels, I've said that my grid should

have three rows, each one 100 pixels tall.


Now, if I did turn back on all these other boxes, eight of them.

So five more now we have eight.

I'm still only saying that my grid has three rows.

So this is what we see our three rows here and then everything else just smushed in to try and fit within

this container.

So I have eight elements, but I've said there's three rows and I haven't said anything about columns,

so it doesn't work very well to accommodate every single element.



But now let's re-introduce columns.

So what I want to do is build a two across layout.

So two columns, that's simple enough grid template columns.

I want to evenly spaced or evenly sized columns.

So one for, one for and by default.

Now when I work with columns, they wrap over right?

And they start a new row and in this case, as many rows as needed, which is for now, if I only had

six boxes.

Then we get three rows.

But what I want to do is control the size of those rows.

I want every other row to be twice as tall.

So this is where grid template rows comes in.

I'm going to say one for and then two for.

Then one for.

And then two for.

So we're splitting all the vertical space right into six different pieces.

One piece here, two of them here, one piece here, two of them here from top to bottom.

And now this is what we see.

So still two columns.

Nothing changed.

They're just 50%, 50% in the column direction.

But as far as rows, we have a shorter row and then a taller row, a shorter row and then a taller row.

So I still have my two by four grid, but the sizes are different on the rows, right?

Some of them are shorter, some of them are taller.

Or I could make this second row, have some hardcoded number like, I don't know, 253 50 pixels.


// Lesson 220. Grid Exercise 1

grid containers ignore the width and height properties when grid template columns and grid template rows are set on the container to exact measurements and not relative measurements like fr and %. if using only relative measurements for grid rows and columns then width and height properties must be used inside the container.

// Lesson 221. Grid-Template Shorthand Property

We've seen grid template columns which we use to tell the grid container how to divide up the space

into columns.

So 1fr, one f, r, 1fr, right.

That's three fractions, all the same size, right.

One fraction, one fraction, one fraction.

That would make us three columns.

And then we saw a grid template rows which goes in the other direction.

We specify the sizes and number of rows.

1fr1fr would make us two equally sized rows, giving us a three by two grid container so we can set

these individually.

containers can use a shorthand grid-template, which accepts '<row values> / <column values>' all in one property (e.g. grid-template: 1fr 1fr / 1fr 1fr 1fr).


we also have the option to use a shorthand to specify the columns

in rows base layout in a single property.

And that property is called grid template.

Now it can be confusing if you don't remember the order.

I mean, if you just see this, especially if you don't know what fractions are and you're just, you

know, coming, stumbling across this property, it's a little intimidating looking.

So we have our rows first, however many rows and whatever unit you want fractions.

So in this case two evenly sized rows you can use lengths, right?

500 pixels, you can use percentages.

And then we have columns, the number of columns in their size and in this case one for one for one

for.

So we could write what we have just like this.

Rewrite it.

So the rows are first one for one R and then a forward slash and then the columns.


So it's a shorthand property and we can use it to combine grid template rows that comes first and then

a slash and then grid template columns.

With that said, if you go to the docs and you look at grid template, there's two things I want to

highlight.

There's a separate property we have yet to cover called grid template areas, so don't mix them up.

This is not the shorthand.

This is a separate property grid template is a shorthand.

And what's kind of confusing is that grid template is actually a shorthand for grid template rows,

grid template columns and potentially grid template areas.

This other property, their names are very similar, but they're not the same thing.

So we don't know about grid template areas yet.

That's coming up.

We are going to learn it.

But for now, if you're looking at the syntax here, ignore anything that says grid template areas.

If you see stuff like this probably doesn't make any sense, we will learn it.

But as you can see, the basic syntax that we already know is grid template rows, followed by a slash,

followed by grid template columns.

And for now that's all there is to grid template rows, slash and then columns.

// Lesson 222. The Minmax() Function

minmax() lets you define a minimum and a maximum value for the width a column should span or the height a row should span.


it's a function called

min max.

And what min Max lets us do is establish a range.

Let's say we're working with columns, a range of widths, a minimum followed by a maximum.

So in this example, every column, it's just one column here that we specified is a minimum of 100

pixels up to one fraction.

So minimum comes first and then maximum.

If you reverse the order, if you put something bigger first and then something smaller, it will be

ignored.

So minimum first, then maximum.



And then, of course, we can do the same thing for rows and I can use the syntax in here for grid template.

It's exactly the same, right?

I can put this wherever I want if I'm specifying columns or rows or using the shorthand to do both at

the same time.



And I'd say what's most common to do is set a minimum threshold that is a hard number, like some number

of pixels or a percentage, but then set a more flexible high end or maximum value.

So this pattern is pretty common, some small value for the minimum and then a fraction or two fractions

or a percentage, something that can scale as the maximum.


So if I want to allow expansion either with rows or columns based upon the size of the content, I can

set a minimum like 100 pixels.

And then instead of setting a maximum, that's a hard number, I can use the auto keyword and this basically

says start at 100 pixels for your minimum range.

Your maximum is based upon the actual size of your content.

So in this case, we've got a really tall piece of content and you'll see that the row expands to accommodate

that, right?

And now that row is 700 pixels.

So by using the auto keyword for the maximum value, right, our manage still 100 max is auto.

We're saying we're allowing this element, we're allowing the row to grow to accommodate the maximum

size of the content itself.

We also have the keyword min content and this represents the minimum content contribution of the grid

items, basically the smallest that the box could be or the grid element could be.

So we could start with something being at its minimum size and then allow it to expand up to 1000 pixels,

setting auto for the max value of minmax function will be dependent on the width/height settings of the grid container. the container will expand for grid item content if the container does not have strict/hard limits for width/height. Otherwise it will expand to the hard limit set by the container.


I think it's best just to keep it simple for now, right?

We specify a minimum value and a maximum value and the grid row or grid column is going to span somewhere

in that range.

It will try to take up the maximum.

If there's space, it will take up the minimum if there's not space or somewhere in the middle.

// Lesson 223. Working With Repeat()

repeat() lets you define many columns or rows, with certain/specified values, with ease, instead of typing the same thing over and over.


It's just a helper, a utility function that helps us shorten up our code so we can easily repeat a

value.

Like in this case we're repeating one fraction three times, one fraction two times.

So it's a function.

We write, repeat, we write parentheses, and then we have the number of repetitions.

That's our first value and then the actual row or column definition.

And the same thing works for rows of course, and for grid template.

// Lesson 224. Fit-Content

fit-content() tells a grid track to be as wide/tall as its content, but with a max value that it shouldn't exceed. it takes a bunch of different values, like px, %, etc. as a max.


Let's say we're working with columns.

We can set some column to be as wide as its content, but then also give it a maximum value that it

should not exceed.

So again, fit content is a function we can use to say take up the normal size of your content if possible,

but don't go above this threshold.

// Lesson 225. Controlling Grid Gaps

grid containers come with gap styles to easily control the spacing between grid items, such as column-gap and row-gap


So we have two properties column gap and row gap that allow us to specify how much space the gap size

should be between each element in a row or in a column.

So if I specify that the column gap should be 16 pixels, well between each column, we'll have 16 pixels.

If I specify the row gap is 16 pixels will have 16 pixels of space between each row.


So again, it's a container or a grid container property.

We don't do this on the boxes (i.e. grid items) themselves

Now, please note, I don't know why I said please, but note that it is not on the outer edges, right?

There's no gap on the edge of the container.

It's just between each column (i.e. the gaps do not apply to the outer boundaries of the grid container)


And I'm using pixels, but you can use any length.

You could use a percentage, you could use I mean, centimeters if you wanted to.

You can use rams, whatever makes sense.



So we also have a shorthand option to do both of them at once.

It's just called grid dash gap.

And if we specify a single value, it will set that value for the row and column gap.

So grid dash gap, let's say 20 pixels everywhere, rows and columns.

Now we have 20 pixels between the columns, 20 pixels between the rows.

Simple enough.

Now this property is also known as just gap.

It says somewhere.

Here it is.

Note that grid gap is an alias for this property.

There's a couple of examples of that in CSS grid where you can optionally prefix the property name with

grid, but you can also just use gap.

But what I wanted to show you is that you can use two values and if you do two values, the first one

will be for the row gap and the second one will be for the column gap.

// Lesson 226. Grid Exercise 2
