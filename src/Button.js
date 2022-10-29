function Button({filteredFood}){
    return(
        <div className='btn'>
            <button className="button" onClick={() => filteredFood('Vegeterian')}>Vegetarian</button>
            <button className="button" onClick={() => filteredFood('Gluten-free')}>Gluten free</button>
            <button className="button" onClick={() => filteredFood('Kosher')}>Kosher</button>
        </div>
    )
}
export default Button;