
const User = require('../models/User')
async function login(req,res){
    try {
        const user = await User.find({email:req.body.email,password:req.body.password})

        if(user.length===0){
            return res.status(404).json({message:"Kullanıcı bilgileri yanlış"})
        }
        return res.status(200).json({user:user[0],token:'123'})
        
    } catch (error) {
        return res.status(500).json(error)
    }
}
async function register(req,res){
    const {name,surname,email,password}=req.body
    try {
        const user = new User({name,email,surname,password})
        const savedUser = await user.save()
        return res.json(savedUser)
    } catch (error) {
        
    }
}
async function getProfile(req,res){
    const {id} =req.params
    try {
        const user = await User.findById(id)
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json(error)
    }
  
}
async function updateUser(req,res){
    const {name,surname,email,password} = req.body
    User.updateOne({email:email}, {name,surname,email,password})
    .then((result) => {
      return res.json({message:"Güncelleme tamamlandı."})
    })
    .catch((error) => {
      return res.json(error)
    });
}
async function getUserShoppingCart(req,res){}

async function postProductToShoppingCart(req,res){}

module.exports={
    login,
    register,
    getProfile,
    getUserShoppingCart,
    updateUser,
    postProductToShoppingCart
}