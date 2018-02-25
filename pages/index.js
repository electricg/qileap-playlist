import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { getSongs } from '../src/state/songs/actions';
import {
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
                <Head>
                    <meta charset="utf-8" />
                    <meta
                        http-equiv="X-UA-Compatible"
                        content="IE=edge,chrome=1"
                    />
                    <title>Playlist</title>
                    <meta name="viewport" content="width=device-width" />

                    <link rel="stylesheet" href="css/bootstrap.css" />
                    <link rel="stylesheet" href="css/main.css" />
                </Head>
                <h1>Playlist Challenge</h1>

                {playlist && (
                    <Playlist
                        id={playlist.id}
                        name={playlist.name}
                        songs={playlist.songs}
                    />
                )}

                <Playlists playlists={playlists} playlist={playlist.id} />

                <Library songs={songs} playlist={playlist} />
            </div>
        );
    }
}

export default AboutPage;
