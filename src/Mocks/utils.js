import { v4 as uuidv4 } from 'uuid';

export const creatingStateItem = (values) => {
    return {
        id: uuidv4(),
        ...values
    }
}

export const changingState = (values, stateArray) => {
    return [...stateArray, creatingStateItem(values)]
}

export const removeElementById = (id, goods) => {
    return goods.filter(el => el.id !== id)
}

export const getTotal = (goods) => {
    return goods.reduce((acc, cur) => {
        return acc + parseFloat(cur.weight)
    }, 0)
}

export const getSubTotal = (goods) => {
    return goods.filter(el => el.isChecked).reduce((acc, cur) => {
        return acc + parseFloat(cur.weight)
    }, 0)
}


export const editingSelected = (id, goods) => {
    return goods.map((el) => {
        if (el.id === id) {
            el.isChecked = !el.isChecked
        }
        return el
    })
}

export const editingItem = (id, goods) => {
    return goods.map((el) => {
        if (el.id === id) {
            el.isEditing = !el.isEditing
        }
        return el
    })
}

export const onSaveItem = (id, goods, obj) => {
    const indexOfEditingObj = goods.indexOf(goods.find(el => el.id === id));
    // goods[indexOfEditingObj].title = values[0]
    // goods[indexOfEditingObj].weight = values[1]
    // goods[indexOfEditingObj].description = values[2]
    goods[indexOfEditingObj] = {
        ...goods[indexOfEditingObj],
        title: obj.title,
        weight: obj.weight,
        description: obj.description
    }

}