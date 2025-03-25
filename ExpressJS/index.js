const express = require('express')
const app = express()
const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  
/* app.use('/', (req, res) => {
    console.log('Request received!');
    res.send("<h1>Hello World!</h1>");
  res.send('Hello World!')
})

 */

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.get('/apple', (req, res) => {
    res.send('saiwjihdshfbsbfsjkfnsuhbvnbnvbjsvnsbhhfsfhg hiuhijkijsmjfh bhuh jhiijuhb j8libMiind Sangae Milin Sangale')
  })
app.get('/password', (req, res) => {
  console.log(req.params);
    res.send('sanika!')
  })
app.get('/sangale', (req, res) => {
  console.log(req.params);
    res.send('<h1>Milind Raosaheb Sanga;e<h>')
  })


  app.get("/search", (req, res) => {
    let {q} = req.query;
    res.send(`<h1>My name is  ${q}<h1>`);
  
  });


   

