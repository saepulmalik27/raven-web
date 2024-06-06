import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import React, { ChangeEvent, FC } from 'react'



type TSearch = {
    value? : string
    onChange? : (e : ChangeEvent<HTMLInputElement>) => void
    attribute?: string
}
const Search : FC<TSearch> = ({value, onChange, attribute}) => {
  return (
    <div className='border border-jet-black-200 rounded-md h-10 flex items-center px-2'>
        <input placeholder='search destinasi' value={value} onChange={onChange} className='outline-none flex-grow font-bold' data-cy="input-search-tour" />
        <div className='flex-shrink-0'>
            <MagnifyingGlassIcon className='w-5 h-5'/>
        </div>
    </div>
  )
}

export default Search