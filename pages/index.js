import React, { Component } from 'react';
import Link from 'next/link';

import { getSongs } from '../src/state/songs/actions';
import { getPlaylistsWithSongs } from '../src/state/playlists/actions';

import Library from '../src/components/library';
import Playlists from '../src/components/playlists';

class AboutPage extends Component {
    static async getInitialProps() {
        const songs = await getSongs();
        const playlists = await getPlaylistsWithSongs(songs);

        return {
            songs,
            playlists
        };
    }

    render() {
        const { songs, playlists } = this.props;
        console.log(playlists);

        return (
            <div>
                <h1>xxxAbout page</h1>
                <Link href="/">
                    <a>Back to home</a>
                </Link>

                <Library songs={songs} />

                <Playlists playlists={playlists} />
            </div>
        );
    }
}

export default AboutPage;
