import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import enterprise from './enterprise/sagas';

export default function* rootSaga() {
    return yield all([auth, user, enterprise]);
}
