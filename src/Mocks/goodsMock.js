import { v4 as uuidv4 } from 'uuid';

export const goods = [
    {
        id: uuidv4(),
        title: 'Milk',
        weight: '1.5',
        description: 'For kids' ,
        isChecked: false,
        isEditing: false
    },
    {
        id: uuidv4(),
        title: 'Meat',
        weight: '4',
        description: 'Friends meeting',
        isChecked: false,
        isEditing: false
    },
    {
        id: uuidv4(),
        title: 'Eggs',
        weight: '0.5',
        description: 'Breakfast',
        isChecked: false,
        isEditing: false
    },
    {
        id: uuidv4(),
        title: 'Butter',
        weight: '0.5',
        description: 'Sandwich',
        isChecked: false,
        isEditing: false
    },
    {
        id: uuidv4(),
        title: 'Ham',
        weight: '1',
        description: 'Sandwich',
        isChecked: false,
        isEditing: false
    }
]