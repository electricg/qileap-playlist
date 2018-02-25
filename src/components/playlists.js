import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const PlaylistItem = ({ playlist, current, children }) => {
    if (playlist !== current) {
        return (
            <Link href={`/?playlist=${current}`}>
                <a>{children}</a>
            </Link>
        );
    }

    return children;
};

const Playlists = ({ playlists = [], playlist }) => {
    if (!playlists.length) {
        return <div>No playlists found</div>;
    }

    return (
        <section>
            <h2>Playlists</h2>
            <ul>
                {playlists.map(item => (
                    <li key={item.id}>
                        <PlaylistItem playlist={playlist} current={item.id}>
                            <span>{item.name}</span>{' '}
                            <span>[{item.songs.length} songs]</span>
                        </PlaylistItem>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Playlists.propTypes = {
    songs: PropTypes.array,
    playlist: PropTypes.number
};

export default Playlists;
