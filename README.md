# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Links

- GitHub URL: [Github]([https://64fdb14386678711ad17be76--tipcalulatorreactprac.netlify.app/)](https://github.com/SatellitePeace/react-tip-calculator/)
- Live Site URL: [live site URL](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library



### What I learned
I consolidated my understanding of how to lift state up, and conditional styling interestling i also learned a new css trick that saved me from writing a couple more jsx


```css
.reset:not(:disabled){
  background: hsl(172, 67%, 45%);
}
```
```js
 const [bill, setBill] = useState("");
  const [custom, setCustom] = useState("");
  const [numOfPeople, setNumOfPeople] = useState("");
  const [tipPercentage, setTipPercentage] = useState(0); // Store selected tip percentage
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0); // Store calculated tip amount
  const [totalAmountPerPerson, setTotalAmountPerPerson] = useState(0); // Store calculated total amount

```


### Useful resources

- [Jonas Udemy Course](https://www.udemy.com/course/the-ultimate-react-course/) - I Jonas udemy course has helped me immensely it from the knowledge i learned in the beginner section that i used in solving this

## Author

- Frontend Mentor - [@Nneoma](https://www.frontendmentor.io/profile/SatellitePeace)


