import styled from 'styled-components';

const Box = styled.div`
    font-family: 'Montserrat Alternates';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;

    color: #ffffff;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 64px;
    margin-top: 90px;
    background: #3465c9;
`;

function Title({ title }) {
    return <Box>{title}</Box>;
}

export default Title;
