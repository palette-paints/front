import styled from 'styled-components';

const Label = styled.label`
  display: block;
  width: 100%;
  color: #4f46af;
  & > input {
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #4f46af;
    appearance: none;

    // TODO 웹 접근성
    &:focus {
      outline: none;
    }
  }
`;

function LabelInput({ id, label, children }: any) {
  return (
    <Label htmlFor={id}>
      {label} :{children || <input type="text" id={id} />}
    </Label>
  );
}

export default LabelInput;
