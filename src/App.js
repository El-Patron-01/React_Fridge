import './App.css';

import React, { Component } from 'react';

import GoodsList from './GoodsList/GoodsList';
import GoodsListForm from './GoodsListForm/GoodsListForm';
import { goods } from './Mocks/goodsMock';
import {
  changingState,
  editingItem,
  editingSelected,
  getSubTotal,
  getTotal,
  onSaveItem,
  removeElementById,
} from './Mocks/utils';

export default class App extends Component {
  
  state = {
    goods,
    total: getTotal(goods),
    subtotal: getSubTotal(goods)
  };


  onAdd = (newElement) => {
    const newArr = changingState(newElement, this.state.goods)
    this.setState({
      goods: newArr,
      total: getTotal(newArr)
    })
    
  }

  deleteStateElement = (id) => {
    const newArr = removeElementById(id, this.state.goods)
    this.setState({
      goods: newArr,
      total: getTotal(newArr)
    })
  }

  recalculateSubtotal = (id) => {
    const newArr = editingSelected(id, this.state.goods);
    this.setState({
      goods: newArr,
      subtotal: getSubTotal(newArr)
    })
  }

  letsEditItem = (id) => {
    editingItem(id, this.state.goods)
    console.log(this.state.goods)
  }

  onSave = (id, obj) => {
    onSaveItem(id, this.state.goods, obj)
  }

  render() {
    return (
      <div className="container">
        <div className='title'>Fridge</div>
        <GoodsList 
          dataSource={this.state.goods} 
          deleteStateElement={this.deleteStateElement}
          recalculateSubtotal={this.recalculateSubtotal}
          editingItem={this.letsEditItem}
          onSave={this.onSave}
          />
        <div className='total'>
          <div>Total:</div>
          <div>{ this.state.total }</div>
        </div><div className='total'>
          <div>Subotal:</div>
          <div>{ this.state.subtotal }</div>
        </div>
        <GoodsListForm onAdd={this.onAdd}/>
    </div>
    )
  }
}

