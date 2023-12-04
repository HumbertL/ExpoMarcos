const express = require('express');
const path = require('path')

const app = express();

const port = process.env.PORT || 3001;

app.use('', express.static(path.join(__dirname, 'dist', 'expo-marcos')));

app.get('*', function(req, res) {
    const uri = path.join(__dirname, 'dist', 'expo-marcos', 'index.html');
    res.sendFile(uri)
});


app.listen(port, () => {
    console.log('app is runnning ing port ' + port);
})