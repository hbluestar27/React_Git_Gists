import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import GistCard from '../gistcard';
import './styles.css';

function SearchResultsInner (props) {
    const {gists, isLoading, error} = props.allGists;

    useEffect(() => {
    }, []);

    if(isLoading) {
        return (
            <div className="results-box loader">
                <h4>Loading...</h4>
            </div>
        );
    }

    return (
      <div className="results-box">
        {(gists.list.length && !error) ? (
            <div>
                <ul>
                    {gists.list.map((gist, index) => {
                        return (<GistCard 
                                        key={gist.id} 
                                        gistData={gist}/>);
                    })}
                </ul>
            </div>
        ) : (
            <div className="error-box">
                <p className="text-danger">{error}</p>
            </div>
        )}
       </div>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

const mapStateToProps = (state) => {
    return {
        allGists: state.allGistsReducer,
    }
}

let SearchResults = connect(mapStateToProps, mapDispatchToProps)(SearchResultsInner);
export default SearchResults;
