import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { enterpriseRequest } from '../../store/modules/enterprise/actions';

import { Container } from './style';

export default function Enterprise() {
    const dispatch = useDispatch();

    function handleSubmit({
        fantasyname,
        cnpj,
        email,
        address,
        city,
        state,
        fone,
        category,
        status,
        agency,
        account,
    }) {
        dispatch(
            enterpriseRequest(
                fantasyname,
                cnpj,
                email,
                address,
                city,
                state,
                fone,
                category,
                status,
                agency,
                account
            )
        );
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Input name="fantasyname" placeholder="Nome da empresa" />
                <Input name="cnpj" placeholder="cnpj (apenas numeros)" />
                <Input name="email" type="email" placeholder="Seu E-mail" />
                <Input name="address" placeholder="Seu Endereço" />
                <Input name="city" placeholder="Sua cidade" />
                <Input name="state" placeholder="Seu Estado" />
                <Input name="fone" placeholder="numero de telefone" />
                <Input name="category" placeholder="tipo de serviço" />
                <Input name="agency" placeholder="Agencia Bancaria" />
                <Input name="account" placeholder="Conta Bancaria" />
                <button type="submit">Inserir Empresa</button>
            </Form>
        </Container>
    );
}
