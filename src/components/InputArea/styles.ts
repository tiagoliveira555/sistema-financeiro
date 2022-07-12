import styled from "styled-components";

export const Container = styled.div`
  max-width: 980px;
  margin: auto;
  box-shadow: 0 0 5px #ccc;
  margin-top: 10px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

export const AreaInput = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10px;
`;

export const Label = styled.label`
  margin: 0 0 5px 2px;
  font-weight: bold;
`;

export const Input = styled.input`
  height: 30px;
  width: 100%;
  padding: 5px 10px;
  border: 1px solid lightgreen;
  border-radius: 5px;
  outline: none;
`;

export const Select = styled.select`
  height: 30px;
  width: 100%;
  padding: 5px 10px;
  border: 1px solid lightgreen;
  border-radius: 5px;
  outline: none;
`;

export const Button = styled.button`
  height: 30px;
  width: 100%;
  padding: 5px 10px;
  border: 1px solid lightgreen;
  border-radius: 5px;
  outline: none;
  background-color: lightblue;
  color: #444;
  cursor: pointer;
  transition: all .3s;

  &:hover {
    background-color: antiquewhite;
  }
`;
