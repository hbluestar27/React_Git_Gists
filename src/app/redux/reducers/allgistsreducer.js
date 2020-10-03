//data model structure for all GISTS
const initialState = {
    searchTerm: {
        page: 1, 
        since: '',
        perPage: 30
    },
    isLoading: false,
    error: null,
    totalPages: 0,
    gists: {
        list: [],
        total_num: 0
    },
}

const allGistsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'BEFORE_ALL_GISTS':
            return {...state, gists: {
                list: [],
                total_num: 0
            }, isLoading: true, error: null};
        case 'ALL_GISTS_SUCCESS':
            return {...state, gists: {...action.payload}, isLoading: false, searchTerm: action.searchTerm, error: null}
        case 'ALL_GISTS_ERROR':
            return {...state, gists: {
                list: [],
                total_num: 0
            }, isLoading: false, error: action.errorMsg};
        default:
            return state;
    }
}

export default allGistsReducer;