function addValue(){
    // get the operands value

    // parse to integer. You can use: parseInt(input, 10);

    // perform operation

    // creating the text output

    // (if you want to check) print out in console

    // change the text area

    var a =document.getElementById("input_a").value;
    var b =document.getElementById("input_b").value;
    if((a!="") && (b!="")){
        var output=parseInt(a)+(parseInt(b));
        document.mycalculator.output.value = `${a}`+`+`+`${b}`+`=`+`${output}`;
        console.log(`${a}`+`*`+`${b}`+`=`+`${output}`);

    }else{
        console.log("Please enter the values of operands");
    }
 
}


function mulValue(){
    var a =document.getElementById("input_a").value;
    var b =document.getElementById("input_b").value;
    if((a!="") && (b!="")){
        var output=parseInt(a)*(parseInt(b));
        document.mycalculator.output.value = `${a}`+`*`+`${b}`+`=`+`${output}`;
        console.log(`${a}`+`*`+`${b}`+`=`+`${output}`);
    }else{
        console.log("Please enter the values of operands");
    }
}

function divValue(){
    var a =document.getElementById("input_a").value;
    var b =document.getElementById("input_b").value;
    if((a!="") && (b!="")){
        var output=parseInt(a)/(parseInt(b));
        document.mycalculator.output.value = `${a}`+`/`+`${b}`+`=`+`${output}`;
        console.log(`${a}`+`*`+`${b}`+`=`+`${output}`);

    }else{
        console.log("Please enter the values of operands");
    }
}
