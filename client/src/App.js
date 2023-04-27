import { useEffect, useState } from "react";
import depInjLib from "./standalone";

function App() {

  const [data, setData] = useState([]);

  const fetchInfo = async () => { 
  const res = await fetch("http://localhost:5606");
    const d = await res.json();
    setData(d.data);
  }
    
  useEffect(() => {
    fetchInfo();
  }, [])
  
  return (
    <>
      <div>Result of frontend import</div>
      <div>Test {depInjLib.someFunction()}</div>
      <hr />
      <div>Fetching same imports from the backend:</div>
      <div>{data && data.map((item, i) => (
        <div key={i}>{item}</div>
      ))}</div>
    </>
  );
}

export default App;
