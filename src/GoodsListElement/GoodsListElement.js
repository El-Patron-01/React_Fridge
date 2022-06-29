import './GoodsListElement.css';

import React, { Component } from 'react';

export default class GoodsListElement extends Component {
    
    state = {
        title: '',
        weight: '',
        description: ''
    }

    checkElementId = () => {
        this.props.deleteStateElement(this.props.good.id)
    }

    recalculateSubtotal = () => {
        this.props.recalculateSubtotal(this.props.good.id)
    }

    onToggleColored = () => {
        this.setState({
            isChecked: !this.state.isChecked
        })
    }

    editingItem = () => {
        this.props.editingItem(this.props.good.id)
    }

    onInputchange = ({ target }) => {
        this.setState({
            [target.name]: target.value 
        })
    }

    onSave = () => {
        this.props.onSave(this.props.good.id, this.state)
        console.log(this.state)
    }

    render() {
        const { title, weight, description, isChecked, isEditing } = this.props.good;
        return (
            <div className={ isChecked ? 'GoodsListElementChecked' : 'GoodsListElement' }>
                <input type='checkbox' onClick={this.recalculateSubtotal} />
                { isEditing ? 
                    <input 
                        type='text' 
                        id='titileId' 
                        className='GoodsListElement_Column'
                        onChange={this.onChange}
                    /> : 
                    <div 
                        className='GoodsListElement_Column'>
                        { title }
                    </div>
                    }
                { isEditing ? 
                    <input 
                        type='text' 
                        id='weightId' 
                        className='GoodsListElement_Column'
                        onChange={this.onChange}
                    /> : 
                    <div 
                        className='GoodsListElement_Column'>
                        { weight }
                    </div>
                    }
                { isEditing ? 
                    <input 
                        type='text' 
                        id='descriptionId' 
                        className='GoodsListElement_Column GoodsListElement_Column_Description'
                        onChange={this.onChange}
                    /> : 
                    <div 
                        className='GoodsListElement_Column GoodsListElement_Column_Description'>
                        { description }
                    </div>
                    }
                { isEditing ? 
                    <button className='button' onClick={this.onSave}>Save</button> : 
                    <button className='button' onClick={this.editingItem}>Edit</button>
                    }
                <button className='button' onClick={this.checkElementId}>Delete</button>
            </div>
        )
    }
}
