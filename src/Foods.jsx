import style from './Foods.module.css';
import { useEffect, useState } from 'react';
function Foods(){
    const [foods, setFoods]= useState([])
    const getPizza = async()=>{
        const response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
        const data = await response.json();
        const contents = data.recipes;
        setFoods(contents)
    }
    useEffect(()=>{
       getPizza() 
    },[])
   return(
    <div className="container">
        <div className="row g-2">
            {
                foods.map(food=>
                    <div className="col-lg-3">
                        <div className="card">
                            <h2 className={`${style.fontSize}`}>{food.title.split(' ').slice(0,2).join(' ')}</h2>
                            <img src={food.image_url} className={`${style.img}`}/>
                            <p>{food.publisher}</p>
                        </div>

                    </div>
            )
            }
        </div>
    </div>
   )
}
 

export default Foods
