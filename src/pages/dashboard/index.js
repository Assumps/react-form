import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Container, Enterprise } from './styles';

export default function Dashboard() {
    const [enterprises, setEnterprise] = useState([]);

    useEffect(() => {
        async function loadEnterprise() {
            const response = await api.get('enterprise');

            setEnterprise(response.data);
        }

        loadEnterprise();
    }, []);

    return (
        <Container>
            <header />
            <ul>
                {enterprises.map(buss => (
                    <Enterprise key={buss.id}>
                        <strong>{buss.fantasyname}</strong>
                        <span>{buss.category}</span>
                    </Enterprise>
                ))}
            </ul>
        </Container>
    );
}
