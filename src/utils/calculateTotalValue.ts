import formatMoney from "./formatMoney";

function calculateTotalValue(value: number, rate: number) {
  const result = value + rate;
  return formatMoney(result);
}

export default calculateTotalValue;
