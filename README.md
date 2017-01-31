# sdm-app

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

### Technical details

Handlebars.registerHelper('test', function(treatments, options) {
  return treatments.medication.name;
});

<!--<h2>{{test treatments}}</h2>-->

#### Microframeworks and libraries we use

- materialize  
- jQuery  
- [jquery.matchHeigh.js](https://github.com/liabru/jquery-match-height)  
