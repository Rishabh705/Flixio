// for useReducer parameters
export const initialState = {
    sortOrder:'asc',
    sortType:'title'
}


const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
        case 'SET_SORT_ORDER':
            return {
                ...state,
                sortOrder: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;