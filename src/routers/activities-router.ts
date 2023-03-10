import { Router } from "express";
import { authenticateToken } from "@/middlewares";

const activitiesRouter = Router();

activitiesRouter
  .all("/*", authenticateToken)
  .get("", )
  .post("/:activityId", )
  .delete("/:activityId", );

export { activitiesRouter };
