const express = require("express");

const app = express();



// set up a route to respond to GET requests to the root URL　main.html
app.use(express.static("public"));


// Set up the server to listen on port 8080
const port = 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);

