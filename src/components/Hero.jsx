/* eslint-disable jsx-a11y/img-redundant-alt */
import Btn from './elements/Btn/Btn'
import img1 from "../assets/line.png"
import img2 from "../assets/moon.png"
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
const Hero = () => {
    return (
        <section id='Home'>
            <div className="hero-section flex items-center  gap-3 flex-col md:flex-row">
                <div className="content flex items-start gap-8 flex-col md:w-1/2 w-full select-none">
                    <h1 className='md:text-7xl text-4xl font-bold relative '>
                        Think. Make.
                        Solve.
                    </h1>
                    <div className='flex items-center justify-center gap-4'>
                        <img src={img1} alt="line image" width={30} />
                        <h3 className='text-pink-500 text-3xl font-extrabold'>What We Do</h3>
                    </div>
                    <p className='text-xl space-x-3 text-gray-300'>
                        we enjoy creating delightful, twman-centered digital
                    </p>
                    <Btn name="Learn More" />
                </div>
                <div className="module-images relative cursor-pointer md:w-1/2 w-full h-screen md:block hidden">
                    <img src={img2} alt="hero image module" className='z-10' />
                    <Canvas className='w-full bg-cover'>
                        <OrbitControls enableZoom={false} autoRotate />
                        <ambientLight intensity={1} />
                        <directionalLight position={[8, 4, 1]} />
                        <Sphere args={[1, 100, 200]} scale={2.4}>
                            <MeshDistortMaterial color="#ee579a" attach="material"
                                distort={.5} speed={2} />
                        </Sphere>
                    </Canvas>
                </div>
            </div>
        </section >
    )
}

export default Hero
