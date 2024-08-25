const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
	res.send('Hello welcome to Home School Tracker!');
});

app.listen(port,()=>{
	console.log(`Server is running on http://localhost:${port}`);

});
