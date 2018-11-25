import types from './types';

const initialState = {
};

const movie = (state = initialState, action) => {
    switch (action.type) {
        case types.INITIATE_CASE: {
            return initialState;
        }
        default:
            return state;
    }
};

export default movie;
