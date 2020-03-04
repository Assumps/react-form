import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Logo from '../../logo-dark.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
    const profile = useSelector(state => state.user.profile);

    return (
        <Container>
            <Content>
                <nav>
                    <img src={Logo} alt="Fitcard" />
                    <Link to="/dashboard">Dashboard </Link>
                    <hr />
                    <hr />
                    <Link to="/enterprise">Enterprise </Link>
                </nav>
                <aside>
                    <Profile>
                        <div>
                            <strong>{profile.name}</strong>
                            <Link to="/profile">Meu Perfil</Link>
                        </div>
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
