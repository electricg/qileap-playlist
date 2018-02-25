import React from 'react';
import PropTypes from 'prop-types';

import Playlist from './playlist';

const Playlists = ({ playlists = [] }) => {
    if (!playlists.length) {
        return <div>No playlists found</div>;
    }

    return (
        <section>
            <h2>Playlists</h2>
            {playlists.map(item => (
                <Playlist
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    songs={item.songs}
                />
            ))}
        </section>
    );
};

Playlists.propTypes = {
    songs: PropTypes.array
};

export default Playlists;
