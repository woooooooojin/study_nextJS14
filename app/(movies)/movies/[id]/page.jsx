import { Suspense } from "react"
import MovieInfo, { getMovies } from "../../../../components/movie-info"
import MovieVideos from "../../../../components/movie-videos"


export async function generateMetadata({params}){
  const movie = await getMovies(params.id)
  return{
    title : movie.title,
  }
}//동적으로 메타데이터를 자동으로 호출 

export default async function MovieDetail({params}) {
  return (
    <>
        <Suspense fallback={<h1>loading movie info</h1>}><MovieInfo id={params.id}/></Suspense>
        <Suspense fallback={<h1>loading movie video</h1>}><MovieVideos id={params.id}/></Suspense>
        
        
    </>
  )
}
