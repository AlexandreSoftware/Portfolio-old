import * as bodyparser from "body-parser"
import cors from "cors"
module.exports = function (app){
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended: true }))
    app.use(cors());
}