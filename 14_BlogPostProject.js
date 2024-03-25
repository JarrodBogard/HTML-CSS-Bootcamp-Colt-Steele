// Lesson 114. Introducing Our Blog Post Project

// Lesson 115. Centering The Main Content

// Lesson 116. Working on Typography

Remember, we can use inheritance instead of setting Mukta to be the font on every single element.

I'm going to use this broadly and then selectively say, Actually, just kidding.

I want to use my bitter font instead on certain elements like the headings.


I wouldn't expect you to just magically figure this out, but I'll set the body font size to be 16 pixels,

and that's not going to make a difference whatsoever in most browsers.

All right.

We can see if I toggle it on and off.

It's the same font size that we had by default, but I'm just being explicit here and in some browsers

there may be a different default font size.

I'm also going to do something that's pretty common.

I'm going to set the margin to be zero and the padding to be zero in the body.

I'm sort of wiping the slate clean in case there's any default margin in padding.


So let's do that letter spacing.

I did 1.5 pixels.

There you go.

It spreads a little horizontally.

You don't want to probably do that for the body text, but for a little heading or a piece of it's not

a heading element, but it's acting as a heading kind of right.

A standalone piece of text.

It makes it stand out more and that is it for the info piece of content.

// Lesson 117. Creating the Headline Section

So we also downloaded a 500 font weight and that's what I'm going to use font weight of 500 when we

type bold.

The browser is going to look for a 700 or the closest thing to 700.

500 though, is somewhere in between the two.

Normal and bold.

It's kind of splitting the difference.


The default font weight for all headings is going to be very bold.

The browser just does that if it can, but I don't like how bold that is.

So I'm going to change that.

I'm going to set its font weight to be 500, which is that semi bold ish.


But there's another thing.

We're missing this right here, the citation or the person who said it.

Usually this would be a real person, right, is on a separate line.

It's bolded, it's called out.

It's styled differently.

And the way that I did that is I used a semantic element that we use with block quotes often called

site c i t e you use it to cite the source of a quote or a piece of information.

In this case, we're citing it as a wise person.

So basically, I'm just going to wrap this part that says a wise person with a site element.

You could use a span or something like that, but sight makes more sense.

Now we're not going to see a difference.

It does get italicized, but other than that, we don't see it go on to a new line.

It's not bolded.

We have to do that ourself.


But we do see something by using the block quote, we get some margin right.

We see something over here, some space.

By default.

It was added for us.

That happens when you use a block quote in the browser.

It's just a default style.


but a common element for blog posts and typography, heavy posts or articles or any sort of web page

where you want to separate things out with a horizontal line, is the element made just for that?

It is the air, the horizontal rule.

// Lesson 118. Implementing Our Headings

Remember, any time there's a piece of code, what I've done is actually wrapped it in a special element

called code that we use to indicate, well, code pieces in our markup and then I can style them.

So instead of making this a span and this is span and this is span, instead of that, I'm going to

make them code elements and then make them orange later and change the font as well.

But not only that, the letter spacing also changes and this is hard to detect, but these are closer

together on an H one compared to an H two.

And if we go all the way down to an H six, the letters are further spaced apart just by a couple of

pixels difference.

And that's something that you'll see sometimes with bigger headings you make them a little bit more

cramped and smaller headings.

You give them a bit of breathing room, but it's not a rule or anything like that.


just a formula that I'm kind of following as each heading goes down into insignificance or it goes up

in number, you could say, I'm making the font size smaller, so an H three is going to be 38 or 40

pixels, something like that, and then the letter spacing will be zero.


What I'm going to do is delete all of this and go up here where I set the font family on all headings

to be better.

I'm going to say the font weight is 500 for all of them and then JK for H one it's actually 400.

So this relies on the cascade.

I'm saying H ones have a font weight of 500 and then afterwards I'm saying nope, skip that same selector

H one font weight of 400, but this comes second.

So that's going to win out.

// Lesson 119. Adding In Code Styles

You'll see that by default, code blocks or code elements have a different font.

It's a mono spaced font family, and that's commonly used when we're writing code.

I use amount of space font and here this is mono spaced and the browser does the same thing.

You can override that of course if you were to write your own styles.

But I like how it looks.

// Lesson 120. Creating the Footer

So I'll have some links in here and they'll be inside of an unordered list, and then I'm going to make

sure that they are inline elements so that they're not a normal list.

It's going to be one bullet point at a time vertically.

Instead, I want them to share the space horizontally and then I'll have to give them some sort of margin

or padding and center them.

So we have a lot to do.

Well, it's not that much, but we have a decent amount to do.

Let's start by just adding in a footer.

So down at the bottom, outside of the content, remember this is our content div, this is the bounds

of the content div.

I want this to be after it, so I'm going to make a footer and then I could just start by just to show

you that this works down at the bottom of my CSS.

I'll select the footer and I'm going to give it this purple color for the background.

I have it written down.

Again, it's another hex code

863ae8.

So, so if we look at ours, we don't really see the footer yet because there's no height to it.

So I could just start by hard coding and a height height is 100 pixels.

Let's just see if we get that color down there.

Perfect.

It goes all the way across the screen.

That looks good to me.

Now I'm going to work on the actual markup, so I provided the text for the links.

It's pretty basic stuff, but inside the footer I'm going to add an unordered list and then an ly and

then an anchor element.

I'll just put the different links here.

This first one will be privacy policy and I'm just going to have it link to privacy, which doesn't

exist.

Right?

And then I'm going to duplicate this quite a few times.

Whoops, Not that I'm going to duplicate the entire element.

So we have five of them, I believe.

So then we have terms and conditions.

Got some extra space there.

I'll just change the link text to B terms and then we have about.

And we have contact.

The text is contact us and then we have more info.

Okay.

So this is not going to look good.

I'm going to go ahead and get rid of the height that I've hardcoded on the footer.

But this is what we're working with, right?

Everything is in the list.

By default, a UL has these list styles where each lie gets a little bullet point.

So we're going to change that.

I'm going to select the UL inside of the footer because I might have other lists, but for now any UL

in the footer, I could also give it a class if I wanted to.

But this is fine enough for now and I'm going to say list style is none OC so that gets rid of the bullet

points, but still not exactly there because our individual allies here are still block level elements.

So I need to select the allies and I'll just do the ones inside of the UL instead of the footer.

I'll say that their display is in line.

Okay, so that's looking closer.

It doesn't look great, but it's closer.

The next thing that I'll do is get rid of the text decoration and get rid of or change the color to

be white.

So I could probably just do this is kind of long.

We might want to refactor this, but it's okay for now.

So the links inside of Liz and the UL inside of the footer, I don't even we probably could get rid

of this part, but anyway, we could refactor this and add a class onto that ul which we might want

to do.

But for now this is good and I'm going to say text decoration none.

And I'm also going to set color to be white.

Okay, so what do we need to do next?

Let's get them in the middle of the page.

So what is the element that all of these allies are contained inside of?

It is the ul.

This ul contains all.

Whoops.

Did I just do this?

Ul contains all of those links.

And we know that we can set margin to be auto on the left and the right and it will center our content.

But it doesn't seem to be working.

Why not?

Well, if we look at the UL itself, it is taking up the full width of the page.

So if we set the margin to be auto on the left and the right, there's no space for it to to add on

the left or the right because the element itself goes from the far left to the far right.

So I'm going to set some sort of width on it.

I'm going to say I want you to have a width of 100%.

However, with a maximum width of 900 pixels, which we've seen before.

So try to take up 100% of the width of the container, which is the body, or it's actually the footer,

but don't go above 900 pixels.

And there we are, it's looking close.

And then the next thing I'll do is set text align to be center.

And there we are if I inspect this now.

We look at the UL, you can see the content there for the UL itself in the blue.

And then that orange color that looks pink is the margin, right?

So that's the margin auto.

And by using margin auto, we were able to center our content.

Soon we're going to learn about Flexbox, which is a much better way for creating this sort of a footer

where we have links distributed evenly.

Right now.

All I'm going to do is basically add some padding or margin to space things out.

But why don't we start by increasing the space around our content, making this purple box bigger?

So what I'm going to do is add padding to the UL.

Remember the UL is this everything that the text is inside of?

And I'm going to add vertical padding to the top and the bottom so that we get purple on top and purple

below.

Because remember, purple is the background color of the parent footer element.

So I could try and just set like the height on the footer height to be 100 pixels or something.

But then my content's not centered.

So instead of that, instead of setting a hard height on the footer, I'm going to take the UL, right.

The UL is all the stuff inside, all that text is inside the UL and add padding to that and the amount

of padding is 28 pixels on the top and the bottom and nothing on the left and the right.

And there we are.

You'll see now that our box increases, that purple size is bigger, but we did it using padding, so

it happened evenly on the top and the bottom.

Now we just need to add some space between the links and the way that we'll do this is by using margin

or padding on the individual allies.

So I'm going to go down to the list here and add some padding, and I think I want zero pixels top and

bottom and about 16 pixels.

What did I just do?

16 pixels on the left and the right.

And that looks good.

Yeah, that's exactly it.

So that's our basic footer.

Nothing revolutionary.

Again, we'll improve it a lot when we get to Flexbox.

There's one minor difference when I hover over these links, right?

They get the underline, which currently ours do not.

So we can add that back in Very simply, just copy this.

When you hover over one of those links, I'm going to add the hover pseudo class.

Remember how this works?

It's a hover state over a link.

So when you hover over a link that's in an ally, that's in the footer, I'm going to say text decoration

is a solid white underline.

Or I think I can actually just say underline because the color is white.

Let's see.

There we go.

So I hover and we get the underline.

Okay.

So as far as the styles that we wrote here, these are kind of generic where just just footer, footer

ul footer ul Lee, footer Lee A we may want to add in a class or two if we had a lot more content going

on, a bunch of allies and a UL inside of the footer, this is fine, right?

We don't have any competing anything that could get in the way of these selectors, but in the real

world you may want to implement a class like nav link or footer nav or something where you can use that

class to get a little more specific instead of just using element, element, element.

// Lesson 121. Writing The Full Size Hero

But I also wanted to take up all of the screen height.

And this is where the v h unit comes in.

We will see this in the next section, but there is a unit called v h for view height.

If I say 100 v PH, this element will have a height of 100% of my view height.

And that's exactly what we see now.

There's some white space.

We'll handle that.

But if I scroll down right so that the purple starts right at the top or the top of my view, it extends

all the way down to the bottom of the view, but it doesn't go on and on and on.

It's always going to be as tall as my window is tall.

So if I refresh the page again and I shrink or I scroll down, you can see that we get less purple,

but it's all the purple needed to cover the entire height of my view one time.

So I'll shrink it down even further, refresh the page and we get less purple.

So the idea is that I want every user who visits this site to see all purple at the beginning, a full

purple view.

But then as soon as they scroll down, it goes to white.


Although we have this white space up here, I think that's coming from the H one.

If I inspect.

Yep, that's margin on the H one.

So we could of course go and change that margin.

If we select the H one, there should only be 1h1 on the page.

But let's just start by saying margin zero.

So now we don't have any white space up there.


But as you can see, I've got a purple box that takes up the entire screen's height.

Whatever the size of that screen is, that amount changes.

So instead of hard coding it to be 500 pixels, which won't match the majority of screens or whatever

number I pick.

Instead, I'm doing something relative to the size of the screen.


So the next thing I'm going to do is set everything to be white inside of my hero.

So where is that hair?

Do you lost the hero selector?

I'm going to just give everything a color of white.

That way I don't have to set the H one and the paragraph and this air separately.

They all just inherit that color.

The next thing, if we look at the original, is that there's definitely a width that's been assigned

to the content here, right?

It doesn't go all the way across the screen like we have here.

Never mind the fact that it's going to be centered and all of that.

Right now it is two too wide compared to the end result.

So I'm going to need to use a width.

On the paragraph and on the H one.

So I'm going to just do something like this inside of the hero.

There's an H one, and inside of the hero there's a paragraph.

I'm styling both of those at the same time.

I'm going to give them a width of 75% or so.

And as I shrink it down, you can see they take up 75% of the width.

They're not centered yet.

We'll get there.

But they are taking up 75% of the width.

It just looks really bad when we get to a really big width.

And this is another opportunity for us to set a maximum width just like we did down here.

This scales down, right?

It takes up all the screen, the full width, and then it stops growing at 900 pixels.

That's the exact same size I'm going to use.

I'm going to set a maximum width to be 900 pixels so it doesn't keep growing and getting really too

long.

It will be 75% and then stop.

This is the widest it gets.

The next thing that we need to do is do some text alignment.

Let's just text the line center, both of those things.

Actually, I can set the hero to have text align center.

And that will be inherited by the H one and by the paragraph, they'll be center aligned.

Now let's talk about getting this to be horizontally and vertically in the middle of the page.

It's not that easy.

We know how to do the horizontal side.

You could use margin auto, but I'm actually going to cheat and show you 30 seconds of something called

Flexbox.

So don't worry about how this works.

If you've never seen Flexbox, please don't worry.

I'm going to put a comment in here that says, don't worry about this code yet.

I'm just going to write some properties.

Display flex.

Flex direction is going to be column A line items.

It's going to be center and justify content is also center.

Now, these are kind of annoying, confusing names for properties align items justify content, flex

direction.

Don't worry about it.

All that I'm doing is using the display property in a new way we haven't seen yet.

Instead of saying inline or block or inline block, I'm saying display is flex.

And what that means is that it's actually changing the inside of the entire container.

The inside of the hero now behaves differently.

And I can use these special properties, please.

We're going to have ours on Flexbox.

Don't worry.

I'm just putting it in here to make it look good.

And there we are.

You can see that we've got our heading and we've got our paragraph centered horizontally and vertically.

Although our air is not looking great, I do need to give a width to the air.

So it's an air inside of hero.

So I'll just do hero air and I'm going to give it a width of 50%.

And there it is.

Looks pretty good to me.

Nothing revolutionary, but if we compare the two pretty close, there's a little bit of margin that

we're missing, as you can see there.