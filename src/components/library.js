import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Songs from './songs';

const Library = ({ songs = [] }) => {
    if (!songs.length) {
        return <div>No songs found in the library</div>;
    }

    return (
        <Fragment>
            <h2>Library</h2>
            <Songs songs={songs} />
        </Fragment>
    );
};

Library.propTypes = {
    songs: PropTypes.array
};

export default Library;
