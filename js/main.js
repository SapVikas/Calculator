var isequals=false;
function displaynum(num1) {
    if (num1=="/" || num1=="*" || num1=="+" || num1=="-"){
        isequals=false;
}
    if (isequals==false) {
        if (calcform.txt1.value != 0) {
            calcform.txt1.value = calcform.txt1.value + num1;
        } else {
            calcform.txt1.value = num1;
        }
    }else
    {
        calcform.txt1.value="";
        calcform.txt1.value = calcform.txt1.value + num1;
        isequals=false;
    }
}
function equalto() {
    isequals=true;
}
