const initialState = {
    characters: [
        {
            id: 1,
            name: "Rick Sanchez",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        },
        {
            id: 2,
            name: "Morty Smith",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        }
    ],
    loading: null,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHARACTERS_LOADING':
            return {
                books: [],
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