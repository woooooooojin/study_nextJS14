import { URL } from "../app/(home)/page"
import styles from "../styles/movie-videos.module.css"

async function getVideos(id){
    // await new Promise((resolve)=>setTimeout(resolve,800))
    const response = await fetch(`${URL}/${id}/videos`)
    return response.json()
}

export default async function MovieVideos(params){
    const videos = await getVideos(params.id)
    return(
        <div className={styles.container}>
            {
                videos.map(video=><iframe key={video.id} title={video.name} src={`https://www.youtube.com/embed/${video.key}`} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>)
            }
        </div>
    )
}