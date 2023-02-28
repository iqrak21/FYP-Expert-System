import React,{useState} from 'react';
import Chart from "react-google-charts";
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '../.././App.css';

const PremiumChartScreen = () => {
    const [chartSelect, setChartSelect] = useState(1)
  return (
    <>

            <div className='row justify-content-between mx-2' >
                <div className=''>
                    <h3 className='text-center text-muted '>User Analytics</h3>
                </div>

                <div className=" d-flex justify-content-end mt-2">
                    <button className="btn btn-primary mx-1 mb-1" onClick={() => setChartSelect(1)} >Weekly</button>
                    <button className="btn btn-success mx-1 mb-1" onClick={() => setChartSelect(2)}>Last 30 days</button>
                    <button className="btn btn-warning mx-1 mb-1" onClick={() => setChartSelect(3)}>Yearly</button>
                </div>
            </div>

          
                <div >
                    <Chart

                        chartType="ComboChart"
                        data={[["afe","ii"],[3,3.4],[6,6.9]]}
                        options={{
                            title: "WeekluTitle",
                            legend: { position: 'none' },
                            vAxis: { title: 'Percentage', fontSize: 28, },
                            hAxis: { title: 'Month', fontSize: 28, },
                            seriesType: 'bars',
                            series: { 7: { type: 'line' } },
                        }}
                        
                    />

                </div>
            
        </>
  )
}

export default PremiumChartScreen