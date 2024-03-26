// Lesson 148. Introducing Positioning

So positioning basically refers to a property called position that we then use alongside a handful of

other properties, top right, bottom left and Z index.

And these five, five properties, six properties together allow us to fine tune exactly where particular

elements go.

We can stack elements on top of one another and have different layers and we can remove elements from

the normal flow of the document and force them to behave differently.


Those are all accomplished using the position property along with some of these other properties on

the left which are called top right, bottom left and Z index.

static position is the default position - 
elements fit in the normal flow of the document -
top - right - bottom - left and z-index have no effect -


So I'm going to just do it to prove to you if I set position to be static and as I type static you can

see vs code giving me a hint.

It says if you select static, the box is a normal box laid out according to the normal flow and the

top right, bottom and left properties do not apply.


// Lesson 149. Relative Positioning

element fits in the normal flow of the document
top, right, bottom, left and z-index can be used to scoot the element from its default spot
even if the element is offset, its original space in the document is maintained

When we set an element to be position relative, it will still fit in the normal flow of the document.

It still takes up the space in the document, but now the top right, bottom left and Z index properties

can be used to manipulate the position of the element from that initial default spot.


We won't notice anything different because remember when we set something to have a position of relative,

it still fits in the normal flow of the document.

The only difference is now we've activated top right, bottom, left and Z index.


So these properties, top, right, bottom and left, will allow us to nudge an element over based off

of the top edge of that element so I can nudge it down, for example, by saying 20 pixels, this is

now offsetting the top by 20 pixels.

And you can see that it's shifted down.

I can use negative values.

I could instead set it to be -20 pixels and it will move 20 pixels up from its initial position, which

if I inspect.

We can see this is where it normally would be, but now I've moved it up 20 pixels.

Now there's more than one way to move it up.

Another option, right, would be to say bottom is offset by 20 pixels and that will move it up 20 pixels.

If I say bottom is offset by -20 pixels, that will move it down.

And then we also, of course, have left and right.

So you don't need to use all of these at the same time.

If I want to move an element over, let's say down 40 pixels in over 40 pixels, I could use top and

left.

I could use top and right and use a negative value.

I could do bottom and left.

I have lots of choices, but let me do top of 40 pixels to move it down 40 pixels and then I'm going

to offset the left side by 40 pixels.

And there we go.

You can see it moved down and it moved to the right by 40 pixels because I said the left edge is offset

40 pixels from where it normally would be.

Again, this is all relative to where the element normally takes up space.

And also notice that there's all this white stuff behind where the paragraph normally would be.

That initial location is still preserved.

All of the space the paragraph took up is still being taken up, but now the paragraph is being displayed

offset down into the right.

And that's what this final bullet point mentions.

Even if the element is offset with top right, bottom and left, the original space in the document

is still maintained as we see here.



For now, all that you need to know is that by setting position relative, the element will still fit

in its normal spot by default.

But then we can use top, right, bottom and left to move it around, to nudge it, to position it all

based upon it as original position.

And hopefully that was clear right when I offset it 200 pixels, that's 200 pixels from its initial

location, not from the top of the page or anything like that, just 200 pixels down from where it started.

Or if I set left to 40 pixels, we're moving it to the right 40 pixels because we're moving the left

edge over 40 pixels anyway.

// Lesson 150. Controlling Layers With Z-Index

So next up, we're going to talk about a property called Z Index, which has to do with the order that

elements stack in.

Basically, if we have two overlapping elements, whichever element has the higher Z index assigned

to it will be visually on top.

So a Z index of three will always stack on top of the index of two, assuming they're overlapping.

Right?

If they're not near each other, then you're not going to even know which one is on top.

But that's how it works.

So a three would be to two, B to one, B to zero.

However, it doesn't work because Z index only applies to elements that are positioned, and that's

a fancy way of saying elements that are not static.

Their position is not set to static.

And remember, that's the default for every element.

But if I set position to be anything other than static, like relative, which remember relative doesn't

change anything about how something is displayed unless we go and work with top and left right.

Remember from the previous video, that's the whole point of relative.

Relative keeps everything in its normal spot unless you then try and change it with top right, bottom

left and Z index, it kind of turns those properties on.


Now the position it's in is the same.

So it didn't get moved down vertically, up or down the screen, but the layers have now stacked in

a different order and that's pretty much all there is to Z index.

So it's only going to work on elements that are positioned.

And then once you have those elements that are positioned in stacking in some way, you can assign them

a particular Z index value to reorder how they stack.

And the higher number will always be a lower number.

So three will stack on top of a two, a one and a zero and a two will stack on top of a one and a zero,

but below a three it can get kind of annoying if you have a ton of layers, right?

You always want to have the lowest Z index as possible, but we're not worrying about that because we

don't have a ton of layers yet anyway, it's just something to keep in mind.

But the basic concept is pretty straightforward.

You just give it a value.

I mean, you could assign this as the index of 50 and that's valid.

// Lesson 151. Absolute Positioning Pt 1

element is removed from normal document flow, and is now relative to the nearest parent element with an explicit position property-
if no parent has a position property other than default (static), its relative to the root container-
no space is left where it used to be-
top right bottom left and z-index can be used to scoot the element further-


So absolute behaves slightly differently depending on the parent's position value, which makes it extra


I can offset the right, let's say, by 50 pixels and that will move it over to the left.

That's all.

Recap.

I could also say left is offset by -50 pixels.

Same thing.

If I want to move it up, I could say that top is -50 pixels.

Or bottom is offset by 50 pixels either way.


A lot of people like to stick with top and left just to be consistent, but you can again use right

and bottom and just mix and match positive and negative values.


Let me get rid of what I have there and just set position to absolute this time.

And we'll see something very different.

What is going on here?

It looks like we only have two boxes now, but that's not the case.

If I inspect the second green box is there, it's in a different position than it was previously, because

when I set something to be position of absolute, that element is removed from the normal flow of the

document.

No space is preserved for it.

So the element is still here, but it's like it's on its own plane of existence and the rest of the

document just ignores the fact that it exists, which is why it's stacking on top of the other box.

But it will be more clear if I do something like this, if I set top to be zero and left to be zero.

Now you can see that green box is still there.

But more importantly, what happened when I set top and left to be zero, it moved the box to the very

top of the entire root HTML element, the top left of the document.

So now when I start tinkering with top and left and right, if I do 50 pixels here, this is 50 pixels

from the top of the document.

It's not 50 pixels from the original position, which is what happens when I set position to be relative.

So if I just change that to relative one more time now, it's offset 50 pixels from the space it normally

would be in and that space is still preserved.

But if I set absolute instead, no space is held behind or reserved for the element.

It's removed from the flow of the document.

And now when I use top and left and right in bottom, it's all based upon the HTML root element.

So now this element here, my orange box, orange red box is 50 pixels down from the top of the document.

And same thing if I did left right, if I do, I don't know, 20 pixels offset from the left, it moves

over 20 pixels, but it has nothing to do with these other green boxes at this point.

And that's the first half of how absolute positioning works.


If the parent of an element that is absolutely positioned is also itself positioned.

It's a confusing sentence to say out loud, but let's just leave it at this for now.

So when we position something, absolutely, any space that it took up in the document is just gone.

No space is reserved.

There's no empty white space like we had before.

And by default, if there is no parent that is positioned, then our absolute element is going to be

moved around relative to the top of the root element.


So it's floating on its own plane of existence.

No space left behind.

It doesn't impact the flow of the document in any way.

It's out on its own, hovering, essentially.

And then we can move it around based upon the route HTML element with top left, bottom and right.

But again, next, I'm going to show you the other way it works where the parent element has a position.

// Lesson 152. Absolute Positioning Pt 2

Now, I'm going to show you what happens if the parent element of an absolutely positioned element,

if the parent is itself positioned.

And remember, when I say something is positioned, that means it has a value other than the default

of static.

Now, if I set this to have a position of absolute just like before in the previous video, now it is

a child of an element that is itself already positioned right position relative.

So if I set, let's say, right to be zero, it now behaves differently when an element is positioned.

Absolutely its top right, left, bottom, all those properties will manipulate it relative to its own

parent if that parent is positioned.

So there we are.

You'll see that it now moves over that span, goes all the way to the right edge of its parent, and

that's because its parent is positioned.

If I turn that off and save now, it goes all the way to the right side of the root HTML element.

And by the way, it's not going to the top corner, but it can as soon as I do something like this,

now, it goes to the top, right?

And I'm just setting them to zero.

But of course, I can use any value in here that I want.

I could set it to be 400 pixels, right?

And it's offset 400 pixels from that right edge.

But it's most effective.

I think just as an illustration, if I center it or if I put it at zero zero for the right and the top.

So that's kind of what makes position absolute a little confusing.

It's very dependent on the context, on the parent or any other parent.

It's not the direct parent necessarily, but any parent.

It could be five, six, seven levels up that is positioned.

It will be positioned relative to that parent.

So this in this case, it's just this one box, right?

It's a span inside the box.

This thing is positioned relative.

This is absolute.

And so any changes we make to top left, right, bottom are going to be based upon the bounds of this

box as we see there.

But as soon as I get rid of that and there's no other parent, no parent relative that is positioned,

then it defaults to the root HTML element and it goes to the top right corner, if that's what I've

specified of the entire root.



So absolute when we position something.

Absolutely.

It does not take up any space in the document.

It's removed from the normal flow and then we can position it with top right, bottom and left.

The way that those work depend on the positioning of that element's parent.

If there is a parent somewhere up the chain that is itself positioned, meaning not static, not the

default value, then our element that is absolutely positioned will be moved around relative to that

positioned element.

If there is no parent in the chain that is positioned, then top left, right and bottom will manipulate

our absolute element relative to the root.

Okay.

And remember, no space is left behind, unlike with relative where there's a gap left where an element

normally would sit and we move it relative to that spot, It's very different when we set it to be absolute.

// Lesson 153. Creating A Button Badge

using position relative on an element inside an element that is not itself positioned - a top/left/right/bottom adjustment inside the parent element is not going to scale with the parent.

This is always relative to where this span started out.

So up ten or whatever it was, up 30 over 40, that is hardcoded.


This is not going to scale with the button.

This is always relative to where this span started out.

So up ten or whatever it was, up 30 over 40, that is hardcoded.

So if I change the size of the button and I added a lot more padding or I took away padding, now this

button is not in the exact spot that I wanted.

So let's make this more exaggerated.

50 pixels.

You can see what happens, right?

It doesn't account for the fact that this button has moved in that corners over there because why would

it?

All that I've said is I want you to be positioned relative to where you normally are, offset by 30

pixels to the top 40 pixels to the right.

And that is always what happens.

It doesn't matter where this is, it's not connected in any way.

So instead of using position relative, I'm going to switch it up and use position absolute.

And remember that if I position something.

Absolutely.

And the parent or no parent anywhere along the chain, is it self positioned, then it's all relative

to the root element.

So if I did top zero, well now my badge is completely gone.

It's way at the top of the page because it's all positioned top, bottom, left, right based upon the

root element.

But what I actually want to do is base it upon the parent button, and that's very easy to fix.

If I go to my button and set position to be relative so this won't move my button, it's not going to

change anything for that button if I don't change top, bottom left and right.

But now when I set top to be zero and let's say I set right to be zero.

That's all based upon the nearest positioned parent, which is the button.



But what's cool now is that no matter what happens to this button, if I do go back to the original

padding, which was what was it, 30 pixels.

This is going to move along with it, right?

Because now all of these numbers, negative ten pixels, negative ten pixels for top and right there

based upon the bounds of the parent.

So wherever this edge is, this button or this badge will always be offset negative ten, negative ten,

and it has nothing to do with where the badge would have been rendered because now it's positioned.

Absolutely, it's taken out of the flow of the document and it's basically pinned to wherever negative

ten, negative ten is relative to the edge of the button itself.


If you want to make something stand out a bit, you can either make it full white or full black and

then very transparent and then it will act as like a little filter on top of whatever's behind it.
// Lesson 154. Fixed Positioning

element is removed from normal document flow, and is positioned relative to root container element-
no space is left where it used to be-
top, right, bottom, left, z-index can be used to scoot the element relative to the root element-
when scrolling it will remain in place


This one is called fixed.

So fixed is going to remove an element from the normal flow of the document.

No space will be left behind or preserved for that element.

So unlike relative and we can move it around using top, right, bottom and left, all based upon the

route HTML elements position.

So it's similar to absolute in that sense, assuming you know, with absolute, if there's a parent

that has a position value, then it changes things.

But in the case of fixed, it will be positioned relative to the root element.

So you can move things to the top corner or the middle of the page, the center of the screen, the

bottom right, whatever you want, but then it will stay fixed in place when you start to scroll, if

you have enough content to scroll.


And then I'm going to set its position to be fixed.

And as soon as I do that, you'll see no space is left behind in the document for it.

So it hasn't necessarily moved.

But now the paragraphs act like it's not there because it really is not there in the normal flow of

the document.

And then if I set things like top to zero and left to zero, that will move it to the very top left

corner of the entire root element.

And it fixes itself in place and it will stay there.

more work, but that's the basic concept of

fixed.

So it is removed from the normal flow of the document.

No space is held for it and nothing is reserved in the document.

Everything else acts like it's not there.

And then any time I use top left, right, bottom, it will be positioned relative to the root HTML

element and it will stay fixed in place.

And that's very different.

But if I go back to absolute, we can have something start there.

So it's still in the same spot.

But then I start scrolling and it moves around.

It is not fixed in place, whereas if I set it to be fixed, it is well fixed.
// Lesson 155. Positioning Exercise #1
// Lesson 156. Positioning Exercise #2
// Lesson 157. Positioning Exercise #3
