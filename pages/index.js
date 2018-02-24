import React, { Component } from 'react';
import Link from 'next/link';

import { getSongs } from '../src/state/songs/actions';

import Library from '../src/components/library';

class AboutPage extends Component {
    static async getInitialProps() {
        const songs = await getSongs();

        return {
            songs
        };
    }

    render() {
        const { songs } = this.props;

        return (
            <div>
                <h1>xxxAbout page</h1>
                <Link href="/">
                    <a>Back to home</a>
                </Link>

                <Library songs={songs} />
            </div>
        );
    }
}

export default AboutPage;
