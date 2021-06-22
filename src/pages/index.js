import { getSession } from "next-auth/client";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({products,session}) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
        <Header session={session} />
        <main className="mx-auto max-w-screen-2xl">
          
          <Banner />
          <ProductFeed products={products} />
        </main>
    </div>
  );
}

export async function getServerSideProps(context){
  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props:{
      products,
      session
    }
  }
}


//GET >>> https://fakestoreapi.com/products


//stripe listen --forward-to localhost:3000/api/webhook