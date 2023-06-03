import React, { useRef } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { useGLTF, Stage, OrbitControls } from "@react-three/drei";

extend({ OrbitControls });

const Model = (props) => {
  const { scene } = useGLTF("/mars_model.glb");
  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.005; // Adjust the rotation speed as needed
  });

  // Disable shadow casting for the model
  scene.traverse((node) => {
    if (node.isMesh) {
      node.castShadow = false;
    }
  });

  return (
    <group ref={modelRef} {...props}>
      <primitive object={scene} />
    </group>
  );
};

const ModelCanvas = () => {
  return (
    <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
      <color attach="background" args={["#242526"]} />
      <Stage environment="sunset" shadows>
        <Model scale={0.01} />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ModelCanvas;
