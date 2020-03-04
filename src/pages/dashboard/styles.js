import styled from 'styled-components';

export const Container = styled.div`
    max-width: 600px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;

    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 15px;
        margin-top: 30px;
    }
`;

export const Enterprise = styled.li`
    padding: 20px;
    border-radius: 4px;
    background: #fff;

    opacity: ${props => (props.disallow ? 0.6 : 1)};

    strong {
        display: block;
        color: ${props => (props.aproved ? '#999' : '#b31217')};
        font-size: 20px;
        font-weight: normal;
    }

    span {
        display: block;
        margin-top: 3px;
        color: ${props => (props.aproved ? '#999' : '#666')};
    }
`;
