# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

This was my first Front End Mentor Challenge that used Javascript as well. It is mockup of creating a FAQ Accordian that some businesses may use to answer customer frequently asked questions.

### What I found Challenging.

This was one of my first projects using JavaScript and manipulating the DOM. It was a challenging in getting the respective questions to expand on click. It was a good practise of using a for loop. The CSS I found challenging was getting the background shadow right and getting the image to hang of its container.

### Screenshot

![](screenshots/Desktop-view.png)
![](screenshots/Mobile-view.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/zach7815/faq-accordian-FEM)
- Live Site URL: [Add live site URL here](https://zach7815.github.io/faq-accordian-FEM/)

## My process

I initially started out well doing the HTML but came unstuck in trying to do some CSS elements. This resulted in me needing to change the HTML to be a better structure after looking at other peoples solutions for inspiration.

I then worked on the CSS, but didn't complete it ie make it completely responsive for all media port sizes. I moved a bit too quickly onto the JS.

I think next time it would be better for me to really think about how best to group things in the HTML and then complete the CSS first as while the JS in this project and probably the next will need some CSS fixes once it is working. It is probably better to keep the processes seperate so I can better focus on the specific problems of the language I am using.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

There was quite a few things that I learnt from this challenge. The main things I learnt in therms of CSS were:

- filter and drop shadow for SVG shapes instead of box shadow.
- The use of overflow, and absolute positioning to make shapes overlap container divs for the @box image.
- I also learnt how to combine media queries to specifically target certian phone sizes for both portrait and landscape mode.
- I also made use of root variables to allow me to store design colours that made it easier to add for required colours for different elements.

For Js:

- I learnt that you need to loop over node lists if you want to target them.
- I also learnt how to use classes and CSS transition to give JS interactivity a smoother feel.

To see how you can add code snippets, see below:

```css
:root {
  --violet: hsl(238, 29%, 16%);
  --lightBlue: hsl(240, 73%, 65%);
  --hoverRed: hsl(14, 88%, 65%);
  --ActiveHead: hsl(237, 12%, 33%);
  --innerAccordText: hsl(237, 12%, 33%);
  --dividerColor: hsl(240, 5%, 91%);
}
```

```js
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    hideAll();
    this.classList.add("active");
    downArrow[i].classList.add("rotate");
    this.nextElementSibling.style.maxHeight = this.scrollHeight + "px";
  });
}
```

### Continued development

I think my next step is to build a design of my first version of my own website portfolio I have planned and made. Once done, I think I will want to build more Front End Mentor projects that include JS functionality but approach the project in a more logical approach, as in this one I kept switching back and forth from editing the CSS and JS.
