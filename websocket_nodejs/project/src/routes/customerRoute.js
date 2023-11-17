const express=require("express")
const customerRoute=express.Router();

const customerController=require("../controllers/CustomerController");

customerRoute.get('/dummy',)

/**
 * @swagger
 * /customermanagement/api/v1/Customer:
 *   get:
 *     description:  endpoint for creating customers
 */
customerRoute.post("/customermanagement/api/v1/Customer",customerController.addCustomer);

customerRoute.get("/",customerController.getAllCustomer);

module.exports=customerRoute;