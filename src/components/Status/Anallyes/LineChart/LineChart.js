import React from 'react'
import ReactApexChart from 'react-apexcharts';
import {Box} from './style'


function LineChart() {
    const chartOptions = {
        chart: {
            id: 'gradient-line',
            toolbar: {
                show: false, // Disable export functionality
              },
        },
        xaxis: {
          categories: ['Jan', 'Fev', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yaxis: {
            tickAmount: 3, // Specify the number of ticks (including min and max)
            labels: {
              formatter: (value) => {
                // Custom label formatting
                if (value === 100 || value === 200 || value === 300 || value === 400) {
                  return value;
                }
                return '';
              },
            },
          },
        fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              type: 'horizontal',
              shadeIntensity: 0.3,
              opacityFrom: 1,
              opacityTo: 0.5,
              stops: [0, 100],
            },
          }, 
      };
    
      const chartSeries = [
        {
          name: 'series-1',
          data: [150, 220, 180, 245, 302, 375, 300,250, 220, 150,120],
        },
      ];
    
  return (
    <Box>
        
        <ReactApexChart
      options={chartOptions}
      series={chartSeries}
      type="line"
      height={150}
    />
    </Box>
  )
}

export default LineChart