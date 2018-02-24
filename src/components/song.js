import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Song = ({ id, title, artist, album, duration }) => {
    if (id == null) {
        return null;
    }

    return (
        <Fragment>
            <dt>Id</dt>
            <dd>{id}</dd>

            {title && (
                <Fragment>
                    <dt>Title</dt>
                    <dd>{title}</dd>
                </Fragment>
            )}

            {artist && (
                <Fragment>
                    <dt>Artist</dt>
                    <dd>{artist}</dd>
                </Fragment>
            )}

            {album && (
                <Fragment>
                    <dt>Album</dt>
                    <dd>{album}</dd>
                </Fragment>
            )}

            {duration && (
                <Fragment>
                    <dt>Duration</dt>
                    <dd>{duration}</dd>
                </Fragment>
            )}
        </Fragment>
    );
};

Song.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    artist: PropTypes.string,
    album: PropTypes.string,
    duration: PropTypes.number
};

export default Song;
