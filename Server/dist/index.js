"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db = require("./db");
let cors = require("cors");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
let employeeID = "";
app.use(cors());
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.get("/login", (req, res) => {
    var _a, _b;
    let ID = (_a = req.query.ID) === null || _a === void 0 ? void 0 : _a.toString();
    let password = (_b = req.query.password) === null || _b === void 0 ? void 0 : _b.toString();
    db.query(`SELECT * FROM CBA_Clone.Employees WHERE ID = '${ID}' AND Password = ${password}`, (err, result) => {
        if (err) {
            console.log(err, ID, password);
        }
        else {
            employeeID = result[0].ID;
            res.send(result[0].ID);
        }
    });
});
app.get("/getID", (req, res) => {
    res.send({ ID: employeeID });
});
app.get("/getName", (req, res) => {
    var _a;
    let ID = (_a = req.query.ID) === null || _a === void 0 ? void 0 : _a.toString();
    db.query(`SELECT Firstname,Surname FROM CBA_Clone.Employees WHERE ID = '${ID}'`, (err, result) => {
        if (err) {
            console.log(err, ID);
        }
        else {
            console.log(result);
            res.send(result);
        }
    });
});
app.get("/getCustomer", (req, res) => {
    var _a;
    let Phone_Number = (_a = req.query.No) === null || _a === void 0 ? void 0 : _a.toString();
    db.query(`SELECT Firstname,Surname,Address FROM CBA_Clone.Customers WHERE Phone_Number = '${Phone_Number}'`, (err, result) => {
        if (err) {
            console.log(err, Phone_Number);
        }
        else {
            console.log(result);
            res.send(result);
        }
    });
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
