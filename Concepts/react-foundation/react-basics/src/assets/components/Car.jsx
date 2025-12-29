import React from 'react'
import ReactDOM from 'react-dom/client';

const Car = (props) => {
  return (
    <>  
        <h1>hello my name is {props.name}.</h1>
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car name="Abu Huzaifa" />);

export default Car

