const Router = require("express");
const router = new Router();
const peopleController = require("../db/controllers/people.controller");
router.post("/people", peopleController.createPerson);
router.get("/people", peopleController.getAllPeople);
router.get("/people/:id", peopleController.getPerson);
router.put("/people", peopleController.updatePerson);
router.delete("/people/:id", peopleController.deletePerson);

module.exports = router;
