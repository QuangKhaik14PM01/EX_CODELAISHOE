import React, { Component } from 'react'
import Item_Shoe from './Item_Shoe';

export default class List_Shoe extends Component {
  render() {
    let{list}=this.props;

    return (
      <div className='row col-6'>
        {list.map((item)=>{
        return <Item_Shoe 
        handleAddToCard={this.props.handleAddToCard}
        key={item.id} data={item} >

        </Item_Shoe>
        })}
        </div>
    )
  }
}
