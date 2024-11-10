const clothings = [
    {
        "_id": 1,
        "name": "jacket"
    },
    {
        "_id": 2,
        "name": "t-shirt"
    },
    {
        "_id": 3,
        "name": "dress"
    },
    {
        "_id": 4,
        "name": "pants"
    },
    {
        "_id": 5,
        "name": "skirt"
    },
    {
        "_id": 6,
        "name": "shoes"
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
        "name": "0 ~ 199원",
        "array": [0, 199]
    },
    {
        "_id": 2,
        "name": "200 ~ 249원",
        "array": [200, 249]
    },
    {
        "_id": 3,
        "name": "250 ~ 279원",
        "array": [250, 279]
    },
    {
        "_id": 4,
        "name": "280 ~ 299원",
        "array": [280, 299]
    },
    {
        "_id": 5,
        "name": "300원 이상",
        "array": [300, 1500000]
    }
]

export {
    clothings,
    prices
}
