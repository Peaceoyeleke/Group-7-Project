const recipes = [
    { name: "Pasta Carbonara", ingredients: ["spaghetti", "eggs", "bacon", "Parmesan cheese", "black pepper"] },
    { name: "Chicken Curry", ingredients: ["chicken", "curry powder", "coconut milk", "onion", "garlic"] },
    { name: "Caprese Salad", ingredients: ["tomato", "mozzarella cheese", "fresh basil", "balsamic vinegar", "olive oil"] },
    {name: "Jollof Rice", ingredients:["Rice","Tomato paste","Onions","Red bell peppers","Scotch bonnet peppers (optional)","Chicken or beef stock","Vegetable oil","Seasoning cubes","Salt","Various spices (such as curry powder, thyme, paprika)","Mixed vegetables (optional)"]},
    { name: "Egusi Soup", ingredients:["Ground melon seeds (egusi)","Assorted meats (beef, goat meat, tripe)","Stockfish","Dry fish","Palm oil", "Onions", "Fresh or dried bitter leaves or spinach", "Seasoning cubes", "Salt", "Ground crayfish", "Pepper"]},
    { name: "Coconut Rice", ingredients:[ "Rice", "Coconut milk or grated coconut", "Onions", "Red bell peppers", "Scotch bonnet peppers (optional)", "Chicken or beef stock", "Vegetable oil", "Seasoning cubes", "Salt", "Various spices (such as curry powder, thyme, paprika)", "Mixed vegetables (optional)"]},
    { name: "Pepper Soup", ingredients:["Assorted meats (chicken, goat meat, fish)", "Pepper soup spice mix", "Onions", "Garlic", "Ginger", "Scotch bonnet peppers", "Seasoning cubes", "Salt", "Water", "Optional: vegetables like scent leaves or uziza leaves"]},
    { name: "Classic Cheeseburger", ingredients:[ "Ground beef", "Hamburger buns", "Cheese slices", "Lettuce", "Tomato slices", "Onion slices", "Pickles", "Ketchup", "Mustard", "Salt", "Black pepper"]},
    { name: "Southern Fried Chicken", ingredients:["Chicken pieces (legs, thighs, breasts)", "Buttermilk", "Flour", "Salt", "Black pepper", "Paprika", "Garlic powder", "Onion powder", "Cayenne pepper", "Vegetable oil for frying"]},
    { name: "Macaroni and Cheese", ingredients:[ "Elbow macaroni", "Cheddar cheese", "Milk", "Butter", "Flour", "Salt", "Black pepper", "Breadcrumbs (optional)"]},
    { name: "Indian Chicken Tikka Masala", ingredients:["Chicken thighs or breasts", "Yogurt", "Lemon juice", "Ginger", "Garlic", "Garam masala", "Turmeric", "Cumin", "Coriander", "Cayenne pepper", "Tomato sauce", "Cream", "Butter", "Salt", "Black pepper"]},
    { name: "Suya", ingredients:["Beef or chicken skewers", "Suya spice mix (made from ground peanuts, ginger, paprika, cayenne pepper, salt, and other spices)", "Onion slices", "Tomato slices", "Cabbage or lettuce leaves (for garnish)"]},
];

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const recipesContainer = document.getElementById('recipesContainer');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm) || recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm)));
    displayRecipes(filteredRecipes);
});

function displayRecipes(recipes) {
    recipesContainer.innerHTML = '';
    recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        const nameElement = document.createElement('h3');
        nameElement.textContent = recipe.name;
        const ingredientsElement = document.createElement('p');
        ingredientsElement.textContent = "Ingredients: " + recipe.ingredients.join(", ");
        recipeDiv.appendChild(nameElement);
        recipeDiv.appendChild(ingredientsElement);
        recipesContainer.appendChild(recipeDiv);
    });
}

  