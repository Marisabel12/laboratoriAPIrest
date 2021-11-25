import App from "./App";

const aplication: App = new App();
aplication.getApp().listen(aplication.getPort(), () => {
    console.log(`Server running in port ${aplication.getPort()}`);
});
