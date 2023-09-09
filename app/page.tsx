"use client";
import Image from "next/image";
import Image_1 from "../public/assets/img1.jpg";
import Image_2 from "../public/assets/img2.jpg";
import Image_3 from "../public/assets/img3.jpg";
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
      <div id="head">
        <div
          className="btn"
          onClick={() => {
            SetIsAboutActive(!IsAboutActive);
          }}
        >
          About
        </div>
        <div className="btn">Contact us</div>
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
          className="slider-image"
          alt="Image"
        />
        <Image
          src={Image_3}
          ref={imageRef[2]}
          className="slider-image"
          alt="Image"
        />
        <div id="words-above-images">Hello world</div>
      </div>
    </>
  );
}
function AboutUs(data: { active: boolean }) {
  return (
    <>
      <div className={data.active ? "aboutus active" : "aboutus"}></div>
    </>
  );
}
