// Lesson 200. Introducing Responsive Design

Responsive web design (RWD) is the art of making websites that work across different screen sizes/orientations. In other words, the layout and experience of the website responds to the device a user is on to ensure it's always usable.


So responsive design is basically the idea of making our websites look good and work well across different

screen sizes and orientations.

Or at least that's what most people mean when they say responsive design.

We're writing websites that respond to the size of the screen.

Technically, there are other things we can respond to.

Like we can write websites that look good on print if you actually print them out versus on a true displayed

screen or write websites that look good for black and white displays versus a full color display.

Those are all considered responsive design, but most people, 99% of the time when they say responsive

design, are talking about making websites that look good on different screen sizes, different widths,

usually sometimes height, but mostly it's all about the screen width because we've got, you know,

tiny mobile devices all the way up to huge monitors that some people have at home.

But again, most of the time when we talk about responsive design, we're referring to writing websites

that respond to the width of a device.



// Lesson 201. Our First Media Query

Media queries allow us to specify styles that are only applied at certain device screen widths. They are the lifeblood of developing finely-tuned responsive websites

So media queries allow us to write specific styles and group those styles together so that they only

apply at certain conditions.

And usually those conditions are based upon the maximum or minimum width of the viewport.

So what exactly is the viewport?

The viewport is basically whatever is visible in your browser minus the browser UI.

So you know this box in the middle, not the scroll bar, not the nav bar, not the address bar, not

the bottom scroll bar, just the content area in your browser window.

And that can be super wide.

So in this example, if we look at Airbnb, the viewport is all of the Airbnb content you can see,

but it's still not the same as the the window size itself, right?

It's not the size of the whole screen.

In this case, the viewport is much smaller than the whole screen.

And if I open up the dev tools, that's also going to impact the viewport.

It's shrinking it vertically now.

Or if I move this over.

It's shrinking it horizontally.

So there's a bunch of things that impact the viewport, the size of the window and the devtools that

are open.

But at the end of the day, the viewport refers to this area.

So we're going to write media queries that work with the size, typically the width of the viewport,

so not the width of the whole screen or the whole window, but whatever is the visible area.

And those two can be different, although a lot of the time they're the same.

the viewport is the graphical area for something on a computer. For a website, this generally includes the browser window minus the browser ui (tabs, search bar, etc)

on some devices, the viewport can be as wide as the entire screen. think mobile, where your safari app window takes up the whole device screen.availHeight

on other devices, the viewport can be much smaller than the entire width of the screen. think desktop, where you may have multiple smaller browser windows open.


They are what allow us to write styles and group styles together so that they only apply during certain

conditions.

And again, most commonly it's a condition based upon the maximum or minimum width of the viewport.

Here's the way that we write a media query.

The first thing you need to know is they all start with at media and we're going to address the only

and the screen and all of that in just a bit.

But they all start with at media and there's actually a simpler one that we can write that doesn't involve

all the stuff you see here.

I'm going to show that to you first.

But again, they all start with app media.

That's how we tell the browser.

That's how we write CSS that says this is a media query and then we follow up with different properties.

@media initiates a media query, and allows us to follow up by specifying other important properties.


So now what we'll do is write our first basic media query.

It looks like this at media and then I'm going to write min width or max width.

It's up to me.

We'll talk about the difference and let's pick a width like 800 pixels.

And then we write curly braces and this on its own won't do anything.

It's not going to change our styles.

What we then do is put our styles, our selectors and styles inside, and whatever styles are in here

will only apply when this is true.

So what this basically is saying at media, this is a media query.

That's what that keyword means.

This is a media query.

This in parentheses says the styles in between these curly braces should apply up to the maximum width

of 800 pixels.

So then I can write.

All right, background color, you become cyan and when I refresh the page, nothing has changed.

But that means my window is greater than 800 pixels.

This says maximum width of 800.

This applies meaning everything below, so I'll keep shrinking it until I hit 800 pixels.

And there it is right about there.

So everything below is cyan and then we hit red because we go above 800 pixels.


And you've probably already noticed this.

What makes it all work is that any styles that we apply in a media query are immediately considered

more specific.

It's not really specific.

It's not specificity.

But they fall higher in the cascade compared to regular styles.



The normal styles say that the background color of the body should be red.

But then this special case says no, the background color should be orange.

And the only way this works is if this wins.

Otherwise we'd never be able to write media queries, right?

We never be able to make responsive sites where things change, or at least it'd be pretty hard to do.

So there is a difference in how this is treated.

This is higher in the cascade compared to this, even though it's the same selector.

// Lesson 202. More On Media Queries

We're specifying some dimension and I guess I didn't demonstrate this, but I should.

It is the viewport, not the screen width or the window width.

Right.

So if this viewport let's make this big, the window is very wide.

The window is what, 2500 pixels wide or something.

But now the viewport is very small and the media query applies based on the size of that viewport,

not the size of the window or the screen.


This only keyword plays a very special purpose.

Older browsers.

Most older browsers don't support media queries.

Now this is less and less of a concern, but still some old browsers don't support them at all and so

what happens is if they don't support this, they're just going to look at the styles inside and always

apply it as if I had just written this.

And that's not a big deal, I guess, if it's just a background color.

But of course, we end up with yellow as our background color.

But if we're totally changing the layout and showing and hiding elements, that's not great.

So by putting the only keyword in there, it's basically a way of saying, okay, browsers, if you

don't support media queries, we don't know what this is, then stop and ignore everything in here.

The only keyword has other uses.

It's an operator, a logical operator.

Usually though, the only time I use it is as this little trick to prevent all older browsers that don't

support media queries from applying all the styles inside a media query.


But if you combine it then with screen, which is the second keyword here, this is an example of a

media type.

There are different media types, but the two most common are going to be screen and print.

And this allows us to write different styles that apply on screens, on devices that are displays versus

in print.


Most of the time, what I'm actually interested in is screens.

So if we write only screens, it's a way of saying this should only apply to browsers that know about

media queries.

That's what the only keyword helps with and also at the same time only apply for screens.

There's no rule that says you have to put this in there, but this is a pretty common pattern.

And then finally we, we have the and keyword that joins it all together, basically says this first

thing and this second thing.

So only apply these styles on screens and only apply them between zero pixels or the minimum width up

to 768 pixels.


Remember, this prevents older browsers that don't know about media queries from just using this style

all the time.

It just short circuits the whole thing.

summary: only keyword - only is a keyword called a logical operator that prevents older browsers that don't support media queries from applying these styles. otherwise, an old browser would apply these styles in general (and not just for the specified screen widths)

summary: screen keyword (media type) - screen is a media type in this case. there are other media types like print or all, but screen is what helps us write styles for different device screen sizes.

summary: and keyword - another logical operator that helps us combine media features and/or media types together. in this case, we're combining a media type (screen) and a media feature (the max-width portion).


There is no yellow ever because this rule is never going to come first.

It's all about the order with our media queries.

So the order does matter if we have conflicting styles, if we're basically going to style the same

elements in the same way and there's a conflict, the order matters.


// Lesson 203. Working With Media Features

max-width is actually just the width media feature with max added on. There are many other media features, which can also be modified by min and max.

So next, I want to expand on some of the media features that we have at our disposal.

And the media feature refers to things like Macs with these are things we use within a media query.

So after we've specified at media and then optionally a type like screen or print, there's also one

other option, which is all.

So we have all print screen.

And the implied type is just assumed to be all.

But by doing screen we're saying just on screens.

So if you want, you can sub in all or just not put that in there.

But the only is important again, to make sure that old browsers that don't understand media queries

ignore all of this stuff anyway.

Media features are things like min and max width.

So if we look at width we have min width max width, but then we also have exact width, which I don't


And then we also have the same deal for height.

And typically websites are more responsive in the horizontal width direction compared to the height.

But we do have min height, max height and also just height.


These are less common, but you can do things like orientation.

This is actually probably one of the more common other options.

The orientation feature has two key word values portrait and landscape.

And basically it's based upon whether the width is greater than the height or the height is greater

than the width.

portrait - viewport height is greater than or equal to the width
landscape - viewport width is greater than or equal to the height

Most of the time what you'll be using is with at least that's what I use most of the time.

Min width in max width and we'll talk more about both of those.


And we still have some other media features I'll touch on resolution.

We can use this to basically work with the pixel resolution and specify on really low resolution devices

one thing versus on high resolution devices, maybe some fancy background image.

I don't use this all that much, but you can you can do it.

So Min resolution, max resolution or exact, which is just resolution and the units we use is DPI.


We have other things like I may not prefers contrast, which detects if the user has requested the system

increase or decrease the amount of contrast.

Although notice how it says media queries.

Level five.

We're going to talk about that in a separate video.

There are different levels of media queries and features have been added over time, but not all browsers

support things in four or five, so I think that's enough.

// Lesson 204. Media Query Logical Operators

So we can use not to negate media features and then we can use and, and or to combine different media

features.

And that's really all that there is to those logical operators.

Most of the time I'm just writing simple queries like, well, media queries may be more like this one

right here where I still have only screen and I'm technically using and because I want both sides to

be taken into account.

Right?

So if I don't have that, if I just have min width, then that doesn't allow me to use this only thing

that makes sure that the browser supports media queries, but without the end this is invalid.

So I have to join the two together using the and keyword.

// Lesson 205. Media Queries Exercise
// Lesson 206. Media Queries Level 4 & 5

Next up, I want to talk about the different levels of media queries, which you can kind of think about

this as the different releases, the different updates to media queries.

We have level three, level four and level five, and all these documents that I'm showing you here

are part of the W three organization.

They're basically in charge of writing and maintaining the standard, the actual rules for CSS that

all browsers have to comply with.

So level three contains pretty much everything we've used so far.

So you don't need to look at these docs to be clear, you don't need to reference these.

You can, they're available but it shows things like and an min width and max width and orientation

at media browsers.

Today pretty much all modern browsers support all of this stuff.

But then there's some newer syntax that you might see on MSDN.

It might reference media queries level four and not all of that is fully supported in all browsers.

Now it has pretty good support, but things like ranges which I'm about to show you, or using the less

than and greater than syntax.


With that said, I'm going to show you how this works, this range syntax.

Is a nice feature, although the docs aren't very helpful on it.

I have to scroll down and eventually we can find an example of it.

Basically, level four, which still is not fully supported, but level four included some nice improvements

to the syntax where we can write things like this.

We can use the less than or equal to syntax, the less than syntax greater than.



And then we have media queries, level five that has some additional features that are really not widely

supported.

But if you ever see a reference to media queries, level five know that that's what it is.

It's a new set of syntax and upgrades to how media queries work.

And if we look at the docs one more time, scroll down to that support table.

Where is that?

Pretty much these things that you see almost all red.

Those are likely going to be part of media query level five.

So I wouldn't use them on anything that you need widespread support for, but they probably will change

over time and hopefully we see more green checkboxes eventually.

So one example of that would be the Inverted Colors media feature, which you can use to test whether

the underlying OS is inverting colors and then you can write styles appropriately if you wanted to.

// Lesson 207. Common Responsive Breakpoints

max-width is a media feature, which is basically just a condition/argument for our media query. It will compute to true or false, and the styles in this query will be applied or not applied accordingly. In this case, we're only applying these styles when the screen is 768px or lower.


There are some common breakpoints, or at least ranges of breakpoints.

A breakpoint just refers to whatever value we would put there where we change how our our page displays.

So we'll often have a mobile size and then a larger mobile size, maybe then a tablet size and then

a laptop or regular computer desktop size.

So a common breakpoint for mobile is going to be 400 480 pixels between zero and 480 as far as width.

That's often considered a mobile screen size.

And then a tablet size is between 481 and 768.

Now, remember, these are all just ranges.

They are not rules and they've changed over time as screens have changed.

You don't need to go copy and paste these furiously into your own media queries.

They're a good starting point, but you might actually realise that your website needs to change earlier

and it doesn't look good if you use the 768 or 481 breakpoints.

So they're just rough ranges.

Then we have small desktops 769 to 1024.

And then we have larger desktops, ten, 25 pixels and up.

Again, not hard rules.

Please don't treat them that way.

And I made a slide to emphasize that these breakpoints are general rule of thumb, but in reality,

every unique layout and design requires attention to its own specific breakpoints.

Test your layouts thoroughly, see what they look like at different screen sizes, use the dev tools,

and don't force yourself to abide by some rules that are pre written.

breakpoints:
mobile: 0 - 480px
tablet: 481px - 768px
smDesktop: 769px - 1024px
lgDesktop: 1025px and up


if writing media queries using max-width the larger range media queries must come before the smaller range media queries, alternatively the and operator can be used to explicitly set a min and max range. min-width is typically simpler to work with than max width and the smaller ranges should come before the larger ranges, with the smallest range not requiring a media query -> it should just be normal css rules written above all media queries.

//  when using max-width for building media queries the last/largest query will just use min-width to set the largest range

But that's not really what I want.

I want to make sure that I still have my mobile styles in there and then my tablet styles.

So one option is to reorder it.

So now we're saying everything up to 768 should be orange and say tablet size and then oh, actually

everything up to 480 should be read and say mobile size.

So we're leaving this window now between 481 and 768, and that's one option.

So we still have the red.

And then when I hit for 81, we switch to our tablet size and then once I hit the next breakpoint,

we have no styles in there, but I could instead rewrite my media queries to use a range so I could,

if I reverse this, go back to this order, I can say up to 480 that one's fine because the zero is

implied max width.

But then here I could say only screen and a minimum width and then we'll go at 481 pixels and a maximum

width of 768 pixels.

And now the order doesn't matter because I've set up a range here and it should still work.

So read up to 480 as you can see right there.

And then I get to 41 and we're orange, and then we go up until we hit that breakpoint right there at

768.


I kind of like this version because it's longer, which is a pain, but you don't have to worry about

the order because we're writing these ranges from this to this.

// Lesson 208. Creating a Simple Responsive Navbar
// Lesson 209. Responsive Flexbox Grid Demo

But now, instead of having a hardcoded width, I'm going to use the flex property, which, remember,

supports flex, grow, and then flex shrink and then flex bases.

And I'm going to do something like maybe 20% for flex spaces.

So I want each one to take up 20% ideally, but then flex and shrink to accommodate the space by adding

this margin to 40 of 40 pixels, though we're not going to get five going across because that margin

right takes up a lot of space.

If I got rid of that and I added maybe a border in to pixel solid, I don't know, white.

And then I also do a box sizing of border box.

We now end up with five going across.

Now why do we get five?

I set flex spaces to 20%, so each box takes up 20%, ideally as its initial state.

This two pixel border would have been in addition to that.

But by setting box sizing to border box, now that border is taken into account, right?

So if I make this border even bigger, right, we still get five across.

Each one is 20%.

Anyway, what I want to show is as we shrink this down, this is going to be a terrible layout.

So let's switch it up and let's maybe go to a different layout at a different size.


So I'm going to do a nth of type and for every second one to RN.

So two just means the second one to RN means every second in a pattern repeating.

when laying out flexbox items in a grid patter (or any patter???) use the flex shorthand property along with media queries to make a responsive design.

// Lesson 210. Mobile First vs. Desktop First Design

Those terms are desktop first and mobile first.

These are really two different approaches we can take when constructing the website desktop.

First is essentially what we've been doing so far, where we start by designing our desktop layout,

we get it to look good on a larger device and then we can adjust it using media queries to look better

on smaller devices, right?


There's a total opposite approach though, which is mobile first, where you start with the mobile layout

as the first thing you build.

That's the default.

And then you add things in to make it look better on larger view ports.

So you do that afterwards.

At the end of the day, what matters is that both approaches emphasize making a website that looks good

on mobile screens and large screens and hopefully anything in between tablets and small devices, that

sort of thing.

So they both are about designing responsive websites, but there are some some advantages potentially

to both of them and some cons.


So let's start with desktop first.

If you're building a complicated layout or something that you you anticipate users will primarily experience

on a desktop, then desktop first can make sense.

You start with the hardest stuff, get it out of the way.

If you're designing a very complicated website that you expect most people to view on a desktop, not

a mobile device, not every website is even if it looks okay on a mobile device, users may prefer it

on a desktop.

And if that's what you're anticipating, then desktop first can make sense.

Start with the desktop layout.

It's usually way more complicated.

Has more stuff and then pare it down for mobile.

But in today's world, with the rise of iPhones and smartphones, you know, web browsers on on mobile

devices are really, really good and very popular.

So a lot of people are approaching websites from a mobile perspective and then maybe later checking

them out on a desktop.

But you can't make that assumption.

So mobile first can make a lot of sense if you start with that design in mind, If you start with that

user's experience on a mobile phone, that often can be a good place to begin and then you can expand

your layout, add media queries to make it look better on larger devices.


desktop-first is a design/development approach in whcih you build a website to work on desktop, and then you'd make it responsive for smaller devices and screen sizes after.

in the earlier days of the web before mobile web browsing became widely accessible thanks to smart phones, most websites were not responsive. as mobile usage grew, sites that were already optimized for desktop began to add mobile responsiveness.

desktop first is still a very popular approach to building websites, since many still feel it makes sense to build the most complex features of the website first and then pare it down for mobile. complex features are often a bottleneck on the development side, too.A

features would be built for desktop and then on smaller screen sizes, layouts are simplified and adjusted, or even removed altogether at times.


mobile-first is a design philosophy that emphasizes designing/building the mobile experience for a website first, and then adding in layout customizations for larger viewport sizes after. 

as the internet matured and web traffic shifted to be more mobile-centric with the adoption of smartphones, this philosphy grew in popularity. web designers and developers needed to ensure that the good experience for their websites carried over to smaller screens and devices other than desktop.

mobile first design is a very common practice, since it forces you to consider the core, essential pieces of the user experience (UX). with limited space on a screen, and other limiitations like slower internet connection, computing power, etc, designing the core experience around mobile ensures that the most important aspects of the site are prioritized.

from there, designers and developers build upon the core functionality, layout, etc of the mobile site to add more complexity on larger devices with more screen real estate.


What a lot of people like about mobile first design is that it forces you to think about the essentials,

the bare bones before anything else.

When you have such limited space, you start simple, right?

So you can often write less code to begin with, and then you can expand things, add elements in,

you know, add spacing, make things bigger on larger screen sizes.

So you start with the core functionality typically, and then you can write from there to make the website

look better on bigger screens.

So you can generally get something up and running faster.

And again, remember that mobile traffic is generally the larger share of traffic for most websites,

not all of them, but for most in today's world.

But on the other hand, there are still quite a few proponents of desktop first who prefer to knock

out the more complex stuff first, especially if you're anticipating you're building something that's

quite complicated, that has tons of features.

That's not just it's not just a matter of changing the layout, but you're actually building something

that is way more complicated on a desktop device.

A lot of developers prefer to start there and just get that done and then selectively pare it down for

smaller screens.



And just to summarize it, the concept is you start with the mobile layout before anything else.

It's simpler, it has less moving pieces.

Often you have to think about the bare bones.

What matters for your experience for a user on a small screen, and then you can build it up using media

queries to improve the experience on larger screens.

// Lesson 211. Building a Simple Mobile-First Layout
