
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Configuration
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// Mock Data
const restaurants = [
  { id: 1, name: "Pizza Place", menu: [{ name: "Margherita Pizza", price: 12.99 }, { name: "Pepperoni Pizza", price: 14.99 }] },
  { id: 2, name: "Burger Joint", menu: [{ name: "Cheese Burger", price: 9.99 }, { name: "Chicken Burger", price: 10.99 }] },
  { id: 3, name: "Sushi Spot", menu: [{ name: "Salmon Roll", price: 8.99 }, { name: "Tuna Roll", price: 9.99 }] }
];

// Routes
app.get("/", (req, res) => {
  res.render("index", { restaurants });
});

app.get("/menu/:id", (req, res) => {
  const restaurant = restaurants.find(r => r.id == req.params.id);
  if (restaurant) {
    res.render("menu", { restaurant });
  } else {
    res.status(404).send("Restaurant not found!");
  }
});

app.post("/order", (req, res) => {
  const { restaurantName, itemName, price } = req.body;
  res.send(<p<h2>Order Successful!</h2>>You ordered <strong>${itemName}</strong> from <strong>${restaurantName}</strong> for <strong>$${price}</strong>.</p><a href="/">Back to Home</a>);
});

app.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});

// need to install node.js also from browser
// folder in xampp/tomcat/webapps
// food-delivery/
// ├── views/              # (Must be named 'views')
// │   ├── index.ejs       # Home page (Restaurant list)
// │   └── menu.ejs        # Menu page (Order items)
// ├── server.js

// in cmd promt 
// 1.got to path C:\xampp\tomcat\webapps> --------cd food-delivery
// 2. C:\xampp\tomcat\webapps\food-delivery>-----npm init -y
// 3.C:\xampp\tomcat\webapps\food-delivery>------npm install express ejs body-parser
// 4.C:\xampp\tomcat\webapps\food-delivery>------node server.js
