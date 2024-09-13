import React, { useRef, useContext } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { CarContext} from './carcontext'
var x;
const CarModel = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  const {scale, x1 , y , z} = useContext(CarContext);
 
  x = modelPath;
 console.log(scale)
  const modelRef = useRef();
  return (
      <mesh>
          <hemisphereLight intensity={5} groundColor="black" />
          <pointLight intensity={6} />
          <primitive
              object={scene}
              scale={scale}
              
              position={[x1, y, z]}
               rotation={[-0.01, -0.2, -0.1]} 
               ref = {modelRef}
          />
      </mesh>
  );
};

useGLTF.preload(x); 

export default CarModel;
