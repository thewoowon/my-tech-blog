import React ,{ useEffect, useRef, useState}from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";

export default function CultureComponent() {

  return (
    <>
    <div className="orange-box-1"></div>
          <div className="orange-box-2"></div>
          <div className="orange-box-3"></div>
          <div className="orange-box-4"></div>
      <section className="culture section-1">
          <p className="slogan"><span>세상이 꿈꾸던 헬스케어</span></p>
          <p className="ubf"><span>유비케어가 만들어갑니다.</span></p>
      </section>
      <section className="culture section-2">
          
      </section>
      <section className="culture section-3">
          <p className="center-title text-position-1">CHALLENGE</p>
      </section>
      <section className="culture  section-4">
          <p className="center-title text-position-2">CHANGE</p>
      </section>
      <section className="culture section-5">
          <p className="center-title text-position-3">RESPECT</p>
      </section>
    </>
    
  );
}
