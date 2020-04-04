const connection = require('../database/connection');


module.exports={
    async index(req,res){
        const doadores = await connection('doadores').select('*');

        return res.json({doadores});

    },

    async store(req,res){
        const {name, email, phone, city} = req.body;

        await connection('doadores').insert({
            name,
            email,
            phone,
            city
        });

       return res.json({message: `obrigado,${name}!`});
    }
}