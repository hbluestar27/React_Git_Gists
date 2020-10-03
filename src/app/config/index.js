const  BASE_URL = 'https://api.github.com';

export default {
    getAllGistUrl: (searchTerm) => {
        const {since, perPage, page} = searchTerm;
        return `https://api.github.com/gists/public?since=` + since + `&per_page=` + perPage + `&page=` + page;
    },
    getSingleGistUrl: (gistId) => {
        return `${BASE_URL}/gists/${gistId}`
    }
}