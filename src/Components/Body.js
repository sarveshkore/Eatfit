// import Carousel from './Com'
import Carousel from "./Carousel";
import Filter from "./Filter";
import Searchbar from "./Searchbar";
import Cardcontainer from "./Cardcontainer";
export const Body =()=>{
    return(
      // <div className='text-center'>this is the body component</div>
      <>
       <div className='text-center'>this is the body component</div>
        <Carousel/>
        <div className='d-flex justify-content-between'>
          <Filter/>
          <Searchbar/>
        </div>
        <Cardcontainer/> 
      </>
    );
  }
  // export default Body;    //default import/export