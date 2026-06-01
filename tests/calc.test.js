// tests/calc.test.js

function converterMetros(mValue, chooseValue) {
  switch (chooseValue) {
    case "1":
      return mValue * 1000; // milímetros
    case "2":
      return mValue * 100; // centímetros
    case "3":
      return mValue * 10; // decímetros
    case "4":
      return mValue / 10; // decâmetros
    case "5":
      return mValue / 100; // hectômetros
    case "6":
      return mValue / 1000; // quilômetros
    default:
      return null;
  }
}

describe("Conversor de metros", () => {
  test("Converte metros para milímetros", () => {
    expect(converterMetros(1, "1")).toBe(1000);
  });

  test("Converte metros para centímetros", () => {
    expect(converterMetros(1, "2")).toBe(100);
  });

  test("Converte metros para decímetros", () => {
    expect(converterMetros(1, "3")).toBe(10);
  });

  test("Converte metros para decâmetros", () => {
    expect(converterMetros(10, "4")).toBe(1);
  });

  test("Converte metros para hectômetros", () => {
    expect(converterMetros(100, "5")).toBe(1);
  });

  test("Converte metros para quilômetros", () => {
    expect(converterMetros(1000, "6")).toBe(1);
  });

  test("Retorna null para opção inválida", () => {
    expect(converterMetros(5, "9")).toBeNull();
  });
});