import multer from 'multer'
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp")
  },
  filename: function (req, file, cb) {
   //not using currently but can be in near future :) const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
   //used in with upper line   cb(null, file.fieldname + '-' + uniqueSuffix)
   cb(null, file.originalname) 
  }
})

export const upload = multer({
     storage,
    })