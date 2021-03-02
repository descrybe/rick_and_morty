const initialState = {
    characters: [],
    singleCharacter: {},
    loading: true,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CHARACTERS_SUCCESS':
            return {
                ...state,
                characters: action.payload,
                loading: false,
            };
        case 'FETCH_CHARACTERS_ERROR':
            return { 
                ...state,
                loading: false, 
                error: action.payload,
            };
        case 'FETCH_CHARACTERS_REQUEST':
            return { ...state };
        case 'FETCH_SINGLE_CHARACTER_REQUEST':
            return { ...state };
        case 'FETCH_SINGLE_CHARACTER_SUCCESS':
            return {
                ...state,
                singleCharacter: action.payload,
                loading: false,
            };
        case 'FETCH_SINGLE_CHARACTER_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;