const db = require("../db");

class PeopleController {
  async createPerson(req, res) {
    const { name, surname } = req.body;
    const newPerson = await db.query(
      `INSERT INTO people (name, surname) VALUES ($1, $2) RETURNING *`,
      [name, surname]
    );
    res.json({
      success: true,
      data: newPerson.rows[0],
    });
  }

  async getAllPeople(req, res) {
    const allPeople = await db.query("SELECT * FROM people");
    res.json(allPeople.rows);
  }

  async getPerson(req, res) {
    const id = req.params.id;
    const person = await db.query(`SELECT * FROM people WHERE id = $1`, [id]);
    res.json(person.rows[0]);
  }

  async updatePerson(req, res) {
    const { id, name, surname } = req.body;
    const updatedPerson = await db.query(
      `UPDATE people SET name = $1, surname = $2 WHERE id = $3 RETURNING *`,
      [name, surname, id]
    );
    res.json({
      success: true,
      data: updatedPerson.rows[0],
    });
  }

  async deletePerson(req, res) {
    const id = req.params.id;
    const deletedPerson = await db.query(
      `DELETE FROM people WHERE id = $1 RETURNING *`,
      [id]
    );
    res.json({
      success: true,
      data: deletedPerson.rows[0],
    });
  }
}

module.exports = new PeopleController();
