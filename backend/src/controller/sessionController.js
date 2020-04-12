const connection = require('../database/connection');

module.exports = {
    async session(req,res){
        const {email,password} = req.body;

        const [id] = await connection('ongs')
        .where('email',email)
        .andWhere('password',password)
        .select('id')

        if(!id){
           return res.status(404).json({error:"ONG doesn't exists!!"})
        }

        return res.json({ong_id: id})
    }
}