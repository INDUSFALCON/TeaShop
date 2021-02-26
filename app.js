


var chaiSmall=0;
chaiSmall= localStorage.chaismalllocal;
var chaiLarge=0;
chaiLarge= localStorage.chailargelocal;
var chaiSpecial=0;
chaiSpecial= localStorage.chaispeciallocal;
var coffeeSmall=0;
coffeeSmall= localStorage.coffeesmalllocal;
var coffeeLarge=0;
coffeeLarge= localStorage.coffeelargelocal;
var coffeeSpecial=0;
coffeeSpecial= localStorage.coffeespeciallocal;

var totalRevenue=0;
var int;
int = localStorage.totalRev;
totalRevenue = parseInt(int);



// Chai Small
document.getElementById("chaismall").addEventListener("click",function(){
   chaiSmall++;
   localStorage.setItem("chaismalllocal",chaiSmall);
   document.getElementById("tchaiss").innerText = localStorage.chaismalllocal;

   var a = document.getElementById("tchaiss").innerText;
   if ( a === "NaN" ){
       document.getElementById("tchaiss").innerText ="Error";
       alert("reset again and continue without realoding page");
    }

    totalRevenue= totalRevenue + 40;
    localStorage.setItem("totalRev",totalRevenue);
    document.getElementById("tre").innerText = localStorage.totalRev;


});



document.getElementById("tchaiss").innerText = localStorage.chaismalllocal;
document.getElementById("tre").innerText = localStorage.totalRev;

if(localStorage.chaismalllocal === undefined){
document.getElementById("tchaiss").innerText = 0;
}
// chai small end


//chai large

document.getElementById("chailarge").addEventListener("click",function(){
    chaiLarge++;
    localStorage.setItem("chailargelocal",chaiLarge);
    document.getElementById("tchails").innerText = localStorage.chailargelocal;
 
    var a = document.getElementById("tchails").innerText;
    if ( a === "NaN" ){
        document.getElementById("tchails").innerText ="Error";
        alert("reset again and continue without realoding page");
     }
 
     totalRevenue= totalRevenue + 50;
     localStorage.setItem("totalRev",totalRevenue);
     document.getElementById("tre").innerText = localStorage.totalRev;
 
 
 });
 
 
 
 document.getElementById("tchails").innerText = localStorage.chailargelocal;
 document.getElementById("tre").innerText = localStorage.totalRev;
 
 if(localStorage.chailargelocal === undefined){
 document.getElementById("tchails").innerText = 0;
 }
//chai large end


//chai special 
document.getElementById("chaispecial").addEventListener("click",function(){
    chaiSpecial++;
    localStorage.setItem("chaispeciallocal",chaiSpecial);
    document.getElementById("tchaisps").innerText = localStorage.chaispeciallocal;
 
    var a = document.getElementById("tchaisps").innerText;
    if ( a === "NaN" ){
        document.getElementById("tchaisps").innerText ="Error";
        alert("reset again and continue without realoding page");
     }
 
     totalRevenue= totalRevenue + 60;
     localStorage.setItem("totalRev",totalRevenue);
     document.getElementById("tre").innerText = localStorage.totalRev;
 
 
 });
 
 
 
 document.getElementById("tchaisps").innerText = localStorage.chaispeciallocal;
 document.getElementById("tre").innerText = localStorage.totalRev;
 
 if(localStorage.chaispeciallocal === undefined){
 document.getElementById("tchaisps").innerText = 0;
 }
 // chai special end



 // coffee small
 document.getElementById("coffeesmall").addEventListener("click",function(){
    coffeeSmall++;
    localStorage.setItem("coffeesmalllocal",coffeeSmall);
    document.getElementById("tcoffss").innerText = localStorage.coffeesmalllocal;
    
    
    var a = document.getElementById("tcoffss").innerText;
    if ( a === "NaN" ){
        document.getElementById("tcoffss").innerText ="Error";
        alert("reset again and continue without realoding page");
     }
 
     totalRevenue= totalRevenue + 50;
     localStorage.setItem("totalRev",totalRevenue);
     document.getElementById("tre").innerText = localStorage.totalRev;
 
 
 });
 
 
 
 document.getElementById("tcoffss").innerText = localStorage.coffeesmalllocal;
 document.getElementById("tre").innerText = localStorage.totalRev;
 
 if(localStorage.coffeesmalllocal === undefined){
 document.getElementById("tcoffss").innerText = 0;
 }
 // coffee small end

 // coffee large 
 document.getElementById("coffeelarge").addEventListener("click",function(){
    coffeeLarge++;
    localStorage.setItem("coffeelargelocal",coffeeLarge);
    document.getElementById("tcoffls").innerText = localStorage.coffeelargelocal;
    
    
    var a = document.getElementById("tcoffls").innerText;
    if ( a === "NaN" ){
        document.getElementById("tcoffls").innerText ="Error";
        alert("reset again and continue without realoding page");
     }
 
     totalRevenue= totalRevenue + 80;
     localStorage.setItem("totalRev",totalRevenue);
     document.getElementById("tre").innerText = localStorage.totalRev;
 
 
 });
 
 
 
 document.getElementById("tcoffls").innerText = localStorage.coffeelargelocal;
 document.getElementById("tre").innerText = localStorage.totalRev;
 
 if(localStorage.coffeelargelocal === undefined){
 document.getElementById("tcoffls").innerText = 0;
 }
 // coffee large end

 //coffee special

 document.getElementById("coffeespecial").addEventListener("click",function(){
    coffeeSpecial++;
    localStorage.setItem("coffeespeciallocal",coffeeSpecial);
    document.getElementById("tcoffsps").innerText = localStorage.coffeespeciallocal;
    
    
    var a = document.getElementById("tcoffsps").innerText;
    if ( a === "NaN" ){
        document.getElementById("tcoffsps").innerText ="Error";
        alert("reset again and continue without realoding page");
     }
 
     totalRevenue= totalRevenue + 100;
     localStorage.setItem("totalRev",totalRevenue);
     document.getElementById("tre").innerText = localStorage.totalRev;
 
 
 });
 
 
 
 document.getElementById("tcoffsps").innerText = localStorage.coffeespeciallocal;
 document.getElementById("tre").innerText = localStorage.totalRev;
 
 if(localStorage.coffeespeciallocal === undefined){
 document.getElementById("tcoffsps").innerText = 0;
 }












 //reset

 function reset(){
    chaiSmall=0;
    document.getElementById("tchaiss").innerText = 0;

    chaiLarge=0;
    document.getElementById("tchails").innerText = 0;

    chaiSpecial=0;
    document.getElementById("tchaisps").innerText = 0;

    coffeeSmall=0;
    document.getElementById("tcoffss").innerText = 0;
    coffeeLarge=0;
    document.getElementById("tcoffls").innerText = 0;
    coffeeSpecial=0;
    document.getElementById("tcoffsps").innerText = 0;








    totalRevenue=0;
    document.getElementById("tre").innerText = 0;
     localStorage.clear();
 }

 