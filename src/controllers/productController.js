const Product = require('../models/Product')
async function create(req,res){
    const {name,description,price,discount,image,category}=req.body;
    console.log(name,description,price,discount,image,category)

    const product = new Product({
        name:name,description:description, price:price,discount:discount,image:image,category:category
    })
     product.save().then((savedProduct) => {
        return res.json(savedProduct)
      })
      .catch((error) => {
        return res.json(error);
      });

    
}
async function deleteProduct(req,res){
    const {id} = req.body
   Product.findOneAndRemove({ _id: id })
    .then((deletedDocument) => {
      if (deletedDocument) {
        return res.json(deletedDocument)
      } else {
        return res.json({message:"Silinecek öğe bulunamadı"})
      }
    })
    .catch((error) => {
      return res.json(error);
    });
}
async function updateProduct(req,res){

    const {name,description,price,discount,image,category}=req.body;

  Product.updateOne({_id:req.body.id}, {name,description,price,discount,image,category})
  .then((result) => {
    return res.json(result)
  })
  .catch((error) => {
    return res.json(error)
  });
}
async function getAllProduct(req,res){

try {
    const products = await Product.find()
    return res.json(products)
    
} catch (error) {
    return res.json(error)
}
}
async function getProductByCategory(req,res){
    const {category} = req.params
    try {
        const products = await Product.find({category:category})
        return res.status(200).json(products)
    } catch (error) {
        return res.status(500).json(error)
    }
}


module.exports={
    create,
    deleteProduct,
    updateProduct,
    getAllProduct,
    getProductByCategory
}