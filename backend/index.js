const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())

const whiteList = ['http://localhost:4200']

const corsOptions = {
  origin: function(origin, callback){
    if(whiteList.indexOf(origin) != -1){
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.get('/', cors(corsOptions), (req, res) => {
  res.json({
    "status":200,
    "message":"working"
  })
})

app.get('/testing', cors(corsOptions), (req, res) => {
  res.json({
    "status":200,
    "message":"test1234"
  })
})


app.listen(port, () => {
  console.log(`The Hire me-inator is alive on port ${port} !!!`)
})