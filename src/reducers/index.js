const initialState = {
    characters: [],
    loading: null,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHARACTERS_LOADING':
            return {
                loading: true,
                error: null
            }
        case 'CHARACTERS_LOADED':
            return {
                books: action.payload,
                loading: false,
                error: false
            }
        default:
            return state;
    }
};

export default reducer;