// Lesson 28. Creating Text Inputs and Buttons

// summary: input element is extremely versatile. set type="text" to create a standard text input. like <a> tag, it has no closing tag!

The first thing we'll look at is a new element called input.

Input is incredibly versatile.

It is a self closing element, just like an image.

There is no closing tag.

There is no content, no text that goes in between the tags because there is no second tag.

It's simply input and then a very special attribute that has to be there called type and we'll start

by setting type equal to text.

This will make us a very basic text field.


The next thing that I'll show you is how to make a button.

So to make a button, we have an element called button.

So the button element does actually have a closing tag.

And that's because we specify the text of the button in between the opening and closing tags.

So when we work with a input element, there's no text to specify because there's no content, right?

There's nothing that we're trying to put inside of that input.

We're just saying it's a text field.

But when we make a button, the button has some some text on it, basically a label saying what the

button is.

So if we look at this sign in button, it says sign in.

If we look at how about on Mozilla developer network, here is a button that says get MDE and plus that's

the text.

So to make a button, the element is called button.

The tag is button opening and closing.

We don't have to add in this type equals submit.

type submit will submit the form that the input tag is inside of

buttons and input tags are inline elements/tags

// Lesson 29. The Form Element

So what is the purpose of an overall form element?

If I make a form element, I'll just put one in here form opening and closing tag and I save.

Where's my web page?

Here it is.

We won't see a thing.

It doesn't show up as a form, but it has a very important purpose.

It groups together are different form controls.

So we might have a checkout form that has ten different fields your address, your credit card information,

your name, your email, your password, a form element groups it together, and then it specifies to

the browser where the data from the form fields should be sent when the form is submitted.

So when I have a form, that data is typically going to go somewhere and it's kind of beyond the scope

of what we need in this course, because to handle a form submission, you need some sort of server

setup.

You typically will have an API, a back end, essentially with a database.

important that you understand what a form

element does.

It will send data somewhere.

the action attribute specifies where the form data is sent and the method attribute specifies what type of request is being made to the server where the data is being sent to


It has this very special attribute called action.

Action is what we use to tell the form where the data should be sent when somebody clicks, submit or

sign up or whatever the button is to submit the form, send the data to this location.

And then we have this second attribute.

We won't go into too much detail, but it's called method.

This allows us to specify what type of HTTP request should be sent by the form.


But just to be comprehensive, I'll tell you about it in a couple of sentences.

HTTP has different types of requests that we can make that have different purposes.

So to the same URL, the same location in this case slash sign up.

We can send a get request which has one particular meaning.

Basically means we're trying to retrieve information or a post request, which means typically that

we're trying to submit data that will be saved or used in some way on the back end.

There's patch and put and delete lots of different types of requests.

So to the same location, we can send a different type of a request.


So all you really need to know is that if I wrap my content in a form element, I can then specify an

action attribute that says where the data should be sent and a method attribute that says how it should

be sent, what HTTP type of request, what verb should be used.


submit What happens when we have a button

at the end of a form is that when we click it, the form will be submitted and we'll be able to watch


If you watch me click this right here, I'll try and zoom in and post production.

You'll see that the page refreshes.

It happened very quickly, but the page did refresh, which tells us an HTTP request was in fact made.

So if I specify my own action on this form, action equals and I'll just do some other website.

This is where my data is sent.

How about just google.com?

If I refresh the page now and I submit this form.

It takes me to Google.

So that's proof that the form is doing something.

Of course, normally this would be sending the data somewhere that you control.

You're not sending data to Google.

And by the way, it's not like Google is taking our information from this or anything.

We're just sending it to the home page.

It's not expecting any data from us.

So it just kind of disappears.

It's not used at all.

However, normally we would have our data go to like an end point that we created on the back end slash

log in or check out or something like that, register whatever we want.

We would have it set up to handle a submission, to be expecting data to be sent its way and then respond

with some sort of web page.

But we don't have that.

So for now, by sending it, setting it to Google, it's proof that our data is going somewhere.

But for now, I'll leave it as Google because it does demonstrate the fact that our form is being submitted.

In the form element is dictating where a request should be sent to.

In this case, it happens to be to Google.com, which doesn't make any sense.


But the basic concept here is that a form element on its own is just an empty thing.

It doesn't look like anything at all, but we fill it with different form inputs or controls.

So you could have an an email field, a password field, a checkbox to confirm that you are over 18

or something like that.

And then the form says where the data will go, and then when the form is submitted, which in our case

happens because we have a button at the end of the form that submits the form and a request is then

generated to this location.

// Lesson 30. Name and Placeholder Attributes

// summary: the name attribute specifies the name that the data from the input field will be sent to the server as/under/by. it essentially names the data so that it can be managed and controlled via the form submission
// the name that the data will be sent to the server under


But the name attribute is very important nonetheless.

It's a way to provide a name to the data in every field.

So when my form is submitted, imagine that I had three different text fields.

Here's my form.

If I go back there they are.

It's not about labeling them.

We're going to learn how to label fields in a moment, but it's about giving them a name when the data

is submitted and sent somewhere.

So if I give each one of them a name, maybe I'll just do one for now and let's call this user name.

This is totally up to me.

You don't want to put a space in there, but otherwise do whatever you want.

It should be appropriate to whatever this input field corresponds to.


So every input we make in a form in the real world should have a name because we need some way to identify

the data that is contained in this field.


The next attribute we'll look at is a simple one.

It's called Placeholder.

And this goes on an input not on the form, but on each input.

And I can specify placeholder text.

Now, what is placeholder text?

Here's an example of placeholder text.

In the real world it says Search GitHub.

But as soon as I start typing, it goes away.

So it's a placeholder.

It's not real text in the input, it's just sort of fake placeholder text that goes away and it tells

you a little bit about what should go in there.
It's just a visual aid.


And then we sell the name attribute, which is more complicated to explain, but it's basically just

giving each piece of data in each input a name that it will be sent under when our form submits.

And for now, I'm just setting action to be blank, which has the effect of refreshing our page and

just sending our data to the same location we're already on.

It's still submits the form.

You can see it refreshed, but it doesn't send our data to some server or do anything with it.

// Lesson 31. Properly Labelling Form Controls

The next thing you need to know about making a form is that we need to properly label all of our form

controls.

So there's an element for that purpose.

It's called the label.

It's very simple on its own.

If I create a label, it's an opening and closing tag label and then text inside.

So we would put something like first name here to label this field.

But what's very important is that what we want to do is actually connect this label to that field.

Notice when I click on it, it actually focuses my cursor in the form control.

So there's an actual connection.

It's not just something we put in front of an input like I have here when I click.

There's no connection to this field.

This is where we use the for attribute on a label.

So every label can have a four attribute that corresponds to an ID attribute on some form control.

Remember, we saw IDs when we talked about links.

It's the same concept.

It's just a name, it's an identifier.

It has no visual impact.

Right?

So on this one, I might give it an ID, The order doesn't matter where I put this, but I'll just put

it in the middle here.

So ID of first name.

I'm not going to put a space in there because typically you don't want to space in an ID and then I

can connect it here by saying this label is for whatever has the ID of first name.

So that text has to match this text.

When I refresh, there's no visual difference, but now when I click, it focuses my cursor in there.

So that's proof that we have a connection.

But another very important reason to label your fields properly has to do with accessibility, because

when people who are using a screen reader, people who are visually impaired, use software right to

approach and consume a web page, the label that is associated with the form field will be read out

loud, and users can then navigate from one label to the next and get descriptive text about each field.

So placeholder text on its own can still be read out by a screen reader, but it's much better.

It's a better practice to fully label your form controls.

And we can also tell by just clicking so long story short, we always want to label our inputs.

Each ID is supposed to be unique so you don't want to reuse them.

It kind of defeats the purpose and each label corresponds to one field.

And that's how we properly label fields.

You should always label your form fields, even if you feel like it's unnecessary because you have placeholder

text.

You really want to have the true connected label for accessibility purposes.

It allows us to provide a form field description that actually is wired up to the corresponding form

field.

It's behind the scenes using the four attributes and a matching ID on the form field.

// summary: match a label element to a form control using the for attribute. it must match the id attribute on an input

labels are inline elements

// Lesson 32. Other Types of Inputs

Now this one doesn't look any different, but there's a very important distinction when I try to submit

the form and probably a better example of this is actually going to be the email input.

A field for editing an email address looks like a text input, but has validation parameters and relevant

keyboard in supporting browsers and devices with dynamic keyboards.

You may have seen this before if you're on a mobile device, if you open up an email field, sometimes

it will give you the ad sign and dotcom and certain special keys that correspond to email addresses

instead of a regular keyboard.

But it also has special validation.

Meaning if I make an email field here.

It looks like a text field.

I can type whatever I want and when I click submit now I get a message from the browser saying Please

include an at sign in the email.

So it's not going to verify that this is a real email address.

And if I hit submit one more time, it says Please enter a part following the ADD sign so I can do a

isd's ASD whatever at DS.

That will be valid.

And you'll see that we have no trouble anymore.

It doesn't give me any issues, but it does at least enforce the basic pattern that we're supposed to

follow.

And along those lines, speaking of validations, there is a special attribute we can add to any form

field which is called required.

And if I put it in here, I actually don't set it equal to anything.

It's a very different type of attribute.

It's called a Boolean attribute.

We just put it in there.

Its mere presence is all that is needed when we say that this is required.

Watch what happens now when I try and submit my form that's empty.

It gives me an error saying please fill this out first.

Now if I click submit, the form submits so only this field was required, but I could make all of them

required.


So we have similar fields for URLs and telephone numbers.

I won't show them all, but the concept is the same.

If we use a URL field, it's going to have some validation to make sure that you're entering something

in the rough shape of a of a URL.

It doesn't check to see that it's a real website or a real URL, but it's looking at the basic pattern

of the information in there.

// Lesson 33. Checkboxes, Textareas, and Range Inputs

textarea tags create a multi line text input area/field


Next up, we'll take a look at a handful of other types of form controls.

The first one is actually not an input element.

It's called a text area.

And this will create a multiple line text input.

Like if you wanted to have somebody submit an essay or, you know, a bio for their profile or something,

it doesn't look great to have them do it in a single text field like this.

So that's where a text area comes into play.


So I'm going to make a text area and just leave it blank.

It has an open enclosing tag, by the way.

An input does not.

So it is different.

It's a totally separate standalone element.

When I refresh, I now have a text field that is multiple lines so I can type and hit enter and keep

typing.

We can control the rows and columns basically the size of it, right?

So if I set rows to be 100, it's a much taller.

That text field is probably too much.

How about ten?

There we are.

And then I can set columns, which is calls to be let's also do ten and there's our text field.

And what else if we put text inside like Lorem ipsum text between those tags that will determine the

starter text that is in the input to begin with, but then I can delete it all.

So that's the text area.


So that's the text area.

Next, we'll take a look at a range input.

So ranges create sliders where we can pick a value.

It's an input element, so I'll just make one up top here where the type is set to range.

And here's our range input.

We can set a minimum and maximum value.

So that's usually very important.

Let's say that our range goes from zero and our max ends up at ten.

We still won't see anything here.

But when my form is submitted, let's say I give it a name like volume level, if that's what this corresponds

to, let's add a button into our form to submit it.

Our data will just be sent to the same web page we're on.

Just refresh the page.

So I'm going to refresh.

Let's clear my URL out.

So if I select, let's say all the way at the top, right, not the top, all the way at the right.

And I click submit right here.

It says Volume level was set to ten.

If I go to the far extreme left, volume level is set to zero.

If I go like here, volume level is eight.

So that's how we can create a range input.

You can also control the steps with the attribute called step.

Let's say it steps by twos.

So now I can go from 0 to 2 to 4 to 6 to 8 to 10, but there's no odd numbers in there.

When I submit, it's at six.

The next step up.

It's now at eight.

So that's all you need to know about range inputs.


So check boxes are another type of input.

It's just the same old input element.

No closing tag.

By the way, if you ever see this trailing slash, you actually don't need that.

Some people put it in there, some people don't.

I believe the correct rule is to not put it in there.

HTML doesn't want it, but a lot of people do it.

It's not a big deal, so don't worry about it on any of these self closing elements, like an input

or an image, it's not required.

So if we make type set to checkbox, this will create a checkbox element for us.

So why don't I comment everything else out to start input type equals checkbox.


Here's our beautiful checkbox and that's all there is to making the checkbox.

But with checkboxes especially, it's critical to label them because what is this checkbox about?

There's no placeholder text, there's nothing to tell you.

Context.

So let's put some sort of ID in here so I can label it.

The ID will be What should this checkbox be for?

Agree terms and conditions, terms of service or something like that.

Right.

So you have to agree.

So I'll make a label that says I agree to the terms of service service and then I'll set the for attribute

to match this agree to see or toss.

And now I have properly labeled the checkbox.

I can click the whole label and it toggles the checkbox.

And then if I give it a name, let's just call this what should we call it?

Terms of service toss.

When I submit this form, if it's checked, well, I don't have a button so I can't submit it.

But now I do.

If I check this and I click submit notice up here, it says toss is on.

That's how it tells the server that this checkbox was checked.

If I leave it blank and I submit it doesn't have anything in the URL so we don't have to worry about

URLs and servers and HTTP requests.

We're just making the forms.

But just so you know, if you check a checkbox, it will be sent as on, and if it's unchecked, it

won't be sent at all.

It's ignored.

So that's how we make a checkbox.

It's critical to label your checkboxes.

You should label all form fields, but especially checkboxes because they have no context otherwise.

checking a checkbox and submitting the associated form will set and send that checkbox input value to "on" the server will receive an "on" value from that input

And then we also saw range inputs and text areas, which is a separate element to make a multiple line,

multiple column area of text, an input that is not just a single line of text.

// Lesson 34. Selects and Radio Button Groupings

populate a select element with option elements


The first is called a Select.

This is how we make basically a dropdown menu where you pick from different options and to make a select,

we actually use two separate elements combined, kind of like how we use an lie and put them inside

of a ul or an o l.

We create different option elements and each option is going to be nested inside of a parent select

element.


And an option has an opening tag and a closing tag.

As you can see in the slides as well.

If we put text between them, this is what a user will see.

So let's do a how about a shirt size selector?

So small.

If I refresh, there's now one option to pick from small if I add two more medium and large.

We now have three choices small, medium and large.

However, we're missing a critical attribute called value.

Whatever I put in this value is what will be sent to a server when the form is submitted.

So this is displayed to a user.

You can put whatever you want in here and then in inside of the value attribute, I can put the actual

piece of data I want to be sent if a user selects this one.

So it could just match.

Exactly.

Or I might want it to just be S and M and L if I want to keep it short.

So a user will never see this.

Right.

If I refresh, we still see small, medium and large, but this is the value that will be sent when

this option is selected in the form is submitted.

So I'll show you that if I put a button in here, submit, we should properly label this.

So label.

And let's give it some text.

Select your shirt size and then I need to connect the label to the select.

So I need to give it an ID.

How about shirt size for will be a shirt size as well.

And then I need to give it a name because the name attribute tells the form, it tells the browser.

Whatever is selected here should be sent under this name so a server can anticipate it.

So I'll just call this shirt size as well.

So if I select medium shirt size will be sent as M.

And I'll show that right here.

So I'm going to select how about large submit.

And up here it says Shirt size equals L If I select small instead, shirt size equals SW.

So that is the importance of the value attribute.

It tells the browser this is the value that should be sent when a user selects this option.

We're not really going to make any selection this course when we work on our projects.

But I figured it was important for you to understand how to make them.


A radio button is kind of like a checkbox.

However, we usually have groups of them where you can only select one option, and making a radio button

is very simple.

I'll just keep this commented out.

It's as simple as input type equals radio.

That will make me a single radio button.

There it is.

And that's it.

But unlike a checkbox, I can't uncheck it right now.

It's just always checked.

But again, we use radio buttons in groups, so we might do something like Let's ask a user to select

their preferred method of contact.

So we'll have one radio button that will correspond to phone.

So I'm going to give it a label.

Call me and we'll call this for phone.

We'll give this an ID of phone.

So I just have a label for it.

But then let's make a second grouping here and this one will be for a user to select that they prefer

to be emailed.

So now we have two radio buttons.

They're still not connected to each other, so I can still select both of them.

But what I want is for a user to only be able to pick one.

Call me is their preference.

Or email me, but not both.

And all we have to do is give the inputs the same name.

So if I say contact and this one will have a name of contact as well.

Now they're grouped together and the browser knows that they're connected.

So if I select this one and then try and select this one, it D selects email, right?

I can only have one selected at a time and that's solely because I gave them the same name if I change

that.

Now the browser doesn't know they're connected.

So we use radio buttons in situations where we want a user to have to pick one and only one thing in

a group.

Now another thing about radio buttons is that we can specify and we should specify a value to be sent.

Because if I submit a form right now, if I made a form element, it won't go anywhere, but I'll wrap

all this stuff in it and then I put a button in here.

Submit.

If I select, email me and submit.

Take a look at what it says up here.

Contact is on.

That's it.

It's like a checkbox, if you remember.

That's what happens when I select or I check a checkbox.

But how do we know which one was checked?

Was it Call me or email me.

What we need to do is give each one a value.

So let's give this one a value of phone and this one a value of email.

And whatever we put in here is what will be sent to the server.

Just like with our option.

If I said value is se and this was selected, then shirt size was set to s here.

If I say value is phone and a user checks this radio button, then contact the name will be set to phone.

So let's try that.

I'm going to click on Call Me and submit.

And now it says contact is equal to phone.

And then if I do email me, submit contact is set to email.

// summary: radio buttons are usually grouped together. only one option can be selected.


All right, so that's how we make radio buttons.

There are groups of buttons that we can toggle on or off that are connected by having the same name.

That way we can only select one option and I can have as many as I want.

If they have the same name, I can only select one.

And then we saw the select and option elements which we use to create dropdowns.

// Lesson 35. Course Landing Page Form Exercise

form controls and labels are inline elements

a div is just a blank box that I can wrap around

any content and it's a block element.


This wasn't a requirement in the exercise, but I could call this intermediate.

Just a little bit shorter.

This one can be expert.

And then this one can be all.

And now, if I put some text in there and I'll select expert level and submit up top, it says level

equals experts, not expert level, but just expert, because that's the value that is sent when you

select this option.

This is displayed to a user.

It says expert space level.

This is sent to some server.

assigning values to options vs no values results in just the text being sent as a value for the associated select tag


We'll see some examples in the next section, but if I wrap this in a div, I mean it has the same functional

purpose of me putting it in a paragraph, but a paragraph is supposed to be for a paragraph of text

content.

And this is not text, right?

This is a form control.

It shouldn't be in a paragraph.

So the div plays that role here.

It's just a container that forces other elements outside of this div onto their own line.

It's a block level element.