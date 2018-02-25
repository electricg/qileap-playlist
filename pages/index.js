import React, { Component } from 'react';
import Link from 'next/link';

import { getSongs } from '../src/state/songs/actions';
import {
    getPlaylists,
    getPlaylistsWithSongs,
    getPlaylistById
} from '../src/state/playlists/actions';

import Library from '../src/components/library';
import Playlists from '../src/components/playlists';
import Playlist from '../src/components/playlist';

class AboutPage extends Component {
    static async getInitialProps({ query }) {
        const songs = await getSongs();
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

export default AboutPage;
