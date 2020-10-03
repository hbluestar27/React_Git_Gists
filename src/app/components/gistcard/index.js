import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function GistCard(props) {
    const { gistData } = props;
    
    return (
        <div>
            <li className="list-row">
                <img className="avatar-img" src={gistData.owner.avatar_url} />
                <span>{Object.keys(gistData.files).length > 0 ? Object.keys(gistData.files)[0]: ''}</span>
            </li>
        </div>
    );
}

GistCard.propTypes = {
    gistData: PropTypes.object.isRequired
}

export default GistCard;