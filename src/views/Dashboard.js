import React, { useState } from "react";
import Grid from "components/Sidebar/grid.js";
import Pie from "components/Sidebar/piechart.js";
import Line from "components/Sidebar/Linechart.js";


const Dashboard = () => {
  const [num, setNum] = useState(50);

    const incNum = () => {
      setNum(num + 1);
    };
    const decNum = () => {
      if(num > 20) {
        setNum(num - 1);
      }else {
        setNum(20);
      }
    };
    const [num1 ,setNum1] = useState(50);
    const incNum1 = () => {
      setNum1(num1 + 1);
    };
    const decNum1 = () => {
      if(num1 >20){
        setNum1(num1 - 1);
      }else{
        
        setNum1(20);
      }
    };
    const [num2 ,setNum2] = useState(50);
    const incNum2 = () => {
      setNum2(num2 + 1);
    };
    const decNum2 = () => {
      if(num2 >20){
        setNum2(num2 - 1);
      }else{
        
        setNum2(20);
      }
    };
    const [num3 ,setNum3] = useState(50);
    const incNum3 = () => {
      setNum3(num3 + 1);
    };
    const decNum3 = () => {
      if(num3 >20){
        setNum3(num3 - 1);
      }else{
        
        setNum3(20);
      }
    };
    const [num4 ,setNum4] = useState(50);
    const incNum4 = () => {
      setNum4(num4 + 1);
    };
    const decNum4 = () => {
      if(num4 >20){
        setNum4(num4 - 1);
      }else{
        setNum4(20);
      }
    };
    return (
      <div>
        <Grid numb1={num} inc1={incNum} dec1={decNum}
              numb2={num1} inc2={incNum1} dec2={decNum1}
              numb3={num2} inc3={incNum2} dec3={decNum2}
              numb4={num3} inc4={incNum3} dec4={decNum3}
              numb5={num4} inc5={incNum4} dec5={decNum4}
        />
        <Line numb1={num} numb2={num1}
           numb3={num2} numb4={num3} 
           numb5={num4} />
        <Pie numb1={num} numb2={num1}
           numb3={num2} numb4={num3} 
           numb5={num4} />
      </div>
    );
  }

export default Dashboard;