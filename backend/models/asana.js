const mongoose = require('mongoose');

const asanaSchema = new mongoose.Schema({
    user: {type:String, default:"Base"},
    english_name: String,
    sanskrit_name_adapted: String,
    sanskrit_name: String,
    translation_name: String,
    pose_description: String,
    pose_benefits: String,
    url_svg: String,
    url_png: String,
    url_svg_alt: String,
});

const Asana = mongoose.model("Asana", asanaSchema);

module.exports = Asana;