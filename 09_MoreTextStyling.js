// Lesson 66. Text-transform & text-decoration

So text transform is the simplest one.

It's pretty straightforward.

We use it to change the capitalization of text so we can take text and make it all uppercase, all lowercase,

or even capitalize the letters in each word.


But let's work on changing the styling, the text transform of every paragraph.

Let's do that.

So if I do paragraph text, transform, I'm.

And then I'll do uppercase.

This will capitalize every single word in a paragraph.

Now, this is generally not a great idea.

Large blocks of text that are all caps are not very accessible for people with dyslexia.

So I don't know where the threshold is between how much text is too much, but it's something to keep

in mind.

The different shapes of letters between uppercase and lowercase can help people recognize patterns.

Anyway, this is how you can capitalize all of your text.

It's important to notice, though, that the HTML is completely unchanged.

If we look here, I might need to zoom in a bit.

The text is still uppercase lowercase letters, just plain regular text.

We're using CSS to alter the display of it, but the HTML is unchanged.

So we have uppercase.

We have lowercase.

All right.

So now everything is all lowercase to anything that was uppercase before, like the W in Wolfgang.

Wolfgang is lowercase.

And then we also have capitalize.

And this will capitalize the first letter of every word.

As you can see, their capital D, capital a capital M.

So I probably wouldn't use this on a paragraph, honestly, Maybe on our H one, we could capitalize

everything.

Or let's just do uppercase everything.

I'm going to leave this here so you have a record of it, but there's no real reason we would use it.

So text transform for me doesn't come up all that often, but if you see it, it doesn't immediately.

Like if you just saw text transform, you didn't know what it did.

It doesn't really tell you a whole bunch.

How does it transform the text?

In what way?

But now we know it's used to change the casing of text.


That is the default style, so it helps us recognize something as a link.

You don't have to have it there.

You can actually remove it.

I'll show you that.

But that's one situation where it comes up frequently now.

Text Decorations.

Our first example of a shorthand property.

If you look at the documentation, it says that it's a shorthand for text decoration, line, text decoration,

color, text decoration, style and text decoration thickness.

These are four different properties.

You can set them individually, or you can use the text decoration property to set them all at once.

The first piece that we have to understand is text decoration line.

This is where the line goes.

Is there no line?

Is there an underline and over line a line through?

You can have multiple underline and over line.

Underline and line through.

By far the most common for me is underline, maybe sometimes line through if you need to have something

crossed off in in the web page for some reason.

So we can use text decoration line to do that.


So this is the long hand way of doing it by controlling and setting every property individually on its

own line.

But I have the shorthand version which is just text decoration, and then I can set all three of these

at once and the order doesn't actually matter.

So I can say cyan wavy line through.

Get rid of these just so we can prove it works.

And we still have the exact same result.

I can change the color.

So you you know for sure it's coming from this line.

There is that magenta line through.

So I could instead say magenta line through wavy and it still works.

And I'll just show a couple other examples we have dotted.

It's hard to tell, but there's our dotted line.

We have dashed, we have double and there's our double line through.

And there's a lot more that you could do different combinations, but I'll leave it at that so you can

set those properties individually or set them using the shorthand version.

And there's quite a few properties like this in CSS that are shorthand.

We'll see another one later on in this section.

Now there is one value I didn't show, which is text decoration.

None.

If I wanted to remove the underline on links, I can do that by doing text decoration.

Technically, it's the line I can set that to none or just text decoration.

The shorthand set that to none.

And now our links don't have that line underneath.

It still looks like a link because they have a different color.

But if we didn't have that color, then how would you know it was the link?

If it was just black text, The last thing I'll cover is the newer property text decoration thickness.

If we scroll way down, we'll see that it's compatible with a lot of browsers, but not all of them.

And we can't use percentage browser percentage values except in Firefox.

So it is a newer property.

When I first started teaching and don't think this was around, so you can set the thickness of the

line.

We can play around with that.

Let's do it on this.

Let's make it a wavy line again on Amadeus and let's set it to be I don't know what it is right now,

but let's try five pixels.

Whoops.

There we go.

And that definitely is thicker, right?

Let's try ten just to prove.

Yeah, that looks kind of neat.

You can't read it, but it's kind of a cool effect.

And then we also have the longhand version, text decoration thickness.

If you want to set that individually or use a shorthand like I'm doing here.

And that's it for text decoration.

// Lesson 67. The ID Selector

So on this slide you can see on the left some some markup.

It's different than what we have in the Amadeus web page, but it's an H one paragraph, another paragraph

in H to another paragraph, and I am selecting based off of an ID attribute.

So if you've never seen IDs before in HTML, it's basically a label.

It's a special identifier that is unique that we can add to any element on a page.

And all we do is we set ID, that's the name of the attribute equal to some name.

Typically it will be a single word no spaces or multiple words with some dashes, but whatever it is,

you just need to remember the name.

So in our example here, where I have the span that says Featured review, I could give that an ID maybe

of just featured.

That's kind of what it is, right?

It's just a label.

It's a hook that I can refer to in my styles.

Now, that won't change a thing because right now I'm still styling every single span.

But what I can do is use this new syntax where I use a hash symbol and then the name of an ID and that

tells CSS to style the element with that particular ID.

So pound sign, octave, thorp, hash symbol, hashtag, whatever you call it, and then the exact name

of an ID.

So I could revise this to be pound sign and then featured it has to match.

Exactly.

So make sure we spell it the same.

And now if we take a look, these other spans are untouched.

They don't have that ID and this one span does have those styles.

It's slightly larger, it has a gold background and only this one span.

Now, an important concept about IDs is that they're only supposed to occur once per page.

So each ID is supposed to be unique in practice.

I actually could have this ID repeated on the page.

I'll just show you if I.

I don't know.

Let's put it on this h four that says ten out of ten.

You can see that those styles are being applied.

It is working, but this is not a good practice.

This is something you should never do because the whole concept of an ID is that it occurs exactly one

time.

So you use this any time you have one element you need to single out.

Now you're not limited to one ID on a page, just each ID has to be unique.

// Lesson 68. The Class Selector

Next up, we'll see a second approach to singling out specific elements in our markup and styling them

using CSS.

So this approach involves classes.

We can add an attribute called class to any number of elements on a page.

We usually do it when we have multiple elements in comparison to IDs which are supposed to refer to

one specific thing.

Classes can be applied to any number of elements.

We're creating a grouping or a class of elements that we can then hook into in style using CSS.

So just like ID, we add the attribute called class wherever we want.

In this case, I have two paragraphs where I've said class equals bright.

Now this other paragraph doesn't have that class, so it won't be included when I select everything

with the class of Bright.

So instead of using the LB symbol, I use a period no space immediately followed by the name of a class.

So in this case bright.

And then I can say make them magenta, color of magenta.

And so again, three paragraphs.

Only two of them have that class.



styles that target that class name using the

dot syntax.

So I see a lot of students mix up the hash symbol and the dot.

You'll get used to it over time.

But the dot is for classes, the pound symbol, hash symbol, octave.

Thorp is for IDs.


A lot of the time we are selecting all elements and doing something to them, but then we want to have

more refined selections.

And one way of getting those refined selections is adding something to our markup, adding classes and

IDs to elements so that we can then go pick them out in CSS.

So that's it.

Classes will be used all the time in this course and they're everywhere in the real world.

So our IDs, to be clear.

But just remember the distinction is that an ID is supposed to occur one time and only one time on a

page.

A class is meant to be reused.

You don't have to, but it is designed for you to use it over and over again to form a class or a grouping

of elements.


I have an unordered list, and that's what I'll start with.

All right.

So the first property we'll look at is list style type in.

This is used to control the marker type that we use for individual list items.

So we have a bunch of options and you can actually make custom counters.

As you can see here, there's these space themed emojis that's actually quite a bit more complicated

to get into.

So if you're wondering how to do that, you can use this counter style.

It's called a rule starts with an add sign.

We might circle back to it later, but it's not all that common anyway.

But it does let you define your own counting systems, basically.

So start with a rocket ship and then a flying saucer and then a satellite and then a telescope.

But let's put that aside.

We still can customize what we display.

But if you're wondering how that works, ignore it or research it on your own for now.

So the more common default types are disk, circle, square decimal.

So let's take a look at that.

I'm going to add in an ID to my UL and I'll just call it cast.

And then in here I can style cast using that ID syntax.

Now I could just say style all uls, but if I have other us later on, maybe I don't want them to all

have the same styling.

So we have list style type.

And then let's start with circle.

So we have these hollow or empty circles.

Just an outline.

Compare that to the default, which is disk.

There's disc and we also have square.

There's a beautiful square, nothing revolutionary.

Right?

So that's the basics of list style type.

Let's go with Circle for now.

But we have some other things that we can do.

We can specify our own piece of text instead of quotes.

So if I want an asterisk, for some reason, I can do this asterisk.

Doesn't look great, but it does work.

Each list element now is prefixed with an asterisk.

We also have things like none, which is probably the one I use most often if I actually want to turn

off all the bullet points and list styling.

If I put none there, it no longer has any bullet point whatsoever.

And you might wonder, why would you do that?

Probably wouldn't do it in this example, but a lot of the time we use list and unordered list specifically

to make things like nav bars.

So if I go to the MD n website this right here, this is a list of information.

It's grouped together using probably an unordered list.

Let's inspect and verify.

Don't actually know.

Yeah.

All right, There it is.

Unordered list with a class of main menu.

But if we look closer, it says list style is none.

There is no bullet points or any list styling.

The list provides a structure and a grouping of content, and there's a meaning to a list.

So even if it's not displayed as a typical bulleted list, if we go back to desc, something like this

is clearly a list visually.

But even without that styling, when I turn it off, the structure behind the scenes is still that of

a list.

And it means that hey browser, this is a list of stuff that is somehow related.

And that's what a nav bar is.

It's a list of things that are connected.

Same thing with all of this stuff here that's grouped together.

I don't know for sure, but yeah, it is a list.

All right.

I was getting worried there, but it is an unordered list.

There's no bullet points.

We don't see anything because list style is set to none.

As you can see right there, there is no list style.

All right.

So that's just an example of the fact that sometimes we use lists and they might not look like lists

or bolded lists.

We can turn off that styling.


And if we scroll down on the MDM documentation, you'll see there's a more comprehensive list of all

the different options.

So we have decimal.

This gets into ordering our list.

Having ordered list, we can do lower Roman numerals, upper Roman numerals, classical, Greek and

lowercase.

So you would probably only want to use these on an ordered list.

Technically, I think it will.

Let me just say I want to use decimal numbers on an unordered list.

And yeah, it does.

It looks like an ordered list, but it's not a good idea to do that because this tells the browser,

it tells screen readers, it tells basically anybody looking at the code that there is no order in this

list.

But as soon as we look at it with numbers, that kind of implies an order.

There's a mismatch between what's visually seen and what's in the markup.

So we could just make it an ordered list, although I don't know if that really makes sense for a cast

list, unless it's in order of appearance or, you know, order of their call sheet order or something

like that.


One of the things we can control is the position of the marker.

So the bullet point or the number, depending on the type of list, we can set it to be inside or outside.

As you can see, there's really just those two values.

Let me show you the difference.

So let's go back to an unordered list with bullet points.

Let's make it a square.

So this is what it looks like by default if I inspect.

On each lie.

That bullet point is on the outside of the lie I'm selecting.

The lie right in this square is to the left of it.

It is not part of the lie itself, but I can change that by setting list and then style.

Position list with a T to be inside.

And it's hard to notice because it refreshed.

But if you look at the lie and I select it, that bullet point is now part of the lie.

I don't use this one very often, but I'm being comprehensive.

It's there.

The two values are outside and inside and the default is outside.

But I would never quiz you on that or anything.

It wouldn't bother my students with it.

But this final one does come up sometimes.

List style image.

This lets us set a custom marker and it can be an image so you can provide a URL.

Like in this case it's a little SVG icon of a rocket ship.

Let's see if they have another example on here.

It doesn't look great, but a star image.

So if you find some icon, some image you want to use, you can set it as the marker image.

But this actually isn't that common anymore because there are limitations when it comes to styling and

moving the stuff around, positioning it.

It can be kind of annoying and the more common approach is to use background properties, which we'll

cover later.

So I want you to know that this exists.

If you ever see it out in the wild, it allows you to change the image used for the marker.

By the way, if you're trying to use an emoji or something, you can actually do that if you get the

correct code for the emoji.

I think this is thumbs up.

There we go.

We get thumbs up.

So if you want an emoji, it's easy.

If you want an actual custom image, it's a little trickier, but there are steps you can do.

I'll just leave it at thumbs up.

I think that's kind of fun.

There are steps you can take and there's tutorials you can follow, but I think that's really all I

want to show for now.

So three different properties list style type list style, position list style.

Image.

By far the most important one is list style type.

If for no other reason, then a lot of the time you want to turn off the list styles so you set it to

none.

// Lesson 70. Styling Links and :hover Pseudo-Class

link heavy, and if you look at the links,

they stand out in a couple of ways.

First of all, there are different color and you definitely want to have your links look like links

and people come to expect links to have either an underline or a different color or a boldness or something

about them to make it clear that it's a link.

But also as I hover over it, it changes in some way.

In this case, there's an underline that appears, if I go to Mozilla developer network and I look at

some of the links, like that's a link right there as I hover, it looks like it is a link, right?

There's an underline text decoration.

We know how to do that.

Additionally, can you see my cursor?

It's an arrow here and as I hover it turns into a little pointer.

I don't know what it is, a gloved hand or something, but people come to anticipate behaviors of links.

So if we turned that off, people wouldn't know that they could click right.

If it didn't have that underline, if the cursor didn't change, how would you know it was a link?

So there are important expectations.

We want to meet when we create our own links.

Now we can still style them, but we want to follow those basic rules of making it clear that someone

can interact with a link.


Any time I have visited a link in my browser has it in its history.

It's styled by default as purple.

So if I click this one, Antonio Salieri, it's currently blue, takes me to Wikipedia as soon as I

go back.

It's now purple because my browser knows that it was visited.


Well, what we can do is something a little fancy and it looks like this instead of just a for all Anker

elements, we're specifically going to style the visited one.

So we write a colon immediately after the A and then visited.

And this is a special phrase.

It's actually called a pseudo class.

We will learn about these very soon.

There are other pseudo classes, but this means all links that have been visited by the user.

So it's a particular state, right?

Not just all links, only the visited one.

So let's make those orange or orange red.

Sure.

And when I come back here, you can see that these two are indeed orange.

All three of these because I've visited them.

Now, these ones up top, I don't think we'll ever change to Orange because I can't actually visit them. they need valid urls to be saved to the browser history


You'll use it if you want to style the appearance of links that a user has visited.

You don't just have to do color, but that's usually the indicator that's used to demonstrate whether

a user has been there or not.

There's another pseudo class that we have called hover.

So this works in the same way where we write some selection colon hover in whatever styles I have in

here.

Like if I make them magenta will only apply on links that are being hovered over.

So if I hover over this one right there, it turns magenta, but only while I'm hovering.

Now, like I said, this could apply to anything if I did it to h one.

It turns magenta when I hover over it.

But we're talking about lynx, and we'll see hover all the time, I think in pretty much every project

from here on out.

We have some hover effects.

You can do animations, but the simplest thing to do is change the appearance, maybe the color.

Or more often what you'll see is we'll add text decoration in.

So we'll say all links have no text decoration, but they have a green color and olive color.

But then when I hover, we'll say text decoration is underline.

So there's my links.

There's no underline, but when I hover, we get that underline.

So that's kind of recreating what we saw over here on MDM.

There's no underline now.

There is, but only when I hover.

And then by default, as you can see.

Well, I don't know if you can see it's small.

My cursor there is changing when I hover over links.

It doesn't change when I hover over anything else, just links.

It changes from this black arrow to this white hand shape.

That's actually a CSS property that we can use.

The property is called cursor.

So cursor takes a couple of values.

It takes help.

So can you see that question mark there?

I don't like that one.

We have wait, we have crosshair.

We have not allowed zoom in grab.

But the most common one is just going to be pointer.

So Pointer looks like this right here.

It's that hand.

And you use this generally to indicate a link.

And again, that's the default in most browsers.

But I can change that.

So I'm just being comprehensive talking about styling links.

If I wanted to, I could set cursor to something different, like wait, which is not a great idea,

but now when I hover over a link, my cursor turns to that weight symbol with that spinning beach ball.

It's a terrible experience.

It makes it seem like something's wrong.

There's a lot of power in that cursor, so I don't want to do that.

We have other options, though.

We have auto.

We have I don't even know what some of these are.

We have crosshair.

I don't think I've ever used that one.

As I hover, we get a crosshair.

So that might be nice.

If you're doing like a drag and drop selection type thing, you want to change the cursor to tell a

user sort of what behavior they can anticipate.

So I wouldn't change this, but I'll leave cursor set to pointer, which is the default.

Right?

As I hover, we get that pointer.

And that's pretty much it for styling links.

So you can style them in any way you want, but generally you want to have some color or text or text

weight or text decoration, something to show a user that this is a link that they can click on.

And then as a user hovers, you usually want that to change in some way.

Add the underline, change the color, make it make.

Well, I was going to say, make a pop up that can be kind of obnoxious, but the typical behavior is

just text decoration and then the cursor changes and that's the default behavior, that cursor change,

but you can override that.

I just wouldn't really recommend it.

And then finally, if you want to style visited links, if you're wondering why some links are blue

and some are purple, you can target those specifically and give them some other styles.

// Lesson 71. The Font Shorthand Property

So font is actually a shorthand property.

We've already seen text decoration and how that's a shorthand for three or four different pieces.

The same concept applies here.

The font shorthand property sets all the different properties of an element's font all at once so you

don't have to use it.

I actually tend to shy away from it, at least when I'm teaching because I think it's better to be more

explicit.

So I could set the font weight separately, set the font family separately, set the font style separately,

but you can do it all at once.

You can set all of these using a single line font family size stretch.

We haven't talked about style variant weight height, but most commonly it's used to set the font family,

the size and the weight and line height maybe.

So the syntax here is a little more complicated.

It says that if you use font and you're setting several properties, you have to include the font size

and the font family and then optionally you can include other properties.

But then there's other rules that says, you know, font style, variant and weight have to come before

font size.

There's other rules as well.

Line height must immediately follow font size preceded by a slash like that.

So I think it tends to get confusing if you see this and you don't know what that means.

It's not clear compared to if you just set line height separately and font size separately, it works

great.

So again, I tend to use it just for the three basic things font size and font family and then font

weight.


You should always provide a stack, even if it's just your preferred font followed by the family serif

or sans serif.

So that's the font shorthand.

We'll see a lot of other shorthand properties.

They're exactly what they sound like.

They combine the multiple properties and allow us to set them all at once.

// Lesson 72. Leafy Seadragon Exercise

It's text decoration.

So that's the color.

And then I want underline, although technically I don't have to specify the color if it's the same

color of the or if the elements color.

Right.

If this thing is red, the underline will be red.

But if I wanted to make sure that this was green and maybe this is a different color like orange, then

I can specify the color along with underline.

So we kind of don't have to do that part.

I should have told you to do two colors to force you to do it, but it's fine either way.


Next up, we've got a quick one, the compound selector, which isn't really anything new.

There's no new syntax.

All that we do is we can combine class ID and element selectors together and attribute selectors to

form more compound selections.

So this example here doesn't just select any div, it doesn't just select elements with the class of

special.

It selects divs that have the class of special.

So on the left you can see we've got a paragraph that has a class of special.

It is not selected, only the div with a class of special is so no space that means something very different.

But if we have an element and then a class with a dot that will select elements of that type with that

class.


So H four is with the class of score and this thing up top is an H two with the class of score.

So I can write a compound selection to only select h two elements with the class of score.

Which only selects that one up top and any other H twos I might have with that class.

But there's only one.

These elements do have that class of score, but they are h fours, so they're not selected.

And remember, a simple space there means something entirely different.

Now it's looking for a element with the class of score nested in an H two.

If I hover here, VTS code shows an example of that.

Some element with the class of score inside an h two.

If I delete the space now it shows an h two with the class of score.

Now technically you could also combine an element selector with an ID selector, but it's kind of redundant.

As an example, we have this h two that has the ID of summary right there.

I can select that.

By saying H two with the ID of summary.

So no space.

Once again, this means only h two elements with the ID of summary.

I'm making blue violet and it does work, but the whole point of an ID is that it only exists one time

on a page, so it shouldn't really matter what element type it's on because it's only supposed to be

there once.

So this is narrowing something down where it doesn't necessarily need to be narrowed down, but it is

valid.

It's just way more common to see this done with classes.

So you might have a class that is on your page 100 different times, some on H two, some on paragraphs,

some on.

I don't know Divs and you only want to style the ones on H twos.

You can do that just like this.

And if you do have multiple classes on an element which you can have.

For example, this H two right here has a class of score.

Let's just add another class of big.

So you add a space anytime there's a space in here, it will be treated as two or more separate classes.

So it has a class of score and a class of big.

It's not one class of score big.

There are two separate classes and then I could select just to prove that it does work an H two with

the class of Big and that works.

Or I could say an H two with the class of Big and the class of score.

And now any element I can even get rid of the H two to meet.

The selection has to have both of those classes, as you can see when I hover.

All right.

So maybe not common with our markup at the moment, but this does come up later on when we have a lot

of classes and some elements will have multiple classes and we may want to style only those elements

that have multiple classes don't put a space there.

That means something very different. -> a space between an element and a class would mean that type of element with a nested class of that class name

// Lesson 78. CSS Selectors Exercise

I only want the H two and this is where I add the H two in not a space.

Remember, that's very different.

This selects the class of bright inside of an H two element.

This selects an H two that simultaneously has the class of bright which is right there.