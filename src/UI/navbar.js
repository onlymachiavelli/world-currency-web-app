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
          <a>
            <Github Width="20" Height="20" />
          </a>
        </Link>

        <Link href="">
          <a>
            <Twitter Width="20" Height="20" />
          </a>
        </Link>

        <Link href="">
          <a>
            <Instagram Width="20" Height="20" />
          </a>
        </Link>

        <Link href="">
          <a>
            <Linkedin Width="20" Height="20" />
          </a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
