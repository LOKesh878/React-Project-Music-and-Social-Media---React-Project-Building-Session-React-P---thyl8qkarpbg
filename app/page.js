"use client"
import { musicCard } from '@/components/music-cards/music-card'
import { MusicCardsList }  from '@/components/music-cards'

import { useState } from 'react'
import { MusicPlayer } from '@/components/music-player';
 

export default function Home() {
  const [currentMusic,setCurrentMusic]=useState();
  return (
   <>
   
   < MusicCardsList setCurrentMusic={setCurrentMusic}/> 
   <MusicPlayer currentMusic={currentMusic}/>

   </>
  )
}
