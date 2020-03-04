/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
    buss: null,
};

export default function enterprise(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@enterprise/ENTERPRISE_REQUEST': {
                draft.buss = action.payload.Enterprises;
                break;
            }
            default:
        }
    });
}
