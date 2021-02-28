const charactersLoading = () => {
    return {
        type: 'CHARACTERS_LOADING'
    };
};

const charactersLoaded = (newCharacters) => {
    return {
        type: 'CHARACTERS_LOADED',
        payload: newCharacters
    };
};

const singleCharacterLoaded = (newCharacter) => {
    return {
        type: 'SINGLE_CHARACTER_LOADED',
        payload: newCharacter
    };
};

export {
    charactersLoading,
    charactersLoaded,
    singleCharacterLoaded
};