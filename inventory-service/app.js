const express = require("express")
const {Eureka} = require("eureka-js-client");

const app = express();
const port = 3000;

const router = express.Router();

router.get ('/inventory', (req,res) => {
    res.json({
        item: ["Milk", "Eggs", "Bread"],
        message: "This is inventory service"
    })
})
const eurekaClient = new Eureka({
    instance: {
        instanceId: "inventory-service",
        app: "INVENTORY-SERVICE",
        hostName: "localhost",
        ipAddr: "127.0.0.1",
        port: {
            $: port,
            "@enabled": true,
        },
        vipAddress: "inventory-service",
        dataCenterInfo: {
            "@class": "com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo",
            name: "MyOwn",
        },
    },
    eureka: {
        host: "localhost",
        port: 8761,
        // servicePath: "/eureka/app/",
        // or
        // servicePath: "/eureka/",
        // or
        // empty
    },
});
app.use("/inventory-service",router)

app.listen(port, () => {
    console.log(`Inventory service running on port:${port}`);
    eurekaClient.start((error) => {
        if(error){
            console.error(error)
        }else{
            console.log("successfully register")
        }
    })
})