import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const getSongs = async () => {
    return async dispatch => {
        try {
            const { data } = await axios.get(`${BASE_URL}/library/`);

            dispatch({
                type: SONGS_SET,
                data: { songs: data }
            });
        } catch (error) {
            console.log(error);
            dispatch({
                type: SONG_ERROR,
                data: { error }
            });
        }
    };
};
