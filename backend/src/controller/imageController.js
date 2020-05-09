const connection = require('../database/connection');

module.exports={
    async index(req,res){
        const ong_id = req.headers.authorization;

        const src = await connection('images')
        .where("ong_id",ong_id)
        .select('*')

        return res.json(src)
    },
    async store(req,res){

        upload(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(500).json(err)
            } else if (err) {
                return res.status(500).json(err)
            }
                    return res.status(200).send(req.file)
            });
            console.log(req.file)
            return res.json(data);
        }    
}   
