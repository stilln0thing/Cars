import { createContext, useState, useEffect } from 'react';
import axios from 'axios';


export const CarContext = createContext();


export const CarProvider = ({ children }) => {
  const [carData, setCarData] = useState({
    model: null,
    brand: null,
    price: 0,
    image: null,
    model3d: null,
    horsepower: 0,
 
  });

  useEffect(() => {
    const fetchCar = async () => {
      try {
       const response = await axios.get(`http://localhost:3000/api/v1/car/3`);
        const data = response.data.data;
        console.log(data);
        setCarData({
          model: data.model_name,
          brand: data.brand,
          price: data.price,
          image: data.image_url,
          model3d: data.model_3d_url,
          horsepower: data.horsepower,
          time: data.time,
          range: data.range,
          scale: data.scale,
          x1: data.posx,
          y: data.posy,
          z: data.posz
        });
      } catch (error) {
        console.log('Something went wrong in fetching the data', error);
      }
    };

    fetchCar();
  }, []);

  
 

  return (
    <CarContext.Provider value={{ ...carData }}>
      {children}
    </CarContext.Provider>
  );
};
