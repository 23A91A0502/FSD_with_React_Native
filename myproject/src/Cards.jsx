import React from "react";
import RolexImage from './assets/roleximg.webp';
import TitanImage from './assets/titanimg.webp';
import FastrackImage from './assets/fastrackimg.webp';
import SonataImage from './assets/sonataimg.webp';
import NoiseImage from './assets/noiseimg.webp';
import Sonata2 from './assets/sonata2.webp';
import Fastrack2 from './assets/fastrack2.webp';
import AppleImage from './assets/apple.webp';
import './Cards.css';

var MyCards = [
    {
       "image" : TitanImage,
       "price" : 3999,
       "brand" : "Titan"
    },
     {
       "image" : RolexImage,
       "price" : 30000,
       "brand" : "Rolex"
    },
     {
       "image" : FastrackImage,
       "price" : 2000,
       "brand" : "Fastrack"
    },
     {
       "image" : SonataImage,
       "price" : 1500,
       "brand" : "Sonata"
    },
    {
       "image" : NoiseImage,
       "price" : 1600,
       "brand" : "NoiseFit Twist Go"
    },
    {
       "image" : Sonata2,
       "price" : 1000,
       "brand" : "Sonata"
    },
    {
       "image" : Fastrack2,
       "price" : 1498,
       "brand" : "Fastrack"
    },
    {
       "image" : AppleImage,
       "price" : 46500,
       "brand" : "Apple"
    }

]
const Cards = () => {
    return <>
       <div className="parent">
        {MyCards.map((ele)=>
        <div className="card">
            <div className="logo">
                <img src={ele.image}/>
            </div>
            <div className="info">
                <div className="price">{ele.price}</div>
                <div className="brand">{ele.brand}</div>
            </div>
        </div>
        )}
       </div>
    </>
}
export default Cards;