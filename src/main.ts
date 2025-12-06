import express from "express";
import customerRouter from "./routes/customer-route";
import restaurantRouter from "./routes/restaurant-route";
import orderRouter from "./routes/order-route";

const app = express();
app.use(express.json());

app.use("/customer", customerRouter);
app.use("/restaurant", restaurantRouter);
app.use("/order", orderRouter);

app.listen(3000, () => console.log("Server running on port 3000"));
