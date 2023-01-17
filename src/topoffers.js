import './topoffers.css';
let Sectiondata =[
    {
        id :1,
        p:"Top Offers",
        button :"VIEW ALL",

    },
    {
        id :2,
        
        img:"https://rukminim1.flixcart.com/image/400/400/kit6hzk0-0/tracing-wheel/l/i/d/tx-rw-leather-edition-official-xbox-one-licensed-thrustmaster-original-imafygqym3zmf8j3.jpeg?q=70",
        product:"Motion Controllers",
        cost:"Up to 50% Off",
        extra:"Shop"
    },
    {
        id :3,
        img:"https://rukminim1.flixcart.com/image/400/400/kg40k280/tablet/a/m/m/lenovo-za6f0032in-original-imafwfazwxebyhvf.jpeg?q=70",
        product:"Lenovo Tabs",
        cost:"$100",
        extra:"Top Rated | Wide Selection"
    },
    {
        id :4,
        img:"https://rukminim1.flixcart.com/image/400/400/kv450280/kitchen-tool-set/n/7/q/cake-baking-set-combo-unique-impex-original-imag839sbaadhzhg.jpeg?q=70",
        product:"Kitchen Tools",
        cost:"$1",
        extra:"Skyline & More"
    },
    {
        id :5,
        img:"https://rukminim1.flixcart.com/image/400/400/kwdv3bk0/musical-toy/0/j/i/dancing-cactus-toy-talking-game-cactus-toy-120-songs-talking-original-imag92m9jaf7ndkp.jpeg?q=70",
        product:"Musical Toys",
        cost:"Min 50% Off",
        extra:"Explore Now!"
    },
    {
        id :6,
        img:"https://rukminim1.flixcart.com/image/400/400/xif0q/air-conditioner-new/q/w/v/-original-imaghrfkcdcxzeb7.jpeg?q=70",
        product:"4-in-1 Convertible ACs",
        cost:"From $423",
        extra:"with Rapid Cool Feature"
    },
    {
        id :7,
        img:"https://rukminim1.flixcart.com/image/400/400/xif0q/casserole/o/o/i/3-cthfftk202grey0001-milton-original-imagg9k8fnrpdgcu.jpeg?q=70",
        product:"Casserole Set",
        cost:"From $4",
        extra:"Milton&More"
    },
    {
        id :8,
        img:"https://rukminim1.flixcart.com/image/400/400/l1pc3gw0/air-conditioner-new/3/b/p/-original-imagd7zwtgyjumt8.jpeg?q=70",
        product:"Energy Effcient ACs",
        cost:"From 650",
        extra:"LG,IFB&More"
    }

]
let Index = () =>{
    return(
        <div className="maps">
            {
                Sectiondata.map(({id,img,product,cost,extra})=>{
                    return(
                        <div className="in-map">
                          <Section1 key={id}
                           id={id}
                           img={img}
                           product={product}
                           cost={cost}
                           extra={extra}
                            />
                        </div>
                    )
                })
            }
           
        </div>
    )
}

let Section1 = ({img,product,cost,extra}) =>{
    return(
        <div className="out-map">
          <img src={img} alt ="This is altern" width="100px"/>
          <h1>{product}</h1>
          <h2>{cost}</h2>
          <h5>{extra}</h5>

        </div>
    )
}

export default Index;
