import SideNav from '../components/SideNav'
import { useContext } from 'react'
import { YoutubeContext } from '../context/youtubeContext'
import VideoCard from '../components/VideoCard'

const Feed = () => {

  const {searchResult} = useContext(YoutubeContext)

  return (
    
      <div className='flex'>
         <SideNav/>

      <div className='videos'>
      {!searchResult ?(
      <p>Loading...</p>
      ) :  (
        searchResult.map((video)=>{ 

          if(video.type!== 'video') return
          return <VideoCard videoInfo={video}/>
          })
        )}
      </div>
    </div> 
  )
}

export default Feed