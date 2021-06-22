import Image from "next/image"
import { useState } from "react"
import {StarIcon} from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'
import { useDispatch } from "react-redux";
import {addToBasket} from '../slices/basketSlice'
import { useRouter } from "next/router";


const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({id,title,price,description,category,image}) {
    const dispatch = useDispatch()
    const router = useRouter()
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING +1))+MIN_RATING
    )
    const [hasPrime] = useState(Math.random() < 0.5)
    
    const addItemToBaket = () => {
        const product = {
            id,
            title,
            price,
            description,
            category,
            image,
            rating,
            hasPrime
        };
        //Sending the product as an action to the REDUX store ... the basket slice
        dispatch(addToBasket(product))
    }
    
    return (

        <div  className="relative z-30 flex flex-col p-10 m-5 bg-white cursor-pointer">
            <p className="absolute text-xs italic text-gray-400 top-2 right-2">{category}</p>
            <Image onClick={() => router.push(`/productDetails:${id}`)} src={image} height={200} width={200} objectFit="contain" />
            <h4 className="my-3">{title}</h4>
            <div className="flex">
                {Array(rating).fill().map((_,i) => (
                    <StarIcon key={i} className="h-5 text-yellow-500" />

                ))}
            </div>
            <p onClick={() => router.push(`/productDetails:${id}`)} className="my-2 text-xs line-clamp-2">{description}</p>
            <div className="mb-5">
                <Currency quantity={price} currency="GBP" />
            </div>
            {hasPrime && (
                <div className="flex items-center -mt-5 space-x-2">
                    <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
                    <p className="text-xs text-gray-500"> FREE Next-day Delivery</p>
                </div>
            )}
            <button onClick={addItemToBaket} className="mt-auto button">Add to Basket</button>
        </div>
    )
}

export default Product
