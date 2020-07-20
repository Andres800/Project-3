//start page with name field selected.
const nameField = document.querySelector('#name');
nameField.focus();

/***JOB ROLE SECTION ******/

//hide input field when the option "other" is selected in job role.

//select and loop through all job titles 

//show input field if job title "other" is selected in job role.

const oTitle = document.querySelector('#other-title');
oTitle.style.display = 'none';

let allTitles = document.querySelectorAll('#title');

for (let i = 0; i < allTitles.length; i++) {
    allTitles[i].addEventListener('change', (event) => {
        
        if (event.target.value == 'other') {
            oTitle.style.display = '';
        } else {
            oTitle.style.display = 'none';
        }
    });
}

/******T-SHIRT INFO SECTION **********************************************************************/

//select design themes

//select all colors

//select the parent div of all colors 

//select the colors for IloveJS theme

//select the colors for JS Puns theme

//Start the page with hidden colors until a theme is selected.

//Start the page with hidden colors until a theme is selected.

//loop through design themes

//if the theme selected is JS PUNS, loop thru ILoveJS colors and remove them.
        //then add JS PUNS colors.

//or if theme selected is ILoveJS loop thru the JS PUNS colors and remove them
            //then add the ILoveJS colors.   
//if no theme is selected remove all colors
const designs = document.querySelectorAll('#design');

const colors = document.querySelector('#color');
 
const allColorsParentDiv = document.querySelector('#colors-js-puns select');

const iLoveJSThemeColors = document.querySelectorAll('#color option:nth-child(n+4)');

const jsPunsThemeColors = document.querySelectorAll('#color option:nth-child(-n+3)');


colors.style.display = 'none';


for (let i = 0; i < designs.length; i++) {
    designs[i].addEventListener('change', (event) => {
        if (event.target.value == 'js puns') {
            colors.style.display = '';
            for (let i = 0; i < iLoveJSThemeColors.length; i++) {
                allColorsParentDiv.removeChild(iLoveJSThemeColors[i]);
                allColorsParentDiv.appendChild(jsPunsThemeColors[i]);
            }
        } else if (event.target.value == 'heart js') {
            colors.style.display = '';
            for (let i = 0; i < jsPunsThemeColors.length; i++) {
                allColorsParentDiv.removeChild(jsPunsThemeColors[i]);
                allColorsParentDiv.appendChild(iLoveJSThemeColors[i]);
            }
            
        } else if (event.target.value == 'Select Theme') {
            colors.style.display = 'none';
        }
    });
}

/***REGISTER FOR ACTIVITIES SECTION ************************************************************/

//create a div to store total cost of activities

// Keeps tract of activities costs

// loop thru all activities inputs and add event listeners to all

//create a isChecked variable to check it against activity checkboxes

//if the first checkbox is clicked and isChecked add 200 to cost.

//if the second checkbox is clicked and isChecked add 100 to cost

//disable the 4th checkbox because of time conflict and turn it gray

//if the second checkbox is unchecked enable the 4th checkbox and remove 100 from cost.

//update total cost based on selections above

//append the totalCost to the DIV created at the bottom of the activities list.

const allActivities = document.querySelectorAll('.activities input');
const activitiesDiv = document.querySelector('.activities');

let totalDiv = document.createElement('div');

let totalCost = 0;

for (let i = 0; i < allActivities.length; i++) {
    allActivities[i].addEventListener('change', (event) => {
        
        const isChecked = event.target.checked;
        
        if (event.target == allActivities[0] && isChecked) {
            totalCost += 200;
            
        } else if (event.target == allActivities[0] && !isChecked) {
            totalCost -= 200;
            
        } else if (event.target == allActivities[1] && isChecked) {
            totalCost += 100;
            
            allActivities[3].disabled = true;
            allActivities[3].parentNode.style.color = "gray";
            
        } else if (event.target == allActivities[1] && !isChecked) {
            totalCost -= 100;
            allActivities[3].disabled = false;
            allActivities[3].parentNode.style.color = "";    
        } else if (event.target == allActivities[2] && isChecked) {
            totalCost += 100;
            allActivities[4].disabled = true;
            allActivities[4].parentNode.style.color = "gray";
        } else if (event.target == allActivities[2] && !isChecked) {
            totalCost -= 100;
            allActivities[4].disabled = false;
            allActivities[4].parentNode.style.color = "";
        } else if (event.target == allActivities[3] && isChecked) {
            totalCost += 100;
            allActivities[1].disabled = true;
            allActivities[1].parentNode.style.color = "gray";
        } else if (event.target == allActivities[3] && !isChecked) {
            totalCost -= 100;
            allActivities[1].disabled = false;
            allActivities[1].parentNode.style.color = "";
        } else if (event.target == allActivities[4] && isChecked) {
            totalCost += 100;
            allActivities[2].disabled = true;
            allActivities[2].parentNode.style.color = "gray";
        } else if (event.target == allActivities[4] && !isChecked) {
            totalCost -= 100;
            allActivities[2].disabled = false;
            allActivities[2].parentNode.style.color = "";
        } else if (event.target == allActivities[5] && isChecked) {
            totalCost += 100;
        } else if (event.target == allActivities[5] && !isChecked) {
            totalCost -= 100;
        } else if (event.target == allActivities[6] && isChecked) {
            totalCost += 100;
        } else if (event.target == allActivities[6] && !isChecked) {
            totalCost -= 100;
        }
        
        totalDiv.textContent = "Total: " + totalCost;
        
        activitiesDiv.appendChild(totalDiv);
    });
}

/***PAYMENT INFO SECTION **************************************************************************/

//select paypal and bitcoin divs

//functions for hiding and showing payment options

// Make credit card as default payment selection


const allPaymentOptions = document.querySelector('#payment');
const creditCard = document.querySelector('#credit-card');

const paypalAndBitcoin = document.querySelectorAll('div p');
const paypal = paypalAndBitcoin[0];
const bitcoin = paypalAndBitcoin[1];


const hide = (payment) => payment.style.display = 'none';
const show = (payment) => payment.style.display = 'block';


allPaymentOptions.selectedIndex = '1';
hide(paypal);
hide(bitcoin);

for (let i = 0; i < allPaymentOptions.length; i++) {
    allPaymentOptions.addEventListener('change', (event) => {
        if (event.target.value == 'credit card') {
            hide(paypal);
            hide(bitcoin);
            show(creditCard);
        } else if (event.target.value == 'paypal') {
            show(paypal);
            hide(bitcoin);
            hide(creditCard);
        } else if (event.target.value == 'bitcoin') {
            show(bitcoin);
            hide(paypal);
            hide(creditCard);
        } else if (event.target.value == 'select_method') {
            hide(paypal);
            hide(bitcoin);
            hide(creditCard);
        }
    });
}

/***VALIDATIONS SECTION **************************************************************************/

//select all children within the Basic Info section

//select all children within the Activities Section

// Select email label to insert error message for "name" before it.
//also used to turn email red if needed

//Select Job Role label to insert error message for "email" before it.

//select Register for Activities title to insert error message for activities after it.

//Most used functions

//styles for the error message.
const submitButton = document.querySelector('button');
const email = document.querySelector('#mail');

const basicInfoFieldset = document.querySelectorAll('fieldset')[0];

const activitiesFieldset = document.querySelectorAll('fieldset')[2];

const emailLabel = document.querySelectorAll('fieldset :nth-child(4)')[0];

const jobRoleLabel = document.querySelectorAll('fieldset :nth-child(6)')[0];

const regForActivities = document.querySelector('.activities :nth-child(2)');


const styleError = (p) => {
    
    p.style.marginTop = "-10px";
    p.style.paddingBottom = "10px";
    p.style.paddingTop = "5px";
    p.style.background = "pink";
    p.style.color = "red";
}

const makeRed = (label) => {
    label.style.color = 'red';
}

const removeRedColor = (label) => {
    label.style.color = '';
}

//***  VALIDATE NAME*****/ 
//select Name label to turn red if error

//Check if error <p> for NAME exists and remove it. 

//create an error paragraph

//styles for the error message.
            //make name and error message red

//insert error message right on top of email: so it shows under Name:            
const nameLabel = document.querySelector('label[for=name]');

const checkName = (name) => {
        const nameError = document.querySelector('p:nth-child(4)');
        if (nameError) {
            basicInfoFieldset.removeChild(nameError);
            removeRedColor(nameLabel);
        }

        const nameInput = /^[A-Za-z//]+$/;
        if (nameInput.test(name) == false) {
            
            const p = document.createElement('p');
            p.innerText = 'Name must not be left empty and must contain only letters!';
            
            makeRed(nameLabel);
            styleError(p);
            
            basicInfoFieldset.insertBefore(p, emailLabel);
            return false;
        } else {
            return true;
        }
    }

     //***  VALIDATE EMAIL****

    //select email label to turn red in case of error

//Check if error <p> exists for EMAIL exists and remove it.

//regex to accept (letters, numbers, . and _ symbols before @ sign)
    //and to accept (letters, numbers, . and _ symbols after @ sign)
    //then accept (.) then after the (.) accept letters only from 2-4 letters long.

//create an error paragraph

//styles for the error message

//insert error message right on top of Job Role: so it shows under Email:
const checkEmail = (email) => {
    
    const basicInfoParagraphs = document.querySelectorAll('fieldset p');
    console.log(basicInfoParagraphs);
    for (var i = 0; i < basicInfoParagraphs.length; i++) {

        if (basicInfoParagraphs[i].textContent.includes('Email')) {
            basicInfoFieldset.removeChild(basicInfoParagraphs[i]);
            removeRedColor(emailLabel);
        }
    }

    const emailInput = /^[a-zA-Z0-9._]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,4}$/;
    if (emailInput.test(email) == false) {
        
        const p = document.createElement('p');
        p.innerText = 'Email must be in a "name@email.com" format!';

        makeRed(emailLabel);
        styleError(p);

        basicInfoFieldset.insertBefore(p, jobRoleLabel);
        return false;
    } else {
        return true;
    }

}

//*** /VALIDATE CHECKBOXES***

//select Register for Activities label to turn red in case of error.

//Check if error <p> exists for REG FOR ACTIVITIES exists and remove it.

//create error message

//styles for the error message.

//insert error message below Register For Activities
const regForActivitiesLabel = document.querySelector('.activities legend');

const validateCheckBox = () => {
    
const checkBoxError = document.querySelector('.activities p');
    if (checkBoxError) {
        activitiesFieldset.removeChild(checkBoxError);
        removeRedColor(regForActivitiesLabel);
    }


    for (let i = 0; i < allActivities.length; i++) {
        if (allActivities[i].checked) {
            return true;
        }
    }
    
    const p = document.createElement('p');
    p.innerText = 'Select at least one activity';
    
    makeRed(regForActivitiesLabel);
    styleError(p);

    activitiesFieldset.insertBefore(p, regForActivities);
    return false;
}

//*** VALIDATE CREDIT CARD, ZIP and SECURITY SECTION***

const creditCardNumber = document.querySelector('#cc-num');
const zipcode = document.querySelector('#zip');
const securityCode = document.querySelector('#cvv');

//Select labels to turn red in case of error
const cardNumberLabel = document.querySelector('label[for=cc-num]');
const zipCodeLabel = document.querySelector('label[for=zip]');
const cvvLabel = document.querySelector('label[for=cvv]');
const cardNumberDiv = document.querySelector('#credit-card div');




//*CARD NUMBER VALIDATION 

//Select and loop thru all <p>s inside Credit Card Section

//Remove Credit Card Number Errors:
//Check if any <p> elements exists and contains the word "Credit" and remove it

//Accept CC numbers 13 to 16 digits long

//create error message

//styles for error message

//insert error message on top of Card Number
const checkCreditCard = (card) => {
    
 const allCreditCardErrors = document.querySelectorAll('#credit-card p');
    
    for (var i = 0; i < allCreditCardErrors.length; i++) {
        if (allCreditCardErrors[i].textContent.includes('Credit')) {
            creditCard.removeChild(allCreditCardErrors[i]);
            removeRedColor(cardNumberLabel);
        }
    }

    const creditCardInput = /^\d{13,16}$/;
    if (creditCardInput.test(card) == false) {
        
        const p = document.createElement('p');
        p.innerText = 'Please Enter Credit Card number 13-16 digits long.';

        makeRed(cardNumberLabel);
        styleError(p);

        creditCard.insertBefore(p, cardNumberDiv);
        return false;
    } else {
        return true;
    }

}

//*ZIPCODE VALIDATION*//

//Select and loop thru all <p>s inside Credit Card Section\

//Remove ZipCode Errors
        //Check if any <p> elements exists and contains the word "Zip" and remove it

//Accept Zipcode 5 digits long

//create error message

//styles for error message

//insert error on top of Zip Code
const checkZip = (zip) => {

    const allCreditCardErrors = document.querySelectorAll('#credit-card p');

        for (var i = 0; i < allCreditCardErrors.length; i++) {
            if (allCreditCardErrors[i].textContent.includes('Zip')) {
                creditCard.removeChild(allCreditCardErrors[i]);
                removeRedColor(zipCodeLabel);
            }
        }

        const zipcodeInput = /^\d{5}$/;
        if (zipcodeInput.test(zip) == false) {

            const p = document.createElement('p');
            p.innerText = 'Zip Code must be 5 digits';

            makeRed(zipCodeLabel);
            styleError(p);

            creditCard.insertBefore(p, cardNumberDiv);
            return false;
        } else {
            return true;
        }

    }
    //*SECURITY CODE VALIDATION 

    //Select and loop thru all <p>s inside Credit Card Section

     //Remove Security Code errors
    //Check if any <p> elements exists and contains the word "CVV" and remove it

    //Accept security code 3 digits long

    //create error message

     //styles for error message

     //insert error on top of cvv Code
const checkCVV = (cvv) => {
    
    const allCreditCardErrors = document.querySelectorAll('#credit-card p');

    for (var i = 0; i < allCreditCardErrors.length; i++) {
        if (allCreditCardErrors[i].textContent.includes('CVV')) {
            creditCard.removeChild(allCreditCardErrors[i]);
            removeRedColor(cvvLabel);
        }
    }
    
    const securityCodeInput = /^\d{3}$/;
    if (securityCodeInput.test(cvv) == false) {
        
        const p = document.createElement('p');
        p.innerText = 'CVV Code must be 3 digits';

        makeRed(cvvLabel);
        styleError(p);
        
        creditCard.insertBefore(p, cardNumberDiv);
        return false;
    } else {
        return true;
    }
}

/***Add eventListener to Submit Button*/

//run all validations

 //run only if credit card is selected as payment option

 // check if any validations FAIL or PASS and display errors
    //Check validation status only if credit card is selected

    //Check all other validation statuses 
    //if all validations pass refresh page.
submitButton.addEventListener('click', (e) => {
    
    checkName(nameField.value);
    checkEmail(email.value);
    validateCheckBox();
    
    if (allPaymentOptions.value == 'credit card') {
        checkCreditCard(creditCardNumber.value);
        checkZip(zipcode.value);
        checkCVV(securityCode.value);
    }

    if (allPaymentOptions.value == 'credit card') {
        if (!checkCreditCard(creditCardNumber.value) ||
            !checkZip(zipcode.value) ||
            !checkCVV(securityCode.value)) {
            e.preventDefault();
        }
    }
    
    if (!checkName(nameField.value) ||
        !checkEmail(email.value) ||
        !validateCheckBox()) {
        e.preventDefault();
    }
})