/*----------- chart options -----------*/
export const chartOptions = (name, diff, chartTitle) => {
  const displayHours = diff < 99999;
  const displayDates = diff > 34560000;
  return {
    maintainAspectRatio: false,
    title: {
      display: true,
      text: `${name} ${chartTitle}`,
      fontSize: 22,
      fontColor: '#76dbd1',
      lineHeight: 4
    },
    legend: {
      display: false,
      position: 'right'
    },
    tooltips: {
      xPadding: 13,
      yPadding: 13,
      cornerRadius: 10,
      titleFontSize: 12,
      bodyFontSize: 14,
      callbacks: {
        title: function(tooltipItem, data) {
          // Get current value and convert it with toLocaleString
          const value = data.labels[tooltipItem[0].index];
          return new Date(value * 1000).toLocaleString();
        }
      }
    },
    scales: {
      xAxes: [
        {
          ticks: {
            callback: function(label) {
              // display Date on x-Axis
              return displayHours
                ? new Date(label * 1000).toLocaleTimeString().slice(0, 5)
                : displayDates
                ? new Date(label * 1000).toLocaleDateString('pl')
                : new Date(label * 1000).toLocaleDateString('en', {
                    day: '2-digit',
                    month: 'short'
                  });
            },
            maxTicksLimit: 12,
            lineHeight: 3,
            padding: 7,
            fontSize: `${window.innerWidth > 600 ? 13 : 10}`
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            callback: function(label) {
              return label.toString().length > 10
                ? '$ ' + label.toFixed(5)
                : '$ ' + label;
            },
            fontSize: `${window.innerWidth > 600 ? 14 : 11}`
          },
          display: true
        }
      ]
    }
  };
};

/*----------- chart data -----------*/
export const chartData = (selectedDataTime, selectedDataPrice) => {
  return {
    labels: [...selectedDataTime],
    datasets: [
      {
        label: '(USD)',
        fill: true,
        lineTension: 0.3,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [...selectedDataPrice]
      }
    ]
  };
};
