import React, { useState } from 'react';
import './InsertionSort.css';
import Sidebar from '../../components/Sidebar';

const InsertionSortComponent = () => {
  const [arraySize, setArraySize] = useState();
  const [startPoint, setStartPoint] = useState();
  const [endPoint, setEndPoint] = useState();
  const [randomArray, setRandomArray] = useState([]);
  const [sortedArray, setSortedArray] = useState([]);
  const [timeTaken, setTimeTaken] = useState(null);

  const generateRandomArray = () => {
    const newArray = Array.from({ length: arraySize }, () =>
      Math.floor(Math.random() * (endPoint - startPoint + 1)) + startPoint
    );
    setRandomArray(newArray);
    setSortedArray([]);
    setTimeTaken(null);
  };

  const insertionSort = (arr) => {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
      let current = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }

      arr[j + 1] = current;
    }

    return arr;
  };

  const sortArray = () => {
    const startTime = new Date();
    const sorted = insertionSort([...randomArray]);
    const endTime = new Date();
    const elapsedMilliseconds = endTime - startTime;

    setSortedArray(sorted);
    setTimeTaken(elapsedMilliseconds);
  };

  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="container" style={{paddingLeft:'200px'}}>
        <div className='heading'>
          <h3>Insertion Sort</h3>
        </div>
        <div className='third'>
          <div className="form-group">
            <input
              type="number"
              id="arraySize"
              placeholder='Enter Array size'
              className="form-control"
              value={arraySize}
              onChange={(e) => setArraySize(parseInt(e.target.value, 10))}
            />
          </div>
        </div>
        <div className='formTest'>
          <div className="form-group">
            <input
              type="number"
              id="endPoint"
              placeholder='Enter Ending Array Point'
              className="form-control"
              value={endPoint}
              onChange={(e) => setEndPoint(parseInt(e.target.value, 10))}
            />
          </div>
          <div className="second">
            <input
              type="number"
              id="startPoint"
              placeholder='Enter starting Array Point'
              className="form-control"
              value={startPoint}
              onChange={(e) => setStartPoint(parseInt(e.target.value, 10))}
            />
          </div>
        </div>
        <div className="btn-group">
          <button className="btn " onClick={generateRandomArray}>
            Generate Random Array
          </button>
          <button className="btn" onClick={sortArray}>
            Sort Array
          </button>
        </div>
        </div>
        <div className='sub'>
        <div className="arrayDisplay" >
          <div>
            Generated Array:
            <div className="code">
              {randomArray.map((num, index) => (
                <span key={index}>
                  {num}
                  {index < randomArray.length - 1 ? ", " : ""}
                  {(index + 1) % 20 === 0 && <br />}
                </span>
              ))}
            </div>
          </div>
          <div>
            Sorted Array:
            <div className="code">
              {sortedArray.map((num, index) => (
                <span key={index}>
                  {num}
                  {index < sortedArray.length - 1 ? ", " : ""}
                  {(index + 1) % 50 === 0 && <br />}
                </span>
              ))}
            </div>
          </div>
          <p style={{ backgroundColor: 'white' }}>Time taken to sort: {timeTaken !== null ? `${timeTaken} milliseconds` : 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

export default InsertionSortComponent;
