// import 'dotenv/config';
// const require()
// import connectDb from './utils/connect.util';
// import createServer from './utils/server.util';

const createServer = require("./utils/server.util")
const connectDb = require("./utils/connect.util")
require('dotenv').config()

// Create Server
const app = createServer()

//creating a port for the server
const port = process.env.PORT || 5000

app.listen(port, async () => {
		console.log(`Server don start for ${port}...`);
		await connectDb();
});