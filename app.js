    //Pie chart
    const data = {
        datasets: [{
          data: [1],
          backgroundColor: [
            '#333131'
          ],
          borderWidth: 0,
          weight: 2,
          cutout: "90%"
        }]
      };

      const config = {
        type: 'doughnut',
        data: data,
        options: {
            layout: {
                padding: 0
            }
        }
      };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

// How it works? Wave animation
const infoDiv = document.querySelector('.infoDiv')
const waveDiv = document.querySelector('.waveDiv')
const pusher = document.querySelector('.pusher')

const tween = gsap.to('.pusher', {duration: 1, height: "200%", ease: "expo.in"});
tween.pause()

infoDiv.addEventListener('click', () => {
   tween.play()
} )

waveDiv.addEventListener('click', () => {
    tween.reverse()
 } )

// Sound effect on click
const bubblesAudio = new Audio('bubbles.mp3')
function playAudio() {
    bubblesAudio.play()
}
infoDiv.addEventListener('click', () => {
    setTimeout(playAudio, 500)
})


// To-do list
const form = document.getElementById('form');
const input = document.getElementById('input');
const toDos = document.getElementById('toDos');



form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const toDo = input.value;
    if (toDo) {
        let today = new Date().toLocaleDateString(); // Get the current date
        const toDoEl = document.createElement("div");
        toDoEl.classList.add("toDoEl")
        toDoEl.innerHTML = `<p class="toDoText" title="Created on ${today}">${input.value}</p><div class="toDoOptions"><i class="fa-solid fa-check"></i><i class="fa-solid fa-trash-can"></i></div>`;
        toDos.prepend(toDoEl); // Prepend for first clild apend for last child --> Modern JS solution!

    }
    input.value = "";
    deleteToDo()
    completeToDo()
    saveData();
  })


function deleteToDo() {

    const lis = [...document.querySelectorAll('.fa-trash-can')];
    for (const li of lis) {
    
    li.addEventListener('click', function() {
        localStorage.clear();
   const x = this.parentElement;
   x.parentElement.remove();
   
   saveData()
   
    
    })
    
    }

}

function completeToDo() {

    const lis = [...document.querySelectorAll('.fa-check')];
    for (const li of lis) {
    li.addEventListener('click', function() {
        localStorage.clear();
    this.style.pointerEvents = "none";
    this.style.opacity = "0.3";
   const x = this.parentElement;
   const y = x.parentElement;
   toDos.append(y);
    y.firstChild.style.textDecoration = "line-through";
    y.firstChild.style.opacity = "0.3";
    saveData()
})

}
}


function saveData() {

localStorage.setItem('todoList', toDos.innerHTML );

}

function restoreData() {

toDos.innerHTML = localStorage.getItem('todoList');

}

window.onload = restoreData();
window.onload = deleteToDo();
window.onload = completeToDo();

// Recipes of the day
const body = document.querySelector('body')
const recipes = document.querySelectorAll('.recipe');
const recipesTag = document.querySelectorAll('.recipeTag');
const recipeTextContainer = document.getElementById('recipeTextContainer')
const recipeText = document.getElementById('recipeText');
const recipeImage = document.getElementById('recipeImage');
const textRecipe = document.getElementById('textRecipe')
const textIngredients = document.getElementById('textIngredients')

async function getRandomMeal() {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const respData = await resp.json();
    const randomMeal = respData.meals[0];
    addRandomMeal(randomMeal)
}

getRandomMeal()



function addRandomMeal(randomMeal) {

recipes[0].style.backgroundImage = `url("${randomMeal.strMealThumb}")`;
recipes[0].style.backgroundSize = "cover";
recipes[0].style.backgroundPosition = "center center";
recipes[0].style.backgroundRepeat = "no-repeat";
recipesTag[0].innerText = randomMeal.strMeal;
recipes[0].addEventListener('click', () => {
textIngredients.innerHTML = '';
    for (let i=1; i <= 20; i++) {
       const x = `strIngredient${i}`;
       const y = `strMeasure${i}`;
       if (randomMeal[x] !== "" && randomMeal[y] !== "") {
           const ingredient = document.createElement('li');
           ingredient.innerText = randomMeal[x] + " " + "-" + " " + randomMeal[y];
           textIngredients.appendChild(ingredient);
       }
    }

    textRecipe.innerText = randomMeal.strInstructions
    recipeImage.style.backgroundImage = `url("${randomMeal.strMealThumb}")`;
    recipeImage.style.backgroundSize = "cover";
    recipeImage.style.backgroundPosition = "center center";
    recipeImage.style.backgroundRepeat = "no-repeat";
    recipeTextContainer.style.display = 'initial';
})

}


async function getRandomMeal2() {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const respData = await resp.json();
    const randomMeal = respData.meals[0];
    addRandomMeal2(randomMeal)
}

getRandomMeal2()

function addRandomMeal2(randomMeal) {

    recipes[1].style.backgroundImage = `url("${randomMeal.strMealThumb}")`;
    recipes[1].style.backgroundSize = "cover";
    recipes[1].style.backgroundPosition = "center center";
    recipes[1].style.backgroundRepeat = "no-repeat";
    recipesTag[1].innerText = randomMeal.strMeal;
    recipes[1].addEventListener('click', () => {

    textIngredients.innerHTML = '';
    for (let i=1; i <= 20; i++) {
       const x = `strIngredient${i}`;
       const y = `strMeasure${i}`;
       if (randomMeal[x] !== "" && randomMeal[y] !== "") {
           const ingredient = document.createElement('li');
           ingredient.innerText = randomMeal[x] + " " + "-" + " " + randomMeal[y];
           textIngredients.appendChild(ingredient);
       }
    }

        textRecipe.innerText = randomMeal.strInstructions;
        recipeImage.style.backgroundImage = `url("${randomMeal.strMealThumb}")`;
        recipeImage.style.backgroundSize = "cover";
        recipeImage.style.backgroundPosition = "center center";
        recipeImage.style.backgroundRepeat = "no-repeat";
        recipeTextContainer.style.display = 'initial';
    })
    
    
    
    }

    async function getRandomMeal3() {
        const resp = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const respData = await resp.json();
        const randomMeal = respData.meals[0];
        addRandomMeal3(randomMeal)
    }
    
    getRandomMeal3()
    
    function addRandomMeal3(randomMeal) {
    
        recipes[2].style.backgroundImage = `url("${randomMeal.strMealThumb}")`;
        recipes[2].style.backgroundSize = "cover";
        recipes[2].style.backgroundPosition = "center center";
        recipes[2].style.backgroundRepeat = "no-repeat";
        recipesTag[2].innerText = randomMeal.strMeal;
        recipes[2].addEventListener('click', () => {

        textIngredients.innerHTML = '';
         for (let i=1; i <= 20; i++) {
               const x = `strIngredient${i}`;
               const y = `strMeasure${i}`;
               if (randomMeal[x] !== "" && randomMeal[y] !== "") {
                   const ingredient = document.createElement('li');
                   ingredient.innerText = randomMeal[x] + " " + "-" + " " + randomMeal[y];
                   textIngredients.appendChild(ingredient);
               }
            }

            textRecipe.innerText = randomMeal.strInstructions;
            recipeImage.style.backgroundImage = `url("${randomMeal.strMealThumb}")`;
            recipeImage.style.backgroundSize = "cover";
            recipeImage.style.backgroundPosition = "center center";
            recipeImage.style.backgroundRepeat = "no-repeat";
            recipeTextContainer.style.display = 'initial';
        })
        
        
        
        }


const closeRecipe = document.getElementById('closeRecipe');

closeRecipe.addEventListener('click', () => {
    recipeTextContainer.style.display = 'none';
})


// Overview Container --> Calories Left
const caloriesForm = document.getElementById('caloriesForm');
const caloriesInput = document.getElementById('caloriesInput')
const statisticsEl = document.querySelector('.statistics')
const leftPartOverview = document.querySelector('.leftPartOverview')
const statisticsLi = document.querySelectorAll('.statistics li')
let globalVarCalories = 0;
window.onload = function resetInput(){    
    caloriesInput.value = "";
}
caloriesForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const calorieNumber = caloriesInput.value;
    if (calorieNumber > 0) {
        globalVarCalories += parseInt(calorieNumber);
        console.log(globalVarCalories);
        caloriesInput.setAttribute('readonly', true);
        caloriesForm.style.pointerEvents = 'none';
        function backInPlace() {
            leftPartOverview.style.transform = 'translateX(100%)'
        }
        gsap.to(leftPartOverview, {duration: 0.5, xPercent: -100, ease: Power1.easeOut})
        gsap.to(statisticsEl, {display: "block", opacity: 1, onComplete: backInPlace()});
        gsap.fromTo(statisticsLi, {top:20}, { top: 0, opacity: 1, ease: Power1.easeOut, stagger: .3 }, +0.5);
    }
  })

// Overview Container -> Add a meal!

const addMealButton = document.querySelectorAll('.add')
const caloriesContainer = document.querySelectorAll('.calories')
const headerMeal = document.getElementById('headerMeal')
const addedMeals = document.getElementById('addedMeals')
let mealCalories = ''; // Holder for the calories
const statistics = document.querySelectorAll('.statistics li span')

addMealButton[0].addEventListener('click', () => {
if (caloriesInput.value > 0) { // Check if the user has actually typed in any value for the target calories
    addMealButton[0].remove()
headerMeal.remove()
caloriesContainer[0].style.justifyContent = 'space-between';
caloriesContainer[0].style.gap = '2rem';
const formMeal = document.createElement('form');
caloriesContainer[0].appendChild(formMeal);
formMeal.classList.add('formAddMeal') // Class for form
const inputMeal = document.createElement('input');
inputMeal.type = 'text';
inputMeal.placeholder = 'Add a meal!';
inputMeal.classList.add('inputMeal') // Class for input
formMeal.appendChild(inputMeal);
const addMeal = document.createElement('button');
addMeal.classList.add('addMealButton')
addMeal.type = 'submit'
addMeal.innerText = 'Add'
formMeal.appendChild(addMeal)

const changeColumnDirection = () => {
    caloriesContainer[0].style.flexDirection = 'column-reverse'
}
inputMeal.focus() // Focus the input after clicking the button.
formMeal.addEventListener('submit', (e) => {
    e.preventDefault();
    changeColumnDirection()
    addedMeals.style.display = 'flex'
    const addedMeal = document.createElement('div')
    const addedMealContainer = document.createElement('div')
    addedMealContainer.classList.add('addedMealContainer')
    addedMeals.prepend(addedMealContainer)
    addedMeal.classList.add('addedMeal')
    addedMealContainer.prepend(addedMeal);
    // Make sure the word looks nice, no matter how the user types it:
    const lowerCaseInputMeal = inputMeal.value.toLowerCase();
    const finalInputMeal = lowerCaseInputMeal[0].toUpperCase() + lowerCaseInputMeal.substring(1)
    addedMeal.innerHTML = `
    <p><i class="fa-solid fa-arrow-down"></i>${finalInputMeal}</p>
    <i class="fa-solid fa-spinner" id="spinner"></i>
    `
    sendApiRequest(inputMeal.value).then( ()=> { // Wait for the promise to execute, then add the calories!!
        if (mealCalories > 0) { // If we get a response do this:
            addedMeal.innerHTML += `
            <p>Calories: ${mealCalories}</p>
            ` 
            const spinners = [...document.querySelectorAll('.fa-spinner')]; // Hide the spinner 
            spinners.forEach(spinner => {
                spinner.style.display = 'none'
            })
            
            const listOfNutrients = document.createElement('div')
            listOfNutrients.classList.add('listOfNutrients')
            addedMealContainer.appendChild(listOfNutrients);
            listOfNutrients.innerHTML = `
            <p><i class="fa-solid fa-drumstick-bite" style='color: #5a4d7e'></i>Proteins: ${mealProteins} g</p>
            <p><i class="fa-solid fa-bowl-rice" style='color: #ebd176'></i>Carbs: ${mealCarbs} g</p>
            <p><i class="fa-solid fa-burger" style='color: #91f391'></i>Fats: ${mealFats} g</p>
            `
            // Add the statistics in the overview container:
            statistics[0].innerHTML = Math.round(parseInt(statistics[0].textContent) + mealProteins);
            statistics[1].innerHTML = Math.round(parseInt(statistics[1].textContent) + mealCarbs);
            statistics[2].innerHTML = Math.round(parseInt(statistics[2].textContent) + mealCalories);
            // Substract the number of caloroies from the globalVarCalories:
            globalVarCalories -= parseInt(mealCalories);
            caloriesInput.value = globalVarCalories;
            // Update the doughnut chart:
            myChart.data.datasets[0].data = [parseInt(statistics[0].textContent), parseInt(statistics[1].textContent), parseInt(statistics[2].textContent)];
            myChart.data.datasets[0].backgroundColor = ["#5a4d7e","#ebd176","#91f391"];
            myChart.update()
            // Add drop-down list with nutrients for all the succesfuly added meal:
            const arrowDown = [...addedMeal.children][0].firstChild;
            addedMealContainer.addEventListener('click', function() {
                arrowDown.classList.toggle('arrowDownToggler')
                    $(listOfNutrients).slideToggle({
                        duration: 200,
                        start: function() {
                        listOfNutrients.style.display = 'flex';
                        },
                        done: function() {
                            const nutrientsList = [...this.children]
                            gsap.to(nutrientsList, {duration: .3, opacity: 0.9, ease: Power1.easeOut, stagger: .1})
                        }
                      });
            })
        }

        else { // If we fail to get a response, remove the meal:
            document.querySelector(".addedMeal p").remove();
            addedMeal.style.justifyContent = 'center'
            let errorTimer = 4;
            function createErrorTimer() {
                setTimeout(function() {
                    errorTimer -= 1
                    addedMeal.innerHTML = `
                    <p class="errorMessage">Sorry, couldn't find that!<br>${errorTimer}</p>
                    `
                    if (errorTimer >= 1) {
                        createErrorTimer();
                    }
                }, 1000)
            }
            createErrorTimer()

           function deleteAddedMeal() {
                addedMeal.remove();
           }
           setTimeout(deleteAddedMeal, 5000)
        }
    })
    // Reset the input value after everything is done
    inputMeal.value = '';
  })
} else { // Do this if the input value is empty -> the user didn't submit the form
    myChart.data.datasets[0].backgroundColor = ["red"];
    myChart.update()
    function backToNormal() {
        myChart.data.datasets[0].backgroundColor = ["#333131"];
        myChart.update()
    }
    setTimeout(backToNormal, 1000)
}


})

// API for adding a meal

async function sendApiRequest(nameMeal) {
    const API_ID = '3f4ebd72'
    const API_KEY = '157f5603e9147329028008ef4878386a'
    const response = await fetch(`https://api.edamam.com/api/nutrition-data?app_id=${API_ID}&app_key=${API_KEY}&nutrition-type=cooking&ingr=100%20g%20${nameMeal}`); // TO-DO: replace dinamically the quantity + the ingredient. Right now I have manually put 100 g of rice. Obs: %20 in url means space.
    let dataAPI = await response.json()
    // console.log(data.calories) // Calories
    // console.log(data.totalNutrients.FAT.quantity) // Fats
    // console.log(data.totalNutrients.PROCNT.quantity) // Proteins
    // console.log(data.totalNutrients.CHOCDF.quantity) // Carbs
    mealCalories = dataAPI.calories;
if (!jQuery.isEmptyObject(dataAPI.totalNutrients)) {
    mealProteins = dataAPI.totalNutrients.PROCNT.quantity
    mealCarbs = dataAPI.totalNutrients.CHOCDF.quantity
    mealFats = dataAPI.totalNutrients.FAT.quantity
}

}

// Don't forget to comment the calling of the function so that you don't waste the number of free searches of the API.
// console.log(sendApiRequest("chicken"))  
