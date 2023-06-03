import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

const Model = (props) => {
  const { scene } = useGLTF("/mars_model.glb");
  return <primitive object={scene} {...props} />;
};

const ModelCanvas = () => {
  return (
    <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} id="canvas">
      <color attach="background" args={["#242526"]} />
      <PresentationControls
        speed={1.5}
        global
        zoom={0.5}
        polar={[-0.1, Math.PI / 4]}
      >
        <Stage environment={"sunset"}>
          <Model scale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
};

export default ModelCanvas;
