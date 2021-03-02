const charactersRequested = () => {
    return {
        type: 'FETCH_CHARACTERS_REQUEST'
    };
};

const singleCharacterRequested = () => {
    return {
        type: 'FETCH_SINGLE_CHARACTER_REQUEST'
    };
};

const charactersError = () => {
    return {
        type: 'FETCH_CHARACTERS_ERROR'
    };
};

const charactersLoaded = (newCharacters) => {
    return {
        type: 'FETCH_CHARACTERS_SUCCESS',
        payload: newCharacters
    };
};

const singleCharacterLoaded = (newCharacter) => {
    return {
        type: 'FETCH_SINGLE_CHARACTER_SUCCESS',
        payload: newCharacter
    };
};

const fetchCharacters = (dispatch, charactersService, currentPage) => () => {
    dispatch(charactersRequested());
    charactersService
        .getAllCharactersByPage(currentPage)
        .then(firstRes => {
            dispatch(charactersLoaded(firstRes.results));
        })
        .catch((err) => 
            dispatch(charactersError(err))
        );
};

export {
    singleCharacterRequested,
    singleCharacterLoaded,
    fetchCharacters
};