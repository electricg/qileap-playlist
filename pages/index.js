import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';

import Link from 'next/link';

import { initStore } from '../src/state/store';

import { getSongs } from '../src/state/songs/actions';
import {
    getPlaylists,
    getPlaylistsWithSongs,
    getPlaylistById
} from '../src/state/playlists/actions';

import Library from '../src/components/library';
import Playlists from '../src/components/playlists';
import Playlist from '../src/components/playlist';

class IndexPage extends Component {
    static async getInitialProps({ store, query }) {
        const { dispatch, getState } = store;
        const songs = [];
        await dispatch(getSongs());
        const playlists = await getPlaylistsWithSongs(songs);
        const playlist = getPlaylistById(query.playlist, playlists);

        return {
            songs,
            playlists,
            playlist
        };
    }

    render() {
        const { songs, playlists, playlist } = this.props;

        return (
            <div>
                <h1>Playlist Challenge</h1>

                {playlist && (
                    <Playlist
                        id={playlist.id}
                        name={playlist.name}
                        songs={playlist.songs}
                    />
                )}

                <Playlists playlists={playlists} playlist={playlist.id} />

                <Library songs={songs} playlist={playlist.id} />
            </div>
        );
    }
}

export default withRedux(initStore, state => state)(IndexPage);
