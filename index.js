import express from "express";
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 5000;

//Cors is for receive data from client to this server
app.use(cors());
//do this to convert stringify-json data from client to js data for this server
app.use(express.json());

// Create users data
const users = [
    {id:1, name:"Mstr Jhon", email:"jhon@yoyo.com"},
    {id:2, name:"Abdul Kadir", email:"abdul@gmail.com"},
    {id:3, name:"Ibrahim Khalil", email:"ibrahim@gmail.com"},
]

// Create API
app.get('/', (req, res) => {
    res.send("Hello World from Express.js");
})

app.get('/users', (req, res) => {
    res.send(users);
})

//Post API
app.post('/users', (req, res) => {
    console.log("Data from client: ", req.body);
    const newUser = req.body;
    //Temporary data storage...
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send({success: true, message: 'user addess successfully!!!!'});
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})