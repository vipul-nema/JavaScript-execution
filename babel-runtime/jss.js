insertSort (input){
    var output =[];
    output[0] = input[0];
    var inputLength = input.lenth;

    for(var i= 1; i <inputLength; i++ ){
        for(var j = output.length -1 ; j>=0; j--){
            if(!checkFirstDegit( output[j], input[i])){
               output.splice(j,0,input[i]);
                break;
            }
        }
       
    }
    return output.join("");

    function checkFirstDegit(number1, number2){
       var digit1 = getFirstDigit(number1);
       var digit2 = getFirstDigit(number2);
       if(digit2 > digit1){
           return true;
       }else {
           return false;
       }
    }
    function getFirstDigit(number){
       while(number>10){
          var m = number %10;
           number = parseInt( number /10);    
       }
        return number;
    }
}