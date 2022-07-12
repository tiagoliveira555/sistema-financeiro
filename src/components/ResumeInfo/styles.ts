import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
`;

export const ResumeTitle = styled.div`
  font-weight: bold;
  color: #555;
  margin-bottom: 3px;
`;

export const ResumeValue = styled.div<{ color?: string }>`
  color: ${(props) => props.color};
`;
