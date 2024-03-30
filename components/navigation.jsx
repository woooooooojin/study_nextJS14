'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css"

export default function Navigation() {
    const path = usePathname();

  return (
    <nav className={styles.nav}>
        <ul>
          {path === '/' ? <li style={{color : 'red'}}><Link href="/">Home</Link></li> : <li><Link href="/">Home</Link></li>}
            
          {path === '/about-us' ? <li style={{color : 'red'}}><Link href="/about-us">About Us</Link></li> : <li><Link href="/about-us">About Us</Link></li> }
          
        </ul>
    </nav>
  )
}
