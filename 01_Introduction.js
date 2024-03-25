// Lesson 5. How The Web Works

// 1. The World Wide Web is an information system where documents are available over the internet.
//      a. These documents are transferred over HTTP.

So the World Wide Web or just the Web, right.

We're hopefully familiar with is this incredible information system where we can get documents via the

Internet.

So the Internet is the whole system of connected computers all over the world.

The Web is everything that I do in a web browser, every page that I visit, Google, Reddit, Facebook,

whatever, Instagram, probably mostly read it for me personally.

This is Github's Web web page, their marketing page.

I think it's a nice landing page.

This is all the web.

These are all just documents that I am loading.

And the way that they work is that they're available over something called HTTP, which you probably

have seen before, if for no other reason than putting it in a URL.

Right?

HTTP colon slash w w w dot credit.com.

So HTTP stands for Hypertext Transfer Protocol.

And in a very short sentence, here's what it is.

It is a protocol, a formally defined set of rules that says here is how we communicate between one

computer and another computer, specifically what we call a client and a server.

The client is whoever is requesting a page, the server is whoever is responding with a page.

// summary: http is a formally defined set of rules for communication between a client (requester) and a server(responder).

// Thats all you need to know! 

But as far as being a consumer of web pages and a builder of HTML and CSS, you really just need to

know that it exists.

It's this set of rules that says Here is how it works to communicate between a client and a server.


So in all of my courses on front end stuff, I like to use this analogy.

If you have ever bought furniture at IKEA, you don't come home with furniture, you come home with

the pieces and then you have to actually construct the actual furniture at home.

I happen to love doing that.

It's very fun job.

I wish I could do that full time constructing IKEA furniture, but that's a very similar process to

what happens with the web page.

When I send this request, I'll just refresh the page here.

My request makes it to GitHub servers, assuming there's no problem with my internet or their servers,

then that server constructs a web page for me and it sends it back.

But again, it's just sending me code.

And the form that that code takes is HTML, CSS and JavaScript.

So the web pages that my browser shows me are built out of these three things.

Technically, they don't all have to be there.

It could just be HTML or just HTML CSS with no JavaScript, but modern web pages consist of all three.

Now this is of course on HTML CSS.

We have a tiny bit of JavaScript thrown in, but it's all about CSS really, aside from the beginning

here where we cover some HTML.

But JavaScript plays an important role.

We'll cover that.

I'm going to talk about that role in a separate video, but these three technologies make up a typical

HTTP response, and I can see the content of every web page, the actual source code.

If I'm using Chrome, you can use any browser really, but in Chrome I can right click on a web page

and go to view page source.

And this is the underlying code.

This is all HTML.



So the point here is that a web page is built with these three technologies, at least a modern Web

page.

But when we get it, when our browser gets it, it's just code.

And the job of the browser is to take that and turn it into a full web page, right?

Take a bunch of code and HTML, CSS and JavaScript and render it for humans.

And one last thing that I'll show you here is we can make a request with other tools other than a web

browser.

Most people wouldn't do this unless you're a developer, but here's an app called Postman.

You do not need to download this.

It allows me to make a request to a web page so I can send this request to GitHub.com and it shows me

the source that I get back.

It shows me information about the HTTP request stuff you don't have to care about.

We use this as developers to test different websites and APIs and make sure things are working.

But this is not a browser.

This is just making requests for me and then showing me the source code.

We get back.

A browser does the same thing, but then it turns the code into a page that looks good for us that we

can actually interact with without having to look at awful code.

// Lesson 6. The Roles of HTML, CSS, and JS

What are they each responsible for?

If these three things make up a typical web page, they each have a particular job, a function that

they serve HTML, which is a very important one.

They're all important, but HTML is the foundation that is the actual content that we see on a web page.

The button, the image, the link, the text, the bullet point list, all of that is HTML, the individual

pieces on a web page.

Then we have CSS, which is what most of this course is about.

CSS controls the styling, the appearance of all of that content.

So if an HTML is a button, CSS says make that button big and have a different font and give it extra

spacing and a shadow underneath it.

And then JavaScript is the trickiest one to explain it is the behavior or action interactivity of the

pages contents.

// summary: 
// html - the content on a page
// css - the styles applied to the page
// js - the behavior or action of the page's contents


Another way of thinking about it is HTML is the nouns.

If you learned remember anything about grammar and sentence structure, HTML is the nouns.

It's the content, the what on the page.

CSS is the adjectives.

It describes the nouns.

So we could have a car that would be a noun.

CSS says it's a big red car or a loud, ugly car.

And then JavaScript is the verbs, the action, what's happening on the page.

The big red ugly car has flipped over 20 times in the middle of the highway.

That would be the JavaScript.


So all of that interactivity, the gameplay, that's all JavaScript, but everything you see is HTML

that has then been styled with CSS.

// Lesson 7. Installing The Tools We Need

