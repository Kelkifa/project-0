const express = require('express');
const path = require('path'); // NEW

/** defint index.html path */
const DIST_DIR = path.join(__dirname, '../public/dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // 

const app = express();
const port = process.env.PORT || 3000;
const mockResponse = {
    foo: 'bar',
    bar: 'foo'
};

/** Static folder */
app.use(express.static(DIST_DIR)); // NEW

/** router api */
const router = require('./app/routes');
router(app);

// app.get('/api', (req, res) => {
//     res.send(mockResponse);
// });
app.get('/', (req, res) => {
    res.sendFile(HTML_FILE); // EDIT
});
app.listen(port, function () {
    console.log('App listening on port: ' + port);
});