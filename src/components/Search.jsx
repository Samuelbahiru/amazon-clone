
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import {useState, useEffect} from 'react'
import CallApi from '../utils/CallApi'

const Search = () => {
  const [suggestions, setSuggestions] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const getSuggestions = ()=>{
    CallApi(`data/suggestions.json`).then((suggestionsResults)=>{
          setSuggestions(suggestionsResults)
    })

  }

  useEffect(()=>{
    getSuggestions();
  },  [])


  return (
    <div className='w-[100%]'>
      <div className='flex items-center h-10 bg-amazonclone-yellow rounded'>
        <select className='p-2 bg-gray-300 text-black border text-xs xl:text-sm'>
            <option>All</option>
            <option>Deals</option>
            <option>Amazon</option>
            <option>Fashion</option>
            <option>Computer</option>
            <option>Mobiles</option>
        </select>
             <input className='flex grow items-center h-[100%] rounded-l text-black' type="text"  />
             <button className='w-[45px] '><MagnifyingGlassIcon className='h-[27px] m-auto stroke-slate-900'/></button>
      </div>

      {suggestions &&
      <div>

      </div>
    
        }

    </div>
  
  )
}

export default Search