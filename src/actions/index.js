const charactersLoading = () => {
    return {
        type: 'CHARACTERS_LOADING'
    }
};

const charactersLoaded = (newCharacters) => {
    return {
        type: 'CHARACTERS_LOADED',
        payload: newCharacters
    }
};

export {
    charactersLoading,
    charactersLoaded,
}