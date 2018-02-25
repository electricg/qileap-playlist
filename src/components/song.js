import React from 'react';
import PropTypes from 'prop-types';

import { addSongToPlaylist } from '../state/playlists/actions';

const Add = ({ songId, playlist = {} }) => {
    if (playlist.id == null) {
        return null;
    }

    return (
        <button onClick={() => addSongToPlaylist(songId, playlist)}>Add</button>
    );
};

const Song = ({ id, title, artist, album, duration, playlist }) => {
    if (id == null) {
        return null;
    }

    const add = playlist != null ? 'add' : '';

    return (
        <tr>
            <td>{id}</td>

            <td>{title}</td>

            <td>{artist}</td>

            <td>{album}</td>

            <td>{duration}</td>

            <td>
                <Add playlist={playlist} songId={id} />
            </td>
        </tr>
    );
};

Song.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    artist: PropTypes.string,
    album: PropTypes.string,
    duration: PropTypes.number,
    playlist: PropTypes.object
};

export default Song;
