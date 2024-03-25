// Lesson 129. Introducing The Project

// Lesson 130. Setting Up The Navbar

// Lesson 131. Finishing The Navbar

Very common when you're making something look like a button that you have less vertical padding and

more horizontal padding.

// Lesson 132. Starting The Hero Content

// Lesson 133. Making The Skills Section

// Lesson 134. Creating The Blog Section

// Lesson 135. Adding The Events Section

All paragraphs in a two column section take up 50%.

But the way I wrote this was all paragraphs.

Anywhere within a two column section, I can rewrite it to say a direct descendant paragraph.

So now you have to be a direct child of the two column section.


And so on my blog date, I'm going to do margin bottom.

And this is not going to work right away.

See if you can figure out why it's kind of hard to without looking at the markup, but it has to do

with conflicting styles.

So my margin is not taking effect.

Unfortunately, when I inspect, it's crossed off and instead margin is set to eight pixels on the top

and the bottom because this selector here says paragraphs inside of the blog posts div have this margin

in This says nope, anything with the class of blog date has this margin, but this is more specific,

right?

We have an element selector and a class selector.

This is just a class selector and they both apply to the same elements.

This is a paragraph and it has the class of blog date, so I need to rework this a tiny bit.

I can just make this more specific and say.

If you have a closet blog date inside of the blog posts div and there we go.

Now our 32 pixel margin is actually applying.

// Lesson 136. Making A Simple Footer
