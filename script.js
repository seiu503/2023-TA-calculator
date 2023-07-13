import classifications from './classifications.js';
import salaryTable from './salaryTable.js';
import lookup from './lookup.js';

// set global variables
let userClassificationCode = null;
let userPosition = null;
let userStep = 1;
let userObj = null;
let currentMonthlyBase = 0;
let projectedMonthlyBase = 0;
let projectedIncrease = 0;
let lifeOfContractTotal = 0;
let userPositionWithArticle = '';

document.addEventListener("DOMContentLoaded", function(){

  // save elements to variables for later access
  let displayEl = document.getElementById("display");
  let dispwrap = document.getElementById("dispwrap");
  let submit = document.getElementById("submitButton");
  let startOver = document.getElementById("startOverButton");
  let results = document.getElementById("results");
  let message = document.getElementById('message');
  let classificationEl = document.getElementById("classification");
  let stepEl = document.getElementById("step");
  let instructions = document.getElementById("instructions");
  let inputs = document.getElementById("inputs");

  // insert options into classification select
  classifications.forEach((item) => {
    classificationEl.options[classificationEl.options.length] = new Option(item['Position'], item['Classification_Code'])
  });

  // insert options into step select
  function setStepOptions() {
    let steps = [1,2,3,4,5,6,7,8,9,10];
    for (var i = stepEl.options.length - 1; i > 0; --i) {
      // remove any pre-existing options each time this function is called
      stepEl.options.remove(i);
    }
    let userClassObj = classifications.find(item => item.Classification_Code == userClassificationCode)
    let lowestStepForUser = userClassObj["Current lowest step"];
    steps = steps.filter(step => parseFloat(step) >= parseFloat(lowestStepForUser));
    steps.forEach((item, index) => {
      stepEl.options[index + 1] = new Option(item, item)
    });
  }

  // listen for changes to classification
  classificationEl.addEventListener("change", function(event) {
    userClassificationCode = this.value;
    console.log(`userClassificationCode: ${userClassificationCode}`);
    userPosition = this.options[this.selectedIndex].text;
    console.log(`userPosition: ${userPosition}`);
    // check if position name begins with a vowel
    const vowelRegex = '^[aieouAIEOU].*';
    const matched = userPosition.match(vowelRegex)
      if (matched) {
        userPositionWithArticle = `an ${userPosition}`;
        } else {
        userPositionWithArticle = `a ${userPosition}`;
      }
    console.log(userPositionWithArticle);
    setStepOptions();
  });
  

  // listen for changes to step
  stepEl.addEventListener("change", function(event) {
    userStep = parseFloat(this.value);
    console.log(`userStep: ${userStep}`);
  });


  // find user object
  function lookupUserObject(userClassificationCode, userStep) {
    console.log(`userClassificationCode: ${userClassificationCode}`);
    const objToReturn = lookup.find((obj) => {
      return obj['Classification code'] == userClassificationCode && obj['Current Step'] == userStep
    });
    return objToReturn || {};
  };


  // generate results string and message
  function resultsString() {
    // set variables
    userObj = lookupUserObject(userClassificationCode, userStep);
    console.log(userObj);
    currentMonthlyBase = userObj['current_monthly'];
    projectedMonthlyBase = userObj['monthly_pay_at_contract_end'];
    projectedIncrease = userObj['difference in monthly pay'];
    lifeOfContractTotal = userObj['lifeOfContractTotal'];
    return `<p>If you are ${userPositionWithArticle} on step ${userStep}, your current monthly base salary is $${currentMonthlyBase}. By July 2025, <strong>your monthly base salary will increase to $${projectedMonthlyBase}</strong>. This is an increase in monthly base pay of <strong> $${projectedIncrease}</strong> by the end of the contract. Over the two years of this contract, this will mean <strong>an additional $${lifeOfContractTotal} in your pocket</strong>, including COLAs, Steps, and bonuses.</p>`
  }

  // On reload, reload page
  function handleReload() {
    window.location.reload();
  }

  // On submit, hide keypad and display results
  function handleSubmit(e) {
    e.preventDefault();
    submit.setAttribute("style", "display:none;");
    startOver.setAttribute("style", "height:3rem; padding: 1rem 0; border: 1px solid white");
    instructions.setAttribute("style", "height: 0; display:none;");
    inputs.setAttribute("style", "height: 0; display:none;");
    message.setAttribute("style", "display:block;");
    results.innerHTML = resultsString();
  }

  submit.addEventListener("click", handleSubmit);
  startOver.addEventListener("click", handleReload);

});
