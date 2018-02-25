import React from 'react';
import PropTypes from 'prop-types';

const Add = ({}) => {
    return <button>add</button>;
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

            <td>{add}</td>
        </tr>
    );
};

Song.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    artist: PropTypes.string,
    album: PropTypes.string,
    duration: PropTypes.number,
    playlist: PropTypes.number
};

export default Song;
