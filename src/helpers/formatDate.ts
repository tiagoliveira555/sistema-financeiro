import { Item } from "../types/Item";

export const getCurrentMonth = () => {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth() + 1}`;
};

export const getFilteredList = (list: Item[], currentMonth: string): Item[] => {
  const [, month] = currentMonth.split("-");
  const newList = list.filter((l) => l.date.getMonth() === parseInt(month) - 1);

  return newList;
};

export const formatCurrentMonth = (currentMonth: string): string => {
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const [year, month] = currentMonth.split("-");

  return `${months[parseInt(month) - 1]} de ${year}`;
};

export const converteDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${incrementZeroAtDate(day)}/${incrementZeroAtDate(month)}/${year}`;
};

const incrementZeroAtDate = (n: number): string => {
  return `${n < 10 ? `0${n}` : `${n}`}`;
};

export const formateDate = (date: string): Date => {
  const [year, month, day] = date.split("-");
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
};
