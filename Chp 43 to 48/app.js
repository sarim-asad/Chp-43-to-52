
//Question 1




function ClickOnLink(){
 var click = document.getElementById("link")
    alert("You are Clicking on a Link")
}
///Question 2
function wm(){
    var wm = document.getElementById("wm")
   alert( "Washing Machine\nDescription:\nDawlance 10 kg Fully Automatic Top Load Washing Machine DWT 260 ES Energy Saver Series.\nPrice:\nRs. 39,999\nThanks for buying Washing Machine")

}
function mwo(){
    var mwo = document.getElementById("mwo")
    alert("Microwave oven From Severin\nMicrowave power:\n700 W\nInner height:\n165 mm\nDescription:\nHighly heat-resistant housing\nThanks for buying MicroWave Oven")
}
function juicer(){
    var j = document.getElementById("j")
    alert("VonShef Juicer Machine for Fruit & Vegetables\nDescription:\nQuick and Easy Juicing.\nThere’s no better boost to start the day than a refreshing, healthy juice. Whether you’re a seasoned juicer, or want to discover all the benefits of juicing, this premium juicer is the tool you need to make juicing fast and easy.\nThanks for buying VonShef Juicer Machine")
}
function tv(){
 var t = document.getElementById("tv")
 alert("Multynet 43NX7 43 Inch HD Smart LED TV\nThanks for buying Multynet 43NX7 43 Inch HD Smart LED TV")
}
function blender(){
    var b = document.getElementById("blender")
    alert("Thanks for buying Blender")
}
//Question 3
function delete1(){
    var delete1 = document.getElementById("table1")
    delete1.innerHTML = "";
}

function delete2(){
    var delete2 = document.getElementById("table2")
    delete2.innerHTML = "";
}

function delete3(){
    var delete3 = document.getElementById("table3")
    delete3.innerHTML = "";
}


//Question 4
function imageOut(){
    var img = document.getElementById("imgHover")
    img.src = "./images/bg.jpg"
}
function imageOver(){
    var img = document.getElementById("imgHover")
    img.src = "./images/bitter.jpg"
}