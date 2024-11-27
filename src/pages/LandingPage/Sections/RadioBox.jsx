import React from 'react'

const RadioBox = ({prices, checkedPrice, onFilters}) => {
    return (
        <div>
            <h2 className='font-bold'>가격대</h2>
            <div className='text-xs sm:text-[15px] sm:p-2 mb-3 bg-white rounded-m flex flex-wrap '>
                {prices?.map(price => (
                <div key={price._id} className='w-1/3 py-2  sm:p-1'>
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