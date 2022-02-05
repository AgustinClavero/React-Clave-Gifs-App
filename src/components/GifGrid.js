import React  from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category} ) => {

   const { data:images, loading } = useFetchGifs( category );
  

  return (
    <>
    <div className='h3-container'>
      <h3 className='animate__animated animate__fadeIn'> { category } </h3>
    </div>
    { loading && <p>Loading</p>}
    <div className="card-grid">
         { //desestructurado
           images.map( img => (
             <GifGridItem 
               key = { img.id }
               {...img} 
             />
           ))
         }
    </div> 
    </>
      )
};

//{/* // { images.map( img => ( */}
        //      <li key={ img.id }>{ img.title }</li> sin desestructurar
        //    ))
        //  
        