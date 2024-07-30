import { app } from "./index.js";
import { connectDB } from "./database/db.js";

connectDB();

app.listen(process.env.PORT, () => {
  console.log(
    `Server is working on port: 4000 in ${process.env.NODE_ENV} Mode`
  );
});
