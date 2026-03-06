






async function fetcher() {
    console.log("fetcher called");
    const QUERY =document.getElementById("Input-js").value;
   const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${QUERY}`;
const response = await fetch(url);
const data = await response.json();
console.log(data);
if(!data.meals) {
    document.getElementById("display-js").innerHTML = "No recipes found!";
    return;
}else{data.meals.forEach(function(meal) {
    
    const card = document.createElement("div");
    card.className = "card";

    
    card.innerHTML = `
        <img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        <p>${meal.strArea}</p>
    `;

    const button = document.createElement("button");
    button.innerText = "View Recipe";
    button.addEventListener("click", function() {
        document.getElementById("display-js").innerHTML = `
            <h2>${meal.strMeal}</h2>
            <p>${meal.strInstructions}</p>
        `;
    });

    // Put button in card, card on page
    card.appendChild(button);
    document.getElementById("display-js").appendChild(card);
});}}







function search(){
    const Element =document.getElementById("Search-button")
    Element.addEventListener('click',fetcher)
    console.log("search initialized");
}
search();

