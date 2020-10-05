const mongoose = require("mongoose");
const User = mongoose.Schema;

const user = new User({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email adresi gerekli",
    validate: [validateEmail, "Lütfen geçerli bir email adresi gir."],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Lütfen geçerli bir email adresi gir.",
    ],
  },
  petIds: {
    type: Array,
    required: false,
  },
  registerDate:{
      type:Date,
      default:Date.now(),
  },
  profilePicturePath:{
      type:String,
      required:false,

  },
  password:{
      type:String,
      required:true
  },
  role:{
      type:String,
      default:"user"
  },
  phoneNumber:{
      type:String,
      required:false
  },
  isVerify:{
    type:Boolean,
    default:false
  }
});


///@Description : Kullanıcının adı,email adresi, evcil hayvanlarının Id bilgileri,
/// kayıt olma tarihi, role bilgisi , şifresi ve telefon numarası bilgilerinin tutulduğu şema

module.exports = mongoose.model("User", user);
