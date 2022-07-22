# Frontend Mentor - Four card feature section solution

This is a solution to the [Four card feature section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot

![](./design/screenshot-mobile.png)
![](./design/screenshot-desktop.png)

### Links

- Solution URL: [Github](https://github.com/bagas-defandi/Frontend-Mentor/tree/master/four-card-feature-section)
- Live Site URL: [Live Site](https://bagas-defandi-frontend-mentor.netlify.app/four-card-feature-section)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow

### What I learned

use `grid-templete-areas` to make layout responsive:

```css
.feature {
  grid-template-areas:
    "supervisor"
    "team"
    "karma"
    "calculator";
}
@media (min-width: 43.75em) {
  .feature {
    grid-template-areas:
      "supervisor team"
      "karma calculator";
  }
}

@media (min-width: 62.5em) {
  .feature {
    grid-template-areas:
      ". team ."
      "supervisor team calculator"
      "supervisor karma  calculator"
      ". karma .";
  }
}
```

### Useful resources

- [Kevin Powell responsive course](https://courses.kevinpowell.co/conquering-responsive-layouts) - This helped me to learn mobile first workflow, using relative units, and flexbox.
- [Andy Bell's reset](https://piccalil.li/blog/a-modern-css-reset/) - Modern CSS Reset.
- [Andy Bell's Flow class](https://piccalil.li/quick-tip/flow-utility/) - This is an easy way to add some space
- [Kevin Powell](https://www.youtube.com/watch?v=rg7Fvvl3taU&t=1s) - Learn grid the easy way.

## Author

- Frontend Mentor - [@bagas-defandi](https://www.frontendmentor.io/profile/bagas-defandi)
