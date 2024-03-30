"use client"
//onclick event가 있으니까 클라이언트 측

import Link from "next/link";
import styles from "../styles/movie.module.css"
import { useRouter } from "next/navigation";

export default function Movie({title, id, poster_path}) {
  const route = useRouter()
  const onClick = ()=>{
    route.push(`/movies/${id}`)
  }
  return (
    <>
        <div className={styles.movie}>
            <img src={poster_path} alt={title} onClick={onClick}/>
            <Link prefetch href={`/movies/${id}`}>{title}</Link>
        </div>
    </>
  )
}
