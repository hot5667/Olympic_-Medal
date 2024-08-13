import React from "react";
import styled from "styled-components";
import ButtonComponent from "./ButtonComponent.jsx";

const InputGroup = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: flex-end;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;ß
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-shrink: 0;
  gap: 10px;
  align-items: end;
`;

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  margin: 0;
`;

function FormComponent({ formData, handleChange, handleSubmit, handleUpdate }) {
  return (
    <InputGroup onSubmit={handleSubmit}>
      <InputField>
        <label>국가명</label>
        <StyledInput
          type="text"
          name="countryname"
          id="countryname"
          placeholder="국가 입력"
          value={formData.countryname}
          onChange={handleChange}
          required
        />
      </InputField>
      <InputField>
        <label>금메달</label>
        <StyledInput
          type="number"
          name="goldMedalNumber"
          id="goldMedalNumber"
          value={formData.goldMedalNumber}
          onChange={handleChange}
          required
        />
      </InputField>
      <InputField>
        <label>은메달</label>
        <StyledInput
          type="number"
          name="silverMedalNumber"
          id="silverMedalNumber"
          value={formData.silverMedalNumber}
          onChange={handleChange}
          required
        />
      </InputField>
      <InputField>
        <label>동메달</label>
        <StyledInput
          type="number"
          name="bronzeMedalNumber"
          id="bronzeMedalNumber"
          value={formData.bronzeMedalNumber}
          onChange={handleChange}
          required
        />
      </InputField>
      <ButtonGroup>
        <ButtonComponent type="submit">국가 추가</ButtonComponent>
        <ButtonComponent type="button" onClick={handleUpdate}>
          업데이트
        </ButtonComponent>
      </ButtonGroup>
    </InputGroup>
  );
}

export default FormComponent;