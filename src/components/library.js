import React from 'react';
import PropTypes from 'prop-types';

import Songs from './songs';

const Library = ({ songs = [] }) => {
    if (!songs.length) {
        return <div>No songs found in the library</div>;
    }

    return (
        <section>
            <h2>Library</h2>
            <Songs songs={songs} />
        </section>
    );
};

Library.propTypes = {
    songs: PropTypes.array
};

export default Library;
