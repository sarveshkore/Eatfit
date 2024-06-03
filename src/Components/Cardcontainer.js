import Restaurantcard from "./Restaurantcart";
// import {config} from "../const/config";
import { restaurantList } from "../const/config";
// import { IMG_URL } from "../const/config";
import { useState } from "react";
import Filter from "./Filter";
const Cardcontainer=()=>{
      const [restaurantData,setrestaurantData]=useState(restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)   //nameof state variable,method to update state variable, 
      // const [count , setCount]=useState(0);

      console.log("restaurantList",
      restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      // let restaurants=restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      // let restaurants=setrestaurantData(restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

      const filterRestaurants =()=>{
        const restaurants=restaurantData.filter((restaurant)=>{
          return(
            restaurant?.info?.avgRating>=4.5
          )
        })
        setrestaurantData(restaurants);
        console.log(restaurantData);
      }


return(
  <div className="container d-flex flex-wrap  gap-4">
  <button onClick={filterRestaurants}>Top rated restaurants</button>
  {/* <h1>Count is : {count}</h1>
  <button onClick={()=>setCount(count+1)}>Increment</button> */}
  {
    // restaurants.map((restaurant)=>{
      restaurantData.map((restaurant)=>{

      return(
<Restaurantcard
          key={restaurant?.info?.id}
        // imageUrl={IMG_URL+restaurant?.info?.cloudinaryImageId}
        // title={restaurant?.info?.name}
        // starRating={restaurant?.info?.avgRating}
        // deliveryTime={restaurant?.info?.sla?.deliveryTime}
        // cuisins={restaurant?.info?.cuisines.join(", ")}
        // location={restaurant?.info?.areaName}/>
              {...restaurant?.info}/>

            )
          })

        
        }
        
        {/* <Restaurantcard/> */}
      </div>
      
    );
  }
  export default Cardcontainer;