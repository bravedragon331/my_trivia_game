import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  margin: 0 auto;
  padding: 0px 16px 24px 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #000;
`;
const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #000;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      background: #eeeeee;
    }
  }
  &:checked + ${RadioButtonLabel} {
    background: #000;
    border: 1px solid #000;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
      background: white;
    }
  }
`;

const RadioButtons = ({ items }) => {
  return (
    <Wrapper>
      {items.map(item => (
        <Item key={item.id}>
          <RadioButton
            type="radio"
            name="radio"
            value={item.value}
            onChange={item.onChange}
          />
          <RadioButtonLabel />
          <div>{item.label}</div>
        </Item>
      ))}
    </Wrapper>
  );
};

export default RadioButtons;
