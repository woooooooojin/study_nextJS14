import { Suspense } from "react"
import MovieInfo from "../../../../components/movie-info"
import MovieVideos from "../../../../components/movie-videos"




export default async function MovieDetail({params}) {
  return (
    <>
        <Suspense fallback={<h1>loading movie info</h1>}><MovieInfo id={params.id}/></Suspense>
        <Suspense fallback={<h1>loading movie video</h1>}><MovieVideos id={params.id}/></Suspense>
        
        
    </>
  )
}
