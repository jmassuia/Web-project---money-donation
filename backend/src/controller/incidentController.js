const connection = require('../database/connection')

module.exports={
    async index(req, res){
        
        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')   
        .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.phone'])

        return res.json(incidents)
    },

    async store(req, res){
        const {title, description} = req.body

        const ong_id = req.headers.authorization

        const [id] = await connection('incidents').insert({
            title,
            description,
            ong_id
        })
        return res.json({message: `O caso com o titulo: ${title} foi criado com o id:${id}`})
    },

    async delete(req,res){
        const { id } = req.params;
        const ong_id = req.headers.authorization;

        //console.log(id,id_incident)
        
        const incident = await connection('incidents')
        .where('id',id)
        .select('ong_id')
        .first();

        if(incident.ong_id != ong_id){
             return res.status(401).json({error:"Operation not permitted."});
        }

        await connection('incidents').where('id',id).delete();

        return res.status(204).send();
    }
}