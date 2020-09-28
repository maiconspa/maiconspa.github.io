const initialState = {
    value: null
}

export const langReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_VALUE':
            console.log('lag value: ', action)
            return {
            ...state,
            value: action.newValue
            }
        default:
            return state;
    }
}