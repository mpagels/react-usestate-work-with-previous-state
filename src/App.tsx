import {useState} from "react";

function App() {
    const [simpleCount, setSimpleCount] = useState(0);
    const [addvancedCount, setAdvancteCount] = useState(0)
    function addJustOneToCount() {
        setSimpleCount(simpleCount + 1)
        setSimpleCount(simpleCount + 1)
        setSimpleCount(simpleCount + 1)
        setSimpleCount(simpleCount + 1)
        // still add 1 to count
    }

    function addsAlways4ToCount() {
        setAdvancteCount(prevState => prevState +1)
        setAdvancteCount(prevState => prevState +1)
        setAdvancteCount(prevState => prevState +1)
        setAdvancteCount(prevState => prevState +1)
        // the callback function with prevState always receives the last temporarily stored value
    }
  return (
    <>
    <h2>{simpleCount}</h2>
        <button onClick={addJustOneToCount}>Add Just one to simpleCount, but call setSimpleCount 4 times</button>
        <h2>{addvancedCount}</h2>
        <button onClick={addsAlways4ToCount}>Add always 4 to addvancedCounts, because setAdvancteCount is called 4 times</button>
    </>
  )
}

export default App
