import { useMemo, useState } from 'react';

const Example = () => {
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(2);

  const calcWithoutUseMemo = () => {
    let sum = 0;
    for (let i = 0; i < 9 ** 10; i++) {
      sum += value1;
    }
    return sum;
  }

  const calcUseMemo = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 9 ** 10; i++) {
      sum += value1;
    }
    return sum;
  }, []);

  return (
    <div>
      <div>{calcWithoutUseMemo()}</div>
      <div>{calcUseMemo}</div>
      <br />
      <button onClick={() => setValue1((current) => current + 1)}>{value1}</button>
      <button onClick={() => setValue2((current) => current + 1)}>{value2}</button>
    </div>
  );
}

export default Example;