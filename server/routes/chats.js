const express = require("express");
const router = express.Router();
const chats = require("../controllers/chats");
const multer = require("multer");
const { storage } = require("../cloudinary");
const upload = multer({ storage });

router.route("/").get(chats.showChats);
router.route("/new").post(chats.createChat);
router.route("/color").post(chats.setChatColor);
router.route("/enable").post(chats.enableChat);
router.route("/group").post(upload.single("avatar"), chats.createGroup);
router.route("/status").post(chats.editChatStatus);
router.route("/:id").get(chats.showChat);

module.exports = router;
