
function Recipe({label, image, ingredients, calories}){

    return(
        <div className='card'>
            <div className="container">
                <h2>{label}</h2>
            </div>
            <div className="container">
                <img className="foodImage" src={image} alt='food' />
            </div>
            
            <ul className="list">
                <h3>Ingredients:</h3>
                {ingredients.map((ingredient, index) =>(
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            
            <div className="container">
                <p>Calories: {calories.toFixed()}</p>
            </div>
            
        </div>

    )

}

export default Recipe;