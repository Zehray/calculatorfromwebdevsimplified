/*
*Since I don't want to mix our style and classes with 
 our javascript lets use data attributes instead of classes.
 So, we can say data operation and essentially we can select this data attribute in our Javascript
 to say we want to select all the data operation buttons.

 *We can do same exact thing for numbers. 
 So, we'll say data number and we're going to copy 
 this down to all of different numbers we have.

 *And the reason again why I'm using data attributes 
  instead of classes because it's easier to see
  what parts of the HTML are being used by Javascript
  and which parts are being used by the actual CSS
 

  *And again I put the number class on the period (.) because 
   period(.) acts just like a number for the focus 
   of our calculator.

   *next we want to do one for our equals button
    so we'll just say data-equals. 
    We're going to have one for delete data-delete
  
  *the lastly are all clear so data-all-clear.

  *And we also need to add these to our previous operand.
   And again I don't want to use these(previous-operand, current-operand)
   classes since already used by our CSS.
   We added data-previous-operand and data-current-operand

    */

   class Calculator {
       constructor(previousOperandTextElement,currentOperandTextElement){
           this.previousOperandTextElement = previousOperandTextElement
           this.currentOperandTextElement = currentOperandTextElement
       }
   }

   const numberButtons = document.querySelectorAll('[data-number]')
   const operationButtons = document.querySelectorAll('[data-operation]')
   const aqualsButton = document.querySelector('[data-equals]')
   const deleteButton = document.querySelector('[data-delete]')
   const allClearButton = document.querySelector('[data-all-clear]')
   const previousOperandTextElement = document.querySelector('[data-previous-operand]')
   const currentOperandTextElement = document.querySelector('[data-current-operand]')

/*The first thing that we need to think about is 
how are we going to store all the information for
what's number currently typed here what number is currently typed here
what operation is it and I think easiest way to do that is to use a class
so we're going to create a calculator class 

let's go in here and create a class which is called a calculator
*/