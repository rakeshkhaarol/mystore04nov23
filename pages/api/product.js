
import product from '../../models/product'
import initDB from '../../src/app/helper/initDB'
initDB()

export default (req,res)=>{
    //res.json({massage: 'hello world'})
    product.find().then(product=>{
        res.status(200).json(product)
    })
}