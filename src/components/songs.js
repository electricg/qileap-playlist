import React from 'react';
import PropTypes from 'prop-types';

import Song from './song';

const Songs = ({ songs = [] }) => {
    if (!songs.length) {
        return null;
    }

    return (
        <dl>
            {songs.map(item => (
                <Song
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    artist={item.artist}
                    album={item.album}
                    duration={item.duration}
                />
            ))}
        </dl>
    );
};

Songs.propTypes = {
    songs: PropTypes.array
};

export default Songs;
