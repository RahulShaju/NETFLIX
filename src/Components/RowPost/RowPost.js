import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import Youtue from 'react-youtube'
import { API_KEY } from '../../Constants/constants';
import { imgUrl } from '../../Constants/constants';

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId,setUrlId] =useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data);
      setMovies(response.data.results)
    }).catch(error=>{
      
    })
    console.log()
    return () => {
    
    };
  }, [props]);
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
     
      autoplay: 1,
    },
  };
  const handleMovie =(id)=>{
      console.log(id)
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then(response=>{
        if(response.data.lengths!==0){
          setUrlId(response.data.results[0])
        }
        else{
          console.log("array empty")
        }
      })
  }
  return (
    <div className='row'>
        <h1 className='title'>{props.title}</h1>
      <div className="posters">
        {movies.map((obj,index)=>{
           return(
            <img onClick={()=>{
              handleMovie(obj.id)
            }} 
             className={ props.isSmall?'smallposter':'poster'}src={`${imgUrl+obj.backdrop_path}`} alt="poster" />
           )
        })}
        
        </div>
       {urlId && <Youtue videoId={urlId.key} opts={opts} />}

    </div>
  )
}

export default RowPost
