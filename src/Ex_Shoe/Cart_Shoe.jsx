import React, { Component } from 'react'

export default class Cart_Shoe extends Component {
  
  render() {
console.log(this.props)
    return (
      <div className='col-6'>

        <table className="table">
          <thead>
            <tr>
              <th >Id</th>
              <th >Name</th>
              <th>Price</th>
              <th>Img</th>
              <th>Quality</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((item)=>{
            return (
              <tr>
                <td >{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <img width={70} src={item.image} alt=''></img>
                </td>
                <td><strong>{item.soLuong}</strong></td>
                <td>
                  <button onClick={()=>{this.props.handleDelete(item.id)}} className='btn btn-danger'> Delete</button>
                </td>

              </tr>
              )
            })}

          </tbody>
        </table>
      </div>
    )
  }
}
