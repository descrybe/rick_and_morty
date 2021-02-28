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
                singleCharacter: {},
                loading: false,
            };
        case 'SINGLE_CHARACTER_LOADED':
            return {
                characters: [],
                singleCharacter: action.payload,
                loading: false,
            };
        case 'SINGLE_CHARACTER_REQUESTED':
            return {
                characters: [],
                singleCharacter: {},
                loading: true,
            };
        case 'CHARACTERS_REQUESTED':
            return {
                characters: [],
                singleCharacter: {},
                loading: true,
            };
        default:
            return state;
    }
};

export default reducer;