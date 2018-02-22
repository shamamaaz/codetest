const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.post('/requst', (req, resp) => {
    try {
        var payload = req.body.payload;
        var response = [];
        payload.forEach(item => {
            const addr = item.address;
            response.push({
                concataddress: `${addr.buildingNumber} ${addr.street} ${addr.suburb} ${addr.state} ${addr.postcode}`,
                type: item.type,
                workflow: item.workflow
            });
        });
        resp.send({response});
    } catch (err) {
        resp.send(400, {error: 'Could not decode request: JSON parsing failed'});
    }
    
});
app.listen(3000, () => {
    console.log('App is listening port 3000!');
});

