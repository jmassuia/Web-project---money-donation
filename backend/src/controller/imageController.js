const connection = require('../database/connection');
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, '.website/src/Assets')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
});
var upload = multer({ storage: storage }).single('file');


module.exports = {

    async store(req,res){

        upload(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(500).json(err)
            } else if (err) {
                return res.status(500).json(err)
            }
                    return res.status(200).send(req.file)
            });
        }

}

