const connection = require('../database/connection');

module.exports={
    async index(req,res){
        const ong_id = req.headers.authorization;

        const [src] = await connection('images')
        .where("ong_id",ong_id)
        .select('url')

        return res.json({src})
    },
    async store(req,res){
        const ong_id = req.headers.authorization;

        const {originalname:fileName, size:source, path:url} = req.file;

        const data =  await connection('images').insert({
            ong_id,
            fileName,
            source,
            url
        });
        console.log(data)
        return res.json(data);
    },
    async check(req,res){
        const ong_id = req.headers.authorization
        const {originalname:fileName, size:source, path:url} = req.file;

        const image = await connection('images')
        .where('ong_id',ong_id)
        .select('*');

        if(image == undefined || image == "" || image == null){
            const data =  await connection('images').insert({
                ong_id,
                fileName,
                source,
                url
            });
            return res.json(data);
        }else{
            const data =  await connection('images')
        .where('ong_id', '=', ong_id)
        .update({
            fileName: fileName,
            source: source,
            url: url
        });
        return res.json(data);
        }
    }
}
