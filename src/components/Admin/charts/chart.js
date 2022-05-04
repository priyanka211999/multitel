import React, { useState, useEffect } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "./chart.css"


function LineGraph() {
  const [chart, setChart] = useState("");

  const data = {
    labels: [
      '10/04/2018', '10/05/2018', 
      '10/06/2018', '10/07/2018', 
      '10/08/2018', '10/09/2018', 
      '10/10/2018', '10/11/2018', 
      '10/12/2018', '10/13/2018', 
      '10/14/2018', '10/15/2018'
    ],
    datasets: [
      {
        label: 'Total Sales',
        data: [63,47,27,48,60,90,32,25,52,52,62,19],
        fill: true,          // Don't fill area under the line
        borderColor: 'blue'  // Line color
      }
    ]
  }

  const data2 = {
    labels: [
      '10/04/2018', '10/05/2018', 
      '10/06/2018', '10/07/2018', 
      '10/08/2018', '10/09/2018', 
      '10/10/2018', '10/11/2018', 
      '10/12/2018', '10/13/2018', 
      '10/14/2018', '10/15/2018'
    ],
    datasets: [
      {
        label: 'earnings',
        data: [22,19,27,23,22,24,17,25,23,24,20,19],
        fill: true,          // Don't fill area under the line
        borderColor: 'blue'  // Line color
      }
    ]
  }

//   const options = {
//       tension:0.3,
//         title:{
//             display:true,
//             text:"Line chart"
//         },
//         scales:{
//             yAxes:[
//                 {
//                     ticks:{

//                         suggestedMin:0,
//                         max:100,
//                         stepSize:10
//                     }
//                 }
//             ],
//     maintainAspectRatio: false
//   }

//    }

//   const options2 = {
//         tension:0.3,
//           title:{
//               display:true,
//               text:"Line chart"
//           },
//           scales:{
//               yAxes:[
//                   {
//                       ticks:{

//                           suggestedMin:0,
//                           max:100,
//                           stepSize:10
//                       }
//                   }
//               ],
//     maintainAspectRatio: false,
//   }

//     }
  return (
      <center>
    <div className="row">
      <div>
        <h4>Total sales 2022</h4>
        <article className="canvas-container">
          <Line data={data}  />
          {console.log("ytfytf", chart)}
        </article>
      </div>
      <div>
        <h4>Total Earnings 2022</h4>
        <article className="canvas-container">
          <Line data={data2}  />
        </article>
      </div>
    </div>
    </center>
  );
}

export default LineGraph;
