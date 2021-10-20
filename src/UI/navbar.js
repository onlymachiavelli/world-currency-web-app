import React from "react"
import styles from "./../../styles/Home.module.css"
import { Logo, Instagram, Twitter, Linkedin, Github } from "./SVG"
import Link from "next/link"
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Logo Width="190" Height="70" />
          </a>
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/">API</Link>
        <Link href="/">About</Link>
      </nav>
      <div className={styles.scl}>
        <Link href="">
          <a></a>
        </Link>

        <Link href="">
          <a></a>
        </Link>

        <Link href="">
          <a></a>
        </Link>

        <Link href="">
          <a></a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
