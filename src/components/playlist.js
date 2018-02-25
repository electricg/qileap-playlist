import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Songs from './songs';

const Playlist = ({ id, name, songs = [] }) => {
    if (id == null) {
        return null;
    }

    return (
        <Fragment>
            <h3>{`${id} - ${name}`}</h3>
            <Songs songs={songs} />
        </Fragment>
    );
};

Playlist.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    songs: PropTypes.array
};

export default Playlist;
