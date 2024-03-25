// Lesson 105. The Sibling Combinator

Next up, we have two more commentators we're going to cover these both have to do with sibling relationships,

meaning elements that share the same parent.

And the first one is called the adjacent Combinator.

We use the plus sign character.

And what it will do is select elements that are directly after the first selection.

So in this case, paragraphs that come immediately after an H one.

the "+" combinator selects elements that are directly after the first element


And remember, you don't have to use element selectors here.

That's what I'm using to keep it easy.

But this could be a class or an ID or an attribute selector.

We're focused on the plus sign though.

That is the adjacent sibling Combinator.


They share the same parent, but it is not adjacent.

So that's the plus sign.


the "~" combinator selects the siblings of the first selector element. the 2nd element must follow the 1st element (immediately or not), and they must share the same parent (which is specified by the first element???)


And then we have the tilde character, which is the general sibling Combinator, and this one will select

any sibling element.

It doesn't matter if they're adjacent or not.

So in this example, select the paragraphs that are siblings to h one elements and siblings mean that

they share the same parent, right?

So they're not nested or anything.

They're the same level in the markup.

And also there's one other requirement.

The paragraphs have to come after the H one, so this wouldn't select the paragraph before the H one,

even though they are siblings.

But it does select these two paragraphs down here which are siblings with the H one and they come after

it.

Similar concept to the adjacent combinator.

Except when we use the tilde character.

It doesn't care if the second selection immediately follows the first or not.

They just have to be siblings.



Here's a paragraph, but it's a sibling to an H four and H three, but it's nested inside of a div.

Same thing here.

Here's another paragraph.

It is a sibling, a brother or sister to the H four and the H three, but they are not siblings to the

H two appear because this div is in the way.

There is a parent child relationship in the way and the tilde character and the plus sign character.

Those commentators are for siblings, so elements have to share the same parent.

Now again, remember this could be any selection you want.

I'm keeping it simple with h twos and paragraphs, but it can be anything.

And notice the difference here.

When I hover it says H two, followed by a paragraph.

But there's a dot, dot, dot that means anything else could come in between.

And if I have the plus sign.

There is no dot, dot, dot.

This now only selects paragraphs right after an H two.

So those are two combinations that have to do with siblings.

not a parent/sibling relationship for nested children, just children in the sense that they follow and are under another element in order of importance and lexically

// Lesson 106. Working With Pseudo-Classes

Next up, we're going to talk about pseudo classes, which are basically like add ons.

We can add to a selector where we can specify a particular state of an element or of the document.

So the first example we've already seen is the hover pseudo class.

So we apply this, we add it on to the end of some selection.

In this case, when you hover over a button, make it blue.


Let's say that I want to make h two se change color.

When you hover, it's as simple as H two colon hover.

We don't put spaces there.

It's just h two colon hover and then color orange.

So h twos are not orange.

Normally, until I hover, it's a different state that I'm specifying.

And then they turn orange and you can do whatever you want in there.


It's a pseudo class we can append to any selection.

So it's not just an element.

I could say anything with the class of score.

When you hover turns orange and this has a class of score.

This has a class of score.

This does.

So I just want to be clear that we can mix and match.

As you see, when I hover here, we're specifying some element has a class of score when it's hovered

over, make it orange.


There's a few of them that have to do with forms and inputs, so you can style form inputs when they

are enabled versus disabled.

So I can show that at the bottom we have a form, let's disable one of these inputs.

So the way that we do that is by adding in disabled as an attribute.

And now that first input I'll zoom in a bit is disabled.

I can't click on it, I can't do anything with it.

This one is not so if I only want to style the disabled inputs, I can write input disabled and then

I don't know, background color will be read, which will look very weird.

But there you can see only the disabled inputs are styled.

Then we have enabled.

It's the opposite.

We have things like placeholders shown.

If you want to style an element when the placeholder text is being displayed, which is kind of a niche

thing.

But I have placeholder text showing up there as soon as I type it goes away.

So I could do something like instead of saying disabled inputs have a background color of red, have

inputs that have a placeholder text that's just placeholder dash shown.

And both of them have placeholder text at the moment.

As soon as I type in there, it goes away.

Right.

And I can't type in this one because it's disabled, but it does have placeholder text shown.

I don't really use that one, but it's just another example of how pseudo classes work.

They allow us to style and target particular states.

So states have form fields you have valid and invalid.

So when you have validations on forms, you can style the valid inputs or the invalid inputs.

We have required.

So any input that is required, you can style it differently.

And that one, it can come in handy if you want to display feedback to a user, you could highlight

all the required form fields in red or something like that.


But then we have another group that on MDM are called location pseudo classes and these have to do with

links and we've seen these some of them already visited.

It's the one we focused on early on.

You can match links that have been visited and this is how we end up by default with any link.

I've been to its purple links.

I haven't been to our blue.


We have link which matches all the links that you have not yet been to or a user has not yet visited.



We have playing in paused, which allows us to style video or audio elements when they're playing versus

when they're paused.


Then we get to the tree structure pseudo classes.

These come in handy quite a bit, at least some of them.

So the first one I'll show is empty.

This allows us to style any elements that have no children, so empty elements.

But then we have no child and last child.

First child, Last child, only child.

End of type and the last of type.

First of type.

Last of type only of type.

So these all allow us to style particular elements to select particular elements based upon their position

within a tree.

So we want every other paragraph or the first heading element or the the last element with the class

of score.

So I'm not going to go over all of these, but I'll walk through some of them.

The first one we'll look at is first of type.

You append it on to some selection to select the first element of its type in a group of sibling elements.

So if I want to select, we'll just do an each ally, so the first ally in each of its sibling grouping.

So this lie there, this lie right there and this ally right there, not to mention this one and this

one we would write something like lie first of type.

And again, this doesn't mean the first lie on the entire page.

It means within each grouping.

So we'll do a border because if I do color, it's inherited.

So I'm going to do border one pixel solid magenta.

And we'll see this first lie.

It's the first of its type within that group.

Same thing here.

First lie there.

And then down here, it looks a little different because we have nested lies.

But this is our first lie, that bigger box.

And then here's the first of type within this lie grouping.

And then same thing here.

This is the first of lie type within that grouping.

But this one is not selected because it's the second lie within that group.

And then we also have last of type.

So if I just change that to be last of type, we get the reverse where it's the last lie within each

grouping.

All right.

Then we have nth of type.

So it's similar, except we can specify within the parentheses.

As you can see right here, the number that we want to select.

So the third of a particular type, the fifth of type, the second of type.

So I'll comment this one out and then rewrite it to be lie nth of type, let's say two.

So the second lie within each grouping and we're selecting the second one, second one, same thing

down here, second one second, one second one.

So but the thing that can be a little bit confusing to beginners is when you see this notation where

we have an RN in there.

So this is a great time to look at the docs.

If you've ever confused about that, that RN allows us to specify a repeating pattern, I'm sure they

have to talk about it on here somewhere, right?

Maybe not.

Well, that RN means every third, so not just the third of type, but every third repeating.

So if I went back here and instead of doing RN of type two, if I did two RN, this means every second.

So skip the first, add the second, skip the third, then the fourth.

So we're counting by twos essentially, and this is used in a couple of situations.

One of the common ones is when you want to have alternating background colors like does mean do that.

Right here.

So here we have a light gray background and then a white and then light gray and then white, light

gray and then white.

So you could give them all a gray background color and then say every second one is white, just as

one example.

So you could say every third, every fourth, you can even say two n plus one.

And what that means, if I go back here is that we'll start with the first and then count by two.

So we're still counting by twos, but we've shifted it.

So we go one, three, five, seven.

If we don't have that plus one, it starts at two, four, six and so on.

So there are others in here.

I don't think it's worth going over all of them, but there's first child and last child.

So these match elements that are the last or the first of their siblings, we have nth child.

So we could say, I want to select the third child within this sibling group and we'll see some of these

throughout the course.

So again, I'm kind of giving you a whirlwind tour.

And then down here we have user action pseudo classes.

By far the most common one is hover, and then we also have active and focus.

So if you want to learn more about those is our different states.

So active elements are those that are usually being clicked on like actually in the process of being

clicked on.

So you can see as I click, I'm just trust me, I'm clicking right now, we get that shadow applied.

Let me show you on one of our buttons here.

I think I only have a single button at the bottom.

I'll say Button active.

Let's make it have a background color or a border or something.

I don't know.

Background color is fine of pink.

If I refresh, here's my button.

It's not pink.

I click.

It is pink.

Whoops.

I click.

Too many times I click, it's pink and then I release.

It goes back to being inactive, just the normal state.

And then we also have focus.

Focus is a little different.

Focus is typically applied to user inputs.

It doesn't have to be, but it usually is any time I move into an input, it has focus.

So this input now has focus there.

This one has focus now and it's usually triggered by clicking or by hitting the tab key.

So as you as I hit tab, my focus keeps moving.

So if you want to style the element that has focus, you can use the focus pseudo class.

Simple enough.

I'll just say inputs that have focus.

You don't have to limit it to inputs, but that's what I'll do here.

Let's say border is one pixel solid green.

All right.

Now this one can't have focus because I disabled it.

This one can.

Although you can't actually see the border there.

It will learn more about why that is.

But let me just make it wider.

Let's do a five pixel border.

And now when it has focus, it's green.

As soon as I move away from it, it is no longer green.

And that's enough with Focus.

So that's active, that's focus.


Like not this is the negation pseudo class.

We can use it to well negate a selection.

For example, in this example we're selecting all paragraphs that do not have the class irrelevant,

so it allows us to select opposite or negative selections, which can be useful if you want to style

everything with some class one way, everything without that class another way, there's not an easy

option unless you use not.

So as an example, if I want to select every element that is not a heading, I could do this.

All right.

So everything that is not selected by this selector, let's give it a border.

I don't want to use color because color is inherited.

Right?

So it makes it harder to notice the difference.

I'll use border one pixel solid yellow green.

That might be hard to see, but let's take a look.

Yeah, there's a lot going on here, but you can see that the headings don't have that border selected.

But what we do also have selected here is the entire body has a border applied to it, and that may

not be what we want.

If I look at the body, it has a border.

More than that, the head has a border, the HML root element has a border, and that's one of the quirks

of the not pseudo class.

Generally, what you're going to want to do is something like this, everything inside the body that

is not a heading.

Otherwise you'll end up selecting the head, the body, the HTML element.

So again, whatever selector you put in here will be negated.

So the opposite of our headings, everything that is not a heading or everything that does not have

the class score.

So this has the class of score.

It doesn't get the border.

This has a score, this has the class of score.

They don't get borders.

There's a lot that you can do with not it can be very powerful.

You can also write nonsensical selections that won't do anything.

For example, this this will select nothing.

We're saying the opposite of everything.

There's a whole article on Mdcn about working with not.

And then there's also these other sort of similar ones is and where it has.

We're not going to worry about them for now, but I want you to know that they exist and that is pretty

much it for this whirlwind, but also quite long tour of pseudo classes.

These are special add ons you can put on at the end of selections to generally target specific states

hovering or focused or disabled inputs or the position of an element within a grouping.

The first of a type, the last of a type, every fifth heading or something like that.

And there's a lot more to it as we saw with not, but that's a general sort of overview of them and

// Lesson 107. Styling Pseudo-Elements

Pseudo elements are also add ons that we put at the end of a selector, kind of like a pseudo class,

except they allow us to style particular pieces or parts of elements.

So it's not about states, you know, hovering or focused or something like that, but it's about individual

parts of an element.

The first letter, the first line, the placeholder text in an input, and we prefix them with two colons

instead of a single colon, although most browsers are pretty forgiving about this, but the convention

is to use two colons.

So this first example will select the first line of every paragraph and makes it uppercase and gives

it a color of blue.


And that's the first letter of every single paragraph, as you see right there.

And this is a simple example, just every paragraph, first letter.

But we can do things like only the first child or first.

How about first of type paragraph, the first letter of every first of type paragraph. -> adding a pseudo element onto a pseudo class (what about vice versa???)

It's a grouping to sibling paragraphs, but we're only selecting the first of type and then we're only

selecting the first letter of that first of type paragraph.

So this one does not get that capital.

L Well, it's capital, but it's not blue and it's not large.

This one does.

So we can use these in conjunction with one another.

Maybe I'll leave that as a record as well.

So we have some other options.

There aren't that many pseudo elements.

There are two that come up a lot before and after, but we're going to have a designated couple of videos

much later in the course because these are quite different.

They are useful, but we're putting them aside for now.

So we have first letter, first line, we have placeholder and selection.

I think those will be the last two that I show you.

Placeholder allows us to directly target any placeholder text so you could style it differently.

Right?

Input placeholder so two colons, a placeholder, give it a different color and a opacity.

Generally you want your your placeholder text to be grayed out or somehow transparent to make it look

like it is not real text but placeholder text.

So the default is just to make it gray, right?

If I get rid of this, it's just gray.

But you can change that by targeting Placeholder.

But this will only target the placeholder text once I start typing.

It's not red, it's not transparent, it's just black text.

And then the last one we'll look at is selection.

This will style any part of text or any part of the document that you have selected.

A user has selected and dragged over.

So in this case, any time a user selects something within a paragraph, we're changing the styles of

that selection so the rest of the paragraph is unchanged.

But wherever I have selected is red text and yellow background color, and some of these pseudo elements

have rules about what you can and can't do.

So for example, when you select stuff, you can only change the color background, color text decoration,

you can't change the size.

For example, if you started to select text and then the CSS kicked in to like double its size, that

would just move things around.

It'd be very a pretty poor experience.

Anyway, that is a quick rundown of some of the more common pseudo elements.

As I mentioned, there's before and after.

We're going to cover them separately later on in the course.

For now we've seen the easy ones first line, first letter placeholder selection.

Generally I would say I don't use these as much as I use pseudo classes like hover.

Those come up all the time, pseudo elements, they come up, but probably less frequently.

// Lesson 108. CSS Selectors Pt. 2 Exercise

Now, if you're not familiar with the air element, it is the horizontal rule element.

It makes a line.


So why a box shadow?

Basically, it's very difficult to style built in form controls like a checkbox.

If I try and change their color, it won't do anything.

If I try and change the background color, it won't do anything.

If I try and add a border, it won't do anything.

No change whatsoever.

So because of that and we'll learn how to make a custom checkbox toggle towards the very end of this

course.

It's actually quite it's quite involved.

So for now, BLOCK Shadow is one of the few properties that will apply to a form control, like a checkbox.

So that's why I had to use Box Shadow.


You could actually use RN child.

And that will work too.

But that only works because every child of this ul is an ly.

So because they're all the same, it's all lies.

I can say.

Select every second lie in this ul or I can say select every second child in this UL, and both of them

will select every other lie.

But the one I intended for you to use is nth of type.

It doesn't really matter in this case.

-> nth Child will apply to any children of the parent element nth of type will specifically apply to only the elements of the same type e.g. li elements, a elements, div elements etc


And just to show you, if I only did one colon, it still works fine, but you're supposed to have two

for a pseudo element and one for a pseudo class like hover or checked.

// Lesson 109. The Basics of Specificity

What happens is that CSS has a set of rules that defines which selectors win, and it's all based around

specificity, which selectors are considered more specific.

And you probably have a guess because we've experimented, we've seen classes and how they work.

Classes are more specific than element selectors, which generally make sense, right?

We've gone through all the effort to give a class to this element so that we can single it out and do

something different.

So that is more specific.

But it's not just about gut feelings.

There's a set of rules, there's an order, a hierarchy that defines what is more specific, which selectors

are more or less specific in this list goes from most specific down to the least specific.

We'll talk about inline styles in a moment, but let's start with this.

Second tier ID selectors are very specific.

They are more specific than any class selectors, class selectors along with attribute selectors and

pseudo classes.

Those are more specific than element, what I'm calling type selectors like paragraph four, H one and

pseudo elements.

We'll get some practice, we'll see examples, but this is the rough breakdown.

specificity -> 1. inline styles 2. id selectors 3. class | attribute | pseudo-class 4. element type | pseudo-element


So in this example from here we have a class selector special versus an element or a tag selector.

P If we go back to this chart, we see that a class is more specific than a type selector like P So



But to wrap this one up, I just want to show one more thing that's important to understand.

I'm setting color to a different value for all three of these different selectors, and that's the only

property that I'm setting.

But if I had something like in here, if I change the font size actually in the class, let's say I

change the font size here to be 30 pixels, this is still going to apply unless there's a conflict somewhere

else.

Right?

The only reason there's a battle here with the three colors is because I'm setting the exact same property

to three different values.

But if I set the font size to 30 pixels, that's going to win because it's not competing against anything.

If I instead in the ID selector said font size is actually ten pixels, well now there's a dual and

this is more specific.

So this wins, but it's not a winner take all where only the properties defined in here will apply.

If I have something else like Font family set, Font family is going to be set to fantasy.

Well, there's no conflict so far, which means that all paragraphs will have a font family of fantasy

unless specified otherwise somewhere else.

And you'll see you now have.

If I select this element a font size of ten pixels in a color of magenta coming from the selector with

the ID, but then the color and font size from featured that class neither apply there crossed out,

but the font family defined up here does apply.

So that's just a show that it's not winner take all.

It's not only the properties in here.

When we can target an element through a bunch of different selectors, make everything fantasy, all

paragraphs are fantasy.

And then also, oh, by the way, anything with the idea of special is magenta and ten pixel font size

so we can mix and match.

// Lesson 110. Inline Styles and Specificity

In this video, I want to talk about inline styles and the fact that they are very, very, very specific

and that it's just another reason you generally don't want to use inline styles.

First of all, you can see inline styles.

It's on its own tier of specificity.

It beats out IDs and glasses and type selectors.

So if I went to the exact same element, this paragraph that has a class, it has an ID, but I also

add an inline style.

And in here remember an inline style, we write the style attribute directly inline in the element tag

style.

I'll say color here is about what's a different one.

Lon Green.

Sure.

And I save that element is Lon Green.

As you can see, it wins out every single time.

Whenever we have an inline style with what we know right now, we don't have a way of overwriting or

writing a more specific style.

Inline styles are the most specific and they will always win again with what we know so far.

They will always win against anything, including an ID selector.

So this can be a huge pain if you had inline styles and some document.

First of all, if you didn't know they were there and then you were trying to write styles and things

weren't working right, if I didn't realize that there was an inline style and I keep trying to change

the color to be magenta, it's not working.

What's going on?

Well, I could look at the devtools and see, oh, it says element dot style.

That is the browsers way in Chrome of telling me that it's an inline style and that will always be an

ID selector or anything else that we know so far.

Now there are other reasons you want to avoid inline styles.

First of all, it's a pain to write them directly inline.

The formatting is ugly.

It clutters our markup.

It's not repeatable.

If I want this paragraph to also be color of lawn green, I'm going to have to copy and paste that.

But I could do the same thing in CSS in a single line.

Well, a couple of lines set all paragraphs to be lawn green, if that's what I wanted.

So there are many reasons to avoid inline styles.

We just learned a new one.

They are very specific and very difficult to override using CSS, so don't use them.

// Lesson 111. Calculating Specificity Values

If we have a single class selector that's more specific than a single type selector, an ID selector

is more specific than a single class.

But what about when we have more complicated selectors like this example here where on the left I have

three different elements selectors H, one div and span, and then we have those two combinations,

the plus sign.

Does that outweigh a single class?

We know that if it was just H one versus a class, then the class is more specific.

But what if it's three elements?

H one div and span?

How does that compare to a class?

Or what about two classes compared to a single ID?

Well, there's an actual calculation that's done behind the scenes.

There are three numbers that are calculated for every selector that we write, and the three columns

are the number of IDs, ID selectors, the number of class attribute or pseudo class selectors, and

the number of type or pseudo element selectors.

So this is an actual calculation done by the browser so that it can compare one selector to another

and have a hard number for specificity.

So if we were the browser we would look at this selector div space.

A and the first thing we do is disregard any combinations.

So a plus sign, a greater than sign, even a space.

Those have no impact on specificity.

We only look at the actual selectors so there's no ID selectors.

So we put a zero here.

There is no class attribute or pseudo class selector, so we put a zero there and then we have to type

selectors.

So we put a two right there.

So the number, the three numbers here would be 002.

Here's another example.

We have no ID selectors, we have one class selector, so a one would go here and one element the span

selector.

So the specificity would be 011.

Now, don't read this as a three digit number like 11.

It is not a three digit number.

It is three separate one digit numbers.

And you can actually see this in VTS code if you write any selector.

Let's take a look at this paragraph selector.

When I hover, it shows me the specificity.

001 So no IDs, no classes.

One element, this one is 010, this one is 100.

Let's just try one more example.

Let's do a class called Hello and then another class Main and then an H one inside of that.

As I hover, it says 0 to 1.

Right.

Two classes, one element selector, zero IDs at the beginning.

And just to prove this, the commentators have no impact.

Let's put a plus sign there.

Greater sign, greater than sign there.

It's a weird selector, very long, but it does not impact specificity.

It still 0 to 1.

So now let's talk about comparing them.

Let's say that both of these selectors, this one right here and this one over here, they both impact

they both select the same whatever element, the same paragraph element.

One makes the element purple, the other one makes it green.

Which one wins?

While the browser starts by calculating the specificity numbers for this one.

So there's one two elements.

Selectors, right.

So there'd be a two here and then one class, so there'd be a one right there, 012.

And then on the right we have a class, we ignore that plus sign and then we have another class.

So 0 to 0.

And then the browser goes, starting from the left, and it looks to see which one has a larger first

number.

Well, they're both zeros.

Then it looks to see which one has a larger second number, the class number one versus two and two

wins.

And that's the end.

So this one is more specific and it styles would apply.

So it's not comparing 12 to 20.

It's going one digit at a time.

And most of the time that is the same thing.

12 versus 2020 is bigger, but I'll show an example where it's not.

So here's one more.

We have a single ID selector, so this would be a one and then zero zero.

And then over here we would have one, two, three for the classes.

Right?

So 030.

So 100 versus 030.

The left one wins because again it starts looking at the first number, which one is bigger.

Well this is bigger one versus zero and that's game over.

So we have this tiered system where IDs are always more specific than any number of classes, and then

classes are more specific than any number of type selectors.

So one more example, slightly more complicated.

On the left we have two class selectors, so we get 0 to 0, and on the right we have a class selector,

an element selector, and then a pseudo class hover is a pseudo class and that's part of this category.

Also attribute selectors remember this sort of selector where you have anchor tag ref is equal to blocks,

right?

That is a single selector, the attribute right there.

And then this is an element selector.

So the specificity is 011 because this is an attribute selector, so it's classes attribute in pseudo

classes.

Anyway, we have 0 to 1 two classes or pseudo classes and one element for a and then the browser would

compare these.

What's the biggest first number?

They're the same.

So it moves on to the next category.

What's the biggest second number?

They're also the same.

So there's a tie.

Then it goes on to the third digit.

Which one is more specific in terms of type and pseudo elements?

This one has a one that beats the zero, so the selector on the right wins.

But as I said, it is not as simple as reading them as three digit numbers because something like this

on the left, a single ID will always beat any number of classes.

So even if you had a monstrous selector with 20 different classes, you wouldn't read it as 200.

It doesn't overflow and become a two.

Over here it's still zero 20 zero and 100 beats that it looks at the first digit.

One is bigger than zero.

And that's the end of the story.


It's easy to mix up pseudo classes in pseudo elements.

Remember, pseudo classes are used far more often.

Pseudo elements are for actual pieces of the content.

Like the first letter.

The last letter versus last letter doesn't exist.

First line.

Whereas pseudo classes are different states disabled hover or their position in the document like nth

of type.

So this is a pseudo class I just gave it away.


Not that important, but definitely remember this general overview Inline styles.

Always most specific.

They'll override an ID, but then when we're comparing selectors, IDs will beat out classes, attributes

and pseudo classes and then classes attribute and pseudo classes will beat out type and pseudo elements.

And then if there's a tie in either category, then it moves on to the next category to see what is

the larger or more specific value that specificity.

// Lesson 112. !important and The Cascade

So CSS stands for cascading style sheets.

The style and sheets part is relatively self explanatory, but what about the cascading part?

What does that C mean?

Well, the cascade refers to basically an algorithm that's implemented in the browser that decides which

rule wins whenever there's a conflict.

Now, that might sound familiar, that might sound like specificity, and specificity is part of this

cascade algorithm.

But there are other pieces.

Specificity has to do with the well, specificity of the actual selectors at play.

But there are other pieces, including something we call Importance origin.

Where does the style come from?

Is it a browser style?

Is it a user style?

And then position basically meaning the order that the selectors are written in or the rules are written.

So there are these different pieces we're going to touch on.

Specificity is the most important one to know about just day to day as a developer, it's the one that

comes up the most.

But in this video we're going to talk about importance. -> the cascade: in the event of a conflict, which rule "wins"? 1. importance 2. origin 3. specificity 4. position



And the way that this all works is that the cascade is this algorithm that resolves competing CSS rules,

which one wins.

And if you look at this little paragraph here, every time we write a rule or declaration, it will

enter the CSS cascade, which will determine whether or not it will end up as the final style or if

it's just one of those that gets crossed off that we've seen in the DevTools.

The further down the cascade a declaration falls, the less likely it will end up as the final style.

So these all have cascading amounts of significance.

This is going to be the most significant down to the least.

So we start up top and there's this thing called importance.

Now, this is my scene, confusing for a moment, but we can mark any declaration using this important

flag.

It's an exclamation point important.

And what that will do is immediately elevate this line, setting color to purple to be of utmost importance,

to go to the very top of the cascade.

And it essentially ignores things like specificity.

So it's generally not a good idea to use it because it absolutely wrecks your any any sense of predictability

in your CSS.

It just makes things very difficult to understand what's going on and to overwrite.

But let me illustrate this.

You may see this in the wild.

I would advise against using it as much as possible, but it's something you need to know about.


I have an H one, I'm going to give it an ID of heading.

All right.

So we know that if I use the ID selector, it is very specific.

And if I set, I don't know, color to be purple, we would expect to see it be purple.

Right now.

That's the only style that I've defined.

Of course, there's the browser default of Black.

But then if I come in here and I select all H ones and I set color to be all of my favorite color,

it's not going to work, right?

That's going to be crossed off because there's a specificity calculation done.

And this is far more specific.

It has an ID selector than just a single element selector.

We spend a lot of time going over specificity, so it's not green or it's not all of it stays purple.

We can see it's crossed off, but as soon as I put the important flag right there, so exclamation point,

don't put a space important semicolon after some property.

This now elevates this line to the top of the cascade, which if we go back to this diagram, is far

above specificity.

So the specificity basically doesn't matter anymore.

This is now going to win always, because we've made it important and we end up with Olive, which is

confusing.

If you look at our CSS where I'm selecting all each one to an element selector, making them olive,

and then this is way more specific, but it doesn't matter because I used important and that can be

useful in very rare situations if you cannot do anything to override a style.

For example, if you're working with a library, a CSS file, that's third party, you did not write

it yourself.

And they have written very specific CSS and you just are struggling to get your styles to apply.

You can use the important flag to make sure your custom styles win, that they override the other styles,

but it's generally something you want to avoid.

Because now if I write 1000 lines of CSS and then I forget that I made this thing important and I'm

trying to change the color of the H one, I'm going to have a really hard time.

That's a simple example because I could figure it out pretty quickly.

What's going on?

But imagine you have importance all.

Over the place and document it makes it a nightmare to wrap your head around.

You're altering the regular behavior of CSS and of selectors specificity.

Now there's a little bit more to important we're not going to bother talking about right now.

That has to do with transitions and animations.

Long story short, if you have an animation written in CSS, let's say I have an animation that makes

H ones turn magenta.

Well, that's going to apply during that animation because animations have special importance, so do

transitions.

But we'll learn that when we get there.

I just want you to know there is a small extra bit of information here that we're not going to talk

about, and we'll learn that when we get to animations and transitions.

But if you're looking at this excellent blog post, you're wondering what this is all about.

Well, just hang on until we talk about that stuff.

So in conclusion, we can add this important flag to any CSS property we declare, and it will elevate

the importance of that property in a way that essentially specificity won't matter unless we had a tie

between two things that had important.

// Lesson 113. Wrapping Up The Cascade

Remember, the cascade is the set of rules that determines what happens when there's a conflict, when

we have two rules, both applying or more than two could be five rules applying to the same element

which one will win.

And there's four pieces.

One of them is important.

We just saw that in the previous video.

If you mark something as important, it is immediately elevated to the top of the cascade and it will

beat anything as long as that other thing is not also marked as importance.

So if there's a tie, if we had two elements, both important with that flag important, then we move

on to their origin.

Now, their origin is a pretty simple category.

It refers to whether the styles are browser defaults or website styles written by developers like us.

There's also such a thing as user styles, but that's pretty rare.

So we're mostly focused on whether the styles are written by US developers or the browser and the good

news for us is that our custom styles, our website styles will beat out browser styles.

So here's a quick example.

I have an H one.

This H one by default has certain styles applied to it from the browser.

I didn't set those.

I didn't set font size to be two m's.

I didn't set font weight to be bold, but that's the default behavior in Chrome for a in H one, and

I can override that very easily if I selected all H ones and I set font weight for example, to be normal.

And save.

Well, my style wins.

So if we were to visualize what happened, we enter the top of the cascade.

Is one of these rules important?

Are both of them important?

No, neither is important.

If we look at what's happening here, this is completely unimportant.

Remember, important is that special flag I can add at the end and this is unimportant as well.

So then we look at where was this defined?

Where is the origin of these rules?

And one of them is a browser default.

That's this one.

The other one is a custom website style, and this one will win.

And you might think, Oh, it's just because you define this second, second, you know, this was done

first and then this overrode it.

But I could in fact use a totally different non specific selector.

The star has no specificity.

If you remember from an earlier video, it has no impact on specificity, but still my font weight of

normal will win.

It wins out over the h one font weight of bold.

Even if this is more specific, it doesn't matter because go back to the cascade.

Specificity is the third check.

The first check is important and then we check origin.

And in this case, my custom style will take precedence over any browser defaults.

And that's how it always works.

Any custom website style will beat out a browser default style.

Then we have our third tier, which is specificity.

We've seen this before, right?

If I had let's say this is H one here and then ahead of this or behind, it doesn't matter if I set

let's do color this time.

Color is red and color is blue.

These are competing, right?

This selects everything and makes color red.

This selects h one and makes color blue.

Which one wins?

Well, they both have the same level of importance.

They both have the same origin.

Neither one is a browser default style.

Then it goes down to the third level, which is specificity, which is more specific.

And we know that this has no impact on specificity.

000.

This is way more specific, which is just to say it has any specificity.

001 So this will win because that's the third tier of the cascade.

That's the third factor that determines which one wins.

So rh1 is in fact blue.

And if I got rid of this, it would be red.

All right.

So we've seen specificity many times, but then there's actually a fourth piece, which is the position

of our styles, essentially the order that they're defined.

So if the importance is a tie, if the origin is a tie, if the specificity is a tie, then it goes

down to the order.

Our rules were defined in the latest defined rule.

The last one added in will win.

Assuming importance, origin and specificity are the same.

So if I had the exact same selector here, not h2h1 setting color to magenta, this is going to beat

out this one here.

They have the same importance, the same origin, right?

They're both custom styles, not a browser default, the same specificity.

But this one comes second.

So it will win.

Right?

If I change that order now, it's going to be blue and this applies to other stylesheet.

So not just within a single stylesheet, but let's say I also had a second.

How about a style tag here?

And then in here I set H one color to be orange, So same specificity, but this comes after the first

two.

So this is going to win and we end up with Orange and that's the fourth and final tier of the Cascade

algorithm.

We have a conflict which will wind well, it's one of them marked important.

If so, that one wins.

Are they both marked important?

If so, then it moves on to origin.

And then on the origin tier, we have a couple of options.

It's our browser default.

Or is it a custom style written by a developer?

The developer custom styles will beat out browser defaults, but if they are both browser defaults or

if they are both custom styles, then we move on to specificity.

And then the same thing happens.

If they have the same specificity we finally resolve with position.

Whichever rule came second or if there's multiple, whichever one came last wins with this information,

you should be able to understand why any single rule you write is or is not applying.

Most of the time, it has to do with specificity, sometimes with order, right?

If you have multiple style sheets and you've written them one style and the first sheet and then another

style on the second one, they have the same selector, the second one wins.

You don't really have to deal with importance much as long as you avoid writing the important flag yourself.

