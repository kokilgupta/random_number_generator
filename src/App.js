import React,{useState} from 'react';
import './App.css';
const App=()=> {
  const[lowerLimit,setLowerLimit]=useState("");
  const[upperLimit,setUpperLimit]=useState("");
  const[click,setClick]=useState(false);
  const[number,setNumber]=useState("");

  const lowerLimitHandler=(event)=>{
    const low=event.target.value;
    const re = /^[0-9\b]+$/;
    if(low===' '||re.test(low))
    {
      setLowerLimit(low);
    }
    else
    {
      alert("Enter Valid Number");
    }
  };

  const upperLimitHandler=(event)=>{
    const high=event.target.value;
    const re = /^[0-9\b]+$/;
    if(high===' '||re.test(high))
    {
      setUpperLimit(high);
    }
    else
    {
      alert("Enter Valid Number");
    }
  };

  const toggleClickHandler=()=>{
    if(click===false)
    setClick(true);
    if(lowerLimit==="")
      alert("Please enter Lower Limit");
    else if(upperLimit==="")
      alert("Please enter Upper Limit");
    else
    {
      const num= String(Math.floor(Math.random() * (Number(upperLimit) - Number(lowerLimit) +1)) + Number(lowerLimit));
      setNumber(num);
    }
  }

  const resetHandler=()=>{
    setLowerLimit("");
    setUpperLimit("");
    setNumber("");
  }

  return (
    <div className="main_page">
           <div className="random">
            <div className="lower">
                  {/*<p className="limit_text">Lower Limit</p>*/}
              <input type="text"
                     placeholder="Enter Lower Limit"
                     className="limit_box"
                     value={lowerLimit}
                     onChange={lowerLimitHandler}/>

            </div>
             <div className="upper">
                 {/* <p className="limit_text">Upper Limit</p>*/}
               <input type="text"
                      placeholder="Enter Upper Limit"
                      className="limit_box"
                      value={upperLimit}
                      onChange={upperLimitHandler} />

             </div>
             <button className="generate"
                     onClick={toggleClickHandler}>
               Generate Number </button>
             <div className="generated_number">
               {(click===true)?number :null}
             </div>
               <button className="reset" onClick={resetHandler}>Reset</button>



           </div>
    </div>
  );
}

export default App;
