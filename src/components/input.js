import React, { useEffect, useState, useRef } from 'react'
import './input.css'
import { FaSistrix } from "react-icons/fa";
import Banner from './banner';
import anime from 'animejs';

function Input() {
    const [input, setinput] = useState("")
    const [enter, setstate] = useState(false);

    const animationRef = useRef(null);
    useEffect(() =>{
        animationRef.current = anime.timeline({
            duration:1500,
            delay:1000,
        })
        animationRef.current.add({
            targets: '.hero-tag',
            translateY: [-350,0],
        })      
    }, [])
    
  return (
      <>
    <div className='hero'>
        <h1 className='hero-tag'><span className='G' id='G'>G</span>ETFLIX</h1>
        <p className='sub-hero'>Get details of any film with a click of a button <FaSistrix /></p>   

        <p><svg width="85" height="34" viewBox="0 0 85 34" className='svg' fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 8.99999C1 8.99999 11 1.99999 26 0.999993C41 -7.36117e-06 38.1246 20.8031 51 24C63.0453 26.9908 82 17 82 17" stroke="white"/>
    <path d="M64 8.78889L82.3416 17.4811" stroke="white" strokeLinecap="round"/>
    <path d="M81.7177 18L73 33" stroke="white" stroke-linecap="round"/>
    </svg> <input placeholder='Eg: Squid Game' autoComplete='off' className='text-field' value={input} onChange={(e) =>{
        setinput(e.target.value)}} onKeyDown={(e) =>{
            if (e.key === 'Enter'){
                setstate(true)
            }else{
                setstate(false)
            }
        }}></input></p> 
        <div> <button className='button-submit' onClick={() =>{
            setstate(true)
        }}>Submit</button></div>
    </div>
    {enter && <Banner input={input}/>}

    </>
  )
}

export default Input