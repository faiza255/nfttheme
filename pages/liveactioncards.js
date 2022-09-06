import React, { useEffect, useState } from 'react'
import cardsUser from './CardsUsers'
import Placebidmodal from './placebidmodal'
import Aos from 'aos'
import "aos/dist/aos.css"
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import { motion } from 'framer-motion';

const liveactioncards = () => {
  const [openModal,setOpenModal] = useState(false)

useEffect(()=>{
Aos.init({duration:500})
},[])

  return (

<div className="liveactionscontainer mt-20">
    <h1 className='text-center text-white font-extralight text-6xl mt-2 mb-3'>Live Actions </h1>
    <p className='font-extralight text-gray-500 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, suscipit repellat 
    <br/> 

    inventore dolor quia quos molestias quae vitae? Eveniet nobis, laborum voluptas culpa libero similique.</p>

<div className="myflex flex justify-center" data-aos="fade-right">

 
{cardsUser.map((e)=>{
       return (
        <div className="mycolumn mb-10">
        <div class="nft">
        <div class='main'>
          <img class='tokenImage' src={e.Imgsrc} alt="NFT"  />
          <h2>{e.name}</h2>
          <p class='description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
          <div class='tokenInfo'>
            <div class="price">
              <ins>◘</ins>
              <p>0.031 ETH</p>
            </div>
            <div class="duration">
         
             <button onClick={()=> setOpenModal(true)}>Place bid</button>
            
            </div>
          </div>
          <hr />
          <div class='creator'>
            <div class='wrapper'>
              <img src={e.profileImg} alt="Creator" />
            </div>
            
            <p><ins>Creation of</ins><span className='text-white'> NFT</span> </p>
          </div>
        </div>
        </div>
        <Placebidmodal open={openModal} onClose={()=> setOpenModal(false)}/>
        </div>
    
     );})}
</div>

</div>



  )
}

export default liveactioncards




