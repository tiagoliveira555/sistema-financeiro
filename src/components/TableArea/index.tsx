import { Item } from "../../types/Item";
import { ItemTable } from "../ItemTable";
import * as C from "./styles";

type Props = {
  itemsList: Item[];
};

export const TableArea = ({ itemsList }: Props) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.HeadColumn width="100">Data</C.HeadColumn>
          <C.HeadColumn width="130">Categoria</C.HeadColumn>
          <C.HeadColumn>Título</C.HeadColumn>
          <C.HeadColumn width="150">Valor</C.HeadColumn>
        </tr>
      </thead>
      <tbody>
        {itemsList.map((item, index) => (
            <ItemTable key={index} item={item} />
        ))}
      </tbody>
    </C.Table>
  );
};
