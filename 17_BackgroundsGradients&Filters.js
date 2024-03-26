// Lesson 137. Working With Background Images
We use this all the time background, dash image and then your URL.

So don't make this mistake.

I see this a lot.

That will not work.

As you can see here, nothing happens.

We have to wrap it with URL parentheses.


Next up, I want to show that we could use an image hosted somewhere else, so I'm going to go to unsplash.com.


We see the image, but we see multiple versions of that image.

It actually tiles and it repeats to fill the space.

So if our image is too big for our container, like all the other images I showed you first, this one

here, it's way too big for this little 300 by 300 box.

It doesn't scale it down.

It doesn't shrink it.

It just shows a little portion of the original sized image at its original resolution.

And then we don't see any of the extra stuff, of course, that overflows the container.

But if I have something smaller, like the peacock image, Peacock dot P and G, that won't fill up

the space.

So the default behavior there is to have it tile and repeat.

So we're going to learn about positioning and resizing images in the next video.

So we've got a lot more to cover in terms of manipulating the background.

The last thing I'll show in this video is that you can actually have multiple background images and

even a background color at the same time.

So my peacock image is transparent in part you can see there, right?

It's really just an icon.

Most images don't have transparency, I would say, but you can.

And if I have a background color and I set that to be, I don't know, Aquamarine, for example, that

image goes on top of the background color.

So we can have both at the same time.

You can set the background color on the exact same element that you set a background image on.

But then if I change this image to be something else, like I don't know, what about the sunset image,

we're not going to see that background color because the sunset image is not transparent.

It just blocks everything out.

The background color is there behind it.

We just don't see it.

And then finally, I'll show that you can have multiple background images set at the same time You do

it like this.

L And then we have a comma separated list.

So let's do images slash peacock.

So this will set the first background image, the peacock, and then after that it sets the sunset image.

We now have our peacock image on top of the sunset.

I don't do this very often, at least not with the images that we're working with right here when we

get to gradients.

This is something that does happen.

You'll stack gradients, you can have a background color, but that's the syntax.

So you can have as many as you want in there separated with commas.

Each one is its own URL, little expression.

And if I change the order just to show you what happens there.

Now the sunset image is on top of the peacock image and we don't see the peacock.

// Lesson 138. Controlling Background-Repeat

So background repeat comes into play when your image doesn't cover the entire space of the container

that you've set the background on.

Like with our peacock image.

If I just simplify this a bit more, we only have this peacock image in here.

It's really small.

It's 96 pixels by 96.

I think the default behavior, as we learned previously, is that it will tile to fill in as much of

that room as it can.

So if I make this container bigger, it's just going to keep tiling.


So there's a property called background repeat and background repeat is used to make sure that the background

either does repeat or does not repeat when it is smaller than the element that it's supposed to take

up or that it's supposed to cover.

So background repeat, it always trips me up because we don't say none.

That might be what you would think to turn it off.

It would be none.

Like many other properties, it's actually no repeat.

So if I set it to be no repeat, it turns off all repeating.

And now we just have our one little tiny baby peacock and then a bunch of empty space in the background.

We also have a couple of other options.

We can say repeat X, which will only repeat in the horizontal or x direction.

We have repeat y only repeats in the Y direction up and down.

And then we just have the default, which is repeat both directions.

It repeats in tiles out the entire element.

// Lesson 139. Sizing Our Background

That would be nice, but it's not really that common to have the images be the exact perfect size and

aspect ratio as our box here.

So this is where background size comes in.


This one has to do with sizing our images.

And this is super important because most of the time we'll have some elements of some unknown size or

whatever size it is probably not the same size as the actual image that we have that we're trying to

set on the background.

That would be nice, but it's not really that common to have the images be the exact perfect size and

aspect ratio as our box here.

So this is where background size comes in.

Now what I'm going to do is pick one of these images.

Let's work with this one.

How about the food image?

So I'm going to set food.

So images slash food dot, is it JPEG or PNG?

It is JPEG.

And I'm also going to resize my box to be a little bit larger, 500 by 900 pixels.

And here we are.

So it's pretty large, right?

500 by 900 to decent size, but it's way smaller than the image itself.

If we look at this image, we're basically getting like this, I don't know, ten, 20% of this image,

maybe it's a little more than 10%, but a small portion of the image, this corner with what looks like

garlic or gnocchi, I think it's garlic in a bowl and that's it.

So maybe I want a bit more of that image to show up.

I want to scale it down to fit within the confines of this box.

That's where background size comes in.

Now there's a lot to background size, but there's two keywords that come up again and again contain

and cover.

We also can set specific numbers using percentages and units or set auto.

But let me just show you contain and cover to start.

So Contain says that it will scale the image as large as possible within its container without cropping

or stretching the image.

It fits in here.

But of course, it's smaller now than the original box.

And so it does tile and repeat.

And that may not be what we want, but this is one option.

We can see the whole thing.

But then we either have to say no, repeat and have extra space left over, or we have tiling or repeating,

which we may or may not want.

So that brings us to the second option, which is cover.

Cover will scale the image while preserving the original aspect ratio to the smallest possible size

to fill the container so that the width and the height completely cover the container.

There's no extra space, no repetition, but it does mean we probably won't see the entire image.

It will be cut off at some point, vertically or horizontally unless it's the exact same ratio.


So let's set it to cover and this is what we now see.

So very different approach, right?

The image itself is not going to fully be displayed in this box because we set it to cover and the rules

of cover again, just say make this image, cover the full width and height of this container without

distorting the image.

And that usually means you're not going to see the whole thing.

// Lesson 140. Positioning Background

Next up, we've got background position.

We use this property to set the initial position of the background image relative to the container that

it's the background for.


So background position has a lot of different options for how we use it.

The simplest is to use a keyword top left, center, bottom right, but you can get very detailed using

percentages, using a combination of the two, using specific lengths and pixels or rams even.


If we set the keyword to be centered, that will center the image.

So the center of the image will be in the center of its container.

If I set it to be top, then it specifies that the top edge is where the image should be placed against.


So if I set bottom, this is going to be the bottom edge of the background image against the container,

and then we'll see some part of it going upwards from there.


We see everything starting from the bottom of the image.

And then, of course, are people's heads get cut off?

Maybe not what we want, but we're seeing everything on the bottom.

And I could do the same thing with the left or the right.

We're not really going to see a difference from the original, though, because we're seeing the full

width of the image, because I've said it to be background size of cover.

But let me get rid of that and just go back to the massive original size as you see there or or maybe

even just do this.

I'll make it 150%.

Okay, there we are.

So right now what I've done is made the image larger than the container.

And we see a small portion of that image.

And the portion we're seeing right now is this guy's head and this woman's head here.

But if I set position to be right instead of left, now we see the other woman's head on the right side,

Right.

We're starting with this right edge and then anything on the left may get cut off.

But if I go back to setting background size to cover, we're not really going to be able to control

the left or the right because we're getting the full width of the image.

It's just the height that's getting cut off.

So again, background position, left, right.

You can do top, bottom.

If I set it to be top, we start with the top edge aligned and then the bottom gets cut off.

And then we also have center.

So let's try one more image.


But I'm going to show that we can actually do multiple keywords like top right?

And this will align the top and right edges because if we look at this, there's some whitespace over

here on the right that we're now seeing.

If I did top left, it will align the top and left edges.

So we'll see this space over here and not the space on the right.

And of course, it's only matters when we have excess image that is not being displayed.

So let me show top left.

Now we see the left side and the top and then and then whatever else fits is displayed.


But we can also get finer control if we use things like a percentage or a length.

So if I specify a single percentage or length, that will be relative to the left edge of the image.

So if I wanted it to be if I make this even skinnier.

There we are.

We're only getting a small portion of that image.

If I set background position to be 0%, that's going to start with the left edge and go from there.

But if I set it to be 50%, then that image is aligned at 50% across right in the middle of this lady's

face to the left edge.

And if I do 100%, then it's all the way pushed over to the right.

Again, I don't use this very often.

I usually am happy with just the keywords, but you can get very fine control, even using pixels down

down to a single pixel two to control the exact position.

And if you do two values, X comes first and then Y, right?

So if I did 0% first, that would be the X, So that's going to be full on the left.

But then if I did 100%, that's going to be full on the bottom.

And again, that would just be equivalent to me saying left bottom or bottom left.

It's exactly the same.

We also have three and four values in taxes.


I won't say always, but a lot of the time you're good just using top left, right, bottom center for

most backgrounds.

// Lesson 141. Working With Background-Clip

So background clip controls where the elements background extends underneath.

So does it go all the way under the border of an element or is it just to the padding box?

Is it just the content box?

Those are really the three common values that you'll use.


So it's sort of abstract looking, but you can see now that I've made the border dashed and very thick,

that the image does extend underneath the border all the way to the edge of the very edge of the box,

including the border.

So, you know, I made it dash.

That gives us some holes we can see what's happening there.

That's the default.


But if I want to change it, I can say that I want it to extend only to the padding box.

So everything up to but excluding the border.

So that's background clip and then padding box.

And now my image goes all the way up to the border, but it does not go underneath the border.

It does cover where there's padding.

So if I set padding in here to be, I don't know, 30 pixels in all sides, that image covers that padding.

But then if I change this to be content box.

Now the background image does not cover the padding.

It does not go through the border either.

It stops at the edge of the content box.

And if I inspect, hopefully you remember how that works, right?

Where every box on the page has its content box.

What we see in blue and then padding that may or may not be there.

And then the border and again the default was to extend all the way through to the end of the border.

And then we changed it to only go through the padding.

And then most recently we said only the content box.

// Lesson 142. Background Exercise

What I want to do is make sure that I see the entire wolf.

So how am I going to do that?

I'm going to use background position.

And background position allows me to nudge an image in the background using a length like pixels or

even percentages.

But I'm just going to anchor the image so that the bottom left corners or the bottom left edges, rather,

which are these two edges, right this edge and this edge are anchored to the bottom left of the, the

div, the container div.

So we use background position.

And if I do bottom just to start.

You can see that we get the bottom middle of the image.

I want to use bottom left.

And there we are.

We see the entire bottom left of the image.

It's aligned with the bottom left of our container, and then anything else gets cut off.

And that was the solution I was expecting you to use.

// Lesson 143. An Important Note About Gradients!

// Lesson 144. Creating Linear Gradients

A linear gradient is a transition from two or more colors along a straight line.

So that could be at an angle.

In this case, it's just top to bottom, right from red to this blue.

In this case, it's left to right.

There's a couple of colors along the way.

Or we can even do things like this where there's angles involved with multiple linear gradients.

There's plenty of examples on this MD and documentation, right?

So it's not something that has to be top, you know, perpendicular to the box, top to bottom, left

to right.

It can go out at 45 degree angle.


And then I'm going to set the background image and instead of doing the whole URL thing, I'm going

to write linear dash gradient, and then in parentheses, I can list two or more colors and I'll just

use named colors to keep it simple.

Let's do cyan to magenta.

And there we are.

That's our beautiful gradient.

Starts at cyan and it ends at magenta.

And then it transitions between the two and it goes from top to bottom.

I could add a third color in like, Let's do cyan.

Whoops.

What did I just do?

Not that cyan.

Yellow.

Magenta.

And please remember, you can use any color you want.

Hex codes are GB.

I'm just using named colors to make it easier to follow along.

And there we are.

Cyan to yellow.

To magenta.

We can change the angle.

So if you scroll down, you'll see all sorts of syntax.

We can specify the angle as the first value before colors.

So I could do 45 degrees.

45 deg.

Is what we write.

And there we are.

Now it's at an angle, right?

It starts at cyan to yellow to magenta at a 45 degree angle.

I could instead say a 90 degree angle and now it's going from left to right instead of top to bottom,

which is the default.

But if you prefer, you can actually use things like to left top to bottom, right, things like that.

So instead of using angles, let's do two bottom right.

And there we are.

It starts at the top left and it ends at the bottom right.

You can have as many colors as you want in there.

I just have three for now.

But you can put as many as you want and you can even have multiple gradients stacked on top of one another,

which you would only notice if you used RGA Colors, which is exactly what this example is doing right

here.

So I'm just going to copy it instead of making you watch me type that whole thing.

Now, there's a lot going on here.

What you'll see is a lot of our GBA colors, but we have one linear gradient and then a comma, a second

one, and then a comma and then a third one.

And these are all using our GBA colors, so they're transparent.

If I just show you one of them to start.

Let's just delete all of this.

That's one gradient.

And then this example stacks on another two.

So here's the second gradient.

Different angle, different colors, but transparent.

And then here's the third one on top, and you can get this cool effect.


What's cool is that there's all sorts of examples online.

There's gradient generators.

You don't have to create this yourself.

You can find really cool things.

You just copy and paste and put them in your code and tweak the colors until you're happy.

But that's the basic syntax for linear gradient.

It's one form of gradient.

In the next video I'll show to others.

But linear gradients, I'd say, are the most commonly used.

So two or more colors, any type of color value.

And then before the color you can specify a direction using degrees or using like English word keywords

to bottom, right to top left, that sort of thing.

You can even use turns.

I've never used that, but it's another unit.

You can have multiple gradients.

And the one other thing you can do that I didn't show is you can control the width of each color band,

right?

So if you want it to be 60% orange, you can do that by saying orange, 60% and then Cyan.

Otherwise they'll just split the space as we've seen before, right?

If I do background image and then linear gradient red to blue, it's going to be equally red and blue

and then this stuff in the middle.

But if I say blue starts at 30%, there we are.

So I'm not saying blue is 30% of the gradient.

I'm saying that is where this color band begins.

So we get a little red and then a lot of blue.

And you can do that for all of the colors.

You could do that if you had ten colors.

You can give each one a specific stop.

But for our purposes in this course, this is a good enough intro to the basics of gradients.

As you can see, there's a lot you can do.

You can even create these stripe defects if you provide a starting and stopping points that overlap.

But there's all sorts of really cool examples on the ducks, right?

Lots of examples here.

And websites like this one UI gradient that lets you just use the arrow keys to go through a bunch of

gradients until you find one you like, at which point you can copy the code right here, copy that

and put it in your own code and you'll get that gradient.

// Lesson 145. Radial, Conic, and Repeating Gradients

So a radial gradient is another type of gradient.

It's another transition between two or more colors, but it radiates outwards from some central origin.

So here's some examples of that.

Different colors, you can position it, but it's not just in a line right from top to bottom or 45

degree.

Whatever a linear gradient is, it's radiating outwards.


Let's do a radial gradient from cyan to pink.

It will start a sign in the middle and radiate out into pink.

We can have multiple colors cyan, pink and yellow.

Again, any colors will work.

Don't confuse the fact that I'm using named colors.

That doesn't mean you should use them.

It's just easier to show you in a video, but often it will be GBA colors or hex codes, as you can

see in the examples here.

It's just a little nasty to type that if you're following me.

The next thing we can do is actually control the ending shape.

So right now it's a circle.

It ends up as a circle, and that's just the default when you're in a box, I mean a square.

But if I change this to be like 700 by 400, that is no longer a circle, right?

It stretches based on the size of the container or the size of the element It's the background for.

But I can control that and say, No, I want you to be a circle.

And now we have a circle in there.

Compare that to Ellipse, which is the other value.

It's definitely not a circle.

You can tell the difference, hopefully.

And then we can also position this.

So let's do circle and then I can say at center.

Whoops, don't want a semicolon there.

I need a comma and it will be centered.

But I can also do center at bottom or circle at bottom.

And there we are.

We now have this radiating gradient outwards from the bottom.

And it would be a circle if you saw the whole thing and there's a lot more that you can do.

So again, I'm not going to go into detail, but there's a lot you can specify the size, you can specify

the color stops.

Same thing that we saw in the previous type of gradient.

So I could say that Cyan goes for the first 90% and we get a lot of cyan, and we could do that with

all of them.

Maybe not 90, maybe 60%.

There, there we are.

So you can control all those stops.

This basically how much space each color takes up, and that's all that I'll show for radial gradients.


So a gradient is gradient of two or more colors that transition from a center point by rotating around

that center point.

So a radial gradient radiates outwards.

Right.

We saw that a conic one will rotate around some point.

It doesn't have to be in the middle, but that's the default.


Let's go from cyan to yellow just like that.

And this is what we end up with.

So we have our center point and our gradient starts at cyan and then rotates around.

It pivots around that center point to become yellow.

And you can add as many stops as you want.

So I could add in magenta as well.

And there we are.

Now we do get this harsh line, right?

It doesn't transition from magenta to the end, which would be cyan again at the beginning.

This is the beginning of the gradient.

That's the end.

It's just a harsh cut off.

What you can do to fix that, if you want to smooth transition, is to have it end on cyan.

So it starts.

Cyan, it ends Cyan.

And there we go.

We've got a nice looking little gradient.

There are many things you can control, just like with all the other gradients, right?

I can set stops like 90%.

For cyan, we get a lot of iron and then a quick transition to yellow and magenta and then back to cyan.

And you can do that for all of them.

You can even end up with hard stops, right?

So if I do 30% and then yellow starts at 30% also, and then it goes to 50%, just as an example, we

get a hard line right there.

So you could use this to make some sort of effect where you have these bars of color going around,


You can control the rotation, you can control the origin.

So in this example from 90 degrees at 0000 would be the top left corner.

You can use all sorts of colors, right?

This is HSL colors.

You can have as many stops as you want.

We can move the center point using percentages, which is one option 0%, 25%.

So that's zero for the left and right and then 25% for the top and bottom.

So the center ends up right here almost in the top left corner, that would be zero zero.

This is zero 25.

And you can do things like set hard stops, as I mentioned, so you can get a pie chart.


And that brings us to our last grouping of gradients which are repeating gradients.

So there's a repeating linear gradient which does what it sounds like it's a linear gradient that transitions

from two or more colors in a line right in some direction.

But it can then repeat if you use repeating linear gradient.

So you end up with things like this and you can control it, you can fine tune it, but basically it's

going to repeat all the stops, all the different color stops infinitely to cover the container.


Linear gradients.

That's probably the most common in my experience.

But there are these other ones that we've seen, right?

Radial conic and then we have repeating linear repeating radial and repeating conic gradient.


It goes from blue to red and it repeats three times.

I'll just copy this example in background image.

And there's our beautiful three time repeating gradient.

Right?

And if I change this number to be something like 10%.

Now we get ten of them.

And there's different effects you can accomplish.

You can do fun stripes, zebra stripes, You can do things like stack them on top of each other.

So this is multiple repeating gradients at different angles.

It's kind of a cool looking effect there.

You can make plaid.

It's a lot of work if you try to step through this one piece at a time, but there's all sorts of cool

code pens where people show making plaid effects and different fabric patterns using repeating gradients.

We also have repeating radial gradients.

So it's the same concept.

It's a radial gradient.

It radiates outwards from some center point, doesn't have to be the middle, but in this case it is.

And then it repeats instead of just happening once it can repeat over and over.

And that about wraps up our discussion on gradients.

There is a repeating conic gradient too.

Again, these are kind of niche things, but you can get some cool effects if you know what you're doing.

But for our purposes, most of what we'll be doing when we use gradients is pretty straightforward.

Linear gradients.

That's probably the most common in my experience.

But there are these other ones that we've seen, right?

Radial conic and then we have repeating linear repeating radial and repeating conic gradient.

// Lesson 146. The Background Shorthand Property

shorthand, but the background one is a little

complicated just because it can set all of these properties in one go.

Now, I don't think I've ever done that where I set every single one of these.

At the same time, there is syntax down here, I'm sure, to tell you exactly how to do that and what

order makes sense.

Yeah, we can find that out here.

Generally though, I'll use it if I want to set the background image and the background position and

size all in one go.

So you can see if you just set a color, it's going to set background color, but if you set a URL for

an image and then repeat style, that's going to set the background image, URL and background repeat,

there are some important rules you have to set.

If you're going to do the background size, you have to set it right after position, background position,

separated with a slash.

So center slash 80% would set the background position to be centered and then the slash and then 80%

is set for the background size.

That's just the rule with how it works so that CSS doesn't get confused.


But as soon as I want to scale the size or change that size like maybe 200% as an example, I can't

do this.

I have to have a slash after background position slash and then the background size, they have to be

a pair.

It's just a rule with how that works.


And what's even more potentially confusing is that you can list as many background layers as you want.

So I could have this first, right, If this is my first layer, and then after that I can have a second

layer.

We've seen this already with background image.

Let's do image slash sunset.

Let's just start with that.

And where is my sun set?

Oh.

Dot jpeg.

And now we have our sun set in the background.

And I can do the same thing where I can set.

I want it to be centered or I want the left edge and I want it to be whatever size.

Maybe I'll just say left for now.

And there we are.

And I can set no repeat and all these different things with different layers separated by commas.

So this is our first background layer, and then this is the one behind it.


But really the main takeaway should just be that it's a shorthand property.

You can set all of these things at once and the one main rule you have to remember is that if you are

going to set background size, it has to also be set along with background position and they have to

be separated with a forward slash.

And that's pretty much it for the background shorthand.

// Lesson 147. Fancy CSS Filters

It doesn't really have to do with backgrounds per se, but it's kind of in the same category.

It's a property called filter and we can use it to basically apply almost like Photoshop esque filters

to elements to change the hue or the blur, the contrast that makes something gray scale.

And this is not, again, related only to backgrounds.

It really can apply to the entire element.

But I'm putting it in here because it kind of fits along with the stuff we're covering.

So it's a separate property.

It's just called filter, and then you can specify any of the built in filters.

And there's a great article on MD and explaining these built in filters.

If you go to former formal syntax, you can see them all blur brightness, contrast, drop shadow grayscale

hue, rotate invert opacity sepia and saturates.



It would work if I did background size, cover or contain.

And that works great.

But because I was trying to use the shorthand, I also have to specify the position at the same time

with that forward slash.



So we have this image and if I want to filter it, there are all these different options that I mentioned.

It's a separate property filter.

And then let's try let's start with Blur.

So Blur is going to perform a Gaussian blur.

We specify a number of pixels for the radius, how many pixels to blend into one another, so more pixels

is more blur.

It doesn't work with percentage values, but let's do let's start with five pixels.

There's our blur, right?

If I do 20 pixels, we're going to get an extreme blur.

But notice it's the entire element.

It's not just the background.

So I kind of mentioned this already.

It's not tied to background.

This could actually just be an image element itself.

So I should demonstrate that to let's just put an image down here and this image will be images slash

woman.

Now let's do food.

Food has some good colors in there.

All right.

So there's my image.

And then if I select the image in here, I could still do things.

Let's probably resize it first with maybe 500 pixels or something.

There's my image.

So if I apply a filter to it like Blur, let's do three pixels.

It also works, right?

It's not a background image, it's just a straight up image element.

I want to be very clear about that.

Now let's try some of the other ones.

We have contrast, we have brightness.

We have grayscale.

So if I do grayscale here, it makes it grayscale.

Looks kind of nice for this image.

I can also add more than one filter like add contrast in here, and contrast is specified with percentages.

So 100% is the normal contrast.

Anything below that would be less contrast and anything above it is more.

Let's try 150.

So it might be hard to tell.

But if I you can hopefully see that it's more contrasty.

Let me just go back to 100.

There we go.

And let's go the other direction.

Let's go to 50% contrast and we get less contrast so we can stack these different filters together,

just separate them with a space.

And then we have other ones like Hue.

Where are you?

Hue rotate.

That's a fun one.

This allows us to rotate the hues within the image.

So let's try an example.

Get rid of grayscale and do hue rotate of 180 degrees complete opposite side of the color wheel.

Oh, look at that.

Nice and pretty looks infra red or something.

And I think that's enough of showing these filters.

There's there's other ones.

We have opacity, we have saturate.

If you want to increase saturation, it works the same way where as contrast 100% is normal, zero is

no saturation and anything above 100 is extra.

We have sepia and as I said, you can combine them together.

So we'll see some of these later on.

At least one of our projects uses Blur for a nice little hover effect.

When you hover over an image, it's slightly blurs, but that is the filter property and again, it

works on the entire element.

So if on this image I set a border that has a, I don't know, ten pixel solid pink border, well,

that border is not pink, right?

You can see it right there.

It's this inverted 180 degrees on the color wheel, different hue, greenish color.

So again, not really related to background specifically, but if there is a background like we had

on this element, it's going to be affected.