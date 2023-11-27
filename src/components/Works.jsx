import React from "react";
import Mac from "./Mac"
import Shoe from "./Shoe"
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { useState } from "react";
import Atom from "./Atom";
const Works = () => {
  const [works, setWorks] = useState(null)
  const handleChangeMoudules = (e) => {
    setWorks(e)
    console.log("change module")
  }
  return (
    <section id="Works">
      <div className="works-container flex  flex-col md:flex-row items-center  gap-10 w-full relative">
        <ul className="flex flex-col gap-10 justify-between list-none md:w-1/3 w-full md:items-start items-center">
          <li onClick={() => handleChangeMoudules("product")} className={`after:content-['Web_Design']`}>Web Design</li>
          <li onClick={() => handleChangeMoudules("product")} className={`after:content-['Illustration']`}>Illustration</li>
          <li onClick={() => handleChangeMoudules("desgin")} className={`after:content-['Product_Design']`}>Product Design</li>
          <li onClick={() => handleChangeMoudules("deve")} className={`after:content-['Development']`}>Development</li>
          <li onClick={() => handleChangeMoudules("product")} className={`after:content-['Social_Media']`}>Social Media</li>
        </ul>
        <div className="md:w-2/3 w-full cursor-grab">
          <Canvas style={{ height: "500px" }}>
            <Stage environment="city" intensity={0}>
              {works === "desgin" ? <Shoe scale={[3.5, 3.5, 3.5]} /> : works === "deve" ? <Atom /> : works === "product" ? <Mac /> : <Mac />}
            </Stage>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
        <p style={{ width: "300px", borderRadius: "20px" }} className=" p-3 bg-white text-black md:block hidden absolute top-0 right-0">Design is the art of crafting visual and functional solutions, harmonizing aesthetics and usability to create impactful, user-centric experiences across various mediums.</p>
      </div>
    </section>
  );
};

export default Works;
