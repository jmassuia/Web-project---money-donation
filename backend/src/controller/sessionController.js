const connection = require('../database/connection');

module.exports = {
    async session(req,res){
        const {email,password} = req.body;

        const [ong] = await connection('ongs')
        .where('email',email)
        .andWhere('password',password)
        .select('id','name','email','phone','bankAgency','bankAccount','ImageUrl');

        if(!ong){
            return res.status(404).json({error:"ONG doesn't exists!!"})
         }

        return res.json({ong});
    },
    async show(req,res){
        const ong_id = req.headers.authorization;

        const incident = await connection('incidents')
        .where('ong_id',ong_id)
        .select('*');
        
        if(incident==""){
            return res.status(404).json({err:'No incidents found!'});
        }

        return res.json({incident});
    }
}