import Image from "next/image"
import Currency from 'react-currency-formatter'
import {StarIcon} from '@heroicons/react/solid'
import { useDispatch } from "react-redux"
import {addToBasket,removeFromBasket} from '../slices/basketSlice'
function CheckoutProduct({id,title,price,rating, hasPrime ,description,category,image}) {
    
    const dispatch= useDispatch()
    const addItemToBasket = () => {
        const product ={ 
            id,
            title,
            price,
            description,
            category,
            image,
            hasPrime
        }
        dispatch(addToBasket(product))
    }
    const removeItemFromBasket = () => {
        //Remove Item from Redux
        dispatch(removeFromBasket({id}))
    }

    return (
        <div className="grid grid-cols-5 mb-5">
            <Image  

                    src={image} 
                    height={200} 
                    width={200} 
                    objectFit="contain" />
            {/* Middle */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating).fill()
                                  .map((_,i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" /> 
                    ))}
                </div>
                <p className="my-2 text-xs line-clamp-3">{description}</p>
                <Currency quantity={price} currency="GBP" />
                {hasPrime && ( 
                    <div className="flex items-center space-x-2">
                        <img loading="lazy"
                             className="w-12"
                             src="https://links.papareact.com/fdw"
                             alt=""
                        />
                        <p className="text-xs"> FREE Next-Day Delivery</p>
                    </div>
                )}
            </div>
            {/* Right add/remove buttons */}
            <div className="flex flex-col my-auto space-y-2 justify-self-end"> 
                <button className="button" onClick={addItemToBasket}>Add to Basket</button>
                <button className="button" onClick={removeItemFromBasket}>Remove From the Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
