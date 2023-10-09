import Chart from 'chart.js/auto';
import Constructors from "../../images/"

export default function Home() {
  return (
  <div>
    <div className='slate-100 rounded-xl p-8 m-5 dark:bg-slate-800'>Welcome to the World of F1 Data Analysis</div>
    <div className='slate-100 rounded-xl p-8 m-5 dark:bg-slate-800'>
      <h1>Basic Overview</h1>
    </div>
    <div className='slate-100 rounded-xl p-8 m-5 dark:bg-slate-800'>
      <h1>Team Analysis</h1>
      <img src={Constructors} width={500} height={500} />
    </div>
    <div className='slate-100 rounded-xl p-8 m-5 dark:bg-slate-800'>
      <h1>Driver Analysis</h1>
      <div><canvas id="acquisitions"></canvas></div>
    </div>
  </div>
  )
}
