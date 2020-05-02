const connection = require('../database/connection');


module.exports={
    async index(req,res){
        const volunteer = await connection('volunteer')
        .limit(3)
        .select('*');
        
        return res.json({volunteer});

    },

    async store(req,res){
        const {name, email, phone, city} = req.body;

        await connection('volunteer').insert({
            name,
            email,
            phone,
            city
        });

       return res.json({message: `obrigado,${name}!`});
    }
}