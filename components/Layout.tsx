import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
// import Header from "./Header"


export default function Layout(props:any) {
  return (
    <div className="bg-purple w-full h-fit ">
      {/* <Header /> */}
      <NavBar  />
      <h1 className="text-red"> {props.title} </h1>
      {props.children}
      <Footer />
    </div>
  );
} 