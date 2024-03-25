// Lesson 58. Changing Fonts with Font-Family

Okay, so I haven't set any font, but of course a font has been chosen for me and this is just based

off of the default in each browser.

So in Chrome on a mac if I inspect this.

If I look at the H one as an example, it's not going to show any sort of font family that I have set.

But if I go to the computed tab here, this is where we can look at all of the styles that have been

basically applied, whether I explicitly wrote them or not.

And I didn't write anything in terms of font.

But if I look at the rendered fonts down here, it says Times.

So Times is the font that's being used for this web page because I haven't selected anything else.

Now this is the exact same file, but it's actually open on Windows.

As you can see down here it is windows.

It's windows running on my Mac.

It's a virtual machine.

But if I inspect, we will see that there's a different default font, which is times New Roman.

Now they are extremely similar looking fonts, and I know there's some small differences only because

I googled it because I wasn't sure.

One is a monotype, one is a linotype, whatever that means.

It's beyond the scope of what we need to know and what I know at all.

But they are different fonts.

And again, it just comes down to what the browser picks as its default.

So if we want to change that, that's where font family comes in.


Font Family expects us to provide the name of a font or a list of fonts, including an optional family

of fonts.

So there are different groupings of fonts.

Again, we're not going to go too much into typography, but there's serif fonts and sans serif font,

so those are the two biggest groups.

A serif font includes these serifs at the end of letters, little lines, decorative lines.

They're not always straight, but at the end of each character where a sans serif font does not.

So there's a bunch of fonts that fall into these different categories, and we can specify that we want

our browser to use some sans serif font or some serif font.

Now sometimes we'll do that on its own, but usually what we'll do is actually say, We want you to

use this particular font and if you can't find it, use any sans serif font.


Of sans serif and I refresh the page.

We can tell immediately it's different, right?

Only the H one has that font.

But if we look at what the font is, it is Helvetica.

And if I look at everything else, it's using times.

So the H one has Helvetica.

That's what it chose for me.

Now it might, it probably could be the same on Windows or it could be a different font.

It really just depends.

But it looks to me like it's also using, Oh, I'm actually wrong.

It's using aerial.

So as you can see, we get different results.

And you can also see I'm terrible at telling fonts apart.

They're kind of similar, right?

They're both sans serifs, but generally we want more control.


When we design a web page, a web page will have a particular font we want to use.

The problem that we run into is that not every machine has the same set of fonts.

Fonts are installed on the machine itself.

So my Mac has some number of fonts that it came pre-installed with and a Windows machine has some fonts

that it comes pre-installed with, but there's not all that much overlap.

So there's a website called CSS Font Stack that helps us visualize and pick some of the overlapping

fonts that are really common on Mac and Windows machines.

So we can see Ariel is roughly available in 99.84% of Windows machines, 98.74% of Macs.

So it's a safe bet we can use that.

But if we tried to use something like let me find an example that doesn't exist on both, how about

to go UI?

I don't know if that's how you pronounce it, which has decent ish windows adoption but allegedly doesn't

exist on Macs.

I will try using this.

Now.

The first thing I want to note is that this font has a space in its name, so that means I need to wrap

it in quotes.

So font family is so go.

You I and this is just for h one on a page.

And here is my Mac.

I see that it says font family is supposed to be to go UI, but when I toggle it on and off nothing

happens.

In fact I go to computed it's just using times because that's the default font.

But if I head over to my Windows side and I refresh the page that looks to me like the font at least

changed.

It looks like it's using sego UI and it actually is.

It says down here that's the rendered font used for this H one.

So my window side has that font.

The Mac does not.

So this can be frustrating, right?

If we want to have some control over what fonts are used.

Now, I'm going to show you later on in this section that we actually can use any font we want.

If we include the font as a file with every HTML page, but we're not there yet.


So if we want to rely on the font users have on their machines, what we can do is create basically

a list of preferred fonts.

We can rank them and say, I want you to start with this, and then also try Georgia.

If it doesn't exist and if Georgia doesn't exist, try this other font so we can create this list.

So instead of simply saying Saigo UI, maybe my second choice after that is Futura.

So if that's my second choice, I'll put Futura after to go UI.

Now this is what we call a font stack.

It's just a list of fonts in order, but the technical term is a font stack.

If I look on my Mac side now, check it out.

It is using go to computed Futura.

So it wasn't the first choice.

It was the second choice because psycho UI didn't exist on my Mac or it doesn't exist.

But if I go to windows and I inspect, it is using to go UI because it found that font my first choice.

And then the final part.

That is pretty conventional and it is always a good idea is to always include a fallback family.

So instead of just saying, All right, so go UI or for Futura and that's it, there's a possibility

that a machine might not have either of these.

So what we can do is then say, All right then any sun serif fonts, assuming I think these are both

sans serif, right?

They're both in that category.

So now a browser will pick any suitable sans serif font that it finds and we're not limited to that

category.

We have serif, we have sans serif, we have mono space fonts, we have fantasy fonts.

Now, these are really not that common to use.

Mostly it's serif and sans serif, but I just want to highlight that there are some other options so



Now, what I wanted to show, though, is that font is inherited, so I didn't set a font on the paragraphs

or the H twos or anything.

The only thing I explicitly set the font on was the whole body and then also all H ones.

So the H one is going to be to go UI or future one of these choices, but the body, everything else

inside of it, like this div this h two it inherits the font from its parent.

So that's just another example of a property that is inherited which makes sense.

You usually set the font and it's pretty consistent across the page.

You might have a different font for your headings in certain areas, but most of a web page will use

the same font.

It would be obnoxious to have to set that on every single element so you can set it on the body or set

it on a parent container and everything inside will use that font.


When we talk about including custom fonts, We're not limited to this pretty small group of fonts that

are compatible between all machines that are typically installed on Macs and Windows.

We can include our own fonts.

You could make your own fun up if you know how, or you can purchase a font, or we can use free fonts

that we find online if we include them as a download along with our file, our HTML.

// Resources:

// https://www.cssfontstack.com/

// Lesson 59. Font-size, font-weight, and font-style

And the first one we'll look at is font size.

This governs the size of text.

We use this all the time to change font sizes.

We have default font sizes assigned to all of the elements.

Like if we look at an H one in Chrome, it has a default font size of 32 pixels.

I did not set that right.

This is all the CSS I have.

It's just changing the font family, but I can change it using font size.

Now the first thing you should know is that there's a lot of different units for font size a lot, and

we're going to learn about units throughout this course, but there's going to be a designated section

where we cover different units.

I didn't want to bog us down too much because it can get quite technical talking about the difference

between pixels and M's and R M's or REMS and percentages and V and V, It's just a lot of important

but dull and confusing stuff.

So what we're going to work with for now is just the one unit most people are already familiar with,

which is p, x or pixels.

Word processors like Google Docs and Microsoft Word work with pixel based units as well.

They're not guaranteed to be the same, by the way, one pixel in a browser versus a pixel in Microsoft

Word, but it's a similar concept.


So that is font size For now, it's very simple.

You provide some size and it will set some text to be that size.


Now it is also inherited.

So if I let's go back to making this larger, let's set that to be 60 pixels.

But if I set something on a paragraph, all paragraphs, the links inside are also going to change their

font size, right?

If I say paragraphs have a font size of let's say I set it to 20 pixels.

You can see.

Let me make it more obvious.

Let's go to 40 pixels.

All right.

Our paragraph is very large, but also the links inside the paragraph change size because they inherit

that font size.

But just like anything that inherits the property, I can then say, actually no anchor tags are going

to be small.

They're going to be 20 pixels.

And now our links are small.

They're not inheriting that font size.



Next up, we're going to look at font weight, which controls the boldness or the weight of text.

So the simplest way to explain this is that we can make text go from normal to bolded and back to normal.

So let's start there by default.

H one and all headings are going to be bolded.

If I inspect this one here, that's the default.

Let's look at font weight.

As you can see, it says bold.

That's a browser style.

I did not set that, but I can change it if I go to the H one and set font weight to be normal and maybe

you can tell that it changed.

It's still quite thick because it's just so big.

But compare it to what we have on my window side.

I'm going to refresh the page.

This is the bold that's the default.

I'm going to refresh.

And now it's normal weight.

I can also go the other way and say, how about paragraphs have a font weight of bold?

So now all my paragraphs have bold text as you can see there.

Same thing on windows I refresh, it becomes bold, but only the paragraphs.

So that's the simplest way to use font weight.

We use these keyword values, normal and bold, but for a lot of fonts, or at least some fonts, there

are way more choices for font weight, not just normal and bold.

We can instead use numeric keywords 102 hundred all the way up to 900.

So these are all different font weights that some fonts support, but not all of them.

So generally normal corresponds to a weight of 400 as a number bold would be 700.

So something like 900 would be extra bold, 100 would be extra light, 200 would be kind of light.

But not every font supports this.

So if we play around with the DevTools in Chrome on my Mac, let's work with this H one so that H one

remember, is using Futura.

At least for me it's different on Windows.

It's Tiago UI, but it's future on my Mac and if I try and change the font weight.

So right here where I have font weight, I can toggle it on and off.

It's set to normal, but if I set it to 400, it should look exactly the same because that's what normal

is.

If I set it to 700, it is bolded.

So let me go back to 400 and show you that if I try and change it to 100, it looks exactly the same

as 400.

This font, at least on my machine, doesn't have a font weight of 102 hundred and 300.

It only has 407 hundred normal and bold.

So when I try and use something like 100 or 200, it will pick the closest weight that it knows that

it has available, which would be normal for me.

400.

But over on Windows, I was playing around with this earlier.

If I look at this H one right now, it has a font weight of normal.

Let's change that to 400.

So it should be exactly the same.

Now let's try going to 100.

Can you tell that it's lighter?

It is lighter compared to what we had at 400 and then we have 700 now.

I don't know if there's an extra bold.

Is there a 900?

Oh, yeah, there is extra bold, as you can see right there.

So this font should go UI on windows for me has a bunch of different font weights so it's not a guarantee.

It really depends on the particular font.

But the good news is when we get to custom fonts, which is just around the corner, you'll see that

we can exactly specify what weights we want to include.

If I want to include the font called the railway and 100 407 hundred font weight, I can do exactly

that.

All right, so that wraps up font weights.


We use the keywords normal and bold most often, but you can also use the numeric weights.

And if the browser can't find the exact number you specified, it just tries to find the closest match.


Font style is basically used to make text italicized or non italicized, so we set it to be normal,

which is the default for most elements.

If we don't want italicize text, set it to be italic if you want italicized text.


Are italicized, but everything else is normal.

As far as I can tell, and like I said, certain elements are italicized by default.

Something like an EM element.

Like if I put a m right here.

Hello.

Would it make sense to do that?

But you can see that it is italicized and then I could say Actually I want to turn that off.

Font style should be normal on emphasis elements and now it is indeed normal.

OC So that's all there is to font style.

Three properties we saw in this video.

Font size changes the size.

There's a bunch of units we're only working with pixels for now.

Font weight changes the boldness or thickness and font style makes things italicized or just normal.

// Lesson 60. Changing Text Alignment

So this is a very useful property we use to change the alignment of text.

Is it going to be center aligned?

Is it right aligned?

Is it justified?

Which I pretty much never used, but it is an option.

Let me show you it in practice.

Let's work with our H ones.

If we look at the document currently everything is aligned to the left.

That's the default.

Now it does change.

If I set the direction to be right to left right.

If I'm writing an Arabic web page or a Hebrew web page, then the defaults can change.

But for now, we're not going to touch that.

We're just going to change the alignment of this h one.

So I'm going to go inside the H one selector and say text align.

It's not font align, it's text dash align and let's go with center.

So this will center align the H one.

Now, it doesn't mean necessarily that it will be centered in the page.

It will be centered within the element itself.

Whatever text fits within that element, it will be centered.

Now it happens that by default in H one goes all the way across the page.

It's a block level element, so it does center it in this example in the whole page.

But if I gave my h1a width, which is jumping ahead, we haven't learned about width, but let's say

I give it a width of 500 pixels.

This is what it looks like now when I hover.

Can you see that blue box?

There it is.

It is much smaller, but the text Amadeus is centered within that blue box.

So it's not centered in the page anymore.

It's centered within the element.

That's just how it works is centers within the element.

So text align is also inheritable.

So if I do the body and say everything in the body has a text, a line of center.

You can see everything now has inherited that.

It looks pretty terrible.

So we can override that.

We can change that.

But I just wanted to show that it is inherited and then we have other values like left and right.

So why don't I try right here for everything in the body?

Everything is now right aligned, left aligned is the default.

And then we have justify which aims to take text and have it align on the left and the right and then

add space in between.

So as I shrink this down, you'll see it adds some extra spaces around to make this happen.

There's an obvious example so it fits.

So things are aligned on the left and the right.

And again, I don't use this very much, but I'm also not much of a typography person, so I'm sure

it has a lot of great uses.

So that's text align.

That's really it.

We have some other choices.

We can use the keyword start and end instead of left and right.

These will be the same as left and right.

So start would be the same as left in a left to right language.

So if our browser is set to left to right, like right now it is.

I haven't changed anything.

I could say text a line left for my H one and it's aligned on the left as you see there.

But I could also say text a line start and nothing changes.

I could say text a line, right?

And it moves to the right and I can say text a line end and it moves to the end.

But if I change the direction, there's a way of doing this.

If I say right to left and this is beyond what you need to know, because we're not going to be working

with right to left languages in this course.

But if I set the direction, this is another property to be right to left.

Let me just show you what that looks like to start.

I'm only doing it on this h one.

It's now aligned to the right, but if I say text a line and it moves to the left because it's going

from right to left.

So the start is right and the end is left.

But if I change the direction to go left to right, then it moves over to the right.

// Lesson 61. Line-height, letter-spacing, and word-spacing

The first one is letter spacing.

We use this to change how much space is between the characters in a given piece of text or a given element.

So we have a bunch of options for how we specify the value.

We have normal l scroll down, that's a keyword, but then we can also specify a length in any unit

like pixels, which is the only one we know right now.

But if we learn, when we learn M's or Rams or even percentages, you could use those, but we're sticking

with pixels.

So again, it governs the space between the letters.


Then we have word spacing.

This is similar, but it only governs the spacing between the words, not between the letters.

So basically where there's already space, I think to make this most obvious, I'm going to get rid


And there's many units that you can provide, you can also do negative.

So if you want things to get closer together, you could do that.



So we're using pixels and then we have line height, which is the one I probably use the most out of

these three.

So it's not line spacing, it's line height.

And this is how you control the spacing between the lines.

So once again, we can use normal as a keyword or we can provide a number.

And if we only provide a number with no unit afterwards, this will multiply the current font size.

So this is basically 2.5 times the font.

So I'll show that.

Let's simplify this.

We've got our word, spacing it so ugly.

Let's get rid of that for now, I'm going to comment it out.

So when I was in school, in middle school, high school, I had to double space my essays.

I don't know why, I guess to help a teacher have space to write notes.

So let's double space our paragraphs.

We can do line height and then if I set it to two, not two pixels but two, that will double the current

font size and make it double spaced.

Basically, the lines are now double sized.

The space between I could then do a fraction instead like 0.5.

Or 1.5 or 4.5 and get very vertically spaced lines.

I can also provide a unit.

So two again is just double the current font size, but I could say 32 pixels.

As you can see right there, if I have an exact value that I want to use instead.

Most of the time though, I use some multiplier like you see right here, because this will change as

the font size changes.

So if I set the font size to be small, like what is it currently somewhere around 20 pixels.

If I set it to ten pixels that spacing scales with it because it's just a multiple.

But if I hardcoded this to always be 32 pixels.

You can see we have a lot of space there.

But then if I make the font size much bigger.

We don't have any space between the lines because I have hardcoded the height.

So I like to use the multiplier, just like you would in a word processor where you can set double space,

triple space and so on.

It's just a number and it will be multiplied by the current font size and that is pretty much it for

these spacing properties.

So we have letter spacing.

We had word spacing which I commented out because I think it's ugly, but I'll put it back in and then

we have line height which controls the height of each individual line in a piece of text.

// Lesson 62. Adding Custom Fonts With Google Fonts

Instead, we'll be able to include our own custom fonts that users don't have on their computer.

It doesn't matter if they have it or not because we are going to send it along or include it as part

of the HTML file.

Just like we can link to a style sheet and the browser will go and get this resource and apply the styles.

We can actually link to font files and the browser will go and download that font and then we'll have

access to it.

So this is how websites, most websites that you see today have fancy fonts like this one.

Madden We use it all the time.

If we inspect under computed, it says that this H one is using a font called Enter My computer doesn't

have enter, but it still works.

And the reason it works is that it was downloaded by my browser.

It actually says right here, network resource.

That means it was downloaded over the network.

If I compare that to what it says with our beautiful Amadeus web page under the font at the bottom it

says Lucida Grand or Grand is a local file.

It's on my machine.

It is pre installed.

I have it.

Nothing was downloaded, but if I want to, I can include a font or multiple fonts.

And the problem we have is where do we get those font files?

There are lots of options.

You can pay for fonts.

You can pay a lot of money for fonts and a lot of big tech companies do use fancy expensive fonts where

you license them year after year, thousands of dollars potentially.

Or we can find fonts that are available for anyone to use that are licensed for us to use for any sort

of use case commercial or not.

And one of the best resources for this is Google Fonts.

Google Fonts provides over 4000 hundred different fonts that we can use for free.

But not only does it list them to us and allow us to download the font files, it actually allows us

to link to the fonts that will be hosted by Google.

So I'll show you what I mean.

First of all, when you go to Google fonts, there's a link to this exact website attached to this video.

Check it out.

Go to Google fonts and you'll see a bunch of different fonts and you can filter them.

You can sort them look at trending ones, most popular newest fonts, and then we can also narrow it

down.

If I only want to work with handwriting fonts, for example, there's quite a few handwriting font options

or if I only want sans serif fonts.

Quite a few options.

So let's pick one of these.

Let's go with Montserrat.

So I'm going to click on Montserrat.

And there's a few things you'll notice.

First of all, it shows a sample.

I can change that text to be whatever I want.

Actually, I'm changing it down here, not up top, but still, I can get a live preview of what my

text looks like or if I delete this, it just has some default text.

But more importantly, it shows me all of the font weights available.

So Montserrat has a lot of weights all the way from 100, which is very thin up to 900, which is very

super extra bold.

And then we also have the italic fonts for each one of those weights.

And this is pretty important to recognize that just downloading the 100 font weight does not give us

the italics as well.

We have to know ahead of time are we going to be using italics text in this font?

Then we need to download that font face.

So it's something you kind of have to be aware of as you're building your website.

Do I need extra bold?

Do I need 405 hundred and 600?

Usually you don't.

Usually you'll have a bolder and a lighter and maybe three.

There's possible websites you might build where you want all of these 20.

What is this?

1520 different fonts.

But normally it's pretty limited.

So if I know that I want to use a regular 400.

What I'll do is I'll click select in this kind of adds it to a shopping cart, but everything's free.

We're not really buying anything, but it adds it so that I can then download and use it later.

So I also want the 100, let's say I want 104 hundred.

So what I can do now is download and that will download the font files for me on my machine.

But the easier option is to actually just click this link or this button up top.

It's not that obvious sometimes what that is, but if you click it, it expands and it kind of shows

us our shopping cart.

And in here it says, All right, you have Montserrat selected for 104 hundred weights and I can remove

them.

If I don't want them, I can add more.

But let's say I'm happy with that.

And then it gives me text, very special text that I can copy and paste into my document.

Right here is what I would paste into my HTML document, but I can also link to fonts inside of CSS.

I'll show both of those.

But for now I'm going to take this text and copy it or just click this button and I put this in the

head of my HTML document.

So let's go back to our beautiful Amadeus website.

I think I'm just going to delete all the styles for now.

We'll have a clean slate and then I'm going to paste this that I have on my clipboard right here into

the head.

So we put it in the head because it's not content, it's not structure of the web page.

It's a resource we link to, just like we link to a style sheet.

So again, in the head, that's where I'm going to put it.

So there's a couple of links here.

We don't have to worry too much about what they each do, but if you look at the third one, it does

say somewhere in here, Montserrat, and then it says the weights 104 hundred.

So as soon as the browser encounters this, when I load my web page, it's going to go and download

this file and I'll have access to it.

So I'm not going to see anything immediately because I haven't used that font.

It's been downloaded, but I'm not applying it.

So let's apply it to everything.

I'll select the body and do font family.

And what is it, Montserrat?

That how it spelled?

Let's see.

There we go.

It is now using Montserrat.

If I if I scroll down, it says Montserrat Network Resource.

So it went and downloaded that file for me.

And if you really want proof, you can go to the network tab in Chrome.

You don't have to do this.

And there is a font.

So these are all different resources that I can filter by, but if I go to font, it will show me any

font files that were loaded by this page.

And if we click it says, Here we got this font located at Google static dot com slash Montserrat.

It went and got the file I wanted it to get.

So we also have the 100 font weight.

So maybe I like the thin font weight on my h one so I can do font weight of 100 and it's very thin,

but I don't have a bold font.

If I try 900, it's just going to use the closest thing which is the normal font, the 400.

So if I realize, oh shoot, I actually want a very bold, what I can do is go back and add that bold

font weight.

Or if I wanted italics, I could add that italics font.

But let's just go with 900.

I'll select it and you'll see it's added to this URL.

Now, I could also just kind of add that myself if you follow the pattern.

If you look right here, weight at 100.

Semicolon 400.

Semicolon 900.

Now it should hopefully go and download 900 and let's see if it does.

And there we go.

We can see that very thick font weight there.

But I think I prefer.

Not using that just aesthetically.

I like the 104 hundred more and then let's use the 100 for the high ones.

So that's the basics of using Google fonts.

I would recommend, instead of doing what I just showed where I edited the URL directly, instead of

that, I would go to the Google Fonts web page for two reasons.

One, not every font has all of these weights, so you want to make sure that you actually are requesting

a font weight that exists.

But more importantly, this format could change one day.

The URL might change the way that Google fonts is set up might change.

So instead of just tinkering with the URL and hoping you're doing it in the right format, you can just

copy and paste right here and it will be guaranteed to be correct.



Now I did say we can also include fonts via CSS and that's why there's two windows here.

This is how we can include the fonts using HTML.

This right here is how we can include the fonts in CSS.

So if I paste that in my CSS file at the top, it says add import and then a URL.

When the browser sees this, it will go and fetch whatever is at this URL.

So let me turn this off just to prove that it does work.

Refresh the page and it still is fetching the correct fonts for me.

Now I tend to prefer to do it in my HTML most of the time instead of hiding it in the CSS.

It doesn't matter that the one advantage to doing it in the CSS is that I can use this style sheet anywhere

on any any document.

I don't have to make sure that the document also includes a link.

So there are pros and cons.

I guess I just kind of like to link all my stuff together in the HTML, but both are totally valid.

At the end of the day, it's just going to go and get the font so we can use it.

And that's pretty much it for Google fonts.


But in terms of the mechanism, it's quite straightforward.

You go and select what you want and then select the weights and it will build a URL for you, either

a link tag that you add into HTML or an import that you add into CSS.

And then also this is worth pointing out, it does show us a suggested font stack, right?

So Indy Flower, as a backup, we provide cursive just any cursive font and for Montserrat, any sans

serif fonts.

And we should always do that because there's a chance these fonts won't load.

So let's add that in sans serif, we hopefully won't see anything different.

And this should be a cursive font.

That's the closest thing.

Although we can make a call and say, just use a cell phone instead or something.

Again, nothing looks different.

But in the event that those fonts don't load, these backup families will be used.

// Resources: 

// https://fonts.google.com/

// Lesson 63. Styling Text Exercise

a line height without a measuremnt designation will be used as a multiplier against the font size.


But what you'll see on other people's code pens is if you go to settings on the HTML tab, not CSS,

but HTML.

You have an option to put stuff for head and this is where you can copy and paste any of those link

tags and it will keep it cleaner here, right?

So we don't have to look at it.

But also technically, this is supposed to go in the head of a document and in a code pen, we don't

really have a head.

This is all assumed to be the body and code pen makes the head for us.

// Lesson 64. Creating Text Shadows

They are treated in a particular order.

So let's start with the X and Y offsets.

We can specify that in pixels.

That's the only unit we know so far.

It's how many pixels the shadow should be offset from the original text, and this could be a positive

or negative number.


So that's the first simplest text shadow.

It's just a sharp copy of the text moved over in a different color, although it doesn't have to be

a different color.


OC So what about Blur the blur radius?

You can read more about it to somewhere on here.

Optional.

It's a length, and the higher the value, the bigger the blur.

The shadow becomes wider and lighter, and it will sort of graduate back to whatever the background

color is and fade out and it's going to default to zero.

So we don't have any blurring happening right now.

But if I set a blur radius, remember, we have to follow the right pattern.

So with my current syntax, where I'm doing X and Y and then color, I need to do x, Y, and then blur

radius and then color.

So let's do a two pixel blur radius and then magenta.

And now we get a nice little neon glow effect.

Our text is sort of floating, it almost appears.

And that's thanks to Blur radius.

So if I increase that maybe to five pixels.

It spreads out even more and it gets lighter.

And if I shrink it down to one pixel, it is blurred, right, compared to the original text, but a

lot less than five.

And if I set it to zero, which is the default, then we just get the sharp edges of the text.

And that's really all there is to text shadow.


And if I set it to zero, which is the default, then we just get the sharp edges of the text.

And that's really all there is to text shadow.

The trick is actually using it in a way that looks good and there's some effects you'll see.

I mean, neon text, you can even do multiple text shadows.

So they show an example of this, I'm sure on here, multiple shadows where you separate each one with

a comma.

So text shadow.

And then here's the first shadow and here's the second one, and here's the third one.

And then finally a semicolon.


But text shadow is flexible.

It wants us to provide multiple pieces of information separated by spaces and the order matters.

But there are multiple orders that are acceptable.

We just pick one and stay consistent.

It would be confusing if I switched from color first to color last in the same document.

Even if it is valid, you want to be consistent.

And then of course there's many orders that wouldn't work.

So you've got to look at the documentation to understand that.

// Lesson 65. Our First Mini Project: Cantilever

One other thing I didn't mention about, including the two different ways of including a font.

One is in the CSS, the other is in your HTML is that if you do it in your HTML, it generally is faster.

It performs better because the browser will see this and immediately go and fetch the font.

Whereas here, if I included it in my CSS, which totally works, I did demonstrate that what happens

is that it loads the CSS file first and then it goes and loads whatever it finds inside the CSS file.

So I would stick with this option personally, but both work just fine for what we need.


Now, you can see it is using the bold font weight here.

And that's because h one se by default are going to use the bolder font weight if it's available and

it is available because I decided to include it, but I'm actually thinking it looks better without

that.

So I'm going to manually set the font weight to be 400 or normal.

So now it's thinner.


Now, the biggest thing you probably are noticing is that this goes all the way across the screen versus

my example.

There's space up top and there's space on the left and the text doesn't actually go all the way across

the screen.

And to accomplish that, we kind of have to jump ahead a tiny bit.

It's hard to make a project only using the stuff we've learned so far.

As you can see, the typography is okay, but the layout is terrible.

So using very minimal stuff from the future that we're going to learn soon, but we haven't learned

just yet, we're going to change the width and what we call the margin so that it looks like this.

So what I'm going to do is actually wrap all of this content here inside of a container, just a div

element.

So I'm just going to make an empty div.

And the reason I'm doing that is so that I can change the width on one element, a div and all of this

stuff is inside of it.

So we haven't learned about width really.

I think I've showed it a couple of times, but all I'm going to do is go to that div, I'm going to

style all divs.

We only have one div, but I should note that the way I'm writing these styles, if we had multiple

h ones or multiple paragraphs or H twos or divs, they all get the same styles, which is not always

what we want, but we don't know anything better yet.

So for this div I'm going to give it a width of a percent.

We can play around with this and I encourage you to play with it to see what actually looks best on

your device, because my screen is pretty wide and I know a lot of people have less wide, narrower

screens, shorter screens, and if this looks terrible at 55%, you could try increasing it or decreasing

it to see what looks best.

So that gives us the width.

Now all of our text wraps down.

The paragraphs are smaller or less horizontal, I should say, because this div ends right here.

I'll inspect it and you'll see that this doesn't look good on small screens.

As I mentioned, it is not made to be responsive.

It really is just going to look okay on the screen I'm looking at on my laptop.

We'll learn how to update this.

We'll learn about responsive design.

But one thing to know about percentages is when I set this to be 55%, it's 55% of whatever the screen

is here.

Well, whatever the body is, and the body keeps shrinking so that 55% keeps shrinking and it doesn't

look great.

But I wanted to show you the div so you can see when I hover is that blue box.

It's only 55% of the screen.

So play around with whatever looks best for you.


Margin is basically spacing outside of an element.


So to accomplish that, I'm going to select something.

What am I going to select?

Well, if we look at the H one, how can I apply styles just to the word artists?

I can't.

Not with the way the markup is written right now.

If I add a text shadow to my h once it is a text shadow for the entire H one right text shadow.

Let's do ten pixels, ten pixels red.

So over here, it's the entire thing, and maybe we could make that look cool.

Different colors and different spacing, I guess.

But to make this happen, we only want to work with that one word.

And this is where an element like a span comes in handy.

A span is just a generic container that is inline, so it wraps typically around text.

We won't see anything different whatsoever.

Let me get rid of that text shadow.

We don't see anything different at all.

But now we have a hook, a way of referencing this one piece of text.

Now, if we had multiple spans, I would be selecting all of them when I write span.

But we only have one.

And soon we'll see other options.