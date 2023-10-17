
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import {useState, useEffect} from 'react'
import CallApi from '../utils/CallApi'




const Search = () => {
  const [suggestions, setSuggestions] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("All")
  const getSuggestions =  async()=>{
   await CallApi(`data/suggestions.json`).then((suggestionsResults)=>{
          setSuggestions(suggestionsResults)
    })

  }

  useEffect( ()=>{
   getSuggestions();
   
  }, [])

  const onHandleSubmit = (e)=> {
    e.preventDefault();


  }
  return (
    <div className='w-[100%]'>
      <div className='flex items-center h-10 bg-amazonclone-yellow rounded'>
        <select className='p-2 bg-gray-300 text-black border text-xs xl:text-sm' onChange={(e)=>{
          setCategory(e.target.value)
        }}>
            <option>All</option>
            <option>Deals</option>
            <option>Amazon</option>
            <option>Fashion</option>
            <option>Computer</option>
            <option>Mobiles</option>
        </select>
             <input className='flex grow items-center h-[100%] rounded-l text-black' type="text" onChange={(e)=>{
              setSearchTerm(e.target.value)
             }}  />
             <button className='w-[45px] ' onClick={onHandleSubmit}><MagnifyingGlassIcon className='h-[27px] m-auto stroke-slate-900'/></button>
      </div>

      {suggestions &&
      <div className='bg-white text-black w-full z-40 absolute'>
          {
            suggestions.filter((suggestion)=>{
              console.log("searchterm", searchTerm)
              console.log("sugesstion",suggestions)
              const currentSearchTerm = searchTerm.toLowerCase();
              const title = suggestion.title.toLowerCase();
              return (currentSearchTerm && title.startsWith(currentSearchTerm) &&
                title !== currentSearchTerm 
              )
            })
            .slice(0, 10)
            .map((suggestion )=> {
              
             return( <div key={suggestion.id} onClick={()=>{
              setSearchTerm(suggestion.title)
             }}>
                  {suggestion.title}
              </div>)
            })
          }

      </div>
    
        }

    </div>
  
  )
}

export default Search