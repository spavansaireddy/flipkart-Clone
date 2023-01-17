import search from './search.png';
import cart from './cart.png';
import drop from './dropdown.png';
import React ,{ useState } from 'react';
let Header = () =>{
  let [data,setdata] = useState(false);
  let btn =() =>{
      setdata(!data)
  }
  return(
    <div className="header">
      <div className="header-style">
        <div className="flip">
          <a href="##"><img src='	https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png' alt="Flipkart" width ="100px"/></a>
          <div className='Exp'>
            <a href="##">Explore
              <span className="plus">Plus</span>
              <img src='	https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png' alt="FlipkartPlus" width="17px"/>
            </a>
          </div>
        </div> 
        <div className="search">
         <input type="search" placeholder="Search for products,brands and more" />
         <img src={search} width="20px"/>
        </div>
         <button onClick={btn}>{data? "LOGIN" : "SIGN UP"}</button>
         {
          data &&(<h1>Login </h1>)
         }
         <h4>Become a Seller</h4>
         <div className='menu'>
          <h4>More
            <img src={drop} width="20px"/>
          </h4>
         </div> 
         <div className='cart'>
          <h1><img src={cart} width="20px" />Cart</h1>
         </div> 
      </div>
    </div>
    
  )
}
export default Header;