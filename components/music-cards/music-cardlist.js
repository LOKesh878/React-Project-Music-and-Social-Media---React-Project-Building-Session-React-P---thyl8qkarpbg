'use client'
import { fetchMusicList } from "@/apis/music";
import { MusicCard } from "./music-card";
import { useCallback, useEffect } from "react";
import { useState,useRef } from "react";

export function MusicCardsList() {
    // fetchMusicList()
    const [musicList, setMusicList] = useState([])
    const page=useRef(1)
    const updateMusicList =useCallback( async () => {
        const musicList = await fetchMusicList(page.current,20)
        console.log(musicList)
        setMusicList((prev)=>{
            prev.push(musicList)
            return prev
        })
    },[page.current])
    useEffect(() => {
        updateMusicList()
    }, [])
    // const data=[{},{}];
    return (
        <div id="music-cards-container" style={styles.container}>
            {musicList.map((music) => {
                return <MusicCard key={music._id} music={music} />
            })}
            <button style={{padding:30,height:50}} onClick={()=>{
                page.current += 1
                updateMusicList()
            }}>Load More</button>
           
        </div>
    )
}
const styles={
    container:{
        display:'flex',
        flexWrap:'wrap',
        gap:20,
        padding:30
    }
}