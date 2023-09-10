"use client";
import Image from "next/image";
import Image_1 from "../public/assets/img1.jpg";
import Image_2 from "../public/assets/img2.jpg";
import Image_3 from "../public/assets/img3.jpg";
import church_svg from "../public/Church.svg";
import contact_svg from "../public/Frame 1.svg";
import logo from "../public/logo.png";
import { RefObject, useRef, useState } from "react";
let currentImage = 0;
let initalState = false;
export default function Home() {
  const imageRef: Array<RefObject<HTMLImageElement | null>> = [
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const [IsAboutActive, SetIsAboutActive] = useState(false);
  const [IsContactActive, SetIsContactActive] = useState(false);

  function ChangeImage() {
    currentImage += 1;
    currentImage == 3 ? (currentImage = 0) : "";
    imageRef.map((itemRef) => {
      itemRef.current?.classList.toggle("active", false);
    });
    imageRef[currentImage].current?.classList.toggle("active", true);
    setTimeout(() => {
      ChangeImage();
    }, 5000);
  }
  if (!initalState) {
    initalState = true;
    ChangeImage();
  }

  return (
    <>
      <AboutUs active={IsAboutActive} />
      <ContactUs active={IsContactActive} />
      <div id="head">
        <div
          className="btn"
          onClick={() => {
            SetIsAboutActive(!IsAboutActive);
            SetIsContactActive(false);
          }}
        >
          About
        </div>
        <div
          className="btn"
          onClick={() => {
            SetIsContactActive(!IsContactActive);
            SetIsAboutActive(false);
          }}
        >
          Contact us
        </div>
      </div>
      <div id="slider-container">
        <Image
          src={Image_1}
          ref={imageRef[0]}
          className="slider-image active"
          alt="Image"
        />
        <Image
          src={Image_2}
          ref={imageRef[1]}
          className="slider-image "
          alt="Image"
        />
        <Image
          src={Image_3}
          ref={imageRef[2]}
          className="slider-image "
          alt="Image"
        />
        <div id="words-above-images">
          <Image src={logo} alt="logo" />
          <p id="c1">WELCOME TO</p>
          <p id="c2">KINGDOM EMBASSY MISSION</p>
          <p id="c3">CHURCH</p>
        </div>
      </div>
    </>
  );
}
function AboutUs(data: { active: boolean }) {
  return (
    <>
      <div className={data.active ? "aboutus active" : "aboutus"}>
        <Image src={church_svg} alt="something" />
      </div>
    </>
  );
}

function ContactUs(data: { active: boolean }) {
  return (
    <>
      <div className={data.active ? "contactus active" : "contactus"}>
        <Image src={contact_svg} className="contact" alt="something" />
      </div>
    </>
  );
}
