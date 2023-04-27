import { useState,useEffect } from 'react'
import Image from 'next/image'
import ImageModal from './ImageModal'
import React from 'react'

 const ImageGrid= ({ images })=> {

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedImage, setSelectedImage] = useState()


  let filteredImages = images && images.filter(image =>
    image.description.toLowerCase().includes(searchTerm.toLowerCase())
  )




  const openModal = image => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }



 


  return (
    <div className='flex flex-col justify-center items-center gap-6'>
<input className=' rounded-lg  text-center h-[50px] w-[300px] border ' type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search images " />
<div className=' flex flex-wrap mt-[20px] gap-[26px] justify-center'>
      
    
        { filteredImages && filteredImages.map((image, id) => (
          <div className='items-center '  key={id} onClick={() => openModal(image)}>
            <Image

             className='h-[300px] w-[300px]  object-cover cursor-pointer border p-1 shadow-lg rounded-lg   '
            src={image.url} 
            height={300}
            width={300}
            
            alt={image.description}  />
        
       
            
          </div>
        ))}
      
      
    </div>
    {selectedImage && <ImageModal isOpen={true} onClose={closeModal} image={selectedImage} />}



    </div>

    
  )
}

export default ImageGrid
