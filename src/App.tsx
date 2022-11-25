import reactLogo from './assets/react.svg'
import './App.css'
import CardCrypto from './components/CardCrypto'
import * as React from 'react'
import axios from 'axios'
import { Pagination, Stack, Typography, Box, Paper } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import moment from 'moment'








function App() {

  const [currencys, setCurrencys] = React.useState<Array<any>>([])
  const [page, setPage] = React.useState<number>(1);
  const [refresh, setRefresh] = React.useState(false);


  function getData() {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=${page}&sparkline=true&price_change_percentage=1h,24h,7d,1y`)
      .then(res => {
        setCurrencys(res.data)
        setRefresh(false);
      })
    console.log("HEYA")

    setTimeout(getData, 60000)
  }







  React.useEffect(() => {
    getData();
  }, [page])


  return (
    <div >


    <video autoPlay muted loop id="myVideo" src="/bg.mp4"/>

      <div style={{
        width: "100%",
        backgroundColor: "black",
        marginBottom: 20,
        borderEndEndRadius: "50%",
        borderEndStartRadius: "50%",
        paddingBottom: 20
      }}>
        <a href={window.location.href} target="_blank" >
          <img src={"/logo-text.png"} className="logo react" alt="React logo" />
        </a>
      </div>



      <Stack spacing={2} width={"100%"} >


        {currencys.length === 0 ?
          <div style={{ height: "100vh" }}>
            <CircularProgress color="inherit" />
          </div>
          :
          <>
            <Typography variant="h5" color="text.secondary" style={{ marginBottom: 10 }} >
              {
                "Generated " +
                moment(new Date(currencys[0].last_updated)).fromNow()
              }
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              >

              <Pagination page={page} count={20} color="primary" onChange={(event: React.ChangeEvent<any>) => setPage(parseInt(event.currentTarget?.textContent))} />
            </Box>
            {currencys.map((prop: any) => {
              return (
                <>

                  <CardCrypto {...prop} />

                </>
              )
            })}
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center">
              <Pagination page={page} count={20} color="primary" onChange={(event: React.ChangeEvent<any>) => setPage(parseInt(event.currentTarget?.textContent))} />
            </Box>

          </>
        }

      </Stack>


        <footer>
          <a href={"https://github.com/gfLobo/cryptoG"} target="_blank">
          <Paper style={{padding:20}} elevation={10}>
            <img src='https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white'
             style={{minWidth:"10%"}} />
          </Paper>
          </a>
        </footer>

    </div>
  )
}


export default App
