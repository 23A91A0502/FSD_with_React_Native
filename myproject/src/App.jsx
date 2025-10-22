import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from './Page1';
import View from './View';
import Details from './details';
import Store from './Store';
import Chart from "react-apexcharts";
import ReactApexChart from 'react-apexcharts';

function App() {
  //bar
  const [state, setState] = React.useState({

    series: [{
      name: 'Solved',
      data: [6.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 3.2]
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'top',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          }
        }

      },
      title: {
        text: 'Monthly solved problems in leetcode, 2024',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444'
        }
      }
    },


  });
  //pie
  const [state2, setState2] = React.useState({

    series: [300, 200, 100],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Easy', 'Medium', 'Hard'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },


  });
  //graph
  const [state3, setState3] = React.useState({

    series: [{
      name: "rating",
      data: [500, 600, 975, 850, 1000, 1100, 1125, 1200]
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Contest Rating by Month',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
    },


  });
  //accuracy
  const [state4, setState4] = React.useState({

    series: [75],
    options: {
      chart: {
        height: 350,
        type: 'radialBar',
        offsetY: -10
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: '16px',
              color: undefined,
              offsetY: 120
            },
            value: {
              offsetY: 76,
              fontSize: '22px',
              color: undefined,
              formatter: function (val) {
                return val + "%";
              }
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91]
        },
      },
      stroke: {
        dashArray: 4
      },
      labels: ['Accuracy'],
    },


  });
  //no-of-sub
  const [state5, setState5] = React.useState({
          
            series: [{
              name: 'Sales',
              data: [40, 30, 20, 30, 20, 15, 20, 30, 40, 50, 30, 40, 25, 50, 60, 40, 35, 45]
            }],
            options: {
              chart: {
                height: 350,
                type: 'line',
              },
              forecastDataPoints: {
                count: 7
              },
              stroke: {
                width: 5,
                curve: 'smooth'
              },
              xaxis: {
                type: 'datetime',
                categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
                tickAmount: 10,
                labels: {
                  formatter: function(value, timestamp, opts) {
                    return opts.dateFormatter(new Date(timestamp), 'dd MMM')
                  }
                }
              },
              title: {
                text: 'Number of Submissions by Month',
                align: 'left',
                style: {
                  fontSize: "16px",
                  color: '#666'
                }
              },
              fill: {
                type: 'gradient',
                gradient: {
                  shade: 'dark',
                  gradientToColors: [ '#22c69aff'],
                  shadeIntensity: 1,
                  type: 'horizontal',
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [0, 100, 100, 100]
                },
              }
            },
          
          
        });



  return (
    <>
      <h1 className='main-heading'>Madhumitha's Coding Profile</h1>
      <div className='bar-and-pie'>
        <div id="chart-bar">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="bar"
            height={350}
          />
        </div>


        <div id="chart">
          <ReactApexChart
            options={state2.options}
            series={state2.series}
            type="pie"
            width={380}
          />
        </div>
      </div>
      <div className='chart-line'>
        <div id="chart">
          <ReactApexChart
            options={state3.options}
            series={state3.series}
            type="line"
            height={350}
          />
        </div>
      </div>
      <div className='bar-and-pie'>
        <div id="chart">
          <ReactApexChart options={state4.options} series={state4.series} type="radialBar" height={350} />
        </div>
        <div id="chart-bar">
                <ReactApexChart options={state5.options} series={state5.series} type="line" height={350} />
              </div>
      </div>
    </>

  )


}

export default App
