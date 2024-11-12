import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axiosInstance from '../../utils/axios';
import { useNavigate } from 'react-router-dom';
import FileUpload from '../../components/FileUpload';



// const size = [
//   {key:1, value: "XS"},
//   {key:2, value: "S"},
//   {key:3, value: "M"},
//   {key:4, value: "L"},
//   {key:5, value: "XL"},
//   {key:6, value: "XXL"},
// ]

const clothings = [
  {key:1, value: "자켓"},
  {key:2, value: "상의"},
  {key:3, value: "드레스"},
  {key:4, value: "팬츠"},
  {key:5, value: "스커트"},
  {key:6, value: "신발"},
]

const UploadProductPage = () => {

  
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: 0,
    // size: 1,
    clothings: 1,
    images: []
  })
  
  const userData = useSelector(state => state.user?.userData);
  const navigate = useNavigate();
  
    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct ((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleImages = (newImages) => {
      setProduct ((prevState) => ({
          ...prevState,
          images: newImages
      }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const body = {
            writer: userData.id,
            ...product
        }

        try {
            await axiosInstance.post('/products', body);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    }



    return (
      <section>
        <div className='text-center m-7 '>
          <h1>상품 업로드</h1>
        </div>

        <form className='mt-6' onSubmit={handleSubmit}>

          <FileUpload images={product.images} onImageChange={handleImages} />


          <div className='m-4'>
            <label htmlFor='title'>이름</label>
            <input 
            className='w-full px-4 py-2 bg-white border rounded-md'
            name="title" id="title" onChange={handleChange} value={product.title}
            />
          </div>

          <div className='m-4'>
            <label htmlFor='description'>설명</label>
            <input 
            className='w-full px-4 py-2 bg-white border rounded-md'
            name="description" id="description" onChange={handleChange} value={product.description}
            />
          </div>

          <div className='m-4'>
            <label htmlFor='price'>가격</label>
            <input 
            className='w-full px-4 py-2 bg-white border rounded-md'
            type="number" name="price" id="price" onChange={handleChange} value={product.price}
            />
          </div>

          {/* <div className='m-4'>
            <label htmlFor='size'>사이즈</label>
            <select 
              className='w-full px-4 py-2 bg-white border rounded-md'
              name="size"  id="size" onChange={handleChange} value={product.size}
            >
              {size.map(item => (
                <option key={item.key} value={item.key}>{item.value}</option>
              ))}
            </select>
          </div> */}

          <div className='m-4'>
            <label htmlFor='clothings'>종류</label>
            <select 
              className='w-full px-4 py-2 bg-white border rounded-md'
              name="clothings"  id="clothings" onChange={handleChange} value={product.clothings}
            >
              {clothings.map(item => (
                <option key={item.key} value={item.key}>{item.value}</option>
              ))}
            </select>
          </div>

          <div className="mt-4">
              <button
              type='submit'
              className='w-full px-4 py-2 text-white bg-black rounded-md hover:bg-gray-700'>
                  업로드하기
              </button>
          </div>

        </form>
      </section>
    )
}

export default UploadProductPage