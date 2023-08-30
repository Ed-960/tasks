// можем использовать хук useCallback для создания стабильной функции makeLog, которая будет пересоздаваться только при изменении зависимостей

import { Fragment, memo, useCallback } from 'react';

const MainComponent = () => {
  const makeLog = useCallback(() => console.log('hi from MainComponent'), []); // useCallback ensures stable function reference

  return (
    <Fragment>
      <ChildComponent makeLog={makeLog} />
    </Fragment>
  );
};

// memoized component
const ChildComponent = memo(({ makeLog }) => (
  <button onClick={makeLog}>say Hi from ChildComponent</button>
));

export default MainComponent;
