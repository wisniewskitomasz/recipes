const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = 9000;

const admin = require("firebase-admin");
const serviceAccount = require("./ServiceAccountKey.json");

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://recipes-e8e4c.firebaseio.com"
});

const db = admin.database();
const dbRef = db.ref("object");
let recipes, recipe;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/api/create', (req, res) => {
  let data = req.body;
  dbRef.child(data.id).set(data);
  return res.send(data);
})

app.post('/api/delete', (req, res) => {
  let list ,filtered;
  dbRef.once('value', snap => {
        list = snap.val();
        filtered = Object.values(list).filter(data => data.id != req.body.id);

  dbRef.set(filtered);
  })
  return res.send(filtered);
});

app.get('/api/read', (req, res) => {
  (async () => {
    try {
      await dbRef.once('value', snap => {
        recipes = snap.val();
      })
      return res.status(200).send(recipes);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

app.post('/api/read/item', (req, res) => {
  (async () => {
    try {
      await dbRef.once('value', snap => {
        let response = snap.val();
        recipe = response.filter(data => data.id == req.body.id);
      })
      return res.status(200).send(recipe);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
})

app.get('/api/read/item', (req, res) => {
  return res.status(200).send(recipe);
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))