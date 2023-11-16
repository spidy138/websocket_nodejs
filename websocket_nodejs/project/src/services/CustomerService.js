const {Customer}=require('../models/customermodel.js');

class CustomerService{
    async addCustomer(customerData){
        try{
            const newCustomer=await Customer.create(customerData);
            return newCustomer;
        }
        catch(error){
            console.error("error adding the customer",error)
            throw new error(error.message);        }
    }
    async getAllCustomers(){
        try{
            const getAllCustomers=Customer.findAll();
            return getAllCustomers;
        }
        catch(error){
            console.error("error occuring while fetching the customers");
            throw new error(error.message);
        }
    }

}
module.exports=new CustomerService();