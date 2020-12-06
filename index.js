const express = require("express");
const app = express();

app.use((req, res) => {
	console.log("we got a request");
	res.send("hello, we got your request");
});

app.listen(3000, () => {
	console.log("listening on port 3000");
});
