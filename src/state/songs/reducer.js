import { SONGS_SET, SONGS_ERROR } from './constants';

const defaultState = {
    items: []
};

export default (state = defaultState, action) => {
    const { type, data } = action;

    switch (type) {
        case SONGS_SET:
            return Object.assign({}, state, {
                items: data.songs
            });
        case SONGS_ERROR:
            return state;
        default:
            return state;
    }
};
