/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { SelectHTMLAttributes, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

/**  
const Box = styled.div`
  font-size: 20px;

  .custom-select {
    position: relative;
    font-family: Arial;
  }

  .custom-select select {
    display: none; 
  }

  .select-selected {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 167px;
    height: 62px;

    box-sizing: border-box;

    border-radius: 50px;
    background-color: #fff;
    box-shadow: 2px 2px 10px rgba(113, 175, 138, 0.5);
    color: #4e705b !important;
  }

  .select-selected.select-arrow-active:after {
    border-color: transparent transparent #fff transparent;
    top: 7px;
  }

  .select-items div,
  .select-selected {
    padding: 8px 16px;
    border: 1px solid transparent;
    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
    cursor: pointer;

    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 167px;
    height: 62px;
    border-radius: 50px;
    background-color: #fff;
    box-shadow: 2px 2px 10px rgba(113, 175, 138, 0.5);
    color: #4e705b !important;
  }

  .select-items {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 99;

    box-sizing: border-box;
    width: fit-content;
    margin-top: 10px;
    padding: 20px 20px;
    transform: translateX(-10%);
    border-radius: 50px;
    box-shadow: 2px 2px 10px rgba(113, 175, 138, 0.5);
    background: #fff;
  }

  .select-hide {
    display: none;
  }

  .select-items div:hover {
    background: #71af8a;
    color: #fff !important;
  }

  .select-items {
    .same-as-selected {
      background: #71af8a;
      color: #fff !important;
    }
    > div {
      margin-bottom: 12px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;
*/

const Box = styled.div`
  font-size: 20px;
  select {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 167px;
    height: 62px;
    box-sizing: border-box;
    border-radius: 50px;
    background-color: #fff;
    box-shadow: 2px 2px 10px rgba(113, 175, 138, 0.5);
    border: none;
    font-size: 20px;
    color: #4e705b !important;
    text-align: center;
  }
`;

function Select({ ...rest }: SelectHTMLAttributes<any>) {
  const options = [
    { value: '1', label: '공개' },
    { value: '0', label: '비공개' },
  ];
  /**  
  const [selectedItem, setSelectedItem] = useState(options[0].label);
  const [isSelected, setIsSelected] = useState(true);
  const selectEl = useRef<any>();
  */

  return (
    <Box>
      <div className="custom-select">
        <select {...rest}>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        {/** TODO  
        <select ref={selectEl} {...rest}>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <div
          className={`select-selected ${
            isSelected === true && 'select-arrow-active'
          }`}
          onClick={() => setIsSelected((prev) => !prev)}
        >
          {selectedItem}
        </div>
        <div
          className={`select-items ${!isSelected === true && 'select-hide'}`}
        >
          {options.map(({ label, value }, idx) => {
            if (selectedItem === label) {
              return (
                <div key={value} className="same-as-selected">
                  {label}
                </div>
              );
            }
            return (
              <div
                key={value}
                onClick={() => {
                  if (label === selectEl.current.options[idx].innerHTML) {
                    selectEl.current.selectedIndex = idx;
                    setSelectedItem(label);
                    setIsSelected(false);
                  }
                }}
              >
                {label}
              </div>
            );
          })}
        </div>
        */}
      </div>
    </Box>
  );
}

export default Select;
