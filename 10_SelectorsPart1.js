// Lesson 73. The Universal Selector

So the first new selector I'll show you is the asterisk.

This is called the universal Selector.

It will select every single element, regardless of type.

Every single element in the document will be selected.


every element has a solid green border, every single element, the spans and then the lye, and then

the overall ul and then the div that they're in the body, every single element.

And if I had instead just said the body for example, well that's just one border all the way around

the body.

This is every single element.

So when would we use this?

Generally it comes up when we are resetting styles, the browser comes with a bunch of styles.

We've already seen this.

Every H one, for example, has a specific font size h to have a specific font size, they also have

what we call margin and padding, which we briefly talked about, but we'll learn more about in a dedicated

section coming up soon.

But what some developers like to do is reset all the browser styles so that if you're using Safari or

Chrome or some other browser, everybody gets a blank slate.

And one way of doing that is selecting everything with Star.

And then we set margin to zero and padding to zero and anything else we want to reset.

And you can see every element now has sort of moved over.

There's no additional spacing, what we call margin and padding.

You don't need to care about that for now the specifics of margin and padding.

But I guess I want you to understand there are situations where we might style every element with the

universal selector, but usually we're not going to do something like this.  


want to recap the other selectors we've

seen.

So we've seen the element selector, of course, which lets me style every element of a particular type.

Right.

Make every paragraph have a color of purple.

And every paragraph has a color of purple.

Simple enough.

We've seen the class selector which allows me to group together elements, but I have to actually change

the markup and add a class in to whatever elements I want to select.

So we have these tags up top.

They have a class of tag, these three links, right?

We've seen it already.

I can style them as a group by selecting the name of that class with a period in front and we'll do

a color of orange for them.

And only the elements that have that class are orange.

And then we also saw that we can use an ID selector with the hash symbol followed by some ID and we

have an ID, there's a couple of them.

We have the featured review, I think.

Where is that?

Here it is.

ID is featured.

So if I select that this is supposed to correspond to only one element on the document and I'll set

the color to be gold.

So that's all recap.

But those are the four different tools we have right now when it comes to selections.

Here's that ID element, by the way.

It is gold.

It's hard to see, but it's there.

We're going to learn more in the coming videos, but that's the element selector class ID and the new

one, which is the universal selector.

It selects every single element on the page.

// Lesson 74. The Attribute Selector

Next up, we've got a brand new selector we haven't yet seen, which is the attribute selector.

This allows us to select elements based upon the value of a particular attribute.

Now, just as a recap attributes, are any of the properties that we can add inside of an element in

the tag itself?

So an ID is technically an attribute, so as a class, but more often we're going to work with things

like inputs that have a type.

So I have a form here where we have a text input a number input, a checkbox input.

Those are all input elements.

So if I tried to select by type of just input, that's going to give me all three of them.

But maybe I want to have different styles for a checkbox, then the text input or the number input,

and that's where I can use the attribute selector.

So the syntax looks like this.

We write whatever element we want to select and then square brackets and then inside the name of the

attribute equals and then the value that we're trying to match.

So in this example, we're selecting inputs that have the type of exactly email.



or some corresponding value, but we have

some fancier syntax that allows us to match patterns instead.

So this is commonly used with links anchor elements where we have the ref attribute.

And if you look at the H ref of each link, they start with a pound symbol.

And if you're unfamiliar with this syntax, it's a way of linking to another part of the same document.

So when I click this link that has a hash sign, hash symbol summary as the ref, it's going to look

for an element that has the idea of summary.

And there it is.

When I have pound symbol reviews and I click that link, the browser takes me to the location on the

page that has an ID of reviews, and that's somewhere right there halfway down the page or so.

So let me show that in action.

If I click on the reviews link, it takes me down to the section that has the ID of reviews.

If I click on summary, it takes me to the section or the element that has the ID of summary.

So that's one way of using an ref.

examples: a[href*="wiki"] links with "wiki" anywhere in the URL -> matches the targeted text ANYWHERE in the url
a[href^="#"] links with a url that starts with "#" -> matches the targeted text at the START/BEGINNING of the url
a[href$=".org"] links with a url that ends with ".org" -> matches the targeted text at the END of the url 

these attribute selectors are not limited to just a tags although that is what they are commonly used for

This pattern matching syntax is often used to match refs because we might have complicated links, some

of which are internal, some are external, some are to particular locations and you might want to style

them differently, but you could use this pattern matching for any attribute whatsoever.

It's just not as common to do with other types of attributes like input types.

// Lesson 75. Grouping Selectors

In this video, we're talking about selecting multiple types at once, using the grouping comma.

So we put a comma between whatever different selections that we want, in this case H ones and twos,

both of which we want to turn red.

And as you can see over here, if you wanted to visualize what is selected, it would be this H one

and this H two and any other H one and H twos.

So this is not really a selector on its own, but it helps us combine multiple selectors together.

This is really common because we want to style things.

Similarly a lot of the time, multiple elements, selections, H, one, two, three and fours, group

those together and style them the same.

But we're not limited to just working with elements.

I could use any selectors, -->

They all have these styles, so maybe not the best aesthetic example there, but I wanted you to know

that we're not limited to grouping elements together, but that that is a really common use case.

We could group whatever selections we want together using a comma.

I can mix and match two.

I could put an ID in here like we have an ID called featured, I think.

And so now these three different selections are all going to be styled this way.

// Lesson 76. Descendant & Child Combinators

the " " (space) combinator selects elements that are descendants of the first element


Next up, we're going to talk about the Descendant Combinator.

Now, Combinator sounds fancy.

It just means a way of combining different selectors.

And in this example, the Descendant Combinator.

We can select elements that are descendants of some other elements.

Or we could select a class that is a descendant of some other selection.

The way that it works is that we separate selections with a space and it will select elements of this

second selection that are descendants, meaning they're nested inside something from that first selection.

So in this case it's two elements.

H two is inside of Divs.

So this H two is not selected because it's not in a div.

This one is it is inside of a div.

We use this all the time.


And maybe that's fine to say.

All spans nested in an ally, all spans that are descendants of an lie.

But I do have an ID on this UL here.

So instead I think I'll just say spans nested inside of this cast because there's a chance I have other

spans inside of another lie or uls somewhere else and I don't want them gray.

That way I'm being more specific so that I'm not accidentally turning other spans gray.

So I could do this or I'm going to rewrite it using the ID cast because this element has cast these

are spans nested inside of there now spans have a parent of an ally and then that ally has the parent

of the ID cast.

But that doesn't matter.

All that the space means is that a span has to be nested anywhere inside of this element or this selection.

So it could be 20 layers down, different parent element and child and child and child children I guess

going down, if there's a span nested somewhere within this, it will be selected.

So those are the only gray spans on the page at the moment.

And that is the Space Combinator also known as the Descendant Combinator.


And in V's code, if I hover, you can see that it's visualizing for me what would be selected a span

in an ally instead of some element with the idea of caste.


the ">" (child/direct descendant/greater than sign) combinator selects elements that are direct children of the first element


There's a second combinator that is easy to confuse with the descendant combinator.

They both have to do with descendants and parent child relationships.

But this is called the Child Combinator or the direct Descendant Combinator.

We use the greater than sign.

And remember, a combinator is just a fancy term for some piece of syntax we use to combine selectors.

So in this case we're combining UL and Lee.

We're selecting allies that are nested within us, but not just anywhere nested within like we would

with a space what we just saw.

But if we use it greater than sign, it will only select allies that are direct children of a UL.

There cannot be any other parent elements in the way.

So if you look at this markup I have here, we have a nested list with lies directly descending from

a UL.

But there's also allies in here, but they're nested further down inside of an o l so I said or the

slide says select all allies directly descendant from a UL and that would only be this, this and this

element.

These ones would be selected if we used a space.

They are not selected if we use greater than.

So one of the things I added to the end of the Amadeus document from the previous sections is a little

FAQ section.

It's a nested list.

So we have each question is an ly in an ordered list, but then each answer there can be multiple answers

for each question is part of a ul.

So the structure looks pretty much like what we see on the slides, except it's an UL and then a UL.

There's flipped, but it's the same concept.

We have allies that directly descend from an OLE and then allies that are nested further down.

So what I'll start with is selecting all allies descendant from an ole like that.

This just means anywhere inside as we saw.

Same thing as here.

And I'm going to use border.

I'll explain why in a tiny bit.

But let's say I want a one pixel border that is solid.

My goodness, Red.

And you can see that every ally, this one here has a red border, but also the nested ones, this one

and this one, they all have a red border.

But if I change this instead of using this space, I still have space.

I don't have to have space, but I have space on either side with a greater than sign.

This is also valid, although I think prettier is going to auto format it for me and add spaces.

But this now means something different.

Only select the allies that are direct children of an ole.

So this first thing and this second thing, but not these allies that are nested inside.

And the reason I used border here is because if I used color, color is inherited.

So if I set the color to be red, everything is red because these elements just inherited from the parent

element.

So you can't actually tell that the selection is different.

But when I use border, you can.

So one more time this selects all allies that descend from an ole.

They could be nested 100 levels deep.

In this case it's just two levels deep.

This select the allies that have a direct parent that is an ole.

And just like all the selections I've shown you, this doesn't have to be an element.

I don't have a good example of this, but this could be a class and this could be an ally, or it could

be another class.

I don't have that markup going, but this is totally valid.

So whenever you see on my slides elements because they're just simpler for me to show you, you could

substitute that selection with any other CSS selection.

The focus is on the combinator here.

// Lesson 77. Compound Selectors

combine class, id, and element selectors (without spaces) -> e.g. div.className --> selects divs with the class "className"