let calc = document.querySelector("#calculation_products");
let box = document.querySelector(".box_calculation");
let button = document.querySelector("#phone_menu");
let menu = document.querySelector(".hamburger_menu");

button.addEventListener('click', function(){
    menu.classList.toggle("none");
});
let dish = [
{ name: "суп", potato: 300, meat: 200},
{ name: "котлеты", meat: 500},
{ name: "блинчики", flour: 300, egg: 2}
];
calc.addEventListener('click', function() {
    let all_ingredients = [];
    const all_selects = document.querySelectorAll('.dish');
    
    all_selects.forEach(function(checkSelect) {
        if(checkSelect.selectedIndex !==0){
            let checkoption = checkSelect.value;
            all_ingredients.push(checkoption);
        }
    //box.innerHTML = all_ingredients.join(" + ");
        });
    
let totalPotato = 0;
let totalMeat = 0;
let totalFlour = 0;
let totalEgg = 0;     
    
all_ingredients.forEach(function(choose) {
    dish.forEach(function(dishes){
        if (choose === dishes.name){
        totalPotato += dishes.potato || 0;
            totalMeat += dishes.meat || 0;
            totalFlour += dishes.flour || 0;
            totalEgg += dishes.egg || 0;
        };
    });
});
    let total = [
    {name: "Картошка", variable: totalPotato, unit: "г."},
    {name: "Свинина", variable: totalMeat, unit: "г."},
    {name: "Мука", variable: totalFlour, unit: "г."},
    {name: "Яйца", variable: totalEgg, unit: "шт."}
    ];
    let CheckIngredients = [];
    total.forEach(function(ingredient){
       if(ingredient.variable !== 0) {
           CheckIngredients.push(ingredient.name + ": " + ingredient.variable + " " + ingredient.unit);
       }
    });
    if(all_ingredients.length === 0){
box.innerHTML = "Вы ничего не выбрали!";
    }
    else {
        box.innerHTML = "<span>Для закупки:<br></span>" + CheckIngredients.join("<br>");
    }
});
