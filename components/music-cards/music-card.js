export function MusicCard({music}){
    console.log(music)
    return(
        
        
            <div id="music-card" style={styles.container}>
        <img style={styles.image} src={music.thumbnail}/>
        <h3>{music.title}</h3>
        <h5>{music.artist.map((artist)=>artist.name).join(' & ')}</h5>

    </div>
    
    );
}
const styles={
    container:{
        width:200,
        height:300,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        
       

    },
    image:{
        width:180,
        height:200,
        gap:30
    }
}