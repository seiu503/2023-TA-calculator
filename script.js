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
let annualIncrease = 0;
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
  let classificationCustom = document.getElementById("classifcationCustom");
  let stepEl = document.getElementById("step");
  let stepCustom = document.getElementById("stepCustom");
  let instructions = document.getElementById("instructions");
  let inputs = document.getElementById("inputs");

  // insert options into classification select
  classifications.forEach((item) => {
    classificationEl.options[classificationEl.options.length] = new Option(item['Position'], item['Classification_Code'])
  });

  // insert options into step select
  function setStepOptions() {
    let steps = [1,2,3,4,5,6,7,8,9,10];
    for (let i = stepEl.options.length - 1; i > 0; --i) {
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
  function classificationChange(e) {
    console.log('classificationChange');
    console.log(e.target);
    userClassificationCode = e.target.value;
    console.log(`userClassificationCode: ${userClassificationCode}`);
    userPosition = e.target.options[e.target.selectedIndex].text;
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
  }

  // listen for changes to step
  function stepChange(e) {
    console.log('stepChange');
    console.log(e.target);
    userStep = parseFloat(e.target.value);
    console.log(`userStep: ${userStep}`);
  }

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
    annualIncrease = userObj['annualIncrease'];
    return `<p>If you are ${userPositionWithArticle} on step ${userStep}, your current monthly base salary is $${currentMonthlyBase}. By July 2025, <strong>your monthly base salary will increase to $${projectedMonthlyBase}</strong>. This is an increase in monthly base pay of <strong> $${projectedIncrease}</strong> by the end of the contract. By the end of the contract, your annual salary will increase by <strong>$${annualIncrease}.</p>`
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

  // custom select styling

  let x, i, j, l, ll, selElmnt, a, b, c;
  /* Look for any elements with the class "custom-select": */
  x = document.getElementsByClassName("custom-select");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;

    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    // add class to fake select to match id of real select
    a.setAttribute("class", `select-selected ${selElmnt.getAttribute('id')}`);
    console.log('###############');    
    console.log(a);
    console.log(a.getAttribute("class"));
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);

    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {

      /* For each option in the original select element,
      create a new DIV that will act as an option item: */
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
          /* When an item is clicked, update the original select box,
          and the selected item: */
          let y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          console.log('s VVVVV');
          console.log(s);
          sl = s.length;
          h = this.parentNode.previousSibling;
          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              yl = y.length;
              for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          if (s.getAttribute('id') === 'classification') {
            classificationChange({ target: s });
          };
          
          if (s.getAttribute('id') ==='step') {
            stepChange({ target: s });
          };
          h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
      /* When the select box is clicked, close any other select boxes,
      and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }

  function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    let x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }

  /* If the user clicks anywhere outside the select box,
  then close all select boxes: */
  document.addEventListener("click", closeAllSelect); 

});
