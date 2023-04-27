import ReactModal from 'react-modal'
import Image from 'next/image'

 const  ImageModal = ({ isOpen, onClose, image }) =>{

  if (!image) {
    return null;
  }

  return (



    <div className='h-[700px] w-[900] bg-[#13131a] '>

    <ReactModal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false}>
      <div className=' bg-[#13131a] flex justify-center  flex-col items-center  '>
        <button className=" flex w-[50px] h-[50px  bg-[#4acd8d] rounded-xl items-start text-white" onClick={onClose}>
          close
          &times;
          
        </button>
        <Image 
        className='h-[500px]  w-[500px] rounded-xl border p-1  bg-slate-400 '
        src={image.url} alt={image.description} width={600} height={500} />
        <p className='text-white'>{image.description}</p>
      </div>

    
    </ReactModal>


    </div>
  )
}
export default  ImageModal