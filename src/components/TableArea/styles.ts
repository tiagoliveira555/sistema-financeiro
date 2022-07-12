import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  box-shadow: 0 0 5px #ccc;
  padding: 30px;
  margin-top: 20px;
  border-radius: 10px;
`;

export const HeadColumn = styled.th<{ width?: string }>`
  text-align: left;
  width: ${(props) => (props.width ? `${props.width}.px` : "auto")};
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;
