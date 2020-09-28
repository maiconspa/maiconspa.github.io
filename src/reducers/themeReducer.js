const initialState = {
    value: ''
}

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_VALUE':
            return {
            ...state,
            value: action.newValue
            }
        default:
            return state;
    }
}