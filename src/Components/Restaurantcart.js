import { IMG_URL } from "../const/config";


// const Restaurantcard=({imgUrl,title,starRating,deliveryTime,cuisins,location})=>{
const Restaurantcard=({cloudinaryImageId,name,avgRating,sla,cuisines,areaName})=>{
  
  // imgUrl,title,starRating,deliveryTime,cuisins,location
  // console.log("props",props);
  // const =props;
    return(
      <div className="custom-card " >
        <div className="mb-2 rounded-4">
          <img 
          src={IMG_URL+cloudinaryImageId}        // src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"
          //src={imgUrl}        // src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"
          /></div>
        <div className="px-2">
          <h5>{name}</h5>        {/* <h5>Chinese Yok</h5> */}
          {/* <h5>{title}</h5>        <h5>Chinese Yok</h5> */}
          <div className="d-flex justify-content-between">
            <div>{avgRating}</div>       {/* <div>⭐4.5</div> */}
            {/* <div>{starRating}</div>       <div>⭐4.5</div> */}
            <div>{sla?.deliveryTime}min</div>        {/* <div>40-45 min</div> */}
            {/* <div>{deliveryTime}min</div>        <div>40-45 min</div> */}
          </div>
          <div className="text-secondary">{cuisines.join(", ")}</div>       {/* <div className="text-secondary">Chinese, Italian</div> */}
          {/* <div className="text-secondary">{cuisins}</div>       <div className="text-secondary">Chinese, Italian</div> */}
          <div>{areaName}</div>       {/* <div>Ghatkopar W</div> */}
          {/* <div>{location}</div>       <div>Ghatkopar W</div> */}
        </div>

      </div>
    );
  }

  export default Restaurantcard;