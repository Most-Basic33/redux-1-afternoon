import { createStore } from 'redux';
const initialState = {
    name: '',
    catagory: '',
    firstName: '',
    lastName: '',
    ingredients: [],
    instructions: [],
    recepies:[]
}

//I am updating the initialState which is actually payload
//The capitalize constants are the case titles with the
//lowercase initialstate items as being the payload that's delivered
export const UPDATE_FIRST = 'UPDATE_FIRST';
export const UPDATE_LAST = 'UPDATE_LAST';
export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIETS';
export const ADD_INSTRUCTIONS = 'ADD_INSTRUCTIONS';
export const NEW_RECIPES ='NEW_RECEIPES'
function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case UPDATE_NAME:
            return { ...state, name: payload }
        case UPDATE_CATEGORY:
            return { ...state, catagory: payload }
        case UPDATE_FIRST:
            return { ...state, firstName: payload }
        case UPDATE_LAST:
            return { ...state, lastName: payload }
        //This case will look a little more complicated than the ones we've done before because we're working with a list now, so we'll need to make a copy of that list before making changes.
        case UPDATE_INGREDIENTS:
            const newIngredients = [...state.ingredients, payload]
            return { ...state, ingredients: newIngredients }
        case ADD_INSTRUCTIONS://The second item in teh return statement is your front end reference
            const newInstructins = [...state.instructions, payload]
            return { ...state, instructions: newInstructins }
            //This case will be quite a bit different from what we've done so far, because it doesn't use a payload. Payloads are really useful when we need to transfer data from a component to Redux, but in this circumstance all the data is already being stored in Redux. So we'll pull all the values we've been storing so far off of state and build a recipe object with it. Then we we'll want to copy our list of recipes and add our a new recipe to it. Then of course we need to copy the rest of state in an immutable way. 
            case NEW_RECIPES:
              const {name, category, firstName, lastName, ingredients, instructions} = state
const recipe = {name, category, firstName, lastName, ingredients, instructions}
             const newInsructions = [...ADD_INSTRUCTIONS, recipe]
            return {...state, recipe: NEW_RECIPES}

        default: return state
    }
}
export default createStore(reducer);