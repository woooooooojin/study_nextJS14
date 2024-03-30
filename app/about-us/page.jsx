import styles from "../../styles/about_us.module.css"

export default function AboutUs(){
    return <div className={styles.container}>
        <h1 className={styles.h1}>About</h1>
        <p>This is a Next.js practice clone project dedicated to showcasing various movies.</p>
        <p>Here you can find detailed information about different movies, their trailers, and much more.</p>
    </div>
}