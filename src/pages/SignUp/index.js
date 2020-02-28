import React from 'react';
import { Link } from 'react-router-dom'
import {Form, Input} from '@rocketseat/unform'
import * as Yup from 'yup';

import logo from '../../../src/assets/logo-light.png';

const schema = Yup.object().shape({
    name: Yup.string().required('Nome é Obrigatorio'),
    email: Yup.string()
      .email('Insira um e-mail valido')
      .required('O e-mail é obrigatorio'),
    password: Yup.string()
    .min(6, 'no minimo 6 caracteres')
    .required('A senha é Obrigatoria'),
});

export default function SignUp() {
    function handleSubmit(data){
        console.tron.log(data);
    }

  return (
    <>
    <img src={logo} id="logo" alt="Fitcard"/>

    <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo"/>
        <Input name="email" type="email" placeholder="Seu e-mail"/>
        <Input name="password" Type="password" placeholder="Sua Senha Secreta"/>

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
    </Form>
    </>
  );
}