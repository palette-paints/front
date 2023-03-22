import ReaactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import { ko } from 'date-fns/locale';

const Box = styled.div`
  .input-datepicker {
    box-sizing: border-box;
    padding: 21px 30px;
    width: 235px;
    height: 62px;
    border: none;
    background: #fff;
    box-shadow: 2px 2px 10px rgba(126, 110, 221, 0.5);
    border-radius: 50px;
    color: #4f46af;
    font-size: 16px;
  }
`;

function DatePicker({
  startDate,
  handleChange,
}: {
  startDate: Date;
  handleChange: (date: any) => void;
}) {
  return (
    <Box>
      <ReaactDatePicker
        locale={ko}
        dateFormat="yyyy-MM-dd"
        className="input-datepicker"
        placeholderText="마감 날짜"
        selected={startDate}
        onChange={(date: any) => {
          handleChange(date);
        }}
      />
    </Box>
  );
}

export default DatePicker;
