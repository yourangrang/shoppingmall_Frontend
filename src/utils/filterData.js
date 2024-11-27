const clothings = [
    {
        "_id": 1,
        "name": "자켓"
    },
    {
        "_id": 2,
        "name": "상의"
    },
    {
        "_id": 3,
        "name": "드레스"
    },
    {
        "_id": 4,
        "name": "팬츠"
    },
    {
        "_id": 5,
        "name": "스커트"
    },
    {
        "_id": 6,
        "name": "신발"
    },
]

const prices = [
    {
        "_id": 0,
        "name": "모두",
        "array": []
    },
    {   
        "_id": 1,
        "name": "만원이하",
        "array": [0, 9900]
    },
    {
        "_id": 2,
        "name": "1만원대",
        "array": [10000, 19900]
    },
    {
        "_id": 3,
        "name": "2만원대",
        "array": [20000, 29900]
    },
    {
        "_id": 4,
        "name": "3만원대",
        "array": [30000, 39900]
    },
    {
        "_id": 5,
        "name": "4만원~",
        "array": [40000, 1500000]
    }
]

export {
    clothings,
    prices
}
