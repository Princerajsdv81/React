import React from 'react'

const Card = (props) => {

    return (
    
        <div className='m-auto my-20 max-w-sm p-6  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-white'>
            
            <img src ={props.detail.image}   className='rounded-md w-full' />
            <h2 className='text-[1.65rem] font-semibold my-2'> {props.detail.name}</h2>
            <p>
                {props.detail.about}
            </p>
            
            <ul>
                <h1 className=' mx-[100px] text-center bg-black max-w-sm  rounded-md'>Movies</h1>
            <div className='mx-[100px] border-gray-400  rounded-lg border-spacing-2 text-center  text-blue-500'>
                
                {props.detail.movies.map((movie, index) => (
                    <li className='m-1 border border-spacing-2  rounded-md' key={index}>{movie}</li>
                ))}
               </div>
            </ul> 
        </div>
        
    )
}

export default Card