const express = require('express')
const app = express()
const port = 9000

app.get('/dummy/v1/test', (req, res) => {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.status(200).json({status: "OK"});
  }
)

app.get('/dummy/v1/status', (req, res) => {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.status(200).json({version: "1"});
  }
)
app.listen(port)