export default class CharactersService {
    _baseUrl = 'https://rickandmortyapi.com/api/';

    async getResponse(url) {
        const response = await fetch(`${this._baseUrl}${url}`);
        
        return await response.json();
    }
    
    async getAllCharacters() {
        // const allCharacters = await this.getResponse('character');
        
        // return allCharacters;
        return [
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
        ];
    };

    async getCharacterById() {
        return {};
    };

};