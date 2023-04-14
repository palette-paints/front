import styled from 'styled-components';

const Circle = styled.div`
    position: absolute;
    margin-top: 35px;
    background: #ffffff;
    width: 1363px;
    height: 681px;
    z-index: -1;
    border-radius: 681px 681px 0 0;

    @media screen and (max-width: 510px) {
        position: absolute;
        margin-top: 220px;
        background: #ffffff;
        width: 580px;
        height: 290px;

        z-index: -1;
        border-radius: 300px 300px 0 0;
    }
`;

export default Circle;
