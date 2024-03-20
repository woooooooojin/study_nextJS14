import { URL } from "../app/(home)/page"

async function getMovies(id){
    // await new Promise((resolve)=>setTimeout(resolve,800))
    const response = await fetch(`${URL}/${id}`)
    return response.json()
}

export default async function MovieInfo(params) {
    const movie = await getMovies(params.id)
  return (
    <>
        <h4>{JSON.stringify(movie)}</h4>
    </>
  )
}
