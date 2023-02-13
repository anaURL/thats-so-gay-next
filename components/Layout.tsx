import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Header from "./Header"

export default function Layout(props: any) {
  return (
    <div className="bg-purple">
      <NavBar  />
      {props.children}
      <Footer />
    </div>
  );
}