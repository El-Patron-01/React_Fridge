import './GoodsList.css';

import React, { Component } from 'react';

import GoodsListElement from '../GoodsListElement/GoodsListElement';

export default class GoodsList extends Component {

    state = {
        subTotal: 0,
        total: 0
    }

    // recalculateSubtotal = (id) => {
    //     this.props.recalculateSubtotal(id)
    // }

    // editingItem = (id) => {
    //     this.props.editingItem(id)
    //   }
    
    render() {

        const { dataSource, deleteStateElement, recalculateSubtotal, editingItem, onSave } = this.props;
        
        return (
            <div>
                <div>
                    {Array.isArray(dataSource) && dataSource.map((el) => {
                    return (
                        <GoodsListElement 
                            key={el.id} 
                            good={el} 
                            deleteStateElement={deleteStateElement}
                            recalculateSubtotal={recalculateSubtotal}
                            editingItem={editingItem}
                            onSave={onSave}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

