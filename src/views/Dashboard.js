import React from "react";
import Grid from "components/grid";
import Pie from "components/piechart.js";
import Line from "components/Linechart.js";

const Dashboard = () => {
  // const [num, setNum] = useState(50);

  //   const incNum = () => {
  //     setNum(num + 1);
  //   };
  //   const decNum = () => {
  //     if(num > 20) {
  //       setNum(num - 1);
  //     }else {
  //       setNum(20);
  //     }
  //   };
  //   const [num1 ,setNum1] = useState(50);
  //   const incNum1 = () => {
  //     setNum1(num1 + 1);
  //   };
  //   const decNum1 = () => {
  //     if(num1 >20){
  //       setNum1(num1 - 1);
  //     }else{
        
  //       setNum1(20);
  //     }
  //   };
  //   const [num2 ,setNum2] = useState(50);
  //   const incNum2 = () => {
  //     setNum2(num2 + 1);
  //   };
  //   const decNum2 = () => {
  //     if(num2 >20){
  //       setNum2(num2 - 1);
  //     }else{
        
  //       setNum2(20);
  //     }
  //   };
  //   const [num3 ,setNum3] = useState(50);
  //   const incNum3 = () => {
  //     setNum3(num3 + 1);
  //   };
  //   const decNum3 = () => {
  //     if(num3 >20){
  //       setNum3(num3 - 1);
  //     }else{
        
  //       setNum3(20);
  //     }
  //   };
  //   const [num4 ,setNum4] = useState(50);
  //   const incNum4 = () => {
  //     setNum4(num4 + 1);
  //   };
  //   const decNum4 = () => {
  //     if(num4 >20){
  //       setNum4(num4 - 1);
  //     }else{
  //       setNum4(20);
  //     }
  //   };
    return (
      
       <div>
          <Grid />
          <div className="row">
          <div className="col-md-8">
          <Line />
          </div>
          <div className="col-md-4">
          <Pie />
          </div>
          </div>
          </div>
    );
  }

export default Dashboard;