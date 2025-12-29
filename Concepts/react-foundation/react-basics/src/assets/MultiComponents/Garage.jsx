import React from 'react'


/* Components in Components
We can refer to components inside other components: */


const Garage = () => {
  return (
        <>
          <h1>Who lives in my Garage?</h1 >
          <Car/>
          <Bike/>
          <Truck/>
          <Other/>
        </>
  )
}


function Car() {
    return(
        <>
            <h2>1. Cars </h2>
        </>
    )
}


function Bike(){
    return (
        <>
            <h2>2. Bikes</h2>
        
        </>
    )
}


const Truck = ()=> {
    return (
        <>
            <h2>3. Trucks </h2>
        </>
    )
}


const Other =()=>{
    return (
        <>
            <h2>4. Pickups, and other moter cars and bikes</h2>
        </>
    )
}



export default Garage