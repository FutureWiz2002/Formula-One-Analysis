import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


export default function Home() {
  

  return (
  <div>
    <div className='slate-100 rounded-xl p-8 m-5 dark:bg-slate-800'>Welcome to the World of F1 Data Analysis</div>
    <div className='slate-100 rounded-xl p-8 m-5 dark:bg-slate-800'>
      <h1>Basic Overview</h1>
    </div>
    <div className='slate-100 rounded-xl p-8 m-5 dark:bg-slate-800'>
      <h1>Constructors Analysis</h1>
      {/* <canvas id="myChart"></canvas> */}
    </div>
    <div className='slate-100 rounded-xl p-8 m-5 dark:bg-slate-800'>
      <h1>Driver Analysis</h1>
      {/* <div><canvas id="acquisitions"></canvas></div> */}
    </div>
  </div>
  )
}
