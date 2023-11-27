import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Cube = () => {
    const ref = useRef()
    useFrame(state => (ref.current.position.x = Math.sin(state.clock.elapsedTime) * 1.4))

    return (
        <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial>
                <RenderTexture attach="map">
                    <PerspectiveCamera
                        makeDefault
                        position={[0, 0, 6]}
                    />
                    <color attach="background" args={["#ec4899"]} />
                    <Text ref={ref} fontSize={2} color="#bbb">
                        hello
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    )
}

export default Cube
