import React from "react";
import { Footer } from "flowbite-react";
import Image from "next/image";
import logo from "../public/img/tsg3.png"

function MyFooter() {
  return (
    <>
      <Footer container={true} className="!bg-purple ">
        <div className="w-full text-center">
          <div className="sm:flex sm:items-center sm:justify-between text-center">
          <Image
            src= {logo}
            alt="That's so gay logo"
            width={50}
            height={50}
            blurDataURL="data:..."
            placeholder="blur" // Optional blur-up while loading
          />
            <Footer.LinkGroup>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Github</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="https://github.com/anaURL"  by="ana url" year={2023} />
        </div>
      </Footer>
    </>
  );
}
export default MyFooter;