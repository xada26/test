import React, { Component } from 'react';
import data from './data.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <table border="1">
                <thead>
                    <tr>
                {
                    data.location.map((data, j) => {
                        return(
                          <th key={j}>{data.name}</th> 
                        )
                    })
                }
                        <th>Description</th>
                        <th>Product</th>
                        <th>Total Stock</th>
                        <th>Percent %</th>
                        <th>Total Order</th>
                    </tr>
                </thead>
                <tbody>
                    
                {
                    data.proformaItem.map((data, i) => {
                      
                        var stock = JSON.parse(data.product_stock);
                        var stocks1 = JSON.stringify(stock[0]);
                        var stocks2 = JSON.stringify(stock[1]);
                        var stocks3 = JSON.stringify(stock[2]);
                        if (typeof stocks3 === 'undefined') {
                          return stock[3];
                        }
                        var ss1 = JSON.parse(stocks1);
                        var ss2 = JSON.parse(stocks2);
                        var ss3 = JSON.parse(stocks3);
                        var order = JSON.parse(data.items);
                        var order1 = JSON.stringify(order[0]);
                        var order2 = JSON.parse(order1);
                        var total1 = ss1[1]+ss2[3]+ss3[5];
                        var totall1 = JSON.stringify(total1);
                        var totalll1 = JSON.parse(totall1);
                        var total2 = ss1[3]+ss2[1]+ss3[5];
                        var totall2 = JSON.stringify(total2);
                        var totalll2 = JSON.parse(totall2);
                        var percent1 = (order2["qty"]/total1)*(100/100);
                        var percentt1 = JSON.stringify(percent1);
                        var percenttt1 = JSON.parse(percentt1);
                        var percent2 = (order2["qty"]/total2)*(100/100);
                        var percentt2 = JSON.stringify(percent2);
                        var percenttt2 = JSON.parse(percentt2);
                        
                        return (
                            <tr key={i}>
                                <td>
                                    {ss1[1]}{ss2[1]}{console.log(ss1)}
                                </td>
                                <td>
                                    {ss2[3]}{ss1[3]}{ss2[5]}
                                </td>
                                <td>
                                    {ss3[5]}
                                </td>
                                <td>
                                    {data.categoryDescription}
                                </td>
                                <td>
                                    {data.productDescription}
                                </td>
                                <td>
                                  {totalll1}{totalll2}
                                </td>
                                <td>
                                  {percenttt1}{percenttt2}
                                </td>
                                <td>
                                  {order2["qty"]}
                                </td>
                            </tr>
                                    
                        )
                    })
                }
                    
                </tbody>
            </table>
      </div>
    )
  }
}

export default App;
