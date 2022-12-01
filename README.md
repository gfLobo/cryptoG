
<p align="center" >
    <img src="https://crypto-g.vercel.app/logo-text.png" 
        alt="Picture" 
        width="50%" 
        style="display: block; margin: 0 auto" />
</p>

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;



https://user-images.githubusercontent.com/79761328/204671243-a93577ce-afe6-4c4c-b049-8fb15ca6b89e.mp4


## Features

- Current Price (in dollars)
- 7-day Sparkline



- Percentage of changes in 24h
- Percentage of changes in 1d
- Percentage of changes in 7d
- Percentage of changes in 1 year

## Stack

**Front-end:** React, Material UI, ApexCharts



## Docs


[Coingecko](https://www.coingecko.com/pt/api/documentation)


Routes


#### All coins

```http
  GET /coins/markets
```

| Parameters  | Type       | Description                         |
| :---------- | :--------- | :---------------------------------- |
| `vs_currency` | `string` | **Required**. The target currency of market data (usd, eur, jpy, etc.) |
| `order`       | `string` | valid values: market_cap_desc, gecko_desc, gecko_asc, market_cap_asc, market_cap_desc, volume_asc, volume_desc, id_asc, id_desc sort results by field. |
| `per_page`    | `integer`| Max 100 |
| `page`        | `integer`| Page |
| `sparkline`   | `boolean`| Include sparkline 7 days data (eg. true, false)

Default value : false   |






## Run locally

Clone the project
```bash
  git clone https://github.com/gfLobo/cryptoG
```

Change the directory

```bash
  cd cryptoG
```

Install all the dependencys

```bash
  npm install
```

Run

```bash
  npm run dev
```


## Deploy

### Vercel

<img src="https://www.solutionsgroup.digital/imgs/vercel.png" width="10%" />

## License

[MIT](https://github.com/gfLobo/cryptoG/blob/master/LICENSE.md)

