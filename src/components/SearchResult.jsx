import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react";
import CallApi from "../utils/CallApi";
import {Link} from 'react-router-dom'
import {ProductDetails} from './'
import { GB_CURRENCY } from "../utils/Constants";


const SearchResult = () => {
    const [searchParams] = useSearchParams();
    const [product, setProduct] = useState(null);

     
const getSearchResults = ()=>{
  const searchTerms = searchParams.get("searchTerm")
  const category = searchParams.get("category")

    CallApi(`data/search.json`).then((searchResults)=>{
        const categoryResults = searchResults[category];
        if(searchTerms){
            const results = categoryResults.filter((product)=>{
                return (product.title.toLowerCase().includes(searchTerms.toLowerCase()))
            })
            setProduct(results)
        }
        else{
          setProduct(categoryResults)
        }
    })
}

  useEffect(()=>{
      getSearchResults();
  }, [searchParams])

  return (
    <div className="min-w-[1200px] max-w-[1300px] m-auto">
      {product && product.map((prod, key)=>{
          return (
            <Link key={key} to={`/product/${prod.id}`}>
                <div className="h-[250px] grid grid-cols-12 rounded mt-1 mb-1 pt-4"> 

                    <div className="col-span-2 p-4 bg-gray-200">
                        <img src={prod.image_small}/>
                    </div>

                    <div className='col-span-10 bg-ra-500 border border-gray-100'>
                        <div className="font-medium text-black p-2">
                            <ProductDetails product={prod} ratings={true}/>
                        </div>
                        <div className="text-xl xl:text-2xl pt-1">
                              {GB_CURRENCY.format(prod.price)}
                        </div>
                    </div>
            </div>
            </Link>
          
          )
      })

      }
    </div>
  )
}

export default SearchResult