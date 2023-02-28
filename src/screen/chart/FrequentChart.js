import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '../../App.css';
import Chart from "react-google-charts";

const FrequentChartScreen = () => {
  return (
    <>
    <Chart
        // width={'500px'}
        height={'300px'}
        chartType="ComboChart"
        data={[["Frequency", "Frequent Items"], [1, 1.5], [3, 3.5],[4, 4.5],[5, 5.5],[6, 6.5],[7, 7.5]]}
        
        options={{
            // colors: ['#FB7A21'],
            // backgroundColor: '#2F4F4F',
            chart: {
                title: 'Frequent Items',
                subtitle: 'Frequent Items and Frequency',
            },
            legend: { position: 'none' },
            title: "Maximium Frequent Items",
            titleTextStyle: { color: '#3366CC' },
            vAxis: { title: 'Frequency', },
            hAxis: { title: 'Frequent Items', fontSize: 28, },
            seriesType: 'bars',
            series: { 5: { type: 'line' } },
        }}
        
    />
</>
  )
}

export default FrequentChartScreen