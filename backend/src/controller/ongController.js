const connection = require('../database/connection')

module.exports={
    async index(req, res){
        const ongs = await connection('ongs').select('*')

        return res.json({ongs});
    },
    async store(req, res){
        const {name, CNPJ, email, phone, bankAgency, bankAccount, password} = req.body;

        const confirmation  = await connection('ongs')
        .where("name",name)
        .andWhere("email",email)
        .select("name")

        if(confirmation==""){
            await connection('ongs').insert({
                name,
                CNPJ,
                email,
                phone,
                bankAgency,
                bankAccount,
                password
            });
            return res.json({message: `Ong ${name} cadastrada com sucesso!`});
        }
        
        return res.json({message:"Ong already exists"});
    }
}