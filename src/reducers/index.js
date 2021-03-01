const initialState = {
    characters: [],
    singleCharacter: {},
    loading: true,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHARACTERS_LOADED':
            return {
                ...state,
                characters: action.payload,
                loading: false,
            };
        case 'SINGLE_CHARACTER_LOADED':
            return {
                ...state,
                singleCharacter: action.payload,
                loading: false,
            };
        case 'SINGLE_CHARACTER_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case 'SINGLE_CHARACTER_REQUESTED':
            return { ...state };
        case 'CHARACTERS_REQUESTED':
            return { ...state };
        default:
            return state;
    }
};

export default reducer;