import React, { useEffect, useRef, useState } from 'react';

const Counter: React.FC<{}> = () => {
  const initialValue:any =  0
  const [value, setValue] = useState<number>(initialValue);

  const increment = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const decrement = () => {
    setValue((prevValue) => prevValue - 1);
  };

  const renderTimes = useRef(0);
  useEffect(() => {
    renderTimes.current += 1;
    console.log('Component re-rendered');
  });
  const ref = useRef<HTMLInputElement>(null);
  const focusInput = () => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times!</div>
      <input ref={ref} type="text" />
      <button onClick={focusInput}>click Me!</button>
    </div>
  );
};

export default Counter;