import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { SurveyController } from "./controllers/SurveyController";
import { SendMailController } from "./controllers/SendMailController"
import { AnswerController } from "./controllers/AnswerController";
import { NplsController } from "./controllers/NpsController";

const router = Router();

const userController = new UserController();

const surveysController = new SurveyController();

const sendMailController = new SendMailController();

const answerController = new AnswerController();

const nplsController = new NplsController();

router.post("/users", userController.create);

router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);

router.post("/sendMail", sendMailController.execute);

router.get("/answers/:value", answerController.execute);

router.get("/nps/:survey_id", nplsController.execute);

export { router };