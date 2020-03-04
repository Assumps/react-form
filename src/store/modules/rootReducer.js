import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import enterprise from './enterprise/reducer';

export default combineReducers({
    auth,
    user,
    enterprise,
});
