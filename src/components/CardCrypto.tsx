import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box as div } from '@mui/material';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import Chart from 'react-apexcharts'
import CircularProgress from '@mui/material/CircularProgress';
import moment from 'moment';
import { Button, Collapse, Divider, Paper } from '@mui/material';
import axios from 'axios';


function formatter(value: number) {
  var val: any = Math.abs(value);

  if (value >= 1000) {
    if (val >= 10 ** 3 && val < 10 ** 6) {
      val = "$ " + (val / 1000).toFixed(5) + ' K'
    } else if (val >= 10 ** 6) {
      val = "$ " + (val / 1000000).toFixed(5) + ' M'
    } else {
      val = val;
    }
  } else {
    val = "$ " + (value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
  return val
}


function formatterPercentage(value: number) {
  var val: string = (value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  return val + "%"
}

const Widget = styled('div')(({ theme }) => ({
  padding: 15,
  borderRadius: 20,
  width: "80%",
  margin: 'auto',
  position: 'relative',
  zIndex: 1,
  color: theme.palette.mode === 'dark' ? "white" : 'black',
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
  backdropFilter: 'blur(40px)',
}));

const CoverImage = styled('div')({
  width: "5%",
  minWidth: 50,
  objectFit: 'cover',
  overflow: 'hidden',
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: 'rgba(0,0,0,0.08)',
  '& > img': {
    width: '100%',
  },
});



const Item = styled(Paper)(({ theme, value }: { theme: any, value: number }) => ({
  backgroundColor: value < 0 ? 'red' : 'green',
  padding: theme.spacing(2),
  textAlign: 'center',
  color: "white",
}));




export default function CardCrypto(props: any) {
  const theme = useTheme();

  const state: any = {
    options: {
      chart: {
        id: 'apexchart-example',
      }, dataLabels: {
        enabled: false
      }, yaxis: {
        labels: {
          show: false,
          formatter: formatter
        },

      }, xaxis: {
        labels: {
          show: false,
        }
      }, grid: {
        show: false
      }, tooltip: {
        x: {
          format: 'dd MMM yyyy',
          formatter: function (value: number) {
            return moment().subtract(value, "hour").from(moment(new Date(`${props.last_updated}`)));
          }
        },
      },
    },
    series: [{
      name: "Price",
      data: [...props.sparkline_in_7d.price].reverse()
    }]
  }
  const [open, setOpen] = React.useState(false);
  const [getInfo, setInfo] = React.useState<any>();
  const parser = new DOMParser();

 

  React.useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${props.id}?tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`)
      .then((res: any) => {
        const item: any = parser.parseFromString(res.data.description.en, "text/html");
        setInfo(item.querySelector("body").innerText)
      })
  }, [props])


  return (
    <div style={{ width: '100%', overflow: 'hidden' }}   >
      <Widget sx={{ boxShadow: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CoverImage>
            <img
              alt="can't win - Chilling Sunday"
              src={props.image}

            />
          </CoverImage>

          <Stack style={{ marginLeft: 10 }} >
            <Typography variant="caption" color="text.secondary" >
              {props.symbol.toUpperCase()}
            </Typography>
            <Typography variant='h5'>
              <strong>{props.name}</strong>
            </Typography>
          </Stack>

        </div>

        <>
          <Typography variant='h6'>
            <strong>{`USD $ ${props.current_price}`}</strong>
          </Typography>
          <div
            style={{
              marginTop: 20,
              marginBottom: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <div>
                in 1h
                <Item theme={theme} value={props.price_change_percentage_1h_in_currency}>
                  {formatterPercentage(props.price_change_percentage_1h_in_currency)}
                </Item>
              </div>
              <div>
                in 24h
                <Item theme={theme} value={props.price_change_percentage_24h_in_currency}>
                  {formatterPercentage(props.price_change_percentage_24h_in_currency)}
                </Item>
              </div>
              <div>
                in 7 days
                <Item theme={theme} value={props.price_change_percentage_7d_in_currency}>
                  {formatterPercentage(props.price_change_percentage_7d_in_currency)}
                </Item>
              </div>
              <div>
                in 1 year
                <Item theme={theme} value={props.price_change_percentage_1y_in_currency}>
                  {formatterPercentage(props.price_change_percentage_1y_in_currency)}
                </Item>
              </div>
            </Stack>
          </div>
          <Chart options={state.options} series={state.series} type="area" width={"100%"} height={120} />
        </>

        <Button fullWidth onClick={() => setOpen(!open)} variant={open ? "contained" : 'text'} color={open ? "warning" : undefined}>
          Details
        </Button>
        <Collapse in={open} timeout="auto" unmountOnExit >
          <Paper style={{
            padding: 20, color: theme.palette.mode === 'dark' ? "white" : 'black',
            backgroundColor:
              theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
          }}>
            {getInfo}
          </Paper>
        </Collapse>

      </Widget>
    </div>
  );
}