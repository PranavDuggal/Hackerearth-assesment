import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl'; 


const buildControls =(props)=> {

    return (
        
        <div className= "BuildControls">
        
        <table class="table">
    
        <thead>
            <tr>
              <th scope="col">Items({props.totalQty})</th>
              <th scope="col">Price-per Qty</th>
              <th scope="col">Discount-per Qty</th>
              <th scope="col">Qty</th>
              <th scope="col">increase Qty</th>
              <th scope="col">decrease Qty</th>
              <th scope="col"></th>
            </tr>
        </thead>

        
        <tbody>
        {props.items.map(item =>
              <BuildControl
                key={item.id}
                label={item.label}
                addItems={() =>props.addItems(item.id)}
                removeItems={() =>props.removeItems(item.id)} 
                disable={item.disable}
                qty={item.qty}
                price={item.price} 
                discount={item.discount}
                type_discount={item.type_discount}
                removeWholeItem={() =>props.removeWholeItem(item.id)}  
              />
       )}
       </tbody>
    
       <tr>
          <td className= "Label">Total</td>
          <td>2760 Rs</td>
          <td>100 Rs + 78.3 Rs (TD)</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

       </table>

        </div>
    );
}

export default buildControls;