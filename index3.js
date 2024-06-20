import express from "express";

const app = express();
const port = 3000;

function helloFunction(req, res, next){
  console.log("the request method name is: ", req.method);
  console.log("the request url name is: ", req.url);
  next();
}

app.use(helloFunction)


app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
