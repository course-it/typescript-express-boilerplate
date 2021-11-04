import express, { Request, Response, Express, Router } from "express";
import cors from "cors";

const PORT: number = 3000;
const app: Express = express();
const router: Router = express.Router();

app.use(cors());
app.use("/", router);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

router.get("/", (req: Request, res: Response) => {
  return res.sendStatus(200);
});
