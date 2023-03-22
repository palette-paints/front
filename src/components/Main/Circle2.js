import styled from 'styled-components';

const Circle2 = styled.div`
    position: absolute;
    margin-top: 15px;
    background: #fff5e2;
    width: 1463px;
    height: 731px;
    filter: blur(15px);
    z-index: -2;
    border-radius: 731px 731px 0 0;
    animation: fadeOut 4s infinite;

    @keyframes fadeOut {
        0% {
            opacity: 1;
        }
        30% {
            opacity: 0.5;
        }
        50% {
            opacity: 0;
        }
        70% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    }

    @media screen and (max-width: 510px) {
        position: absolute;
        margin-top: 190px;
        background: #fff5e2;
        width: 600px;
        height: 300px;
        filter: blur(15px);
        z-index: -2;
        border-radius: 300px 300px 0 0;
        animation: fadeOut 4s infinite;

        @keyframes fadeOut {
            0% {
                opacity: 1;
            }
            30% {
                opacity: 0.5;
            }
            50% {
                opacity: 0;
            }
            70% {
                opacity: 0.5;
            }
            100% {
                opacity: 1;
            }
        }
    }
`;

export default Circle2;
