function obterEstatisticas(numeros: number[]): object {
  const numerosOrdenados: number[] = numeros.sort(
    (a: number, b: number) => a - b
  );

  let soma: number = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas: object = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}

type amostra = {
  numeros: number[];
  obterEstatisticas: (numeros: number[]) => object;
};
