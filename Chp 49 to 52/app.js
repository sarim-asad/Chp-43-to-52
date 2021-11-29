function submitForm(){
    var email = document.getElementById("exampleInputEmail1")
    password = document.getElementById("exampleInputPassword1")
    if(email.value != "" && password.value != ""){
        document.write("<h1>Your Email is :</h1> " + email.value)
        document.write("<h1>Your PassWord is :</h1> " + password.value)

    }
    else{
        document.write("<h1>This Field Is Required!</h1>")
    }
}

function expandPara(){
   var para = document.getElementById("para")
   
   expand = "Zebras share the genus Equus with horses and asses, the three groups being the only living members of the family Equidae. Zebra stripes come in different patterns, unique to each individual. Several theories have been proposed for the function of these stripes, with most evidence supporting them as a deterrent for biting flies. Zebras inhabit eastern and southern Africa and can be found in a variety of habitats such as savannahs, grasslands, woodlands, shrublands, and mountainous areas."    
  para.innerHTML += expand;
  document.getElementById("p").disabled = true;
  document.getElementById("p").hidden = true;



}

//Question no 3
function table(btn) {
    var firstName = prompt("Enter 1st Student Name:");
    var secondName = prompt("Enter 2nd Student Name:");
    var thirdName = prompt("Enter 3rd Student Name:");
    var fourthName = prompt("Enter 4th Student Name:");
    document.getElementById("td1").innerHTML=firstName;
    document.getElementById("td2").innerHTML=secondName;
    document.getElementById("td3").innerHTML=thirdName;
    document.getElementById("td4").innerHTML=fourthName;
    document.getElementById("btn1").disabled=false;
    document.getElementById("btn2").disabled=false;
    document.getElementById("btn3").disabled=false;
    document.getElementById("btn4").disabled=false;
    document.getElementById("btn5").disabled=false;
    document.getElementById("btn6").disabled=false;
    document.getElementById("btn7").disabled=false;
    document.getElementById("btn8").disabled=false;
    btn.disabled=true;
    btn.hidden=true;
}
function remove1() {
    var element = document.getElementById("r1");
    element.innerHTML="";
}

function remove2() {
    var element = document.getElementById("r2");
    element.innerHTML="";
}

function remove3() {
    var element = document.getElementById("r3");
    element.innerHTML="";
}

function remove4() {
    var element = document.getElementById("r4");
    element.innerHTML="";
}


