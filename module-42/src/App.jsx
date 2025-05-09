import { useState } from 'react'
import './index.css'
import './App.css'
import Navbar from './components/navbar/navbar'
import Blogs from './components/blogs/blogs'

function App() {
  
  const [bookmarkRead, setBookmarkRead] = useState([])
  const [readingCount, setReadingCount] = useState(0)


  const handleBookmark = (blog)=>{
    setBookmarkRead([...bookmarkRead, blog])
  }
  
  const handleMarkasRead =(time, id)=>{
    const maintime = readingCount + time;
    setReadingCount(maintime)
    handleRemoveFromBookmark(id)
    
       
  }
 
  const handleRemoveFromBookmark =(id)=>{

    


    console.log(id)

    

      const reamainingBookMarked = bookmarkRead.filter((mark)=> mark.id !== id)
      console.log(reamainingBookMarked)
      setBookmarkRead(reamainingBookMarked)
  }

  return (
    <>
       <Navbar></Navbar>
       

       <div className='main-container flex text-center'>

        <div className='left-container w-[70%]'>
          <h4>Blogs</h4>
        <Blogs handleBookmark={handleBookmark} handleMarkasRead={handleMarkasRead} ></Blogs>
        </div>
          
        <div className='right-container w-[30%]'>
          <h2>reading time: {readingCount}</h2>
          <h3>bookmark count :{bookmarkRead.length} </h3>

          {
            bookmarkRead.map(mark=> <p key={mark.id}>  {mark.title}</p>)
          }
        </div>
        
       </div>
      
    </>
  )
}

export default App
