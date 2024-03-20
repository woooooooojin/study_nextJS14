import { URL } from "../app/(home)/page"

async function getVideos(id){
    // await new Promise((resolve)=>setTimeout(resolve,800))
    const response = await fetch(`${URL}/${id}/videos`)
    return response.json()
}

export default async function MovieVideos(params){
    const video = await getVideos(params.id)
    return(
        <>
            <h6>{JSON.stringify(video)}</h6>
        </>
    )
}