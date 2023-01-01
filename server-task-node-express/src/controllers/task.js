import { connection } from "../database.js";

export const getTasks = async (req, res) => {
    const connectiondb = await connection();
    const [ rows ] = await connectiondb.query('SELECT * FROM tasks');
    res.json(rows);
};

export const getTasksCount = async (req, res) => {
    const connectiondb = await connection();
    const [ rows ] = await connectiondb.query('SELECT COUNT(*) AS count FROM tasks');
    res.json(rows);
}

export const getTask = async (req, res) => {
    const connectiondb = await connection();
    const [ rows ] = await connectiondb.query('SELECT * FROM tasks WHERE id = ?', [req.params.id]);
    res.json(rows);
}

export const createTask = async (req, res) => {
    const connectiondb = await connection();
    const { title, description } = req.body;
    const [ results ] = await connectiondb.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [title, description]);
    res.json({
        id: results.insertId, 
        ...req.body
    });
}

export const updateTask = async (req, res) => {
    const connectiondb = await connection();
    const { title, description } = req.body;
    const [ results ] = await connectiondb.query('UPDATE tasks SET title = ?, description = ? WHERE id = ?', [title, description, req.params.id]);
    res.json({
        id: req.params.id,
        ...req.body
    });
}

export const deleteTask = async (req, res) => {
    const connectiondb = await connection();
    await connectiondb.query('DELETE FROM tasks WHERE id = ?', [req.params.id]);
    res.sendStatus(204);
}