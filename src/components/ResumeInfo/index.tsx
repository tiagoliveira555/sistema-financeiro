import { getFormatValue } from "../../helpers/formatValue";
import * as C from "./styles";

type Props = {
  title: string;
  value: number;
  color?: string;
};

export const ResumeInfo = ({ title, value, color }: Props) => {
  return (
    <C.Container>
      <C.ResumeTitle>{title}</C.ResumeTitle>
      <C.ResumeValue color={color}>R$ {getFormatValue(value)}</C.ResumeValue>
    </C.Container>
  );
};
