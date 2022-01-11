const express = require("express");
const router = new express.Router();
const AlbumModel = require("./../model/Album");
const ArtistModel = require("./../model/Artist");
const LabelModel = require("./../model/Label");
const uploader = require("./../config/cloudinary");

// router.use(protectAdminRoute);

// GET - all albums
router.get("/", async (req, res, next) => {
  try {
    res.render("dashboard/albums", {
      albums: await AlbumModel.find().populate("artist").populate("label"),
    });
  } catch (err) {
    next(err);
  }
});

// GET - create one album (form)
router.get("/create", async (req, res, next) => {
  const artists = await ArtistModel.find();
  const labels = await LabelModel.find();
  res.render("dashboard/albumCreate", { artists, labels });
});

// GET - update one album (form) // getting id first
router.get("/update/:id", uploader.single("cover"), async (req, res, next) => {
  try {
    const { id } = req.params;
    const album = await AlbumModel.findById(id)
      .populate("artist")
      .populate("label");
    const artists = await ArtistModel.find();
    const labels = await LabelModel.find();
    res.render("dashboard/albumUpdate", {
      album,
      artists,
      labels,
    });
  } catch (error) {
    next(error);
  }
});

// GET - delete one album

// POST - create one album
router.post("/", uploader.single("cover"), async (req, res, next) => {
  const newAlbum = { ...req.body };
  if (!req.file) newAlbum.cover = undefined;
  else newAlbum.cover = req.file.path;
  console.log(newAlbum);
  try {
    await AlbumModel.create(newAlbum);
    res.redirect("/dashboard/album");
  } catch (err) {
    next(err);
  }
});

// POST - update one album
router.post("/:id",uploader.single("cover"),async (req,res,next)=> {
  try{
    const NewAlbumData ={...req.body}
   if (req.file) NewAlbumData.cover=req.file.path;
   else NewAlbumData.cover=existingValue;

   await AlbumModel.findByIdAndUpdate(req.params.id,NewAlbumData);
   res.redirect("/dashboard/album");
   }
  catch (e){
    next(e);
  }
}
)

module.exports = router;
