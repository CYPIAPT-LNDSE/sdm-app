# SDM-APP

[See Live Site Here](https://cypiapt-lndse.github.io/sdm-app/)

## Team
- [denesnori](https://github.com/denesnori) - Developer
- [DHayes1987](https://github.com/DHayes1987) - Product Owner
- [esraajb](https://github.com/esraajb) - Developer
- [njsfield](https://github.com/njsfield) - Developer
- [rosatown](https://github.com/rosatown) - Product Owner


## Problem
Our clients take part in a program that encourages clinicians and patients to make a shared decision about the treatment that the patient will receive. Our clients have worked closely together with clinicians
and collected the most common questions that patients ask about their treatment option. They have collected data
on several mental health conditions. During the design sprint we work with the data collected on depression.

**Problems that the app helps to tackle:**

Problems that currently exist/goals |   How our app can help to solve them     |
:------------------------------:|:----------------------------------:|
Children with certain conditions (e.g. ADHD) feel overwhelmed if they receive a grid (leaflet) explaining their options.| The app has a gamified journey option where they receive the information step-by-step alongside with visual explanation.|
The target audience is children aged 12-18, but it would be nice if the app can be used to inform parents. | We have plain version with simplified design, where the main focus is sharing information.
### User journey:

As a clinician,  
dealing with  young patients I would like to have an app  
to help them make decisions about their treatment or care for depression.  

### User stories:

As a clinician,  
I should be able to view the App on a desktop, mobile or tablet,  
as I may only have access one of these devices at my practice.  

As a clinician,  
I would like to see a brief description about the condition of Depression and the purpose of the app,  
so that my patient would understand why they're using it.  

As a clinician,  
I would like to present unbiased  options to my patient,  
so they don't feel pressured to choose one option over the other.  

As a young person suffering from depression,  
I would like be able to navigate the App myself,  
so I can easily explore the options for my treatment.  

As a young person suffering from depression,  
I would like to be able to keep track of the options I am interested in,  
so I can discuss them with my clinician afterwards.  

### Future Plans:
- Make the application available offline.
- Implement feature in Q&A guide to save questions and answers to be discussed later.
- Collect statistics about most frequently saved questions.
- Bring the **talking** and **medication** [illustrations](https://github.com/CYPIAPT-LNDSE/sdm-app/tree/master/assets/illustrations) to life in animated form, to complete the interactive section of the site.


## Tech Stack

### Prototype

- [Handlebars](http://handlebarsjs.com/) for client-side template building (Q&A guide).
- [Materialize.css](http://materializecss.com/), for general site design
- [jQuery](https://jquery.com/) for DOM manipulation.
- [jQuery.matchHeight.js](https://github.com/liabru/jquery-match-height) to set the cards to have equal height.
- [GSAP Animation Library](https://greensock.com/gsap)(interactive section)

### MVP

- [React](https://facebook.github.io/react/) for client-side rendering
- [jQuery](https://jquery.com/) for DOM manipulation
- [Redux](http://redux.js.org/) for state management
- [GSAP Animation Library](https://greensock.com/gsap)(interactive section)
- [Dexie](http://dexie.org/) helper client side storage of Q&A using indexDB
- [Sass](http://sass-lang.com/) for writing/organising CSS
- [PostCSS](https://github.com/postcss/postcss-scss) for additional CSS utilities
- [Webpack](https://webpack.github.io/) for bundling assets
- [ESlint](http://eslint.org/) for linting
