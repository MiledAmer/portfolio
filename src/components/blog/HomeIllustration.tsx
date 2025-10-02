"use client"
import React from 'react'
import Lottie from "lottie-react";
import Animation from "./animation.json";
const HomeIllustration = () => {
  return (
    <div className=" hidden lg:block lg:col-span-5 lg:mt-0 xl:col-span-4">
    {/* <iframe src="https://lottie.host/embed/e4f30ff1-68f6-46f9-a4e8-8c668636537b/mtpWsRAgMc.json"
    className="w-full"
    ></iframe> */}
    <Lottie animationData={Animation} loop={true} />
  </div>
  )
}

export default HomeIllustration