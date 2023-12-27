import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import QuickSort from "./pages/quicksort/QuickSort";
import HeapSort from "./pages/heapSort/HeapSort";
import CountingSort from "./pages/countingSort/CountingSort";
import InsertionSortComponent from "./pages/insertionSort/InsertionSort";
import LCS from "./pages/lcs/LCS";



function App() {
  const [contentHeight, setContentHeight] = useState(0); 

  // useEffect(() => {
  //   const headerElement = document.getElementById("header");
  //   const footerElement = document.getElementById("footer");

  //   if (!headerElement) {
  //     console.error("Header element not found.");
  //   }

  //   if (!footerElement) {
  //     console.error("Footer element not found.");
  //   }

  //   const headerHeight = headerElement?.clientHeight || 0;
  //   const footerHeight = footerElement?.clientHeight || 0;
  //   const calculatedContentHeight = window.innerHeight - (headerHeight + footerHeight);

   

  //   setContentHeight(calculatedContentHeight); 

  // }, []);
 
 

  return (
    <>
    
  
     
        <Routes>
       
        <Route path="/quicksort" element={<QuickSort />} />
        <Route path="/" element={<HeapSort />} />
        <Route path="/countingsort" element={<CountingSort />} />
          <Route path="/insertionsort" element={<InsertionSortComponent />} />
          <Route path="/lcs" element={<LCS/>} />
       
        </Routes>
     
      
    </>
  );
}

export default App;
