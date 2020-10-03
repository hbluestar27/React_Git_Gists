import { makeGETCall } from '../../network';
import config from '../../config';
import URLSearchParams from '@ungap/url-search-params';

//show loading message
const beforeCall = () => {
    return {
        type: 'BEFORE_ALL_GISTS'
    }
}
const onSuccess = (dataObj, searchTerm) => {
    //I can pass normalized data here
    return {
        type: 'ALL_GISTS_SUCCESS',
        payload: dataObj,
        searchTerm: searchTerm,
        isLoading: false
    }
}
const onFailure = (err) => {
    return {
        type: 'ALL_GISTS_ERROR',
        errorMsg: err,
        isLoading: false
    }
}

//thunk middleware action
const fetchAllGists = (searchTerm) => {
    const searchParam = new URLSearchParams();
    const {since, perPage, page} = searchTerm;
    searchParam.set('since', since);
    searchParam.set('per_page', perPage);
    searchParam.set('page', page);
    const newurl = window.location.protocol + "//" + window.location.host + '?' + searchParam.toString();
    window.history.pushState({path:newurl},'',newurl);
    
    return function(dispatch) {
        dispatch(beforeCall());
        //make the API call
        return makeGETCall(config.getAllGistUrl(searchTerm)).then((res) => {
            console.log(searchTerm);
            if(res.list.length) {
                //if there is data retured by Github API
                dispatch(onSuccess(res, searchTerm));
            } else {
                dispatch(onFailure(`0 Gists Found`));
            }
        }).catch((err) => {
            //if network is down
            //404 etc
            //console.log('Error', err);
            dispatch(onFailure(`Some problem while making call`)); //${err} - you can pass - optional
        });
    }
}

export {fetchAllGists};