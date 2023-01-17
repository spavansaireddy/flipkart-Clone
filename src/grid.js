import './grid.css';

let HeaderData =[
    {
        id :1,
        imgURL:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/47e5c31ef7dcce1e.png?q=100",
        h1 : "Top Offers"
    },
    {
        id :2,
        imgURL:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/5f8bd5669e19e724.png?q=100",
        h1 :"Mobiles & Tablets"
    },
    {
        id :3,
        imgURL:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/361d53b8725c2d2d.png?q=100",
        h1 :"Electronics"
    },
    {
        id :4,
        imgURL:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/904f3c8e7101408b.png?q=100",
        h1 :"TV & Applications"
    },
    {
        id :5,
        imgURL:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/7f7355480c6adc16.png?q=100",
        h1 :"Fashion"
    },
    {
        id :6,
        imgURL:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/f97d6138516056bc.png?q=100",
        h1 :"Beauty"
    },
    {
        id :7,
        imgURL:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/6728ed3cf145562c.png?q=100",
        h1 :"Home & Furniture"
    },
    {
        id :8,
        imgURL:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/007910082ae6355b.png?q=100",
        h1 :"Flights"
    },
    {
        id :9,
        imgURL:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/46376ceed3448aff.png?q=100",
        h1 :"Grocery"
    }
]

let Header1 = () =>{
    return(
        <div className="map">
            {
                HeaderData.map(({id,h1,imgURL})=>{
                    return(
                        <HeaderIndex  key ={id}
                         id ={id}
                         h1={h1}
                         imgURL={imgURL}/>
                    )
                })}
        </div>
    )  
}

let HeaderIndex = ({imgURL,h1}) =>{
    return(
        <div className="Image">
          <img src={imgURL} alt="This is alten" width="60px"/>
          <h5>{h1}</h5>
        </div>
    )
}
export default Header1;