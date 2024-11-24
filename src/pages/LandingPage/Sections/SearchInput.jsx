import React from 'react'

import { IoSearchOutline } from "react-icons/io5";


const SearchInput = ({onSearch, searchTerm}) => {
    return (
        <div className='flex'>
            <IoSearchOutline className='mt-3 text-2xl '/>
            <input 
                className='p-2 border-b-2 border-black focus:outline-none bg-transparent'
                type="text" 
                placeholder='검색어를 입력하세요'
                onChange={onSearch}
                value={searchTerm}
            />
        </div>
    )
}

export default SearchInput