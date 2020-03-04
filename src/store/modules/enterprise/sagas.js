/* eslint-disable no-console */
import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';
import api from '../../../services/api';

export function* enterpriseCreate({ payload }) {
    try {
        const {
            fantasyname,
            cnpj,
            email,
            address,
            city,
            state,
            fone,
            category,
            agency,
            account,
        } = payload;

        yield call(api.post, 'enterprise', {
            fantasyname,
            cnpj,
            email,
            address,
            city,
            state,
            fone,
            category,
            status: true,
            agency,
            account,
        });

        history.push('/dashboard');
    } catch (error) {
        toast.error('Falha no cadastro verifique seus dados');
    }
}

export default all([
    takeLatest('@enterprise/ENTERPRISE_REQUEST', enterpriseCreate),
]);
