// Lesson 49. Working with background-color

the color property changes the text color of an element

the background-color property changes the background color of an element


We've already seen the color property which is used to change the text color of an element.

So if we set color to be read on a paragraph and all paragraphs, we see red text, but we have a second

property related to color, which is background color.

Background dash color changes the background color of an element.

So if I set background color of all paragraphs to be olive, it would look something like this.

So let's try an example.

Let's work with our allies.

All line elements will have a background color of gray.

And that's what it looks like now.

It all blends together here because each lie gets a gray background color.

But they are individually, they have their own background.

There's just no space between them.

So let me show another example.

Instead of doing the Allies, why don't I give my h1a color and a background color?

Let's do background color of yellow.

And there's our beautiful H one that has a yellow background color and then teal text.

Now notice that the background color goes all the way across the page.

It does that because the element itself extends all the way across the page.

It is a block level element.

If I inspect it with the devtools.

We would see.

Let me go back to just regular view.

We see that the element goes all the way across to page, right?

It just doesn't have enough text to span across the page, but it takes up a whole block of of space.

Same thing with all of our other headings.

But then if we look at something like an anchor element, if I give an anchor tag a background color,

let's do color of magenta.

Whoops, not color.

Background color.

Magenta.

They don't go across the page because the link elements are in line.

So the background just goes to fill up the background of the element itself.

However, however much space the element takes up, that background colour will take up and that's pretty

much it for background color.

// Lesson 50. Quick Tip: MDN & Comments

I can write a comment using forward slash and then an asterisk and you can see it immediately grays

out and now everything will be grayed out.

But if I want it to stop, then it's asterisk forward slash again.

And now I go back to typing regular code.


I'm going to start by talking about named colors, but we have hexadecimal colors in our GB colors and

HSL colors and HWB colors, not to mention rugby A and hula.

There's a lot of different options for how we specify colors.

And if you think about what color is, it's a huge spectrum basically of light that we can perceive

with, I guess, infinite possible values.

But when we work with CSS, we have a set number of colors that we can choose from.

If we're using named colors, it's about 140 something colors.

And if we're using hexadecimal or our GB colors, I think it's 16 point something million different

options.


This is one option, lots of named colors to choose from.

But in the grand scheme of things, it's a very small subset of colors.

// Lesson 52. Understanding RGB Colors

So next up, we're going to cover our GB colors.

So this is a color system that allows for 16 point something million different color options, all specified

with three numbers.

So this is an example right here.

Our GB 40 52550.

Now what does our GB stand for?

It stands for red, green, blue.

So every color that we can create using our GB is a synthesis or an addition of some red, some green

and some blue.

And you can see how this works.

This is very different than what you might be thinking of mixing paints on a palette, for example,

where you mix red and blue, you get purple, you mix yellow and blue, you get green.

That's not how this works.

This is additive.

It involves adding light together and it's quite a bit different.

In fact, if you add red, green and blue together, all three, we end up with pure white.

So don't get hung up trying to imagine paints on a palette and finger paints or something.

It is different, but it's okay.

You don't have to master this.

You just have to learn the syntax.

So again, we have red, green and blue.

We have three different channels of light and we can create virtually any color black, white, orange,

anything in between using those three colors.

So here's what it looks like.

We write our GB to tell the browser, to tell CSS we're using an RGB color, parentheses, and then

three numbers in each one of these numbers can go from zero up to 255.

And the first number represents how much red, the second number, how much green and the third number,

how much blue.

So if we had 105, ten and two, one or 214, this would be 105 red, ten green and 214 blue.

So let's see a simple example that's easy to understand.

If I have our GB 00255, this means no red, no green and full blue.

So the resulting color is pure blue.


Now we do need those commas in there.

That's important to separate the numbers.

We have to have the friends.

We have to say this is our GB.

We don't want spaces and we can have spaces in here, but we don't want spaces between the parentheses.

And then also you'll see that V's code is giving me a little preview of that color and it looks blue.


So it's good to know how it works.

The basic relationship, for example, this color here, it has a lot of green in it, but it's not

very bright.

Remember, full brightness would be 2.55.

So it's sort of a middle green with a little bit of red.

And we get this sort of army ish green, I guess you would call it.

But once again, that doesn't really matter.

If you can tell me exactly what this will look like or not.

All that matters is if you can write the right syntax and pick a color that you like.


So VTS code has a color picker, as you can see right there.

I can hover over this little color swatch and then I have a color picker where I can drag this around.

You can see the RGV numbers changing there.

So if I want an orange color, well, I'll make this sort of orange.


There's tons of color pickers out there.

There's one in V's code.

There's actually even one in the browser in Chrome.

So if I inspect and let me zoom in a tad here, if I want to change the body background color, you

can see how do I make this?

Right now it's black, but if I click it lets me select some other color.

Now this isn't going to change anything in my file.

It's just temporary until I refresh the page, but it allows me to pick different colors.

I mean, even if you just Google color picker, here we are.

We've got a color picker.

I can pick a color and I can see the RGV values there.

Now, what it shows me if I copy and paste is just the numbers.

So I still would have to put that inside of a list, RGV, parentheses, and then put the numbers in

// Lesson 53. Hexadecimal Colors

So hex colors are actually just shorthand for RGB colors.

We usually have six numbers, two numbers representing the red channel, two for the green and two for

the blue.

And we have a pound symbol, a hash sign and octave thorp out front.

So this could be translated to a regular old RGB color like we saw in the previous video.

They represent the same values.

It's just a little more compact If we look at this color here or even the largest GB color in terms

of digits, is this right?

So we've got three digits and a comma, three more digits and the comma and three more digits.

But when we write a hexadecimal color, we can actually shorten this to be this.

So it's a couple of digits shorter.

The truth is we can even shorten it further.

We'll learn more about that.

But at the end of the day, it represents this same color three channels red, green, blue, from zero

2 to 5 five.


So how does it work then?

What is A B and an E and a C?

Mean as a number?

Well, it has to do with number systems, right?

We most of us, at least in the modern world, use a base ten or decimal system for numbers.

So every digit has a possible choice, a possible value of 0123456789.

Right.

If we think about what is the largest three digit number that you could write in a decimal system in

base ten, it would be nine, nine, nine.

That's the largest number we can put in each one of those spots.

So when I say base ten, that's what I mean.

Every digit has the capability to be zero through nine.

We have ten choices.

If you compare that to something like binary every digit, you've got either a zero or one.

There's only two choices.

So this right here, this is actually the binary version of 2.55 in decimal, it's 255 in binary, it's

1111 weight, 111111111.

It's quite long.

So this would be going the other direction if we used binary, which the browser doesn't recognize.

This is how we would represent 255255255.

That's not what we want.

We want to go the other direction to make things more compact so we expand the number of possible digits

we can use instead of zero through nine, we're going to go zero through F.

Now f edc, b a Those are letters, of course, but they're used as a placeholder for numbers because

we don't have digits beyond nine.

We have ten and 11, but those are two numbers together.

So instead we use a BCD F, so we go from zero to F, So a hex color code is a pound symbol, followed

by six hexadecimal digits ranging from zero up to F.

So something like five in decimal is going to be five and hex, but something like ten becomes a or

255 is shortened to f f.

Now if you don't understand how it works, how you could convert, that doesn't matter.

And I'm not even going to go into it because it's not worth worrying about.

Because again, at the end of the day, most people use color pictures.

All you need to really know is it goes from zero to F, So zero zero would be no color, no red or no

green.

F F is full on green or full on blue a.k.a 255.

So here's an example.

If we have our GB 000 well as a hex color, we can rewrite that as pound symbol 000000 and I'll show

that to you.

Let me get rid of all this mess that I made.

Let's make the background color a hex color, 000000 just like that.

And I'll save and we get black.

Then we have another example.

What if I want this RGB color, which is 2552550?

I could rewrite that as a hex code using the pound symbol F remember, that means 255f, F for green

also means two, five, five, and then zero zero means zero.

And we get this yellow color.



And it's the same exact shade of yellow.

It's just a slightly more compact way of writing that number, which is why people like it.

But just like before I can use the color picker, I can tweak it so you don't need to be able to look

at this color and say, Oh, that's going to be orange.


So pretty much every color picker out there will support hex codes as well.

So if I go back into the browser just to inspect, I'll click on the color here in Chrome and it's actually

showing me hex by default, although I can toggle that to be our GB or I'll keep it at Hex and then

I can change that color once again.

It doesn't impact my actual code, it's just in this browser window.

But you can see that if I do a color that has a lot of red in it and not much of the others like what

you see right here we have for Red.

If I convert this back to our GB, that means two, five, five.

All right.

So please don't get hung up on the whole color thing.

Use a color picker.

Don't worry about it.

Use the VTS code color picker, but be able to recognize that this is a hex color and it's a little

bit more compact than the underlying RGB color.

Right?

If you compare the two, these are the same thing.

So this is more popular, but underlying it all, it's the same exact color.

Now, I did mention that there are ways to shorten hexadecimal colors for specific colors.

Not every color we can actually reduce from six characters down to three.

And this happens when if we have a color like this, this is full white.

The two digits for each channel are the same.

I have too many.

There we are.

So f f and then f, f and f f.

That can actually be shortened to this.

F f f, which just means black.

Here's another example.

I have ffff00.

Let me just break it into the different chunks so you can see.

So when each pair is the same, I can shorten it to just be f, f, zero and the browser knows if there's

only three digits provided it can expand that into the six and we see the same exact shade of yellow,

but that only works when each pair is the same.

So that's not very common.

But for black and white, it certainly happens a lot because it's 000 or f f.

But if I had a color like this and I go to a hex color rather.

I can't really shorten this right, because each combination or each channel has two unique digits,

so there's nothing I can do there.


Just know that you can always figure out colors using a color picker and you can always convert from

hex to GB because they represent the same colors.

It's just a shorter syntax when we use hexadecimal.

Shorter and maybe a little bit scarier looking compared to our GB.

// Lesson 54. RGBA Colors and Opacity

We can control this in a couple of ways.

One option is using an R, g, b a color.

Now that A is for alpha channel a.k.a transparency.

I don't know why it's called Alpha Channel.

I'm sure there's a reason, but it's the transparency and it's a number that goes from 0 to 1.


So let's say that's our color that I want to use for my h one's background color.

Well, right now it is completely opaque.

You can't see any of that, Cyan.

There's no transparency to this magenta.

But if I use an RGB, a color and that A is the fourth value, whoops, I think it just changed the

color accidentally.

It's the fourth value after the blue channel.

So red, green, blue.

And again it goes from 0 to 1, which can be confusing because the other three channels go from 0 to

2 five five.

So one is basically the default.

So what we have right now, it won't look any different.

If I change it to be zero, it will look completely transparent.

There's nothing there.

And if I do 0.5, it will be halfway transparent or halfway opaque.

As you can see right here, we actually get some of that cyan coming through.

So if I had a different background color, if I have a yellow background color, it's not going to look

very nice.


And if I do 0.5, it will be halfway transparent or halfway opaque.

As you can see right here, we actually get some of that cyan coming through.

So if I had a different background color, if I have a yellow background color, it's not going to look

very nice.

But you can see that it is transparent, right?

It looks sort of orange.

Coralie Now I guess it's still pink, but it's a yellowy pink because that yellow is bleeding through.

So if I do something even more transparent, like 0.2, there it is.

Or if I go more opaque, it's still showing some yellow.

It's hard to tell, right?

We don't have much of a reference, but compare that to if it was fully opaque, it is a lot darker

and we don't get any yellow.

So that's one way of controlling transparency is to use an GBA color.

The color pickers allow you to do this as well.

That's what this slider is right here.

You can see an RWB a value as soon as I change that slider.

And it's 0.483 in this case.

And as I slide down to make it more transparent, that number slides down as well.


Now, there's another option for controlling the opacity of colors, which is actually to use a property

called opacity.

So this is separate from the color itself.

This is a property that accepts a number from 0 to 1, so a decimal or a percentage.

So an MD and Mozilla developer network, it's telling me, here's the different syntax.

Use a number or use a percentage.


So I'll say h twos have a background color maybe of cyan.

There it is.

And then after I do that, instead of on the same line, when I defined the color, like here, right

when we did an RGA color afterwards, I can say, All right, you know that color.

We have set its opacity to be 0.5.

And there we are.

You can see that we're getting a transparent element, but there's a very important distinction.

Notice the entire element is kind of transparent, including the text.

So it's not just the background color in this case, it's also the text color.

If I instead had used an rrb a color for the background rrb a and then if I want cyan, let's see,

what is that?

Cyan is blue and green.

Right.

Let's see.

So that gives me cyan.

And then if I set the Alpha channel to be 0.5.

It looks the same when it comes to the background, but the text is now completely black.

So there is a distinction I want to be clear there.

Here I'm saying I want a transparent color for the background color and only the background color versus

what I had a moment ago.

I said, here's the background color and then I want the whole element to be 50% transparent.

And I could write this as 50% as well.

So there's a distinction.

We'll see both of these throughout the course.

Sometimes you want the whole element to be transparent.

Whatever is in there, including the text color, the background color, anything else.

And other times you may only want the background color or the text color to be transparent, in which

case you can do an RGB, a color.

So just to recap our GPA, we have four values now, the three GB colors, nothing changed there, but

now we have an alpha channel that goes from 0 to 1.

So one being fully opaque, zero being fully transparent, 0.5 being halfway in between.


So opacity controls the entire elements.

Opacity, our GPA allows us to select an opaque or transparent color.

// Lesson 55. Colors Quiz

// Lesson 56. CSS Inheritance

some css properties, like color, are inherited from parent elements if no value is specified.

other properties are not inherited and instead have a default initial value.

Basically, elements will inherit values from their parents for certain properties and for other properties

And we've seen this part in action where if we assign a color to a parent element, for example, if

this is my markup, I have a paragraph that has an m element inside.

If I make that paragraph olive colored, well, the M element is also olive covered colored.

I didn't specify a color for that particular element, but it inherited it.


Now, if we go to our markup, I think I'm just going to delete all of our styles for a moment.

And we've seen this if I do things like on a UL, so there's an unordered list here.

If I style all uls to have a color of yellow green.

The allies are yellow, green, and I can actually use the devtools to inspect this.

And what we'll see if I zoom in a tiny bit, if I select this ally, the ally doesn't have a color set

on it, but it says inherited from UL.

Color is yellow green.


And inside each ally there's a span.

And if we look at the spans as well, right here, they also have a color of yellow green inherited

from the parent element.

So all of that is to say we can rely on inheritance if we want to set a whole paragraph or a whole UL

to be one color or have one font size and not have to worry about every individual text element, we

can do that by taking advantage of inheritance and there's nothing fancy we have to do.

It just happens by default.

And then if I wanted to have the span elements right, you can see there's a span in there for each

individual cast member.

We have the actor's name and then a span that has their character's name.

So I could style all spans to be different and color will be, Let's do orange.

And there we are.

So now we have all spans that are orange and all Uls are yellow green.

But in the case of the allies here, they don't have a color set, so they inherit it from the parent.

Now, this is an interesting situation We're going to learn more about later where potentially there's

more than one style applying to this span.

Does it inherit the green color?

Does it have its own orange color?

Which one wins?

We will learn more about that later.

For now, I just want to highlight that concept that certain CSS properties are inherited and if you

ever want to know which properties are inherited, you can go to the documentation on MDM.


I'll show you that it's not inherited this property is border. border is not an inherited property


So when I set a border on a parent element like a div, it only applies to that div.

It doesn't apply to the spans and the H three and the h four is in the paragraphs like color does.

Now there is a way to change this.

If I really wanted the paragraphs in here to all inherit a border.

I could do this.

I could write a style that says paragraph border inherit.

And this is a special word I can use as a value for any property.

And it says I want to turn inheritance on for paragraphs.

In this case, I want them to inherit their border from their parent.

And now every paragraph has a border inherited from its parent.

Now, I don't think we would really want to do this.

Generally, there's a reason that certain elements are or properties are inheritable by default and

other ones are not.

But I just wanted you to know that it is an option.

You can turn that inheritance on.

So I think I'll comment that out and leave it here so you have a record of it, but we don't need to

worry about it other than that, and that's pretty much it.

So the takeaway here is that some properties are inherited from parent elements.

If no value is specified and others are not, border is not, color is.

But of course if you set color on an element like we did for our spans, spans are now orange.

Well, they're not going to inherit a color, they're just going to be orange.

But if we didn't have that color set to orange there, then they inherit the color of green from the

parent.

// Lesson 57. CSS Colors Exercise

So a hex code and there's our orange background color and make me 50% transparent using opacity.

So the entire element, 50% transparent, I'll do 0.5 And there we are.

You can see the black text is also transparent or 50% transparent because I used opacity.

That's for the entire element.

Our colors only apply to wherever the color itself applies.

The background.