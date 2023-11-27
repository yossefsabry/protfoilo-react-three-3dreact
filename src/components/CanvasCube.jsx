import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Cube from './Cube'

const CanvasCube = () => {
    return (
        <section className='relative cursor-grab'>
            <Canvas camera={{ fov: 36, position: [6, 6, 6] }} style={{ height: "600px" }}>
                <OrbitControls enableZoom={false} autoRotate />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <Cube />
            </Canvas>
        </section>
    )
}

export default CanvasCube
