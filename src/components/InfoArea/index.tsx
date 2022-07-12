import { formatCurrentMonth } from "../../helpers/formatDate";
import { ResumeInfo } from "../ResumeInfo";
import * as C from "./styles";

type Props = {
  currentMoth: string;
  changeMonth: (newMonth: string) => void;
  income: number;
  expense: number;
};

export const InfoArea = ({
  currentMoth,
  changeMonth,
  income,
  expense,
}: Props) => {
  const handlePrevMonth = () => {
    const [year, month] = currentMoth.split("-");
    const newDate = new Date(parseInt(year), parseInt(month) - 1, 1);

    newDate.setMonth(newDate.getMonth() - 1);

    changeMonth(`${newDate.getFullYear()}-${newDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    const [year, month] = currentMoth.split("-");
    const newDate = new Date(parseInt(year), parseInt(month) - 1, 1);

    newDate.setMonth(newDate.getMonth() + 1);

    changeMonth(`${newDate.getFullYear()}-${newDate.getMonth() + 1}`);
  };

  return (
    <C.Container>
      <C.MonthArea>
        <C.Arrow onClick={handlePrevMonth}>⬅️</C.Arrow>
        <C.MonthTitle>{formatCurrentMonth(currentMoth)}</C.MonthTitle>
        <C.Arrow onClick={handleNextMonth}>➡️</C.Arrow>
      </C.MonthArea>
      <C.ValueInfo>
        <ResumeInfo title="Receitas" value={income} />
        <ResumeInfo title="Despesas" value={expense} />
        <ResumeInfo
          title="Balanço"
          value={income - expense}
          color={income - expense < 0 ? "red" : "green"}
        />
      </C.ValueInfo>
    </C.Container>
  );
};
