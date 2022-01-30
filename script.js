/*1- The first thing that we need to think about is 
   how are we going to store all the information 
   for what's number currently typed here what number is currently typed here
   what operation is it and I think easiest way to do that is to use a class.
   so we're going to create a calculator class .

   Let's go in here and create a class which is called a calculator and inside of this class
   we're going to put a constructor which is going to take all the inputs 
   for it as well as all the functions for our calculator.
   */

   /*
   so, our constructor is essentially just going to take our previous operand text element and
   our current text element and this is because 
   we need to know where to place our display text for our calculator.

2-
next we want to think about all the operations our calculator class can come perform.

*/

//1
   class Calculator {
       constructor(previousOperandTextElement,currentOperandTextElement){
           //inside of here we can set some variables for this class 
           //this essentially gives us a way to set these text elements inside of our calculator class
           this.previousOperandTextElement = previousOperandTextElement 
           this.currentOperandTextElement = currentOperandTextElement   
       }
//2-We have the clearing function, the delete function, the adding number also we have the equals function and the adding of an operation.
       clear() { //this is just going to clear out our different variables.
           this.currenOperand = ''
           this.previousOperand = ''
           this.operation = undefined //since they don't have any operation selected if we clear things
           this.clear()
       }

       delete() { //Next we're going to have our delete function for removing a single number.

       }

       appendNumber(number) { //We're going to create a function called appendNumber which is essentially 
                              //what's going to happen every single time a user clicks on a number to add to the screen. 

       }

       chooseOperation(operation)  /*Next thing we need to do is to chooseOperation function.
                                    This is what's going to happen anytime a user clicks one of 
                                    these(÷,*,+,-,=) operations and this function needs to take 
                                    the particular operation that the user selected.
                                         */
       {
       
    
       }

       compute() //for the last two functions that we need to have those
                 // we need to have a compute function. And compute a single value for what we need to display on the calculator.
       {

       }

       updateDisplay() //we need to have a function that allows us to update our display and this is going to update the values inside of our output.
       {

       }
   }

   const numberButtons = document.querySelectorAll('[data-number]')
   const operationButtons = document.querySelectorAll('[data-operation]')
   const aqualsButton = document.querySelector('[data-equals]')
   const deleteButton = document.querySelector('[data-delete]')
   const allClearButton = document.querySelector('[data-all-clear]')
   const previousOperandTextElement = document.querySelector('[data-previous-operand]')
   const currentOperandTextElement = document.querySelector('[data-current-operand]')

/*
3-let's we think about the different properties our calculator needs to store.
* 3-1- We need to know the previous operand the user entered the current operand 
that they're working on and the operation that they've if any.

* 3-2-  inside the clear function all we need to do is 
remove all of these values the first thing we can do to just this.currentOperand = ''
we just want to default this to an empty string if they cleared, 
we want to do the same thing for thiss.previousOperand = ''
*/