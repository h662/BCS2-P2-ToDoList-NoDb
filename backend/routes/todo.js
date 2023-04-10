const express = require("express");

let todoData = require("../todoData.json");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(todoData);
});

router.post("/", (req, res) => {
  const { title, desc } = req.body;

  if (!title) res.status(400).json({ error: "타이틀을 입력해주세요." });
  if (!desc) res.status(400).json({ error: "요약을 입력해주세요." });

  todoData.push({ title, desc, isDone: false });

  res.json(todoData);
});

router.put("/:todoId", (req, res) => {
  const { todoId } = req.params;
  const { title, desc } = req.body;

  if (todoId >= todoData.length) {
    res.status(400).json({ error: "존재하지 않는 Id 입니다." });
  }

  todoData[todoId] = {
    title: title ? title : todoData[todoId].title,
    desc: desc ? desc : todoData[todoId].desc,
    isDone: todoData[todoId].isDone,
  };

  res.json(todoData);
});

router.delete("/:todoId", (req, res) => {
  const { todoId } = req.params;

  if (todoId >= todoData.length) {
    res.status(400).json({ error: "존재하지 않는 Id 입니다." });
  }

  todoData = todoData.filter((v, i) => {
    if (parseInt(todoId) === i) {
      return false;
    } else {
      return v;
    }
  });

  res.json(todoData);
});

module.exports = router;
