'use client'
import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./main-header-background";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";
import { usePathname } from "next/navigation";


export default function MainHeader() {

  const path =  usePathname();


  return (
    <>
    
    <MainHeaderBackground/>
        <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="A plate with food in it" priority /> Next level food
      </Link>
      <nav className={classes.nav}>
        <ul>
            <li>
              <NavLink href="/meals" className={path.startsWith('/meals') ? classes.active : undefined}> Browse Meals</NavLink>
            </li>
         
            <li>
                <NavLink href="/community"  className={path === '/community' ? classes.active : undefined}> Foodies Community</NavLink>
            </li>
        </ul>
      </nav>
    </header>
    </>

  );
}
