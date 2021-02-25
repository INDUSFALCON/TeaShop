
var chaiSmallSold=0;
var chaiSmall= 0; 
document.getElementById("ChaiSmall").addEventListener("click",function(){
    
    chaiSmall = chaiSmall + 40;
    chaiSmallSold++;
    document.getElementById("tchaism").innerText = chaiSmallSold;
    revenue();
    
    });
var chaiLargeSold=0;
var chaiLarge = 0;
document.getElementById("ChaiLarge").addEventListener("click",function(){
    chaiLarge = chaiLarge + 60;
    chaiLargeSold++;
    document.getElementById("tchailg").innerText = chaiLargeSold;
    revenue();
    
    
});

var chaiSpecialSold=0;
var chaiSpecial =0;
document.getElementById("ChaiSpecial").addEventListener("click",function(){
    chaiSpecial = chaiSpecial + 80;
    chaiSpecialSold++;
    document.getElementById("tchaisp").innerText = chaiSpecialSold;
    revenue();
    
});
var coffeeSmallSold=0;
var coffeeSmall =0;
document.getElementById("CoffeeSmall").addEventListener("click",function(){
    coffeeSmall = coffeeSmall + 50;
    coffeeSmallSold++;
    document.getElementById("tcoffs").innerText = coffeeSmallSold;
    revenue();
    
});
var coffeeLargeSold=0;
var coffeelarge =0;
document.getElementById("Coffeelarge").addEventListener("click",function(){
    coffeelarge = coffeelarge + 80;
    coffeeLargeSold++;
    document.getElementById("tcofflg").innerText = coffeeLargeSold;
    revenue();
    
});
var coffeeSpecial=0;
var coffeeSpecialSold=0; 
document.getElementById("CoffeeSpecial").addEventListener("click",function(){
    coffeeSpecial = coffeeSpecial + 100;
    coffeeSpecialSold++;
    document.getElementById("tcoffsp").innerText = coffeeSpecialSold;
    revenue();
    
}); 

var totalRevenue=0;

function revenue(){
totalRevenue = chaiSmall+chaiLarge+chaiSpecial+coffeeSmall+coffeelarge+coffeeSpecial;
localStorage.setItem("localRev", totalRevenue);
document.getElementById("trgen").innerText = localStorage.localRev;
}

document.getElementById("trgen").innerText = localStorage.localRev;



function reset(){
    localStorage.localRev=0;
    totalRevenue = 0;
    document.getElementById("trgen").innerText = totalRevenue;
    chaiSmallSold=0;
    chaiLargeSold=0;
    chaiSpecialSold=0;
    coffeeSmallSold=0;
    coffeeLargeSold=0;
    coffeeSpecialSold=0; 
    document.getElementById("tchaism").innerText = "";
    document.getElementById("tchailg").innerText = "";
    document.getElementById("tchaisp").innerText = "";
    document.getElementById("tcoffs").innerText = "";
    document.getElementById("tcofflg").innerText = "";
    document.getElementById("tcoffsp").innerText = "";
}

