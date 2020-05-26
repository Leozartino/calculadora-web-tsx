const isOperator = (value: any) => {
  return !isNaN(value) || value === "." || value === "=";
};

export default isOperator;
