# get started

$ git clone https://github.com/Kostra0ne/artistify-2
$ cd artistify-2
$ npm i
$ touch .env

# set the .env file 

you may pick one cloudinary account per group

- MONGO_URI = mongodb://localhost/artistify
- PORT = 5000
- CLOUDINARY_NAME = ?
- CLOUDINARY_KEY = ?
- CLOUDINARY_SECRET = ?

# seed the database

$ npm run seed:label  
$ npm run seed:style  
$ npm run seed:artist

# launch the project

$ npm run dev

# visit

http://localhost:5000/
