import axios from 'axios';
import Router from 'next/router';

const BASE_URL = 'http://localhost:5000';

export const getPlaylists = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/playlist/`);

        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getPlaylistsWithSongs = async (library = []) => {
    const playlists = await getPlaylists();
    const libraryById = library.reduce((accumulator, song) => {
        accumulator[song.id] = song;

        return accumulator;
    }, {});

    const playlistsExtended = playlists.map(playlist => {
        const { id, name, songs } = playlist;

        return {
            id,
            name,
            songs: songs.map(song => libraryById[song])
        };
    });

    return playlistsExtended;
};

export const getPlaylistById = (id, playlists = []) => {
    return (
        playlists.find(p => {
            return p.id === parseInt(id, 10);
        }) || {}
    );
};

export const addSongToPlaylist = async (songId, playlist) => {
    const { id, name, songs } = playlist;

    const songsArray = songs.map(s => s.id);
    songsArray.push(songId);

    try {
        const { data } = await axios.post(`${BASE_URL}/playlist/${id}/`, {
            name,
            songs: songsArray
        });
        Router.push(`/?playlist=${id}`);

        return data;
    } catch (error) {
        console.log(error);
    }
};

export const removeSongToPlaylist = async (songId, playlist) => {
    const { id, name, songs } = playlist;

    const songsArray = songs.map(s => s.id);
    songsArray.push(songId);

    try {
        const { data } = await axios.post(`${BASE_URL}/playlist/${id}/`, {
            name,
            songs: songsArray
        });
        Router.push(`/?playlist=${id}`);

        return data;
    } catch (error) {
        console.log(error);
    }
};
