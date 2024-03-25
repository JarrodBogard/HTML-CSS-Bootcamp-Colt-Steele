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

// Lesson 145. Radial, Conic, and Repeating Gradients

// Lesson 146. The Background Shorthand Property

// Lesson 147. Fancy CSS Filters
