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
        <div className='p-2 mb-3 bg-gray-100 rounded-md'>
            {clothings?.map(clothing => (
                <div key={clothing._id}>
                    <input
                        type='checkbox'
                        onChange={() => handleToggle(clothing._id)}
                        checked={checkedclothings.indexOf(clothing._id) === -1 ? false : true}
                    />{" "}
                    <label>{clothing.name}</label>
                </div>
            ))}
        </div>
    )
}

export default CheckBox