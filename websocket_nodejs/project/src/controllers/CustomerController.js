const customerService=require('../services/CustomerService');
class CustomerController{
    async addCustomer(req,res){
        const customerData=req.body;
        try{
            const newCustomer=await customerService.addCustomer(customerData);
            res.status(201).json(newCustomer);
        }
        catch(error){
           
            res.status(500).send(error.message);
        }
    }
    async getAllCustomer(req,res){
        try{
            const getAllcustomers=await customerService.getAllcustomers();
            res.status(200).json(getAllcustomers);
        }
        catch(error){
            res.status(500).send(error.message);
        }
    }
}
module.exports=new CustomerController();