import Restaurantcard from "./Restaurantcart";
const Cardcontainer=()=>{
      const restaurantData=[
        {
          imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
          title:"Chinese Yok",
          starRating:"⭐4.8",
          deliveryTime:"40-45",
          cuisins:"Chinese, Italian",
          location:"Ghatkopar W"  
        },
        {
          imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
          title:"Pizza Hut",
          starRating:"⭐4.5",
          deliveryTime:"25-30",
          cuisins:"Pizza",
          location:"BKC" 
        },
        {
          imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rmlcifdqtpoxdrdvet2s",
          title:"Achija Veg Restaurant",
          starRating:"⭐4.9",
          deliveryTime:"30-35",
          cuisins:"South Indian",
          location:"Vidyavihar"  
        },

        {
          imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/o5bbufmcjoqdfvtm7r1n",
          title:"Rangoon Zaika",
          starRating:"⭐4.7",
          deliveryTime:"25-30",
          cuisins:"Indian, Chinese",
          location:"Chinchpokli" 
        },

        {
          imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/df600a304a4c328795e659b072d93208",
          title:"Mughal Dhaba",
          starRating:"⭐4.3",
          deliveryTime:"40-45",
          cuisins:"Chinese",
          location:"Kanjurmarg"
        },

        {
          imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/230485dfde0c4916567efc8cf6ccae5e",
          title:"Quick Combos@69",
          starRating:"⭐4.9",
          deliveryTime:"45-50",
          cuisins:"North Indian, Thali",
          location:"Marol" 
        },

        {
          imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ys88tnnklqgfhzsftmqq",
          title:"Baba Falooda",
          starRating:"⭐4.5",
          deliveryTime:"30-35",
          cuisins:"Ice Cream, Beverages",
          location:"" 
        },

        {
          imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0766b54629275731447e3d64740befb2",
          title:"Tibb's Frankie",
          starRating:"⭐4.7",
          deliveryTime:"30-40",
          cuisins:"Fast Food",
          location:"Kanjurmarg" 
        },

        {
          imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
          title:"Chinese Yok",
          starRating:"⭐4.8",
          deliveryTime:"40-45",
          cuisins:"Chinese, Italian",
          location:"Ghatkopar W"  
        },
        {
          imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
          title:"Pizza Hut",
          starRating:"⭐4.5",
          deliveryTime:"25-30",
          cuisins:"Pizza",
          location:"BKC" 
        },
        {
          imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rmlcifdqtpoxdrdvet2s",
          title:"Achija Veg Restaurant",
          starRating:"⭐4.9",
          deliveryTime:"30-35",
          cuisins:"South Indian",
          location:"Vidyavihar" 
        },

        {
          imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/o5bbufmcjoqdfvtm7r1n",
          title:"Rangoon Zaika",
          starRating:"⭐4.7",
          deliveryTime:"25-30",
          cuisins:"Indian, Chinese",
          location:"Chinchpokli" 
        },

        {
          imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/df600a304a4c328795e659b072d93208",
          title:"Mughal Dhaba",
          starRating:"⭐4.3",
          deliveryTime:"40-45",
          cuisins:"Chinese",
          location:"Kanjurmarg"
        },

        {
          imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/230485dfde0c4916567efc8cf6ccae5e",
          title:"Quick Combos@69",
          starRating:"⭐4.9",
          deliveryTime:"45-50",
          cuisins:"North Indian, Thali",
          location:"Marol" 
        },

        {
          imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ys88tnnklqgfhzsftmqq",
          title:"Baba Falooda",
          starRating:"⭐4.5",
          deliveryTime:"30-35",
          cuisins:"Ice Cream, Beverages",
          location:"" 
        },

        {
          imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0766b54629275731447e3d64740befb2",
          title:"Tibb's Frankie",
          starRating:"⭐4.7",
          deliveryTime:"30-40",
          cuisins:"Fast Food",
          location:"Kanjurmarg" 
        }




        
      ]

    return(
      // <div>This is cardcontainer component</div>
      <div className="container d-flex flex-wrap  gap-4">

        {
          restaurantData.map((restaurant)=>{
            return(
              <Restaurantcard
                // {...restaurant}     
                {...restaurant}     

              // imgUrl={restaurant?.imageUrl}
                // title={restaurant?.title}
                // starRating={restaurant?.starRating}
                // deliveryTime={restaurant?.deliveryTime}
                // cuisins={restaurant?.cuisins}
                // location={restaurant?.location}
    
              
              />
            );
          })
            
          
        }

        {/* <Restaurantcard/> */}
      </div>
      
    );
  }
  export default Cardcontainer;