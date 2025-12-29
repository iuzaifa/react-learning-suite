import React from "react";


// step one - 1 creating constructor 
class Car extends React.Component{

    constructor(){
        super()
        this.state = {color :'red'}
    }

    render(){
        return(
            <>
                <h3>Step 1 :  I am  Car </h3>
            </>
        )
    }
}



//  step one - 2 passing value into constructor
class CarII extends React.Component {
    constructor(){
        super()
        this.state = {color : 'red'}
    }


    render(){
        return (
            <>
                <h3>Step 2 :  I am a {this.state.color} Car </h3>
            </>
        )
    }
}



// export default  CarII;
export { Car, CarII };
