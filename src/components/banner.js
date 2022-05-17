// Import tags

import React, { useEffect, useRef, useState } from 'react'
import './banner.css'
import anime from 'animejs'
import YouTube from 'react-youtube'

function Banner(props) {
  // Animation
  const animateref = useRef(null)
  useEffect(() =>{
    animateref.current = anime({
      targets: '.oops',
      scale: 1.5,
      loop:true
  
  })
  },[])


    const axios = require("axios");
    const [state, setstate] = useState()
    const [state2, setstate2] = useState()
    const [actors, setactor] = useState()
    const [Language, setlang] = useState()
    const [genre, setgenre] = useState()
    const [awards, setawards] = useState()
    const [director, setdirector] = useState()
    const [writer, setwriter] = useState()
    const [rating, setrating] = useState()

    const [available, setavail] = useState(false)

    const [id, setid] = useState()

    let movie_name = props.input

    useEffect(() =>{
      
    axios.get(`https://omdbapi.com/?t=${movie_name}&apikey=5c3132de`).then(response =>{
      if (response.data.Response !== "False"){
        setavail(true)
      }else{
        setavail(false)
      }
      setstate(response.data.Poster)
      setstate2(response.data.Plot)
      setactor(response.data.Actors)
      setlang(response.data.Language)
      setgenre(response.data.Genre)
      setawards(response.data.Awards)
      setdirector(response.data.Director)
      setwriter(response.data.Writer)
      setrating(response.data.imdbRating)
    })
    },[])

    useEffect(() =>{
      axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${movie_name}%20trailer&key=AIzaSyD-OaCm8Xp5Z2i5Zj_axzCH2rcn9g6BH-o`).then(response =>{
        setid(response.data.items[0].id.videoId)
  
      }) 
    }, [])
    if (!available){
      return(
        <div className='err'><span className='oops'>Oops!</span> It looks like you are searching for a invalid movie</div>
      )
    }
    return(
      <>
      <div className='banner'>
          <div><img src={state} alt='banner' className='banner-img'></img></div>
          <div  className='details'>
            <h2 className='h2'>Plot</h2>          
            <p className='text'>{state2}</p>
            <h2 className='h2'>Casts</h2>
            <p className='text'>{actors}</p>
            <h2 className='h2'>Awards</h2>
            <p className='text'>{awards}</p>
            <h2 className='h2'>IMDB rating: {rating}</h2>
            <p className='text dark'>Language: {Language}</p>
            <p className='text dark'>Genre: {genre}</p>
            <p className='text dark'>Director: {director}</p>
            <p className='text dark'>Writer: {writer}</p>
            <div className='video'><YouTube videoId={id} width='100%' height='100%'/></div>
          </div>
      </div> </>      
    )
}

export default Banner
