function serializedInstallment(installment: string) {
  const serialized = installment.replace("A_", "");
  return Number(serialized);
}

export default serializedInstallment;
