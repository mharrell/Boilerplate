const request = require('supertest');

const url = 'https://api.chucknorris.io/jokes/'

describe('It appears to be Chuck Norris Time', () => {
    it('should return a list of all 16 joke categories', async () => {
        await request(url)
            .get('/categories')
            .expect(function(res) {
                if(res.body.length != 16)
                    throw new Error('Oh no! Not all 16 categories are currently available!');
        })
    });
    it('should search using a category and only return jokes with that category', async () => {
        let testCategory = 'history'
        await request(url)
            .get('/search?query=history')
            .expect(function(res) {
                let listOfCategories = []
                res.body.result.forEach(joke => {
                    listOfCategories.push(joke.categories)
                })
                if(!listOfCategories.forEach(categories => categories.includes('history')))
                    throw new Error('Oh no! At least one joke did not list History as one of its categories');
        })
    });
});
