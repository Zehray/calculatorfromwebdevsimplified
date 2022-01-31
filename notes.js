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

   
   
   
   *We need to know the previous operand the user entered the current operand 
    that they're working on and the operation that they've if any.

    inside the clear function all we need to do is remove all of these values.

    the first thing we can do to just say this.currentOperand = '' which is just going to be what is defined by this number right here. We just want to default this to an empty string if they cleared.

    And Lastly we want to change the operation to be undefined since they don't have any operation selected if we clear things.

    And as soon as we create our calculator we want to call this function ( this.clear() ) and this is because we want to clear all of our inputs and set them all to the default values as soon as we create a new calculator.

    So now that we know all the different things that our calculator can do defined bu our functions and all the different variables that it can hold.

    */
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

    /*
3-let's we think about the different properties our calculator needs to store.
* 3-1- We need to know the previous operand the user entered the current operand 
that they're working on and the operation that they've if any.

* 3-2-  inside the clear function all we need to do is 
remove all of these values 

the first thing we can do to just say this.currentOperand = '' 
which is just going to be what is defined by this number right here.
 We just want to default this to an empty string if they cleared.
 And we want to do same thin for previousOperand again defaulted to an empty string.

*/

// let's work on hooking up all of our different variables and making them operate on our calculator

//First thing we need to do is create a calculator,we're trying to set this equal to a new calculator
//which is how you define classes you say new followed by the class name and we pass everythin from our constructor into it
//in our case we need to pass it the previousOperandTextElement and currentOperantTextElement
