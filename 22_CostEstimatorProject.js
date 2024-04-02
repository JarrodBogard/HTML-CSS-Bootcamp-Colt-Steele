// Lesson 190. Introducing The Cost Estimator Project

// Lesson 191. Building Our Container

So I'm going to use Flexbox.

I'm going to center everything in the middle of my body.

Right.

So I'm going to use display flex on the body itself.

And that makes everything in a row.

I don't want it to be in a row.

So I'm going to change flex direction to be column.

Now we have everything in a column.

It doesn't look much different from what we had before, but then I'm going to set a line items and

justify content to be centered.

So just if my content center.

Not much of a difference yet, right?

Because my body doesn't really have a height that I've set and the main axis goes from top to bottom

so I can make much of a difference.

But if I gave my body a height of 100 v.

H.

Now my content is centered vertically, which we may or may not want.

I'm not going to set a manual height there, but what I definitely want is to align items center.

So we align on the cross axis, which is going across the screen from left to right, and now our content

is centered.



Instead of a black, you might not notice much of a difference, but now every element will have that

color by default inherited from the body unless we set it explicitly like we did on the H one, it will

have this like slightly light black slate color instead of a straight black.


And the fancy approach looks like this.

This is something we're going to learn as in a future section, but I'm going to show it to you right

now.

If I select the active tab, whichever one that was, then I can write this special pseudo element with

two colons called before.

And what this will do is insert a piece of content out.

So I have this content property.

I can set it equal to something like Hello.

And this inserts the word hello into the DOM, into the document without me actually doing it in my

HTML.

Now, we normally wouldn't do this to insert text because then you would just put the text in there.

But what I can do instead is make it empty.

So now I have this empty thing in here that I can then control.

It's an empty box, so I can give it a width.

Let's start with 60 pixels.

I can give it a height three or four pixels.

I can give it a background color, let's make it purple, and I can then position it like position absolute.



I now have this over line technically, but I have an element that was created for me purely in CSS.

And the reason that this is fancy and it's better is because if I move this class over to Enterprise

that underline moves or over line moves with it.



And that's all thanks to the magic of this thing we haven't really learned yet.

Called before, which just inserts a piece of content right before this.

And again, I can put words in there.

You can see them show up, but I'm making it empty and turning it into a box that I can move and treat

like an underline.

And that's a pretty common pattern.

We don't clutter our markup, and now all of these styles are always linked to the active class, wherever

that is.

So it doesn't require altering my markup other than moving the active class.

// Lesson 192. Creating The Top Tabs
// Lesson 193. Positioning The Tabs Underline
// Lesson 194. Creating The Active Tab Styles
// Lesson 195. Adding The Toggle Section
// Lesson 196. Building The Sessions Card
// Lesson 197. Creating The Slider
// Lesson 198. Creating The Two Price Cards
// Lesson 199. Finishing Up The Price Cards
