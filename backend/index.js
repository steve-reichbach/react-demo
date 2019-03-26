const express = require('express');
const app = express();
const port = 3001;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    next();
});

app.get('/api', (req, res) => res.json(DATA));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const DATA = {
    "resources": [
        {
            "id": "1",
            "name": "Item 1",
            "description": "This is Item 1 description",
            "resourceType": "x resource type 1",
            "path": "servers/security/resources/item_1",
            "actionIds": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ]
        },
        {
            "id": "2",
            "name": "Item 2",
            "description": "This is Item 2 description",
            "resourceType": "x resource type 1",
            "path": "servers/security/resources/item_2",
            "actionIds": [
                "6",
                "7",
                "8",
                "9",
                "10"
            ]
        },
        {
            "id": "3",
            "name": "Item 3",
            "description": "This is Item 3 description",
            "resourceType": "x resource type 1",
            "path": "servers/security/resources/item_3",
            "actionIds": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ]
        },
        {
            "id": "4",
            "name": "Item 4",
            "description": "This is Item 4 description",
            "resourceType": "x resource type 1",
            "path": "servers/security/resources/item_4",
            "actionIds": [
                "6",
                "7",
                "8",
                "9",
                "10"
            ]
        },
        {
            "id": "5",
            "name": "Item 5",
            "description": "This is Item 5 description",
            "resourceType": "x resource type 1",
            "path": "servers/security/resources/item_5",
            "actionIds": [
                "1",
                "2",
                "3",
                "4",
                "5"
            ]
        }
    ],
    "actions": [
        {
            "id": "1",
            "name": "Action 1"
        },
        {
            "id": "2",
            "name": "Action 2"
        },
        {
            "id": "3",
            "name": "Action 3"
        },
        {
            "id": "4",
            "name": "Action 4"
        },
        {
            "id": "5",
            "name": "Action 5"
        },
        {
            "id": "6",
            "name": "Action 6"
        },
        {
            "id": "7",
            "name": "Action 7"
        },
        {
            "id": "8",
            "name": "Action 8"
        },
        {
            "id": "9",
            "name": "Action 9"
        },
        {
            "id": "10",
            "name": "Action 10"
        }
    ]
};