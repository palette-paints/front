import styled from 'styled-components';
import LoginIcon from '@/svg/LoginIcon.svg';

const Loginicon = styled.img`
    background-color: white;
    border-radius: 50%;
    padding: 2px;
    margin-right: 5px;
`;

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

function LoginTitle() {
    return (
        <Box>
            <Loginicon src={LoginIcon} />
            로그인
        </Box>
    );
}

export default LoginTitle;
