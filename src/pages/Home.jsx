import React from "react";
import "../App.css";
import { ReactLenis } from "@studio-freight/react-lenis";
// import { useRef } from 'react';
import gsap from "gsap";
//import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import RippleButton from "../components/RippleButton";
import Image from "../components/Image";
import Footer from "../components/Footer";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const Home = () => {
  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(".hero svg", {
      x: -400,
      opacity: 0,
      y: -400,
      duration: 1,
      ease: "back.out",
    })
      .from(".hero h1", {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.inOut",
      })
      .from(".hero p, .video", {
        yPercent: 10,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.inOut",
      });
  });

  useGSAP(() => {
    gsap.to(".hero", {
      scale: 0.8,
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom 80%",
        scrub: 1,
      },
    });
  });
  useGSAP(() => {
    gsap.to(".video", {
      y: 100,
      scale: 1.8,
      // duration:0.3,
      transformOrigin: "left bottom",
      // opacity:0,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        // markers:true,
        scrub: 1,
      },
    });
  });
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".about-this",
      start: "top 30%",
      end: "bottom bottom",
      pin: ".video",
      // markers: true,
    });
  });

  return (
    <>
      <div className="main">
        {/* content */}
        <div className="hero">
          <p>
            Empowering Safety Through Real-Time Insights <br />
            Protecting Women with Advanced Analytics
          </p>
          <h1>Safe Watch</h1>
          <svg
            width="28"
            height="28"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.01 0.226198C5.04413 0.226198 0.228302 5.04202 0.228302 11.0079C0.228302 16.9738 5.04413 21.7896 11.01 21.7896C16.9759 21.7896 21.7917 16.9738 21.7917 11.0079C21.7917 5.04202 16.9759 0.226198 11.01 0.226198Z"
              fill="black"
            />
          </svg>
        </div>

        {/* <hr /> */}
        <div className="about-this">
          <div className="left">
            <div className="video">
              <video
                src="/landingpage.mp4"
                controls={false}
                autoPlay
                loop
                muted
                className=" rounded-lg"
              ></video>
            </div>
          </div>
          <div className="right">
            <div className="page page-1 ">
              <h2 className=" text-2xl font-bold text-white ">
                Empowering Women's Safety with AI
              </h2>
              <p className="text-lg font-semibold tracking-wide leading-8 text-white my-3 pr-2">
                SafeWatch is an AI-driven platform designed to enhance women's
                safety in public spaces. By leveraging real-time monitoring,
                anomaly detection, and gesture recognition, our system
                proactively identifies potential threats and alerts authorities,
                ensuring a safer environment for women everywhere.
              </p>
            </div>
            <div className="page page-2">
              <h2 className=" text-2xl font-bold text-white ">
                Real-Time Threat Detection
              </h2>
              <p className="text-lg font-semibold tracking-wide leading-8 text-white my-3 pr-2">
                Our innovative solution combines advanced computer vision and
                machine learning to monitor gender distribution and recognize
                unusual patterns. SafeWatch continuously analyzes public areas,
                identifying risks such as lone women at night or women
                surrounded by men, and generates immediate alerts to prevent
                incidents
              </p>
            </div>
            <div className="page page-3">
              <h2 className=" text-2xl font-bold text-white ">
                Data-Driven Safety Planning
              </h2>
              <p className="text-lg font-semibold tracking-wide leading-8 text-white my-3 pr-2">
                SafeWatch goes beyond real-time protection by offering
                data-driven insights through hotspot mapping. By identifying
                areas with frequent incidents, our platform enables city
                planners and law enforcement to strategically allocate resources
                and develop targeted safety initiatives for long-term impact.
              </p>
            </div>
          </div>
        </div>
        <Image />
      </div>
      <Footer />
    </>
  );
};

export default Home;
