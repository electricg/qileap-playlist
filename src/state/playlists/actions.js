import axios from 'axios';

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

    return playlists.map(playlist => {
        const { id, name, songs } = playlist;

        return {
            id,
            name,
            songs: library.filter(item => {
                return songs.includes(item.id);
            })
        };
    });
};
