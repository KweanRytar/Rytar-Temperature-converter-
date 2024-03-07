document.addEventListener("DOMContentLoaded", function (){
    let numberToConvert = document.querySelector(".input1");
    let numbertoWorkwith = Number(numberToConvert.value);
    let selectunit = document.querySelector(".input3");
    let displayResult = document.querySelector(".displayResult");
    console.log("number to convert:", numbertoWorkwith);
    console.log("selected unit index:", selectunit.value);
    if (selectunit.value === null) {
        console.error("no unit selected");
      
    } else {
        convert();
    }
selectunit.addEventListener("change", function (){
    convert();
})
});
    
    function convert (){
        let numberToConvert = document.querySelector(".input1");
    let numbertoWorkwith = Number(numberToConvert.value);
    let selectunit = document.querySelector(".input3");
    let displayResult = document.querySelector(".displayResult");
    let conversion;
        if (selectunit.value == 0){
            conversion = (((numbertoWorkwith/5)*9)+32);
         displayResult.textContent = `${numbertoWorkwith} in Celsius is ${conversion} in Farenheit`;
                  } else if(selectunit.value == 1){
            conversion = (((numbertoWorkwith-5)*5)/9);
            displayResult.textContent = `${numbertoWorkwith} in Farenheit is ${conversion} in Celsius`;
         } else if (selectunit.value == 2){
            conversion = numbertoWorkwith + 273.15;
            displayResult.textContent = `${numbertoWorkwith} in celsius is ${conversion} in kelvin`;
         }
         else if(selectunit.value == 3){
            conversion = numbertoWorkwith - 273.15;
            displayResult.textContent = `${numbertoWorkwith} in Kelvin is ${conversion} in Celsius`;
         }
         else if(selectunit.value == 4){
            conversion = (((numbertoWorkwith - 32)*5)/9)+273.15;
            displayResult.textContent = `${numbertoWorkwith} in Fahrenheit is ${conversion} in Kelvin`;
         }
         else if(selectunit.value == 5){
            conversion = 1.8 * (numbertoWorkwith -273)+32;
            displayResult.textContent = `${numbertoWorkwith} in Kelvin is ${conversion} in Fahrenheit`;
         }
    };
    
