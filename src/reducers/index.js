const initialState = {
    characters: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHARACTERS_LOADED':
            return {
                characters: action.payload,
            }
        default:
            return state;
    }
};

export default reducer;