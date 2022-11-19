import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import icon from './search.png';
import Recipe from './Recipe';
import background from './background.jpg';
import Button from './Button';


function App() {

  const MY_ID = "7ac60423";
  const MY_KEY = "a9f073d88dc74910ebcde4120f47bfde";

  const [mySearch, setMySearch] = useState('');
  const [myRecipies, setMyRecipies] = useState([]); 
  const [wordSubmitted, setWordSubmitted] = useState('potato');
  const [myFood, setMyFood] = useState([]);

  useEffect(()=> {
    const getFunction = async () =>{
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipies(data.hits); 
      console.log(data.hits) 
      setMyFood(data.hits); 
    }  
    getFunction();    
  }, [wordSubmitted]);

  const myRecipeSearch = (e) =>{
    setMySearch(e.target.value);
  }

  const finalSearch = (e) =>{
    e.preventDefault();
    setWordSubmitted(mySearch);
  }

  const chosenFood = (searchTerm) =>{
    const healthLabels = []
    myRecipies.forEach(item => {
      item.recipe.healthLabels.forEach(label => {
        if(label === searchTerm) {
          healthLabels.push(item)
        }
      })
    })
    setMyFood(healthLabels)
}

  return (
    <div className="App">
      
      <div className='container'>
        <h1>FIND A RECIPE</h1>
        <img className='background' src={background} alt='background' />
      </div>
      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' placeholder='Potato' onChange={myRecipeSearch} value={mySearch}>
          </input>
    
        <button> <img className='icon' src={icon} alt='search' /></button>
        </form>
      </div>

      <div>
        <Button filteredFood={chosenFood} />
      </div>

      <div>
        {myFood.map((element, index) =>(   
          <Recipe key={index} 
            label={element.recipe.label}
            image={element.recipe.image}
            ingredients={element.recipe.ingredientLines}
            calories={element.recipe.calories} 
            />
        ))}       
      </div>
      
     

    </div>
  );
}

export default App;