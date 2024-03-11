import React from 'react'
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
    yAxis: [
      {
        label: 'rainfall (mm)',
      },
    ],
    width: 800,
    height: 300,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-20px, 0)',
      },
    },
  };
  const dataset = [
    {
      cruiseboat: 59,
      noncruiseboat: 57,
      canalstyle: 86,
      pantoon: 21,
      month: 'Jan',
    },
    {
      cruiseboat: 50,
      noncruiseboat: 52,
      canalstyle: 78,
      pantoon: 28,
      month: 'Fev',
    },
    {
      cruiseboat: 47,
      noncruiseboat: 53,
      canalstyle: 106,
      pantoon: 41,
      month: 'Mar',
    },
    {
      cruiseboat: 54,
      noncruiseboat: 56,
      canalstyle: 92,
      pantoon: 73,
      month: 'Apr',
    },
    {
      cruiseboat: 57,
      noncruiseboat: 69,
      canalstyle: 92,
      pantoon: 99,
      month: 'May',
    },
    {
      cruiseboat: 60,
      noncruiseboat: 63,
      canalstyle: 103,
      pantoon: 144,
      month: 'June',
    },
    {
      cruiseboat: 59,
      noncruiseboat: 60,
      canalstyle: 105,
      pantoon: 319,
      month: 'July',
    },
    {
      cruiseboat: 65,
      noncruiseboat: 60,
      canalstyle: 106,
      pantoon: 249,
      month: 'Aug',
    },
    {
      cruiseboat: 51,
      noncruiseboat: 51,
      canalstyle: 95,
      pantoon: 131,
      month: 'Sept',
    },
    {
      cruiseboat: 60,
      noncruiseboat: 65,
      canalstyle: 97,
      pantoon: 55,
      month: 'Oct',
    },
    {
      cruiseboat: 67,
      noncruiseboat: 64,
      canalstyle: 76,
      pantoon: 48,
      month: 'Nov',
    },
    {
      cruiseboat: 61,
      noncruiseboat: 70,
      canalstyle: 103,
      pantoon: 25,
      month: 'Dec',
    },
  ];
  

const Sales = () => {
    const valueFormatter = (value) => `${value}no`;
    return (
        <div style={{width : '800px'}}>
            <Card >
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Bookings
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Bookings made this year
                        </Typography>
                        <div style={{marginLeft: '10px',marginRight: '10px'}}>

                        <BarChart
                            dataset={dataset}
                            xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                            series={[
                                { dataKey: 'cruiseboat', label: 'cruiseboat', valueFormatter },
                                { dataKey: 'noncruiseboat', label: 'noncruiseboat', valueFormatter },
                                { dataKey: 'canalstyle', label: 'canalstyle', valueFormatter },
                                { dataKey: 'pantoon', label: 'pantoon', valueFormatter },
                            ]}
                            {...chartSetting}
                            />
                            </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default Sales
