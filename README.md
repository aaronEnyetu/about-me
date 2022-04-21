## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Name the HTML elements you'll need to realize your vision**
- I will need a <header></header>.
- I will need a <body></body>.
- I will need a <section></section>.
-I will need a <footer></footer>.

1. **For each HTML element ask: Why do I need this?**
- I need the <header></header> elememnt to say about me.
- I need the <body></body> element to contain all the contents of my HTML Document, such as the heading, paragraph, image, and buttons.
- I need the <section></section> element to represent a group of related content, in this case my bio and info about my favorite animal.
- I need the <footer></footer> element to contain copyright year and my authorship information.

1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
- Implementing the header element
<header>
  <h1>About me</h1>
      </header>
- Implementing the body element
<title>About Me</title>
</head>
<body>
The content of the document......
</body>...
-Implementing the section element
<section id= "bio-info"> </section>
<section id= "favorite-animal">     

<div id="hidden"> <img src=""> </div>

 </section>

- Implementing the footer element
<footer>
  <p>contain copyright year and my authorship information</p>
  </footer>

1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**

  favoriteAnimalButton.addEventListener('click', () => {}

1. **Think about how to validate each of your features according to a Definition of Done**

My button is done when the animal is unhidden.
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**
- HTML
1. Finish header
2. Finish About Me section
3. Create hidden animal section
4. Create hidden animal div
5. Create an animal image
6. Create click the button to make it work
- App.js
1. Get the hidden animal div
2. Get the hidden animal button
3. Create addEventListener for the button
4. classList.remove the hidden class