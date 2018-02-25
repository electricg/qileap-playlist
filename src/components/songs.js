import React from 'react';
import PropTypes from 'prop-types';

import Song from './song';

const Songs = ({ songs = [], playlist }) => {
    if (!songs.length) {
        return null;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Duration</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                {songs.map(item => (
                    <Song
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        artist={item.artist}
                        album={item.album}
                        duration={item.duration}
                        playlist={playlist}
                    />
                ))}
            </tbody>
        </table>
    );
};

Songs.propTypes = {
    songs: PropTypes.array,
    playlist: PropTypes.number
};

export default Songs;
