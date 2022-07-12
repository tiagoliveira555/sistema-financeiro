import { useState } from "react";
import { categories } from "../../data/categories";
import { formateDate } from "../../helpers/formatDate";
import { Item } from "../../types/Item";
import * as C from "./styles";

type Props = {
  onAddItem: (newItem: Item) => void;
};

export const InputArea = ({ onAddItem }: Props) => {
  const [dateField, setDateField] = useState("");
  const [categoryField, setCategoryField] = useState("");
  const [titleField, setTitleField] = useState("");
  const [valueField, setValueField] = useState(0);

  const categoryKey = Object.keys(categories);

  const handleAddItem = () => {
    const errors: string[] = [];

    if (isNaN(new Date(dateField).getTime())) {
      errors.push("Data inválida!");
    }

    if (!categoryKey.includes(categoryField)) {
      errors.push("Categoria inválida!");
    }

    if (titleField === "") {
      errors.push("Título vazio!");
    }

    if (valueField <= 0) {
      errors.push("Valor inválido!");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      const item: Item = {
        date: formateDate(dateField),
        category: categoryField,
        title: titleField,
        value: valueField,
      };
      onAddItem(item);
      cleanFields();
    }
  };

  const cleanFields = () => {
    setDateField("");
    setCategoryField("");
    setTitleField("");
    setValueField(0);
  };

  return (
    <C.Container>
      <C.AreaInput>
        <C.Label>Data</C.Label>
        <C.Input
          type="date"
          value={dateField}
          onChange={(e) => setDateField(e.target.value)}
        />
      </C.AreaInput>
      <C.AreaInput>
        <C.Label>Categoria</C.Label>
        <C.Select
          value={categoryField}
          onChange={(e) => setCategoryField(e.target.value)}
        >
          <option></option>
          {categoryKey.map((key, index) => (
            <option key={index} value={key}>
              {categories[key].name}
            </option>
          ))}
        </C.Select>
      </C.AreaInput>
      <C.AreaInput>
        <C.Label>Título</C.Label>
        <C.Input
          type="text"
          value={titleField}
          onChange={(e) => setTitleField(e.target.value)}
        />
      </C.AreaInput>
      <C.AreaInput>
        <C.Label>Valor</C.Label>
        <C.Input
          type="number"
          value={valueField}
          onChange={(e) => setValueField(parseFloat(e.target.value))}
        />
      </C.AreaInput>
      <C.AreaInput>
        <C.Label>&nbsp;</C.Label>
        <C.Button onClick={handleAddItem}>Adicionar</C.Button>
      </C.AreaInput>
    </C.Container>
  );
};
