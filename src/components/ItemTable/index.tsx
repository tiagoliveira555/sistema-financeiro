import { categories } from "../../data/categories";
import { converteDate } from "../../helpers/formatDate";
import { getFormatValue } from "../../helpers/formatValue";
import { Item } from "../../types/Item";
import * as C from "./styles";

type Props = {
  item: Item;
};

export const ItemTable = ({ item }: Props) => {
  return (
    <C.TableLine>
      <C.TableColumn>{converteDate(item.date)}</C.TableColumn>
      <C.TableColumn>
        <C.Category color={categories[item.category].color}>
          {categories[item.category].name}
        </C.Category>
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
        <C.Value color={categories[item.category].expense ? "red" : "green"}>
          R$ {getFormatValue(item.value)}
        </C.Value>
      </C.TableColumn>
    </C.TableLine>
  );
};
