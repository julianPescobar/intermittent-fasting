import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  function formatDate(date: any){
    let d = new Date(date);
    let month = (d.getMonth() + 1).toString();
    let day = d.getDate().toString();
    let year = d.getFullYear();
    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }
    return [year, month, day].join('-');
  }
var datos : any = localStorage.getItem("user");
        let user = JSON.parse(datos);
       let weights = user.prevWeights


export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Your weight over time',
      },
    },
  };
  
  const labels = weights.map((s : any) => formatDate(s.date));
  
  export const data = {
    labels,
    datasets: [
        {
          label: 'Weight (in kilograms)',
          data: weights.map((s : any) => s.weight),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }]
}

const WeightChart = () => {
    return (
      
          <Line id='weightChart'  data={data}/>
       
      );
      
}
export default WeightChart