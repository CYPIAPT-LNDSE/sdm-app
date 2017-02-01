Handlebars.registerHelper('getQuestion', function(questions, options) {
  let id = window.location.href.split("=")[1] || 1;
  console.log("id",id);
  console.log(questions[id]);
  return questions[id].question;
});

Handlebars.registerHelper('getPracticalSupport', function(questions, options) {
  let id = window.location.href.split("=")[1]||1;
  return questions[id].answers.practical_support;
});

Handlebars.registerHelper('getTalkingTherapy', function(questions, options) {
  let id = window.location.href.split("=")[1]||1;
  return questions[id].answers.talking_therapy;
});

Handlebars.registerHelper('getMedication', function(questions, options) {
  let id = window.location.href.split("=")[1]||1;
  return questions[id].answers.medication;
});
