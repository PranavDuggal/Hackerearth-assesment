import React from 'react';
import './BuildControl.css';

const buildControl =(props)=> {
 
    return (   
        <tr>
          <td className= "Label">{props.label}</td>
          <td>{props.price} Rs</td>
          <td>{props.discount} Rs + {props.type_discount} Rs (TD)</td>
          <td>{props.qty}</td>
          <td><button className='btn btn-primary' onClick={props.addItems}>More</button></td>
          <td><button disabled={props.disable} className="btn btn-secondary" onClick={props.removeItems}>Less</button></td>
          <td><button className='btn btn-danger' onClick={props.removeWholeItem}>Delete</button></td>
        </tr>
       )

    
}

export default buildControl;