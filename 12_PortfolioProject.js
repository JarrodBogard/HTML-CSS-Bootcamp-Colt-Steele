// Lesson 95. Introducing Our Project

// Lesson 96. Basic Project Setup

For example, I could wrap this all in a div and that would work, but that's not the best element to

use.

When I have navigational content and I have header content, this is the header of the page.

Why not wrap it all in the correct associated element, which would be the header.

If you're not familiar with the header element, you can check out the MDM page on it, but basically

it represents any introductory content.

Often has navigational aids logo, search form.

Anything that goes at the top, usually at the top of a document or the top of an article or something

like that.

But we're talking about the top of our web page, the header.

So I'm going to go to my indexed HTML and get rid of this H one.

I'm going to make a header element and then inside of it I'm going to put an H one for this text right

there.

It's the largest, most important piece of information to main topic of the page.

So an H one element makes sense.

You could do a paragraph or a span or something, but I'm going to do an H one because it is the most

important central topic of the page.

All right.

So Joseph Schmo and then I have a pipe character space ceramics.

Look it beautiful.

And then we'll talk about this.

These three links.

These are in fact, links.

Are navigational links.

So I'm going to wrap them in a nav element, which is also new.

It's not new, but one of the newer elements in HTML that is semantic and we use it whenever we have

navigational content.

So that could be in the footer, it could be in the nav bar.

This is probably a nav right there, but this is also probably a nav on the sidebar, although I don't

actually know.

But I would expect.

Yes.

All right.

There's a nerve.

You getting worried there?

Anyway, we're going to use a knife because it's the most appropriate element.

And the reason we use any of these semantic elements like header and NAV is to improve accessibility

of our web pages, both to users who are using screen readers, but also to code and crawlers and scrapers

that come across our web page.

They'll know, here's the navigational content, so I'm going to put a nav in there, just the nav element.

And then instead, instead of having three links floating around, the proper way of doing this is to

have a list.

That's what this is.

It's a list of links.

They are connected, right?

They all have to do with the same thing.

They're all parts of this website, individual pages.

So I don't want to just have three disparate eh, elements, anchor elements that are floating around.

I'm instead going to structure it as an unordered list where each ally is an anchor element.



But that is our basic markup.

This is the way I would structure it.

You could get away with just an H one and three links, but the proper way of doing this, even if it

makes a little more work for us, is to use the semantic elements that actually give some meaning to

our markup.

Hey, this is all header content.

Here's an H one.

It's the most important topic on our page.

It's the name of the page.

It's with the whole page is about.

And then here's navigational content.

We have a list of links.

Here are the three links.

// Lesson 98. Styling The Navbar

But the first thing I always like to do is get the content in the rough, approximate area where I want

it to be before I start worrying about all the decorative stuff.

I guess it's all decorative, but you know, I want to have my links side by side with the H one before

I worry about how does this font weight look?

How about the spacing between them?

What about the colors and the underline?

We can come back and do that once things are in the right area.

So to get them in the right area to get my links up here.


Let's just say the H one is inline block and remember what inline block means.

We get the behavior of a block element that will flow in line with other content.



Now, why would I use inline block instead of regular old inline?

Well, remember, the key difference there is that inline block will respect vertical and horizontal

margin and padding, and it will push other stuff away, which is something that I'm going to want to

do here.

There's some space I want to push away, possibly here and down here.

So inline BLOCK gives me more flexibility with what properties I can tweak.

Whereas if it was all inline and I tried to add vertical margin, for example, it wouldn't take effect.

So I'm going to do inline block, but we're still not there because we have our bullet points.

Each ally is a block element.

If I hover over an Lee, it might be hard to tell that it's a block level element because it looks so

small.

But I mean, we can see each ally is on its own line.

It's pushing the next one down onto a separate line. 


First of all, if we're setting display inline block on three different selectors individually, is

that the best way of doing it?

Is it better for me to combine it like this and say all h ones, all navs, all allies?

That will work, as you can see.

There we go.

That's pretty close to what we want in terms of layout.

We can tweak the spacing and the font size and the font weight, but now we've got our links side by

side with the H one.

But is this a great idea?

It really depends on the rest of our styles.

If we really only were doing this as our only property changes to all of these different selectors,

then fine, we can do it all together.

But the moment I then want to say also my h one has a different color.

Well then I'm going to have to reopen and re select h one and say color of purple.

And at that point if I diverge a lot, if these three things have totally different styles down the

line, maybe it doesn't make sense to combine them just to share one property.

So we will rework this.

The selectors will organize our CSS towards the end.

For now, I'm not going to do this combo method, I'm just going to select all H ones, all navs, all

allies and style them to have display of inline block individually, and then we can revisit it and

tweak our our selectors and organize things.



But the next thing I want to cover is the way that I've written these selectors is too broad.

So all navs, all allies are now inline block.

I probably don't want to do that.

The reason for that is that a typical website could have multiple NAVs, for example, on MD and this

is a NAV up here and as we saw, this is a NAV over here and this might not be an inline or an inline

block nav, I might want it to be block.

So I don't want to paint with such a broad stroke to say every nav on this page, and especially not

every ally, right?

These are allies here on MD RN, but these are also allies.

So this is too broad the way that I've written things so far.

So I have a couple of choices.

I could get more specific by saying only the allies inside of the header or only allies inside of a

NAV.

But I think what I would prefer to do is give my nav a simple class and maybe call this links or yeah,

links is good.

And that way I can reference that links class and filter my styles down to say instead of just nav,

I'll say the links nav.

Right.

Anything with that class which happens to be this nav.

And then instead of all allies I'm going to say lies inside of the element with class of links, which

is this nav here.

And you might think this is a better use case for an ID and that is a very valid point.

IDs are good when we have one thing on a page, right?

One links NAV, but I'm actually going to stick to using all classes in this video and in this section

and I'll talk about that approach later when we cover specificity, which is coming up very soon.

But there's a reason some people avoid IDs.

You totally could do it, but I'm going to stick with classes and we will push we'll punt that question


And this means I could then have a regular UL with allies here and they are going to be block level

elements as we see right there.

So now we have narrowed down our styles, which is always good.

We want to try and avoid writing styles for every element unless we know that every H one or every ally

needs to behave the same way.



I could style the UL, I could style the Allies or even just the whole NAV and say everything in the

nav has a font size of 20 and remember, font size is inherited.

So I have a lot of choice.

There's no one obvious right or wrong way.

If I were to have other stuff in here, not links, then I want to have a different font size.

Well then that's a different story.

I may not want to inherit the font size.

I would set that individually on other elements, but let's start with the easy stuff color and text

decoration.

So instead of links, I'm going to select all anchor tags.

So again, links is our class that I added to the NAV.

So this only affects anchor tags buried somewhere within this nav instead of saying every anchor tag

on the page and I'll give it a color of black and I'm going to say text decoration is none.

That removes the default underline.



There's no border here, so you don't necessarily know if I used margin or padding to push these elements

away because the background is white, the background of the content is white and there's no border.

So it's the space on the inside of the element or on the outside.

Typically, I would use margin because margin is better for when you're trying to push things away.

That's kind of the point of margin is that it's a force field outside the element.

So that's what I'm going to use here.

But I could get away with padding when there's no border,

// Lesson 99. Finishing Up The Navbar

Another thing to consider is that do I need to apply this margin to the H one or do I apply it to the

header element or do I apply padding to the header element?

We have a lot of choices and there's not really one right or wrong choice here.

Unless I was working with a background color, in which case padding is going to be different.

Right.

Or if I have a border padding versus margin would be very different.

If I have a border on the h11 pixel solid or this is on the header, but when pixel solid red, if I

add margin to it of 20 pixels, that margin is on the outside.

If I instead did that as padding, now it's on the inside.

But when we don't have a border, you can't tell the difference anyway.

We have to figure out where we want to apply this space.

And I actually think it makes more sense to apply it to the NAV itself or to the header element itself

rather than just the H one.

So that's what I'm going to do.

I'm going to select the header element on the page.


It looks better, but there's too much space now over here compared to the original.

If you watch the top or the left, there's too much.

At least on the top.

Where is that extra space coming from?

Well, I never remove the default space on an h1h once by default.

Have a margin.

We talked about that.

If I select the H one.

Right.

You can see that orange that's highlighted there, the top and bottom margin.

So that's adding additional space.

And I can set that just in the devtools for now.

I can say actually you h one have a margin of zero and let's compare now.

OC Very close.

The main issue we have at this point, let me just go ahead and set on the H one margin of zero for

real.

I was doing that in the dev tools, but let's set it here.

Now let's look at the spacing that we have between the links, the UL right there.

Well, it's a NAV and then inside the nav there's a UL and then what we have over here where there's

a little less space.

Can you see how that's moving back and forth?

It's a little hard to see on the video, but if I hover over this ul, you'll see that there's padding

in there, that green.

Where is that coming from?

That's another browser default.

And this is something we'll deal with quite a bit in the course.

A lot of things have padding in margin by default.

We will learn how to reset that, how to change it all at once, but for now we'll just work around

it.

We're going to say, okay, well this ul, I don't want you to have any padding, so I'll set padding

to zero.


This is just some other ul.

It's indented off the left if I hover.

Where are you?

It has padding by default.

That's just the default style of a list.

It's sort of pushed in a tiny bit to show, I guess, that it's visually different.


You could instead add padding to the right or padding to the left.

Assuming that we don't have borders in play.

I'll just finish by showing you that if I change this to padding, I'll still keep margin zero and I

refresh the page.

It also looks exactly the same.

So that option would work just fine.

But this is kind of overcomplicating things, so I'm just going to work with margin like I had before.



So to selectively target one link, I would set up some sort of class and I would probably call it active

or current.

I think active is probably more common, and that's just used to refer to the fact that this is the

active page and then you could move this class to this link or this link.

If we changed pages, we won't worry about how to do that.

But that's the common approach.

So now I have this class on there.


I could select that class in my CSS and I'll say an anchor tag with the class of active and I could

just say anything with the class of active, but I just want us to get more practice combining selectors.

So this is saying an anchor tag only with the class of active.

So if I had it on some other element, it wouldn't work.

And then I'm going to give it text decoration underline.


So the way that I did this by actually using a bottom border on this element and this is really common,

you can use a border to create an underline or an over line that you can control the thickness of,

but also the spacing.

I could push this further away using padding.

I can't push this further away when it's an underline, it's text decoration.

So all we need to do is instead of text decoration, I'll do border bottom because I only want the bottom

border one pixel solid.

Black.


If I select that class or that element, I could change it and I could make it thicker.

Two pixels, three pixels, four or one.

But also, if I added a little bit of padding, let's say to the bottom ten pixels, I can push it away.

I can bring it back as I shrink that padding down.

But I can't do that with text decoration.

With text decoration, it's just where the underline goes.

You can change the thickness.

Now in some browsers we saw that, but that property is not widely available.

// Lesson 100. Creating The Photo Grid

But you can see that it is definitely some sort of a percentage or a relative unit.

It is not a hardcoded number.

The images are changing as the size of their container changes.

So that's where we could start.



So this is 40%.

It looks closer to what we want.

We are getting two in each row, and that's because there's no room for another 40%.

Right.

It's based off of the width of the parent.

And our parent right now is the body.

The images are just floating in the body and we should probably change that.

But for now it's fine.

So we have 40% of the bodies with 40% that that's 80%.

And then another 40, well, it doesn't fit over here, so it moves on to its own line.

Now, there's a couple of things that we could start we could change very quickly before we even figure

out the exact width.


Now, there's a couple of things that we could start we could change very quickly before we even figure

out the exact width.

They all have different heights or some of them have different heights.

So these two look to be the same.

But compare this one and this one.

This is a taller image or this one and this one.

This is much shorter.

And if we look at my version, the original, they were all the exact same height.

So we can just assign a height and you could play around with the number, but I'm just going to tell

you it's 500 pixels.

That's the sort of thing that I just tweaked until I was happy with it.

So I'll set a height on all images of 500 pixels and now every image is going to be squashed or stretched

to fit 500 pixels.

And that stretching may not look great.

In some cases.

We'll learn how to change that and prevent any stretching.

But this is good enough to start.

By the way, this one image looks like it is shorter, but hopefully you can tell it's not.

That is just part of the image.

It has a light color up top and then a dark shadow.

So they're all the same height now.

They're all 40% width of the body.

And I think this is a good place to stop this video.

Next up, we'll add in our headings below and we'll actually get the sizes adjusted correctly and add

the spacing and all of that.

// Lesson 101. Continuing The Photo Grid

Now, as far as the element we want to use for this markup, we have to add something into our HTML.

I propose probably an H too.

If this is the main topic of the page, it's the single H one.

Each one of these is the second most important topic.

They're all the second most important feature of the page.

So I would go with an H two, although that's just a stylistic choice.

You could do a paragraph, you could do a link or a span.

If I would do a link if these were clickable, definitely, but they're not.

So we're just going to go with an H two, I think.


What we really want to do is employ one of those tactics I talked about in the box metal section, where

we use a container element to group two things together or more than two things.

But in our case, two elements.

I want to group together an image and the corresponding heading, and then I can make each one of those,

let's say, 40% wide and add padding and margin and spacing.

And same thing over here.

An image along with its heading.

I'll group them with some element and then style that element.

So instead of styling these images and these headings just floating on their own individually, I can

group them together and that will make my life easier when it comes to styling, not to mention the

fact that it will just actually lead to the natural flow that we want, where we have an image with

an H to below it and then an image with the H two below it.

And let's say I use a div to group each one of these together.

So let me show you that.

And then we can worry about the styles.


Now, this is what we see, and it does not look great.

There's some important changes I'm going to make.

First of all, I want to make each card not be a block element.

A div by default is block, Right?

So it's going all the way across the page.

Each one of these divs.

I don't want that to happen.

I want them to share the space so that we have one card here that's 50% in one card here, that's 50%.

So instead of setting the image to be 50% or 40%, I'm actually going to style the cards themselves.

So I'm going to select all cards.

I'll give them a width of 40%, but I'm going to give them a display of inline block and I want inline

block so that they behave like inline elements.

But also I can add margin and padding and it will be respected.


If I inspect, we can see each card.

Let me move this over to the side.

Each card.

Is right there.

It takes up 40% of the width of the body.

And same thing here, 40%, 40%, 40%.

Now, it does not look good because these images are actually overflowing.

It looks like as I shrink this down, these images are way bigger than 40%.

They're exceeding the size of their parent.

And that's because we haven't set a width on them.

So that's what I'm going to do now.

I'm going to say, all right, all images, you're 500 pixels tall, but your width is 100% of your

parent.

Now, let's think about that.

Here's an image.

Every image is inside of a card.

Every card has a width, in this case, 40%.

And now we're just saying image.

We want you to use the same width as your parent, because right now they're overflowing that element.

It's too big.

But as soon as I save this and say image, you're 100% width of your parent.

Now they shape up.

Now they are as wide as that parent.

Now, instead of doing this to all images, we now have a better way of narrowing this down.

I'm going to say inside of the card, Divs, the images in there.

Same thing with my H twos.

Only the H two is inside of card.



We actually want to get this to be 50% by 50%.

So I would style the card.

Right.

Instead of being 40%, each card should be 50%.

Oh, and it doesn't work.

So this is one of the most annoying things in HTML, in my opinion.

When we have elements that are in line, block the space between each element, the actual whitespace

right here is going to be respected.

And that means that if I set one card to be 50%, another card to be 50%, that adds up to 100%.

But there's space between them.

It's really annoying.

I'm sure there's a good reason for it, but there's a couple of ways of getting around it.

The first one, which is our worst approach, is to actually delete the whitespace and you can see why

this is a bad idea.

Look at this markup.

It is ugly and I don't like having code that depends on the exact whitespace between elements, but

I'll show you this does work.

And if you're confused about why this happens again, it's just a quirk of using display in line block.

It respects space between elements.

Now if I save right now, VTS code is going to auto format and add whitespace back in.

So I'm going to do a save without formatting.

And there we are.

This is true, 50% and 50%.

And that's what we would expect to happen.

That's what we want.

But I don't like this approach of having to mutilate my HTML to get rid of that markup or to get rid

of that whitespace.

And as soon as I save vs code says, Yeah, that was terrible, let's add some space in for you so you

can read your code.

But now each element is on its own line.

And again, this happens because between each one of these divs, even if you can't see it, there is

whitespace that the browser is keeping in place.

This whitespace right there, that's not a problem if they're block elements, but when they're in line

block it is.

So that's obnoxious.

That means we need to change something.

And one of the approaches you'll see frequently is to make something slightly less than 50%, just a

little bit less like 49.75, for example.

And that works.

Our elements are sharing that space.

It looks fine.

They're technically not 50% each, right?

They're 47.40 9.275 each.

You can't really tell what the human eye, but they are not exactly 50.

And that's fine.

When we get to Flexbox, when we get to see us as grid, we will learn better ways of laying things

out and creating a perfect two by two grid or whatever number of columns we want.

But with just display set to inline block doing images with percent base widths, this is the easiest

approach.

Just don't do 50% exactly because that whitespace is going to mess things up.

So you could get rid of the whitespace, which I don't like to do because it's ugly and it just makes

our markup hard to work with.

But that is one approach.

The other approach is to just reduce the width a tiny bit.


So if I want to add some spacing in, let's just say it's margin.

I'm going to do margin on all sides of the card.

How about 20 pixels?

I think that's too much.

Oh, no, it pushed everything onto a separate line.

Again, why did that happen?

Well, we set the width to be almost 50% of the parent container, and then we added 20 pixels on the

left to the right, the top and the bottom.

Well, now each element is definitely bigger than 50%, so it doesn't fit.

So the workaround here, a nice approach we can use is to instead set box sizing to border box.

Remember how that works.

This says the width that I'm setting is the overall width for the entire element and if I add margin

it still won't work because margin is outside that border.

But if I set padding to be 20 pixels, that will be factored in when we set the width.

So if we're setting the width to be 49.75%, the padding of 20 pixels on each side comes out of that

width instead of being in addition to that width because I set box setting sizing to border box.

And now you can see that the width of the content does shrink down to accommodate the extra padding.

So if I said I want actually 50 pixels of padding on all sides, there we go.

The width continues to shrink for each one of these elements, the actual content with as that padding

grows.

But each box if I were to inspect.

Each card takes up 49.75%, and that includes the padding and it includes the image and the width of

the content.

So this approach works for us.

When I use padding only when there's no background color, there's no border, right?

As soon as I add a border in one pixel, solid red, for example.

Well, maybe that's what I want, I guess.

But if I want the border to be right up against our content, then I wouldn't use padding, right?

I would want to use margin.

But then it's a pain because how much margin can I add in here?

Margin 20 pixels on all sides.

Everything gets pushed over.

So if I want to do that, then I guess I got to tweak this a little bit.

Maybe this is supposed to be 45% wide and that will work ish.

It's okay.

But then I have to keep battling the numbers.

It's not a good approach.

Now, there's solutions to this.

When we talk about something called calc, when we talk about Flexbox CSS grid.

But for now, our best option, since we don't have a border, we don't have a background color that's

any different, you can't tell where a card ends and where the space between them begins.

We can use padding, no margin, we don't need the border.

And we set box sizing to be border box.

That means I can set the overall width of a card to be a percentage and the padding will be subtracted

from that instead of being added on.

Now I don't want 50 pixels.

I think I want something like 16 or 20 and I want this to go back to 49.75 and this looks pretty good.



First of all, the twos here are not spaced correctly If you look at this spacing here versus what we

have in the one we're trying to recreate, there's less space between the image and the H two.

Also, the font weight is different because it's a heading.

It's a little hard to tell, but you can tell it's bolder there compared to this version.

But more importantly, if I zoom out, we have more space on the left.

Let me go to the original, the left and the right of each of these two images together.

Basically on each row we have space on the left and on the right, but ours doesn't have as much space.

So this is kind of difficult to fix.

So we have the same amount of space in the middle.

If I compare that is correct.

The gap between each image is 16, whatever it is, 16, 32 pixels, something like that, thanks to

padding.

But the gaps on the left and the right and the top as well are not correct.

At least they're not the same as what we see here.

And this is harder to fix because I can't just say on every card, add ten pixels of margin or padding

because that would be on this card on the left, but also this card on the left.

And this one on the left and this one on the left.

So I could do something a little fancy and say every every odd numbered card, I want to add margin

or padding to the left.

So that would be the first one and the third one and the fifth one and the seventh one to add some space

on the left side.

And then I could say every even number.

So two, four, six, eight, add space on the right side and that could definitely work.

But then it's extra annoying if I only want to do the top two and the bottom two, that's a little bit

harder, right?

I have to do something involving somehow selecting the first two of the cards and the last two of the

cards.

It's just it's going to be annoying to write that course.

We would use nth of type a lot, but there's a much easier approach, which is to just wrap everything,

all of these cards in some sort of container and then I can add left and right padding to that container

or margin if I wanted to.

And if everything is inside of that container, then this is the left.

This entire edge would be the containers left edge, and this would be the entire containers right edge.

And that allows me just to set the padding and margin at once.

I don't have to select each card individually.

So another theme we've seen over and over, it's easy to style things together when you wrap them in

some sort of containing element.


So in my indexed HTML, right now my cards are just floating on their own right div class card, div

class card.

They're not grouped in any way.

And even if we didn't need to wrap them in a container, it's generally a good idea to group our stuff

together.

This is like a whole section of content on the page, so I would probably use the section element instead

of just a generic div.

I'll wrap all of this in a section and then I'm going to give it some sort of class and I'm thinking

I'll call it Gallery.

Or projects or images.

I think gallery is good though, so we're not going to see a difference.

But now there's a box going around all of our cards, all eight of our cards.

And what I'm going to do is add some padding to that entire container.


But look at the images themselves.

They are stretching or they're being squashed.

Really, some of them, it's not as obvious, but look at this one that looks really bad or this one

here, it looks pretty bad.

The image itself is always trying to fit all of the content in there.

It's trying to show us the whole image within the bounds of this box.

It's making it a square, even though it looks much better as the original rectangle.

Compare that to my version that we're started looking at as I shrink.

The images aren't squashed.

Instead, what happens is that we see a smaller piece of the image.

It's like a small window into the image, but the original aspect ratio is maintained and there's a

special property we can use to help us with this.

This property is called object fit.

So we use this with images and you can also use it with videos, any element that is a replaced element.

So the two most common are going to be video and image.

There's also iframes canvases, but almost all the time that I'm using it, it's for an image and it

allows us to specify how the content in an image or whatever we're styling should be resized to fit

its container.

And right now our image is being stretched to show the entire image in the bounds of that container.

So as that container changes sizes, the image is squashed.

But what I want to do is use a different value.

You can see the different values here.

The one that I want is called cover.

It says the replace content is sized to maintain its aspect ratio while filling the element entire box.

If the aspect ratio does not match the aspect ratio of the box, then the object will be clipped to

fit, which is what you'll see here.

This is a rectangle.

Let's say this is the original aspect ratio of the image.

As I shrink, the image is clipped rather than being stretched.

But if we look at some of the other options we have fill, the replaced content is sized to fill the

elements content box.

The entire object will completely fill the box.

The object will be stretched to fit.

That's what's happening now.

We don't want that.

I'm going to switch to cover, so I'm going to assign this to the images.

All images in the cards object fit cover.

This is new.

We have not seen this before, but if I refresh and I shrink this down as the size of that containing

image shrinks, the image itself is not stretched.

We just see less of it.

But the original aspect ratio is maintained and it looks a lot better.

I mean, we have trouble if I shrink this way down.

It doesn't look great at small sizes either way, though.

Eventually what we'd want to do is have the image go all the way across the screen on a mobile layout

and then on a larger layout have two images side by side and then maybe even three by three or something

like that.

That's a typical approach.


But this is a very common sense approach.

Each chunk of the page gets its own chunk of styles, and that's pretty much it.