
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


![image](https://user-images.githubusercontent.com/79761328/204112324-e5bfc216-e8a9-4c78-bde4-eea499fa1c51.png)


## Funcionalidades

- Preço Atual (em dólares)
- Sparkline de 7 dias
- Percentual de mudanças em 24h
- Percentual de mudanças em 1d
- Percentual de mudanças em 7d
- Percentual de mudanças em 1 ano
## Stack utilizada

**Front-end:** React, Material UI, ApexCharts



## Documentação da API


[Coingecko](https://www.coingecko.com/pt/api/documentation)


Rotas utilizadas



#### Retorna todas as moedas

```http
  GET /coins/markets
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `vs_currency` | `string` | **Obrigatório**. O id da moeda em minúsculo. Ex.: Dólar = usd |
| `order`       | `string` | Valores válidos: market_cap_desc, gecko_desc, gecko_asc, market_cap_asc, market_cap_desc, volume_asc, volume_desc, id_asc, id_desc |
| `per_page`    | `integer`| Máximo 100 |
| `page`        | `integer`| Página dos resultados |
| `sparkline`   | `boolean`| Sparkline de 7 dias   |






## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/gfLobo/cryptoG
```

Entre no diretório do projeto

```bash
  cd cryptoG
```

Instale as dependências

```bash
  npm install
```

Start o projeto em desenvolvimento

```bash
  npm run dev
```


## Deploy

Deploy utilizado na demonstração:

### Vercel

<img src="https://www.solutionsgroup.digital/imgs/vercel.png" width="10%" />

## Licença

[MIT](https://github.com/gfLobo/cryptoG/blob/master/LICENSE.md)

