export default class CharactersService {

    _baseUrl = 'https://rickandmortyapi.com/api/';

    async getResponse(url) {
        const response = await fetch(`${this._baseUrl}${url}`);
        
        return await response.json();
    }
    
    async getAllCharactersByPage(page) {
        const allCharacters = await this.getResponse(`character/?page=${page}`);
        
        return allCharacters;
    };

    async getCharacterById(id) {
        const allCharacters = await this.getResponse(`character/${id}`);
        
        return allCharacters;
    };

};