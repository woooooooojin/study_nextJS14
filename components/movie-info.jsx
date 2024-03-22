import { URL } from "../app/(home)/page"
import styles from "../styles/movie_info.module.css"

export async function getMovies(id){
    const response = await fetch(`${URL}/${id}`)
    return response.json()
}

export default async function MovieInfo(params) {
    const movie = await getMovies(params.id)
  return (
    <div className={styles.container}>
      <img src={movie.poster_path} alt={movie.title} className={styles.poster}/>
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️&nbsp;{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>HomePage &rarr;</a>
      </div>
    </div>
  )
}
