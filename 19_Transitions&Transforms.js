// Lesson 158. Introducing Transitions

In this section, we're talking all about transitions and transformations which are linked, as you'll

soon see, where they're kind of linked.

They're together for a reason.

So transitions are a form of an animation that we can create in CSS.

But there are two main types of animations.

There are transitions that we're about to cover and then keyframe animations, which we'll learn about


A keyframe animation is more of a traditional animation where you can set a whole bunch of different

check points.

You can have some animation that says this thing starts red and then turns orange and then turns purple

and then doubles in size and then shrinks in half and then rotates.

You can set out all the step by step individual checkpoints in your animation and then apply it or assign

it to some element.

That is not what we're learning just yet.

We will get there, but we're starting with transitions.

Transitions are simple.

Well, transitions from one state to another.

So an example is when I hover over this in this code.

Penn This cool glass morph is I'm creative Cloud app redesign that I found on Code Pen.

When I hover here, you can see that the color changes.

There's a darkening, but it doesn't happen immediately.

There's a slight animation to it.


We use transitions to animate from one state to another.

That could be one color to a second color or from one size to another size or from one opacity to another

opacity.

That's pretty much all we do with transitions.

We animate from one step to another.

There's no way to say, I want you to turn red and then green and then blue and then purple.

Not with transitions.


There's two types of animations in CSS, the traditional keyframe animations we will learn about later.

Those are the ones where you can set any number of steps and have 20 different things, happen one after

another and then have it repeat if you want.

Whereas a transition is simply an animation from one state to a second state, from yellow to orange

or from, you know, 20, a rotation of nothing to a 45 degree rotation, those sort of things.

// Lesson 159. The Basic Transition Syntax

the transition property has 4 different values/properties that can be adjusted/set: property, duration, timing-function, delay


That's the easiest way to show it to you is to have me hover over something.

But the way that I've written it right now says any time background color changes, no matter how it

changes, whether it's because I hovered over it, because somebody used JavaScript, which we don't

know in this course, but some of you might, if someone used JavaScript to change the background color,

if someone used the dev tools to change the background color, however, the background color changes.

Whenever it changes, it takes 5 seconds.

So if I turn this off with the dev tools, it takes 5 seconds.

And then when I hover again, it takes 5 seconds.

When I release, it takes 5 seconds.



Now, let's compare that to if I move this into the hover pseudo class or pseudo selector here.

Now, what I've said is only when we hover we want to transition the background color for 5 seconds.

So it's still going to take 5 seconds when I hover, as you can see, but then as soon as I release.

I'm no longer hovering.

There's no transmission taking effect.

The color changes, right?

It just goes back to being white, which is the default.

I didn't even specify that, but it is not take the 5 seconds to fully do that transition.

It just immediately cuts off.

So there is a difference where you put this changes how it actually works when it impacts that change.

So up here it was any time the color changed down here, it's only during a hover are we going to animate -> it matters where the transition rule is placed in the css styles

// Lesson 160. Working With Multiple Transitions

I think it's easier to tell that it's working so we can list as many as we want.

Or you can even do this all now.

I don't recommend doing transition all very often because it might work for you in a certain situation.

Like right now.

This is what I want.

Everything that ever changes with anything that has this class of button, right?

That's what I'm applying this to.

Anything with that class, every property takes 5 seconds to transfer or to transition, but maybe later

on I want to change something else and I want it to happen immediately.

I'm not expecting a transition.

You know, I change border color or something.

Then that's also going to take 5 seconds.

It's just generally better to be specific and call out the things you actually want to animate.

Later in this section, we'll also talk about which properties you should be animating in terms of performance,

but we'll get there later.

And lastly, I'll just show we can put whatever numbers we want for timing.

You can also use milliseconds RMS into let's say 500 milliseconds.

// Lesson 161. Transition Timing Functions

So next up, we're going to talk about the third piece here that's optional, the timing function or

easing function that specifies basically the rate that the change happens at.

So we can go from, let's say, orange to yellow over 5 seconds.

But there's so many ways to do that.

Does it all happen at the same rate?

Does it speed up and then slow down at the end?

Does it start slow?

Then speed up, then slow down.

There's lots of different options and CSW has a bunch of options built in, including you can see a

list of them.

Where are you?

Right here.

Is it ease in, ease out, ease in out, linear step, start, step, end.

But then you can also specify a custom timing curve, which we're not really going to go into detail


And the default is a function called ease.

So when I do this, it starts pretty quick, slows down.
Is is the default value increases in velocity towards the middle slowing back down at the end.

So increases and then slows down.


Remember the syntax here.

Property, then duration, then timing.

Transform takes 3 seconds.

Use the ease out function.

And the way that ease out works, you can read about it here is that it starts quickly and then slows

down.

So there we go.

Starts quick and then slows down and let's switch it up and do ease in, which starts slow and then

speeds up so slow and then speeds up.

Okay.

So just two examples.

We also have linear.

Linear is one that just takes it goes the same speed the whole time.

As you can see there, there's no slowing down or speeding up.

It just goes at the same rate.

And then you can get extra fancy and do things with author defined cubic curves where it gets a little

bit complicated.

We're not going to really go into it, but I'll just show a fun example.

Like the curve that's shown down here.

I'm just going to copy this and put it in here.

So this one actually has a negative value and you'll see what that does when I hover.

It moves to the left first and then back to the right.

It's almost like an elastic thing.

It almost bounces.

So you can get very fancy if you know what you're doing with these curves.

But it's not that important for us right now.

Most of the time we're fine using things like ease in or ease out.


I didn't show ease in dash out.

So that one is going to start slow, find the explanation and then speed up and then slow down again.

Can you even define steps which I don't like?

Here's an example of steps where you just get little choppy, janky, discrete points along that transition.

So I'm not a fan of that one.

Really, but that's also an option.

So those are timing functions.

Again, optional, but you specify it after the duration and that timing function is going to impact

how that 5 seconds or 3 seconds or whatever the transition takes, how it gets from point A to B, does

it start slow and speed up and you get the picture.

// Lesson 162. Transition Delays

The last piece to the transition syntax is the optional delay.

I don't use delay very often, but it's exactly what it sounds like.

We can postpone the start of a transition by a certain number of milliseconds or seconds.

// Lesson 163. Understanding Animation Performance

So next up, I want to talk a little bit about which properties are even inimitable in the first place,

because not every CSS property can be transitioned or turned into or used in a keyframe animation,


But there's a list of which ones can be animated on MSDN, and there's a good number of them here.

Things like lots of text, properties, border properties, background stuff, opacity.

But within this list there's really just a couple that I recommend animating if you are worried at all

about performance.

So we're going to talk in this video a little bit about why certain properties are really hard to animate

something like margin or width.

It's just not a really it's not a good idea to animate if you are worried about the animation performance.


So this demo, the point of it, is to show you that you could accomplish the same thing using using

margin to animate something across the screen, Right?

Just add space to the left or space to the right.

But there are better ways of accomplishing certain animations, and that's where Transform comes in.

We will learn all about that in the rest of this section.

So again, lots of properties you can animate, but some of them are not a great idea.


So there's a set order of steps that the browser goes through when we have some sort of animation that

is kicked off.

And often that animation will be kicked off by JavaScript, like you just saw when I clicked this button

here that started the animation, or it could be from a transition transition when I hover over something

via CSS, but something starts the animation.

Then there's the style calculation phase.

The browser figures out what styles to apply to which elements, and then there's what's called the

layout phase.

The browser calculates how much space each element takes up, figures out where it goes on the page,

and then the browser paints.

That's basically going through and filling out the pixels on the screen, putting in the right colors,

the text, the borders, the images.

And then finally we have what's called the composited stage.

And at this point it takes multiple layers that it's painted and it puts them together into a single

layer to draw them, and it makes sure all the overlapping stuff is displayed correctly.

And the reason I bring up any of this is not because you need to know about it.

You don't need to remember these phases.

Please get it out of your head if you're worried about it.

But it does matter when certain properties impact certain stages of this process.

So when we animate width or margin that forces a layout recalculation and then a repainting and a re

compositing.

Because remember, the whole layout phase is where the browser calculates where things go.

So if you're making something wider or adding margin, that's going to impact every other thing potentially

on the page.

So it starts from this layout phase and then painting and then compositing something like changing the

background color or some other part of the background that doesn't force the layout change, but it

starts with a repaint in a re composite, but something like opacity and transform these two special

properties that are the most animate able of all.

Those are the two properties I recommend animating the most.

If you have a choice, you can't do everything with them.

But if you have a choice and you can use them, you should because they don't force a new layout, they

don't force a repaint, they only force recomposition.

So they have the lowest impact and therefore the highest performance.


As you saw with this demo, when I use margin, there's a ton of calculations happening behind the scenes.

The layout is being rebuilt.

Every step of that animation.

When I use Transform, there's no recalculating if the layout and it all takes place in the compositing

stage.

If you don't remember what compositing does or what it means, it's okay.

Just know that these are the two properties that are the most performance.

Does that mean you should never animate background?

No, but it does mean I probably would never animate something like width.

I would never animate margin because we have a better alternative, as you're about to see in the next

few videos transform.


I'm actually going to show you the dev tools.

One part of the dev tool that we haven't talked about in Chrome is this performance tab.

This allows me to take recordings of the activity on a page and I can then look at all sorts of different

metrics and how long certain things take.


So to summarize all of that, lots of properties can be animated, although there are quite a few that

can't be.

So don't be surprised if you try and animate something like display.

It's not on this list.

You can't really animate that anyway.

There's lots of options, but there's really just a handful that I recommend sticking to.

If you're worried about performance, if you have lots of stuff going on, it's totally fine to animate

things like color, background color.

As we saw, they come in here at the paint stage.

They don't force a re layout calculation, but the two most performant things you could ever animate

are opacity and transform.

They don't impact anything except this compositing process, and that's way more technical information
// Lesson 164. Introducing Transforms

as we just learned in the previous video, Transform is one of the very best, most performant properties

to animate if you're going to animate any properties.

So again, it doesn't have to do with animations, but it's a really common use case for transform.

So what exactly is this transform property?

Well, it does a lot.

It allows us to rotate, scale, skew or translate an element.

So if you just play around on the MDM docks, there's a little Firefox logo where we can do things like

move it around, move it up and down, move it left and right, scale it so stretch it.

You can stretch it evenly in all directions.

Or in this case it stretched a lot more horizontally.

But I could change that and keep its original aspect ratio.

I can rotate, I can skew things and I can even do multiple transformations at the same time.

In this video I'll start by talking about translations.

So translate allows us to move an element left, right, up or down or multiple at the same time.

The docs for this are pretty thorough.

You can see there's a lot of options for transform, but the way that it always works is that the name

of the property is Transform.

So it's not called rotate or translate or something like that.

It's transform.

And then we set it equal to a function just like we do with a linear gradient or any gradient radial

gradient and so on.

We specify the name of a function and then parentheses and then some value inside.

So we'll start with translate.

Translate has a couple of options.

We're not going to worry about the three D transformations right now, but we can translate.

We can translate X or Y or Z.

We're also not really going to worry about Z for now.

So just X and Y.

Now a translation means moving an element left or right.

If we're doing an X translation or up or down for a wide translation.

Now this is very different than moving something using absolute position or any positioning top left,

right, bottom, those properties or using margin or padding to push an element around.

Remember, in the previous video we saw that something like margin or even just changing the width causes

a recalculation of the layout for a whole page.

Because if I make this thing have extra margin right here, well, the location of everything else in

this page could get shifted over.

There's a whole cascade of layout calculations that have to be done, but that doesn't happen when I

use translate.


And then when I translate X, take a look at where it ends up.

Now, again, this is happening after the layout has all been done.

It is not impacting other elements.



So transforms happen in their own space, doesn't impact other elements.

So if I get rid of that margin left, these guys are still where they normally would be.

This element that I translated and moved over, it still has that space left behind where it was.

So we don't use translations really for layout.

We're not trying to build a website by saying, Put this over here and put this over here.

Make a nav bar using a transform.

You could theoretically, but that's not really the intended use case.

It's just to visually change the appearance of an element that's already on the page.

And a lot of the time it's for animation purposes.

So translate X, I can specify a number in there 400 pixels, or it could use REMS or EMS or whatever

I want.

V PH.

I could also use percentages.

So 50%.

And what that's going to do is move it over by 50% of that elements with I also have translate y which

will move up and down.

By the way, if I go back to X, I can use negative numbers so I could move it over by, I don't know,

100 pixels to the left and we barely see it.

And then we of course have translate y.

So if I want to move it, let's do 200 pixels.

Translate why we're pushing it down by 200 pixels from its original location.

Same thing with negative.


We also just have translate, which takes two values.

The first one is for X, so let's move it over 100 pixels and then move it down 200 pixels.

So the second value is for the Y, and that's what we end up with, 100 over 200 down and that's it


// Lesson 165. Other Types of Transformations

rotates, which is pretty commonly used.

Rotation is especially common if you're doing things like making a loading animation where something's

going to spin in a circle.

That's one situation where it comes up a lot certain effects where you might want to sort of have something

jiggle and move around like it's antsy and waiting to be clicked on.

You can use rotate to rotate it slightly back and forth.

Again, we haven't learned about keyframe animations, but when we get there we can make all sorts of

cool things.

Rotate expects us to pass in an angle either in the form of degrees or a turn or radians.

I usually just use degrees.



Well, basically rotated off the page because if I apply a border so we can look at the H one, remember

that an H one is a block level element.

So let me turn the rotation off.

It goes all the way across the screen here and the default point that the rotation happens around,

it's called the transform origin is going to be the center of an element.

And this H one is very long, right?

It's a little bit of text, but the element is a block element.

It goes all the way across.

So it's putting a pin in the middle here and then rotating it 90 degrees, forcing the text off the

screen as we saw here.

So if I change this to be like one degree, you can see that has a pretty serious amount of rotation

for the text at least because it's one degree for this entire element around this middle point.

So what we could do is just shrink the size of the element down by saying display is inline block.

It doesn't need to go all the way across the screen.

And there we go.

I could have also just given it a width, right?

A hardcoded width.

But there it's now rotated one degree.

Let's go back to 90 degrees.

And there we are.

We get our nice, beautiful 90 degree rotation.

So that's the basics of rotation.


We have a rotate X and a rotate Y.

So X is going to basically imagine there's a spindle going through it here and it's going to rotate

towards us or away from us.

As you can see, it's rotating towards an away from us rather than spinning along the axis of the screen.

It's rotating towards in a way.

So if I try that rotate X on our H one, if I do 90 degrees, that's going to rotate it.

So it's exactly in line with our eyes and be completely flat.

We won't be able to see it.

But if I do something less like 20 degrees, maybe you can tell it's starting to go.

Let me just inspect this and we'll do it live in here.

I'm going to change this number, so I'm going to click this.

This is nice.

And Google Chrome, I can rotate it.

That's pretty neat.

It works well for these videos.

So again, it's rotating as if it's on like a rotisserie skewer.

And then we have rotate y.

So I'll just do this live in here.

If I change that to be y, that's going to rotate kind of like a globe would spin if there was like

a, you know, a vertical spindle through it.

So you can make some really nice nineties looking advertisements with this I guess.

And then we have rotate Z, which is basically going to give us the same behavior we had with just plain

rotate where it rotates.

Along that middle point as if we had stabbed it to the screen with a knife.

Again, not that important that, you know, all of these you can always just look it up if you need

to accomplish one of these things.

But those are the different rotations that we can perform.

A lot of the time I just stick with plain old rotate, though.

If I just want an element to rotate as it is on the screen, just tilt left or right.

You can also use negative degrees in radians.

I didn't show that, but same idea.

Now we're rotating the other way.



So to scale something X along the x axis from left to right, we can grow it and basically stretch it

horizontally or shrink it.

And we can do the same thing for the y axis to grow it vertically.

So let's try it on our h one.

Let's do a set of a rotation, a scale, and then we can provide a number that is unit less like one

is going to just keep it at its original aspect ratio or 0.7 will basically be 70% along that y axis.

You can also use a percentage, but let's do two for scale and I'm going to do scale Y.

So this should stretch it vertically.

And that's exactly what happens, right?

If I do scale four, scale Y four, it's now being stretched quite a lot vertically.

We also have scale X and let's do five times and it stretches it out quite a bit horizontally.

And remember, this is all happening basically in its own layer.

So it's not impacting or interacting with any of the other stuff on here.

And then we can also control both at the same time with just regular old scale.

I think I'm going to do that for our box with this class of first.

So instead of just rotating it 45 degrees, I'm going to scale it and let's make it much wider.

So scale X and we'll do four times and it's now a very wide rectangle.

And then let's do an example with just regular scale, which expects two numbers or two values, right?

So we provided the X, which was two, and then the Y direction, which is four, so double in size

horizontally, quadruple in size vertically.

And then if I just had said scale two, it just doubles the whole size of the element in all directions.

Same thing with scale four.

That's quadrupling it.

Although it's getting cut off, it's off the screen and we can't see it.

So those are the three main flavors of transforms.

We have rotations, we have scaling, and I didn't show every flavor of scale, but there's others.

And then we also have translation to move something across the screen up and down.

There's also skewing.

I don't use skew very much, but it allows you to warp it along.

this two dimensional plane.

// Lesson 166. Transform Origin

So one more thing to know about Transform is that we can specify a property called Transform Origin,

which controls where our transformations originate.

What is the origin for the transformation?

And most commonly this is used for rotations.

And as we saw the default center or the default point that a rotation occurs around is the center of

an element.

But you can change it and there's various syntax that you can use.

You can use keywords like top space left and that will put a pin in the top left.

This is all this animation stuff and this back the border in this little target.

That's all added in by MSDN.

But you can see the end result is now it's rotated however many degrees from that point rather than

from the center point.

You can also use pixels or length units to specify an exact rotational point.

Most of the time, though, I just use these keywords, I'm usually happy just rotating around the middle

in most examples that I can think of, but you can change that by saying transform origin, top left,

bottom right, that sort of thing.

The other thing I'll show you is that we can apply multiple transforms at once.

So if I want to take this H one and I want to rotate it, but I also want to grow it or shrink it or

something, I can add a space and then write my second or more transformation function scale.

Let's double it in size and you can see it did double in size.

Let's make it even more obvious.

Let's do triple in size.

There we are.

And remember, scale, just plain old scale with a single number is going to do it in both directions,

the X and Y axis.

Whereas if I just did scale X, it only scales it along the X direction, not the Y.

So you can keep chaining them together.

// Lesson 167. Building Fancy Button Hover Effects

of against one of the things that I talked about earlier in this section in terms of animation performance

where I said, you know, any sort of box model properties, anything that re calculates layout, you

generally want to avoid animating if and this is important if you care about performance.

Now, if we're just doing a single button, it's fine to animate something that isn't that performant.

But if, you know, as I showed that demo with hundreds of little things moving around across the screen,

there's a huge difference.

When we use a good property like transform versus a bad one like margin.

So I bring this up because I'm going to animate a box shadow.

Technically, box shadows cause the whole layout to be recalculated.

I don't recommend doing this at scale.

Like I said, if you have tons and tons of things that are animating a box shadow, not good, but it's

still okay to use it in small doses as long as you're aware that it's not that performance.

And if it becomes an issue, you might want to have a different animation in there.


All right, here's the first box shadow.

So it's actually two shadows.

And if you don't remember the syntax, the first one is the X offset, then the Y offset, and then

the blur radius, how much it blurs and then the color.

And I'm using a transparent black.

So GPA is 000 and then 0.25 and then the second one is just on top of it, ten pixels and then ten pixel

blur radius and it's slightly lighter, 0.22 for the Alpha Channel.


What we're going to do is then elongate the block shadow to make it look like it's kind of staying in

place and only the button is moving.

But the reality is that the dark shadow is just growing and they're both shifting up.