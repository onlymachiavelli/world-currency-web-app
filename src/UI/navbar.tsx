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
        <Link href="https://github.com/onlymachiavelli" >
          <a target={"_blank"}>
            <Github Width="18" Height="18" />
          </a>
        </Link>

        <Link href="https://twitter.com/onlymachiavelli">
          <a target={"_blank"}>
            <Twitter Width="18" Height="18" />
          </a>
        </Link>

        <Link href="https://www.instagram.com/onlymachiavelli/">
          <a target={"_blank"}>
            <Instagram Width="18" Height="18" />
          </a>
        </Link>

        <Link href="https://www.linkedin.com/in/alaa-ddin-472a651b9/">
          <a target={"_blank"}>
            <Linkedin Width="18" Height="18" />
          </a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
