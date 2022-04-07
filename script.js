
const btn = document.getElementById("change");
const mainSection = document.getElementById("mainSection");

async function RandomMeal(){
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const data = await resp.json();
    //console.log(data);
    //console.log(data.meals[0]["strMeal"]);
    const imglink = data.meals[0]["strMealThumb"];
    //console.log(imglink);
    const imgresp = await fetch(imglink);
    const mealName = data.meals[0]["strMeal"];
    const mealInstructions = data.meals[0]["strInstructions"];

    ingredients = [];

    for(let i = 1; i<=20; i++){
        let IngName = data.meals[0]["strIngredient"+i];
        let IngMeasure = data.meals[0]["strMeasure"+i];
        if(IngName){
            ingredients.push(`${IngName} / ${IngMeasure}`);
        }
    }


    const mainDiv = document.createElement("Div");
    mainDiv.classList.add("main")
    mainDiv.innerHTML = `
    <img src="${imglink}">

    <div class="rightSection">
        <div class="foodName">
            <h1>${mealName}</h1> 
        </div>
    <div class="ingredients">
        <span class="igname"><h2>Ingredients</h2></span>
        <ul>
            ${ingredients.map((ing) => `<li>${(ing)}</li>`).join("")}
        </ul>
    </div>
    <div class="instructions">
        <span class="Iname"><h2>Instructions</h2></span>
        ${mealInstructions}
    </div>
    </div>
    
    `
    mainSection.appendChild(mainDiv)
}

btn.addEventListener("click", () => {
    //console.log("clickec")
    
    mainSection.innerHTML = '';
    
    RandomMeal();
});


RandomMeal();