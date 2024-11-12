import React from 'react'

const RadioBox = ({prices, checkedPrice, onFilters}) => {
    return (
        <div>
            <h2 className='font-bold'>가격대</h2>
            <div className='p-2 mb-3 bg-gray-100 rounded-m flex flex-wrap h-20 '>
                {prices?.map(price => (
                <div key={price._id} className='w-1/3 p-1'>
                    <input 
                        checked={checkedPrice === price.array}
                        onChange={e => onFilters(e.target.value)}
                        type="radio"
                        id={price._id}
                        value={price._id}
                    />
                    {" "}
                    <label htmlFor={price._id}>{price.name}</label>
                </div>
                ))}
            </div>
        </div>
    )
}

export default RadioBox