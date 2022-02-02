

//1
   class Calculator {
       constructor(previousOperandTextElement,currentOperandTextElement){
        this.clear()            //And as soon as we create our calculator we want to call this function ( this.clear() )
                                // and this is because we want to clear all of our inputs and set them all to the default values as soon as we create a new calculator.

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
       };

       delete() { //Next we're going to have our delete function for removing a single number.
           this.currentOperand = this.currentOperand.toString().slice(0, -1)
       };
       
        appendNumber(number) { //We're going to create a function called appendNumber which is essentially 
                              //what's going to happen every single time a user clicks on a number to add to the screen. 
            if(number === '.' && this.currentOperand.includes('.') ) return //with this period(.)keeps getting added and we only want to allow our users to add one single period(.) to this output section.
            this.currentOperand =  this.currentOperand.toString() + number.toString() //we want to update this.currentOperand value and append the number that we get passed to the end of it.
                                                                                      //the reason we need to convert everything to a string is because Javascript will try to add these as actual numbers it will try to do one plus one equals two instead of one plus one equals eleven. 
       };

       chooseOperation(operation)      //Next thing we need to do is to chooseOperation function.This is what's going to happen anytime a user clicks one of 
                                        //these(÷,*,+,-,=) operations and this function needs to take the particular operation that the user selected.

       { if (this.currentOperand === ' ') return
         if(this.previousOperand !== ' '){
             this.compute()
         }
         this.operation =  operation   //this.operation is equal to the operation we passed in that way our calculator knows what operation it needs to use when it computes the value.
         this.previousOperand = this.currentOperand    //we want to set previousOperand  equal to the currentOperand.We essentially saying we're done typing the current number so we recycle that over to this previousOperand.
         this.currentOperand = '' //and we want to clear out the new currentOperand so we're going to say the current operand is going to be equal to an empty string.We're just clearing out that value
                                     
       }

       compute() //for the last two functions that we need to have those
                 // we need to have a compute function. And compute a single value for what we need to display on the calculator.
       {
           let computation
           const prev = parseFloat(this.previousOperand)
           const current = parseFloat(this.currentOperand)
           if(isNaN(prev) || isNaN(current)) return
           switch(this.operation){
               case '+' :
                   computation = prev + current
                   break
                case '-' :
                   computation = prev - current
                   break
                case '*' :
                    computation = prev * current
                    break
                case '÷' :
                        computation = prev / current
                        break  
                default: 
                return  
           }
           this.currentOperand = computation
           this.operation = undefined
           this.previousOperand = ''
       }

       updateDisplay() //we need to have a function that allows us to update our display and this is going to update the values inside of our output.
       {
           this.currentOperandTextElement.innerText = this.currentOperand
           this.previousOperandTextElement.innerText = this.previousOperand

       }
   }

   const numberButtons = document.querySelectorAll('[data-number]')
   const operationButtons = document.querySelectorAll('[data-operation]')
   const equalsButton = document.querySelector('[data-equals]')
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

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})