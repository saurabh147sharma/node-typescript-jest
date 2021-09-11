import express from "express";
import http from "http";
import UserController from "./controllers/users/users.controller";

const app = express();

const server = new http.Server(app);

server.listen(3002);

app.get('/users', UserController.getUsers);