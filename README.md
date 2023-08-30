# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./assets/screenshots/FireShot%20Capture%20005%20-%20Time%20Tracking%20Dashboard%20-%20localhost.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styles

### What I learned

With this project I was able to learn how to pull data from a json file and pass it dynamically thru components and functions.

This span was a challenge since I wanted to pass the selected time frame and at the same time display it properly so it can be use to understand for the user. To achive that I went back to some very usefull javacript methods. 

```html
    <span className='text-xl sm:text-base pb-2'>
        {`Last ${selectedTimeframe !== 'daily' ? selectedTimeframe.charAt(0).toUpperCase() + selectedTimeframe.slice(1,-2) : 'Day'} - ${activity.timeframes[selectedTimeframe].previous}hrs`}
    </span>
```

### Continued development

To add more details to this challenge I may add a user select option and display more and new data to make it more interactive.

### Useful resources

- [w3 School](https://www.w3schools.com/) - Help me to find all information neeeded related to JavaScript methods and much more.
- [MDN Web Docs](https://developer.mozilla.org/en-US/) - Same as w3 School, either one option or the other are great.

## Author

- Website - [Misael Ponce](https://portofolio-misaponce.vercel.app/)
- Frontend Mentor - [@Misaponce](https://www.frontendmentor.io/profile/Misaponce)


