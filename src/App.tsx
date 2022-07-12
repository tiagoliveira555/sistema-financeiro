import { useEffect, useState } from "react";
import * as C from "./App.styles";
import { InfoArea } from "./components/InfoArea";
import { InputArea } from "./components/InputArea";
import { TableArea } from "./components/TableArea";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { getCurrentMonth, getFilteredList } from "./helpers/formatDate";
import { Item } from "./types/Item";

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(getFilteredList(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleChangeMonth = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const onAddItem = (newItem: Item) => {
    const newList = [...list];
    newList.push(newItem);

    setList(newList);
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>Sistema Financeiro</C.HeaderTitle>
      </C.Header>

      <InfoArea
        currentMoth={currentMonth}
        changeMonth={handleChangeMonth}
        income={income}
        expense={expense}
      />

      <InputArea onAddItem={onAddItem} />

      <C.Body>
        <TableArea itemsList={filteredList} />
      </C.Body>
    </C.Container>
  );
};

export default App;
