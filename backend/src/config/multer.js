const multer = require('multer');
const path = require('path');

module.exports ={
    //Defining the path directory where the file will be storage
    dest: path.resolve(__dirname,'..','uploads'),
    //Does the same work as the dest: function
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname,'..','uploads'));
         },
         //Changing the image name
        filename: (req, file, cb) => { 
            const {ongName} = req.body;
            if(!ongName){
                const filename = "NotDefined";
            }
            const filename = 'teste' + file.originalname;
            cb(null,filename);
        },
    }),//This fileFilter is used to filter the file extension
    fileFilter:(req,file,cb)=>{
        const allowedMimes=[
            'image/jpg',
            'image/jpeg',
            'image/png'
        ];

        if(allowedMimes.includes(file.mimetype)){
            cb(null,true);
        }
        else{
            cb(new Error("Invalid file type"));
        }

    }


}