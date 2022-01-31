

//1
   class Calculator {
       constructor(previousOperandTextElement,currentOperandTextElement){
        this.clear()
           //inside of here we can set some variables for this class 
           //this essentially gives us a way to set these text elements inside of our calculator class
           this.previousOperandTextElement = previousOperandTextElement 
           this.currentOperandTextElement = currentOperandTextElement   
       }
//2-We have the clearing function, the delete function, the adding number also we have the equals function and the adding of an operation.
       clear() { //this is just going to clear out our different variables.
           this.currentOperand = ''
           this.previousOperand = ''
           this.operation = undefined //since they don't have any operation selected if we clear things
            //And as soon as we create our calculator we want to call this function ( this.clear() )
                        // and this is because we want to clear all of our inputs and set them all to the default values as soon as we create a new calculator.
       };

       delete() { //Next we're going to have our delete function for removing a single number.

       };
       
        appendNumber(number) { //We're going to create a function called appendNumber which is essentially 
                              //what's going to happen every single time a user clicks on a number to add to the screen. 

            this.currentOperand =  this.currentOperand.toString() + number.toString()

       };

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
           this.currentOperandTextElement.innerText = this.currentOperand

       }
   }

   const numberButtons = document.querySelectorAll('[data-number]')
   const operationButtons = document.querySelectorAll('[data-operation]')
   const aqualsButton = document.querySelector('[data-equals]')
   const deleteButton = document.querySelector('[data-delete]')
   const allClearButton = document.querySelector('[data-all-clear]')
   const previousOperandTextElement = document.querySelector('[data-previous-operand]')
   const currentOperandTextElement = document.querySelector('[data-current-operand]')


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})