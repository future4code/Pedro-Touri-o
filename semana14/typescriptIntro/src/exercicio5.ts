const operations = (x: number, y: number): void => {
  console.log(`${x} + ${y} = ${x + y}`);
  console.log(`${x} - ${y} = ${x - y}`);
  console.log(`${x} * ${y} = ${x * y}`);
  console.log(
    `${
      x === y
        ? "Os números são iguais!"
        : x > y
        ? `O maior é ${x}`
        : `O maior é ${y}`
    }`
  );
};

operations(1, 2);
operations(2, 2);
