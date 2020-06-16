import formatMoney from "./formatMoney";

function amountInstallment(value: number, rate: number, installment: number) {
  const totalValue = value + rate;
  const installmentValue = totalValue / installment;
  return `${installment}x de ${formatMoney(installmentValue)}`;
}

export default amountInstallment;
