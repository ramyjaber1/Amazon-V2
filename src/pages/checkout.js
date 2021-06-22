import Image from "next/image"
import { useSelector } from "react-redux"
import CheckoutProduct from "../components/CheckoutProduct"
import Header from "../components/Header"
import { selectItems, selectTotal } from "../slices/basketSlice"
import Currency from 'react-currency-formatter'
import { useSession } from "next-auth/client"
import {loadStripe} from '@stripe/stripe-js'
import axios from "axios"

const stripePromise = loadStripe(process.env.stripe_public_key)

function checkout() {
    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)
    const [session] = useSession()

    const createCheckoutSession = async() => {
        const stripe = await stripePromise;

        // Call the Backend to create a checkout session
        const checkoutSession = await axios.post('/api/create-checkout-session',{
            items,
            email:session.user.email
        });
        
        //Redirect user/customer to Stripe Checkout
        const result = await stripe.redirectToCheckout({
            sessionId:checkoutSession.data.id
        })
        
        if(result.error) alert(result.error.message)
        
    }
    return (
        <div className="bg-gray-100">
            <Header />
            <main className="mx-auto lg:flex max-w-screen-2xl">
                {/* Left Section */}
                <div className="flex-grow m-5 shadow-sm">
                    <Image 
                          src="https://links.papareact.com/ikj"
                          width={1020}
                          height={250}
                          objectFit="contain"
                    />
                    <div className="flex flex-col p-5 space-y-10 bg-white"> 
                        <h1 className="pb-4 text-3xl border-b"> {items.length === 0 ? 'Your shopping cart is empty': "Shopping Basket"} </h1>
                    </div>
                        {items.map((item,i) => (
                            <CheckoutProduct 
                                        key={i}
                                        title={item.title}
                                        rating={item.rating}
                                        price={item.price}
                                        description={item.description}
                                        category={item.category}
                                        image={item.image}
                                        hasPrime={item.hasPrime}

                            />
                        ))}
                </div>

                {/* Right Section */}
                <div className="flex flex-col p-10 bg-white shadow-md">
                    {items.length > 0 && ( 
                        <>
                            <h2 className="whitespace-nowrap"> Subtotal ({items.length} items):
                            <span className="font-bold">
                                <Currency quantity={total} currency="GBP" />
                                </span>
                            </h2>
                            <button
                                onClick={createCheckoutSession} 
                                disabled={!session}
                                className={`button mt-2 ${!session && "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"}`}> 
                                {!session ? 'SignIn to Checkout' : "Proceed to CheckOut"}
                            </button>
                        </>
                    )}

                </div>
            </main>
            
        </div>
    )
}

export default checkout
