# express hapi

Add a route method to an express app or router to create routes in a similar fashion to hapi.js

## Usage

```js
const express = require('express');
const expressHapi = require('express-hapi');

const app = express();
expressHapi(app); // Add the route method to app

// Create an express route using the added route method
app.route({  
    method: 'GET',
    path: '/',
    handler: (req, res, next) => {
      res.json({
        message: 'I\'m so hapi!'
      });
    }
})

const port = process.env.PORT || 3000;
app.listen(port, () =>{
  console.log(`Listening on ${port}`);
});
```
