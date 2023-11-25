import React, { Component } from 'react'
import Cart_Shoe from './Cart_Shoe'
import { shoeArr } from './data'
import List_Shoe from './List_Shoe'

export default class Ex_Shoe extends Component {
 
 state={
cart:[],
listShoe:shoeArr,
};

handleAddToCard=(shoe)=>{

    
   let cloneCart=[...this.state.cart];
   let index=cloneCart.findIndex((item)=>item.id==shoe.id);
  if(index == -1){
 
    let newShoe={...shoe, soLuong:1};

    cloneCart.push(newShoe);
}else{
 
    cloneCart[index].soLuong++;
}

    this.setState({cart:cloneCart});


};
handleDelete=(id)=>{
    
 
    let newCart= this.state.cart.filter((item)=>item.id!=id);
    this.setState({cart:newCart});
}
render() {
    return (
      <div className='row'>
        <Cart_Shoe handleDelete={this.handleDelete} cart={this.state.cart}></Cart_Shoe>
        <List_Shoe handleAddToCard={this.handleAddToCard} list={this.state.listShoe}></List_Shoe>
      </div>
    )
  }
}
