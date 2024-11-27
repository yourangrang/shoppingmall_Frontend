import React from 'react'

const CheckBox = ({ clothings, checkedclothings, onFilters }) => {
    const handleToggle = (clothingId) => {

        // 현재 누른 checkbox가 이미 누른 checkbox 인지 체크
        const currentIndex = checkedclothings.indexOf(clothingId);

        const newChecked = [...checkedclothings];

        if (currentIndex === -1) {
            newChecked.push(clothingId);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        onFilters(newChecked);

    }
    return (
        <div>
            <h2 className='font-bold '>제품 타입</h2>
            <div className='text-xs sm:text-[15px] sm:p-2 bg-white flex flex-wrap  '>
                {clothings?.map(clothing => (
                    <div key={clothing._id} className='w-1/3 py-2 sm:p-1'>
                        <input
                            type='checkbox'
                            onChange={() => handleToggle(clothing._id)}
                            checked={checkedclothings.indexOf(clothing._id) === -1 ? false : true}
                        />{" "}
                        <label>{clothing.name}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CheckBox