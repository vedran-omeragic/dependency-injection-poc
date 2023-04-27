const cors = require('cors');
const express = require('express');
const depInjLib = require('./standalone');

const app = express();
const port = 5606;

app.use(cors({ origin: "*" }));

app.get('/', function (req, res) {
    res.status(200).json({
        title: "Today we're testing some dependency injection!",
        data: [
            depInjLib.someFunction(),
        ]
    });
})

app.listen(port, () => {
    console.log(`Starting node on port ${port}`);
}); 