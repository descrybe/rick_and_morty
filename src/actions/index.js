const charactersRequested = () => {
    return {
        type: 'CHARACTERS_REQUESTED'
    };
};

const singleCharacterRequested = () => {
    return {
        type: 'SINGLE_CHARACTER_REQUESTED'
    };
};

const charactersError = () => {
    return {
        type: 'CHARACTERS_ERROR'
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
    charactersRequested,
    singleCharacterRequested,
    charactersLoaded,
    singleCharacterLoaded,
    charactersError
};