const connection = require('../database/connection')

module.exports={
    async index(req, res){
        const ongs = await connection('ongs').select('*')

        return res.json({ongs});
    },
    async store(req, res){
        const {name, CNPJ, email, phone, bankAgency, bankAccount,url:ImageUrl, password} = req.body;

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
                ImageUrl,
                password
            });
            return res.json({message: `Ong ${name} cadastrada com sucesso!`});
        }
        
        return res.json({message:"Ong already exists"});
    },
    async updateData(req, res){
        const ong_id = req.headers.authorization
        const {name, email, phone, bankAgency, bankAccount} = req.body

        const update = await connection('ongs')
        .where('id', '=', ong_id)
        .update({
            name: name,
            email: email,
            phone: phone,
            bankAgency: bankAgency,
            bankAccount: bankAccount,
        } )
        return res.json({message: "Data Updated!"})
    }
}