import App from "../../App";
import { Express, Request, Response } from "express";
class Routes {
    private rootPath: string;
    private mainApp: App;
    private app: Express;
    constructor(rootPath: string, mainApp: App){
        this.rootPath = rootPath;
        this.mainApp = mainApp;
        this.app = this.mainApp.getApp();
        this.configureRoutes();
    }
    private configureRoutes() {
        this.app
        .route(`${this.rootPath}/`)
        .get((request: Request, response: Response) => {
            response
            .status(200)
            .json({serverResponse: "hi mon I'm programing look at me"});
        });
        }
}
export default Routes;
 private configureRoutes(){
        this.app.route(`${this.rootPath}/`)
        .post((request: Request, response: Response) => {
           this.userController.create(request, response);
        });
        this.app.route(`${this.rootPath}/`)
        .get((request: Request, response: Response) => {
            this.userController.get(request, response);
         });
