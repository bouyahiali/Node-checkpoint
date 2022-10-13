const http = require('http');

const server = http.createServer( (req,res) => {
    res.end('<h1>Hello Node!!!!</h1>')
})
server.listen(3000,  () => {
  console.log(`Server is running on PORT: 3000 );
});
