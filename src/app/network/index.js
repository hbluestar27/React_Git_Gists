//Make Network calls
//fetch() Promise API's
//catch block/error handdling shoud be invoked outside, or else req can fail silently
//without the caller being notified

const makeGETCall = (url) => {
    return fetch(url).then( async (rawResponse) => {
        //if 200        
        let link = rawResponse.headers.get('Link');
        let pos = link.indexOf('rel="last"');
        link = link.substring(0, pos);

        let pos1 = link.lastIndexOf('page=');
        let pos2 = link.lastIndexOf('>;');

        let total_num = parseInt(link.substring(pos1+5, pos2));

        let gistList = await rawResponse.json();
        if(rawResponse.ok) {
            return {list: gistList, total_num: total_num};
        } else {
            throw new Error(rawResponse.status);
        }
    })
}

//You can add more types of call below eg. POST, PUT, PATCH etc. 
//or generalize the method above.

export {makeGETCall};