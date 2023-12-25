import React, { useState, useEffect } from 'react';
import "./style.css"

const App = () => {
  const [marks, setMarks] = useState([90, 49, 80, 51, 48]);
  const [redCount, setRedCount] = useState(0);
  const [greenCount, setGreenCount] = useState(0);

  useEffect(() => {
    // Calculate red and green counts whenever marks change
    let red = 0;
    let green = 0;
    marks.forEach(m => {
      if (m >= 50) {
        green++;
      } else {
        red++;
      }
    });
    setRedCount(red);
    setGreenCount(green);
  }, [marks]);

  let handleIncrement = (index) => {
    let copyArray = [...marks];
    copyArray[index] = copyArray[index] + 1;
    setMarks(copyArray);
  };

  let handleDecrement = (index) => {
    let copyArray = [...marks];
    copyArray[index] = copyArray[index] - 1;
    setMarks(copyArray);
  };

  return (
    <>
      <div>
        <h2>Passing: {greenCount}</h2>
        <h2>Failing: {redCount}</h2>
      </div>
      <div className='container' style={{ height: "100%", display: "flex", justifyContent: "center" }}>
        <div>
          {marks.map((m, i) => {
            return (
              <div key={i}>
                <button style={{ backgroundColor: m >= 50 ? 'green' : 'red' }} onClick={() => handleIncrement(i)}>
                  <span className='symbol'>+</span>
                </button>
                <span className='texT'>{m}</span>
                <button style={{ backgroundColor: m >= 50 ? 'green' : 'red' }} onClick={() => handleDecrement(i)}>
                  <span className='symbol'>-</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
