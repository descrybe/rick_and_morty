export default class CharactersService {
    _baseUrl = 'https://rickandmortyapi.com/api/';

    async getResponse(url) {
        const response = await fetch(`${this._baseUrl}${url}`);
        
        return await response.json();
    }
    
    async getAllCharacters() {
        const allCharacters = await this.getResponse('character');
        
        return allCharacters;
    };

    async getCharacterById() {
        return {};
    };

};