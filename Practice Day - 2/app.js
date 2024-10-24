const searchIcon = document.getElementById("icon"); 
const searchInput = document.getElementById("input"); 

const searchbyName = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput.value}`)
        .then(response => response.json())
        .then(data => {
            if (data.meals === null) {  // Check if no meals are found
                document.getElementById("mealbox").innerText = "";
                let notFound = document.querySelector("#show-not-found");
                notFound.innerText = "No meal found";
                const mealDetails = document.getElementById("mealDetails"); 
                mealDetails.innerHTML = "";
            } else {
                displayMeals(data.meals);
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

searchIcon.addEventListener('click', searchbyName);

const displayMeals = (data) => {
    const mealDetails = document.getElementById("mealDetails"); 
    mealDetails.innerHTML = "";
    const notFound = document.getElementById("show-not-found");
    notFound.innerText = " ";
    const mealDiv = document.getElementById("mealbox"); 
    mealDiv.innerHTML = "";
    mealDiv.classList.add('mealDiv');

    data.forEach((meal) => {
        const eachMealDiv = document.createElement('div');
        eachMealDiv.classList.add('eachMealDiv');

        const mealInfo = `
            <img class="image" src="${meal.strMealThumb}" alt="">
            <h3 onclick="showDetails(${meal.idMeal})">${meal.strMeal}</h3>
        `;

        eachMealDiv.innerHTML = mealInfo;
        mealDiv.appendChild(eachMealDiv);
    });
}

const showDetails = (id) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => response.json())
        .then(data => {
            displayMealsDetails(data.meals[0])
            console.log(data.meals[0]);
        })
}


const displayMealsDetails = (meal) => {
    const mealDetails = document.getElementById("mealDetails"); 
    mealDetails.innerHTML = "";
    const mealDetailsBox = document.createElement('div');
    mealDetailsBox.classList.add('mealDetailsBox');
    mealDetailsBox.innerHTML = `
        <img class="image2" src="${meal.strMealThumb}">
        <p style="margin-bottom: 0px">${meal.strMeal}</p>
        <p style="margin-top: 0px">Ingredients</p>
        <ul style="margin-top: 0px">
            <li>${meal.strIngredient1}</li>
            <li>${meal.strIngredient2}</li>
            <li>${meal.strIngredient3}</li>
            <li>${meal.strIngredient4}</li>
            <li>${meal.strIngredient5}</li>
            <li>${meal.strIngredient6}</li>
        </ul>
    `
    mealDetails.appendChild(mealDetailsBox);
}
