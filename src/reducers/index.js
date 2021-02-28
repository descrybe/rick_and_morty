const initialState = {
    characters: [],
    singleCharacter: {},
    loading: true,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHARACTERS_LOADED':
            return {
                characters: action.payload,
                loading: false,
            };
        case 'SINGLE_CHARACTER_LOADED':
            return {
                singleCharacter: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default reducer;