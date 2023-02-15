import React from "react";
import { Navbar } from "flowbite-react";
import { Button } from "flowbite-react";
import Image from "next/image";
import logo from '../public/img/tsg1.png'

const NavBar = () => {
  return (
    <div className="bg-purple">
     
      <Navbar fluid={true} rounded={true} className=" max-w-3xl !bg-purple">
        <Navbar.Brand href="/">
          <Image
            src= {logo}
            alt="That's so gay logo"
            width={80}
            height={80}
            blurDataURL="data:..."
            placeholder="blur" // Optional blur-up while loading
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            That's so gay
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
     
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true} className="flex md:order-2 ">
            Home
          </Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="/resources">Resources</Navbar.Link>
          <Navbar.Link href="/contribute">Contribute</Navbar.Link>
         
        </Navbar.Collapse>
      </Navbar>
      </div>
  );
};

export default NavBar;
