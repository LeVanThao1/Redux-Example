import React from 'react';
import PropTypes from 'prop-types';

import './HobbyList.css'

HobbyList.propTypes = {
    hobbyList: PropTypes.array,
    onHobbyClick: PropTypes.func,
    activeId: PropTypes.number
};

HobbyList.defaultProps = {
    hobbyList: [],
    onHobbyClick: null,
    activeId: null
}
function HobbyList(props) {
    const { hobbyList, onHobbyClick, activeId } = props;

    const handleClick = (hobby) => {
        if(!onHobbyClick) return;
        onHobbyClick(hobby)
    }
    return (
        <ul className="hobby-list">
           {
               hobbyList.map((hobby, index) => (
                <li 
                    key={hobby.id} 
                    onClick={() => handleClick(hobby)}
                    className={hobby.id === activeId ? 'active': ''}
                >{hobby.title}</li>
               ))
           } 
        </ul>
    );
}

export default HobbyList;