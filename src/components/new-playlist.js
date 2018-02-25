import React, { Component } from 'react';

import { createNewPlaylist } from '../state/playlists/actions';

class NewPlaylist extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    async handleSubmit(event) {
        event.preventDefault();
        await createNewPlaylist(this.state.value);
    }

    render() {
        return (
            <div>
                <h2>Create Playlist</h2>
                <form method="POST" onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            Name:{' '}
                            <input
                                type="text"
                                id="new-playlist-name"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <button type="submit" id="new-playlist-submit">
                            Create
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

NewPlaylist.propTypes = {
    // none needed
};

export default NewPlaylist;
