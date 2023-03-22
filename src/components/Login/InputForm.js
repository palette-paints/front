import styled from 'styled-components';

const InputForm = styled.input`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 15px 20px;

    width: 450px;
    height: 30px;

    background: #ffffff;
    box-shadow: 4px 4px 15px rgba(52, 101, 201, 0.5);
    border-radius: 50px;
    border: none;
    margin: 0 auto;
    margin-bottom: 30px;

    @media screen and (max-width: 1024px) {
        width: 380px;
        height: 30px;
    }

    @media screen and (max-width: 510px) {
        width: 200px;
        height: 20px;
    }
`;

export default InputForm;
