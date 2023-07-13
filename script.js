import classifications from './classifications.js';
import salaryTable from './salaryTable.js';


// set global variables
let userClassification = null;
let userStep = 1;

document.addEventListener("DOMContentLoaded", function(){

  // save elements to variables for later access
  let displayEl = document.getElementById("display");
  let dispwrap = document.getElementById("dispwrap");
  let submit = document.getElementById("submitButton");
  let startOver = document.getElementById("startOverButton");
  let results = document.getElementById("results");
  let classificationEl = document.getElementById("classification");
  let stepEl = document.getElementById("step");
  let instructions = document.getElementById("instructions");

  // insert options into classification select
  classifications.forEach((item) => {
    classificationEl.options[classificationEl.options.length] = new Option(item['Position'], item['Classification_Code'])
  });

  // insert options into step select -- need to replace, not append
  function setStepOptions() {
    let steps = [1,2,3,4,5,6,7,8,9,10];
    for (var i = stepEl.options.length - 1; i > 0; --i) {
      // remove any pre-existing options each time this function is called
      stepEl.options.remove(i);
    }
    console.log(stepEl.options);
    console.log(userClassification);
    let userClassObj = classifications.find(item => item.Classification_Code == userClassification)
    console.log(userClassObj);
    let lowestStepForUser = userClassObj["Current lowest step"];
    console.log(`lowestStepForUser: ${lowestStepForUser}`);
    steps = steps.filter(step => parseFloat(step) >= parseFloat(lowestStepForUser));
    console.log(steps);
    steps.forEach((item, index) => {
      stepEl.options[index + 1] = new Option(item, item)
    });
  }

  // listen for changes to classification
  classificationEl.addEventListener("change", function(event) {
    userClassification = this.value;
    console.log(`userClassification: ${userClassification}`);
    setStepOptions();
  });
  

  // listen for changes to step
  stepEl.addEventListener("change", function(event) {
    userStep = parseFloat(this.value);
    console.log(`userStep: ${userStep}`);
  });


  // formulas


  // generate results string and message
  function resultsString(firstYearRaiseAmount, secondYearRaiseAmount, lifeOfContractTotal, secondYearBasePayAmount) {
    return `<p>If you are a [classification name] on step [step number], your current monthly base salary is [current monthly base salary]. By July 2024, <strong>your monthly base salary will increase by [projected increase in monthly salary July 2024]</strong>. By the end of the contract, <strong>your monthly base salary will increase by [projected increase in monthly salary by end of CBA]</strong>. Over the two years of this contract, this will mean <strong>an additional [XX dollars] in your pocket</strong>, including COLAs, Steps, and bonuses.</p>`
  }

  // On reload, reload page
  function handleReload() {
    window.location.reload();
  }

  // On submit, hide keypad and display results
  function handleSubmit() {
    keys.setAttribute("style", "height:0;");
    buttons.forEach(btn =>
      btn.setAttribute("style", "height:0; padding: 0; border: 0; display:none;")
    );
    submit.setAttribute("style", "display:none;");
    startOver.setAttribute("style", "height:3rem; padding: 1rem 0; border: 1px solid white");
    dispwrap.setAttribute("style", "margin-bottom: 0;");
    instructions.setAttribute("style", "height: 0; display:none;");
    message.setAttribute("style", "display:block;");
    results.innerHTML = resultsString(firstYearRaiseAmount, secondYearRaiseAmount, totalLifeOfContractAmount, secondYearBasePayAmount);

  }

  submit.addEventListener("click", handleSubmit);
  startOver.addEventListener("click", handleReload);

});
