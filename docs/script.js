$(document).ready(function () {
    var result = 0;
    var prevEntry =0;
    var operation = '';
    var currentEntry = '0' ;
    var isDecimal = false;
    // var cuurentOperation = ''; 
    // updateScreen(result);

    $(".button").on('click',function(evt){
         var buttonPressed = $(this).html();
         console.log(buttonPressed);
         
         // Add the new button value to the current text
        
            // If a decimal point is pressed
            if(buttonPressed === '.') {
            if(!isDecimal) {
                currentEntry += '.';
                isDecimal = true;
            }
        } else {
            // Append the button pressed to the current entry
            currentEntry = (currentEntry === '0') ? buttonPressed : currentEntry + buttonPressed;
        }
        
        //to add the new buttonValue to the current text
         $(".input").text(currentEntry);
          
    });

         //this stores the both entries the previous one and the current one and clears screen when an operation is clicked
     $(".operation").on('click', function() {   
        if(currentEntry !=='0'){
            prevEntry = currentEntry;
            currentEntry = '0';
            isDecimal = false; // Reset decimal flag for new number
            operation = $(this).html();//will store the curent operation value
            $(".input").text('0')
        }
     });

    //here the output will be displayed calculating on the basis of which operation is choosen
    // Event listener for the calculate button
    $(".CALCULATE").on('click', function() {
    if(prevEntry !== '' && currentEntry !== '' && operation !== '') {
        result = 0; // Initialize result

        // Perform calculation based on the operation
        if(operation === "+") {
            result = parseFloat(prevEntry) + parseFloat(currentEntry);
        } else if(operation === "-") {
            result = parseFloat(prevEntry) - parseFloat(currentEntry);
        } else if(operation === "x") {
            result = parseFloat(prevEntry) * parseFloat(currentEntry);
        } else if(operation === "/") {
            result = parseFloat(prevEntry) / parseFloat(currentEntry);
        } else if(operation === "%") {
            result = (parseFloat(currentEntry) / 100).toString();
        }

        // Display result in the input element and reset variables
        $(".input").text(result.toFixed(2));//Format result to 2 decimal places
        prevEntry = '0';
        currentEntry = result.toString();
        operation = '';
        isDecimal = false; // Reset decimal flag after calculation
    }
});

       // Event listener for the clear button
    $("#clear").on('click', function () {
        result = 0;
        currentEntry = '0';
        prevEntry = '0';
        operation = '';
        isDecimal = false; // Reset decimal flag
        $(".input").text('0');
    });

    // Event listener for the clear entry button
    $("#clearEntry").on('click', function () {
        currentEntry = '0';
        isDecimal = false; // Reset decimal flag
        $(".input").text('0');
    });

    // Event listener for the backspace button
    $("#back").on('click', function () {
        currentEntry = currentEntry.substring(0, currentEntry.length - 1);
        if (currentEntry === '') {
            currentEntry = '0';
        }
        $(".input").text(currentEntry);
    });


    
    
    
});