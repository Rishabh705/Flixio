// for useReducer parameters
export const initialState = {
    sortOrder:'asc',
    sortType:'original_title'
}


const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_SORT_ORDER':
            return {
                ...state,
                sortOrder: action.payload,
            }
        case 'SET_SORT_TYPE':
            return {
                ...state,
                sortType: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;