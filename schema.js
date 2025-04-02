const Joi = require("joi");

module.exports.listingSchema = Joi.object({
    listing : Joi.object({
        title : Joi.string().required(),
        description : Joi.string().required(),
        location : Joi.string().required(),
        country : Joi.string().required(),
        price : Joi.number().required().min(0),
        image : Joi.string().allow("", null)
    }).required()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating:Joi.number().required().min(1).max(5),
        comment:Joi.string().required()
    }).required()
})

// {
//     "engines":{
//       "node":"22.x"
//     },
    
//   "name": "major-project-2",
//   "version": "1.0.0",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "keywords": [],
//   "author": "Aditya kumar",
//   "license": "ISC",
//   "description": "",
//   "dependencies": {
//     "cloudinary": "^2.5.1",
//     "connect-flash": "^0.1.1",
//     "connect-mongo": "^5.1.0",
//     "cookie-parser": "^1.4.7",
//     "dotenv": "^16.4.7",
//     "ejs": "^3.1.10",
//     "ejs-mate": "^4.0.0",
//     "express": "^4.21.2",
//     "express-session": "^1.18.1",
//     "joi": "^17.13.3",
//     "method-override": "^3.0.0",
//     "mongoose": "^8.10.0",
//     "multer": "^1.4.5-lts.1",
//     "multer-storage-cloudinary": "^4.0.0",
//     "passport": "^0.7.0",
//     "passport-local": "^1.0.0",
//     "passport-local-mongoose": "^8.0.0"
//   }
// }
