const connection = require('../database/connection')

module.exports={
    async index(req, res){

        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.id_incident')
        .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.phone'])

        return res.json(incidents)
    },

    async store(req, res){
        const {title, description} = req.body

        const id_incident = req.headers.id

        const [id] = await connection('incidents').insert({
            title,
            description,
            id_incident,
        })
        return res.json({message: `O caso com o titulo: ${title} foi criado com o id:${id}`})
    }
}