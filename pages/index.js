
import ImageGrid from './components/ImageGrid'

import Link from 'next/link'
import { useRouter } from 'next/router';
import Addimages from './components/Addimages'
import { useState,useEffect } from 'react'


export default function Home() {


const [images,setimages]= useState([]);
const [isadd,setadd]=useState(false);
const [Loading,setloading] = useState(false);
const [page, setPage] = useState(1);
const [pageSize, setPageSize] = useState(10);

useEffect(() => {
  const fetchData = async () => {
    setloading(true);
    const response = await fetch(`http://localhost:3003/getimages?page=${page}&pageSize=${pageSize}`);
    const jsonData = await response.json();
     setimages(jsonData);

     setloading(false);
    
  };
  fetchData();

  
}, [isadd,page,pageSize]);



useEffect(()=>{
console.log("isaddchageone")
},[isadd])
 const addimages = ()=>{

   
    setadd(!isadd)
   

 }

 function handlePrevPage() {
  setPage(prevPage => prevPage - 1);
}

function handleNextPage() {
  setPage(prevPage => prevPage + 1);
}


  return ( 
    <>
    <div className=' relative  bg-[#13131a] items-center min-h-screen p-3 '>
    
    
          <div className='flex items-center justify-center  '> 
         
        <h1 className='text-2xl   w-[500px] bg-[#4acd8d] h-[50px] rounded-lg text-center p-2 items-center'>Image Gallery</h1>
       
          </div>



{isadd ? <Addimages isadd={isadd}  setadd={setadd} setimages={setimages} images={images} />:
<div>

    <button className='bg-[#4acd8d] w-[90px] h-[60px] rounded-md' onClick={addimages}>Add image</button>
         
        
    {Loading?<p>Loading the Images</p>:
         <div className='p-6'>
        
 
          
                <ImageGrid images={images} />

 
         </div>
         }
         <div className='flex flex-row w-[80px] h-[80px] justify-center items-center pl-[800px] gap-6'  >
  <button
  className='w-[90px] h-[50px]  bg-[#4acd8d] rounded-lg'
  disabled={page === 1} onClick={() => setPage(page - 1)}>Prev </button>


  <p className='text-white font-medium fon-[5px]'>{page}</p>
  <button
   className='w-[90px] h-[50px]  bg-[#4acd8d] rounded-lg'
  onClick={() => setPage(page + 1)}>Next </button>
  <label className='text-white' htmlFor="pageSize">Images per page:</label>
  <select id="pageSize" value={pageSize} onChange={e => setPageSize(parseInt(e.target.value))}>
    <option value={10}>10</option>
    <option value={20}>20</option>
    <option value={50}>50</option>
  </select>
  

</div>

    </div>
}
  




      
    </div>


</>
  )
}
