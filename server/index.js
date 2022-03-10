const express = require('express')
const http = require('http')
const {
  v4: uuidv4
} = require('uuid')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000

const server = http.createServer(app)

app.use(cors())

// 跨域
const io = require('socket.io')(server, {
  cors: {
    origin: '*', //所有
    methods: ['GET', 'POST'],
  }
})

app.listen(PORT, () => {
  console.log(`服务器正在${PORT}运行...`);
})