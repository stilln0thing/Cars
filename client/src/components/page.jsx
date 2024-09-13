import React, {useState, useEffect, Suspense, useContext} from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Eye } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CarModel from './carmodel1'
import { CarContext } from './carcontext';



const TaycanProductPage = () => {   
    const [hover, sethover] = useState(null);
    
    const { model, brand, price, image, model3d, horsepower, time , range } = useContext(CarContext);

  return (
    <div className=" blur-none bg-black text-white min-h-screen">
      <header className="flex justify-between items-center p-4">
        <img  src={`/carlogos/${image}`} alt={`${image} logo`} className="h-20 w-22" />
        <nav>
          <ul className={`flex space-x-10 ${hover ? 'text-gray-400' : 'text-white'} `}>
            <li className='cursor-pointer text-white hover:text-gray-400'>Home</li>
            <li className='cursor-pointer text-white hover:text-gray-400'>Shop</li>
            <li className='cursor-pointer text-white hover:text-gray-400'>Dealer</li>
            <li className='cursor-pointer text-white hover:text-gray-400'> More</li>
          </ul>
        </nav>
        <ShoppingCart className="h-6 w-6 cursor-pointer text-white hover:text-gray-400" />
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-4">
          <p className="text-xl uppercase">{brand}</p>
          <h1 className="text-4xl font-bold mb-2">{model}</h1>
          <p className="text-xl">From ₹{price} onwards</p>
        </div>

 

        <div style={{ width: '100%', height: '50vh' }}> 
          
      <Canvas camera={{ position: [-20, -70, 10], fov: 20 }}>
      
        <ambientLight intensity={4} />
        <directionalLight position={[2, 5, 2]} intensity={10} />
        <hemisphereLight intensity={0.15} groundColor="black" />
        <pointLight intensity={1} />
        <directionalLight
        position={[-20, 0, 50]}
        intensity={5} 
        castShadow={true} 
       />
       <directionalLight
        position={[-15, 0, 50]}
        intensity={5} 
        castShadow={true} 
       />
        
    
        <Suspense fallback={null}>
          <CarModel modelPath={`/Cars_3D_Models/${model3d}/scene.gltf`} />
          
        
          <OrbitControls
            enableZoom={true}       
            autoRotate={false}      
            enableDamping={true}     
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
       
        </Suspense>
      </Canvas>
 
  
          <div/>
       

         
          <button  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 p-2 rounded-full">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 p-2 rounded-full">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center mt-4">
          <Eye className="h-6 w-6" />
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8 text-center">
          <div>
            <p className="text-2xl font-bold">{range} KM</p>
            <p className="text-sm">Driving Range</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{horsepower} hp</p>
            <p className="text-sm">Overboost Power with Launch Control</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{time} s</p>
            <p className="text-sm">0 - 100 km with Launch Control</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TaycanProductPage;