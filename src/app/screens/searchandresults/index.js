import React, { useState, useEffect } from 'react';
import {fetchAllGists} from '../../redux/actions/allgists';
import {connect} from 'react-redux';
import ReactPaginate from 'react-paginate';
import SearchResults from '../../components/searchresults';
import URLSearchParams from '@ungap/url-search-params';
import './styles.css';

function SearchAndResults (props) {
  let {searchTerm, total_num} = props;
  useEffect(() => {
    const searchParam = new URLSearchParams(props.location.search);
    if(searchParam.get('since')) {
      searchTerm.since = searchParam.get('since');
    }
    if(searchParam.get('per_page')) {
      searchTerm.perPage = searchParam.get('per_page');
    }
    if(searchParam.get('page')) {
      searchTerm.page = searchParam.get('page');
    }
    if (searchTerm) {
      props.fetchAllGists(searchTerm);
    }
  }, []);

  function onPageChange(data) {
    let selected = data.selected;
    props.fetchAllGists({...searchTerm, page: selected + 1});
  }
  return (
    <div>
        <div className="container">
          <div className="gists-tit">Gists</div>
          <SearchResults />
          <div id="react-paginate">
            {searchTerm && <ReactPaginate
              id="react-paginate"
              initialPage={searchTerm.page - 1}
              forcePage={searchTerm.page - 1}
              pageCount={total_num}
              onPageChange={onPageChange}
              pageRangeDisplayed={2}
              marginPagesDisplayed={2}
            />}
          </div>
        </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchAllGists: (searchTerm) => {
          dispatch(fetchAllGists(searchTerm));
      } 
  }
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.allGistsReducer.searchTerm,
    total_num: state.allGistsReducer.gists.total_num,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchAndResults);
