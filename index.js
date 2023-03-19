const express=require("express")
const cors=require("cors")
const User=require("./config")
let error=""
const app=express()
const midtransClient = require('midtrans-client');
const { response } = require("express")
app.use(express.json())
app.use(cors());
var idmen = ""

app.post("/create", async(req,res)=>{
    const data=req.body
    console.log(data)
    await User.auth().createUserWithEmailAndPassword(data.email, data.password).then(async(datadaftar)=>{
        // return res.status(200).json(datadaftar)
        console.log(datadaftar.user.uid)
        await User.firestore().collection("Pengguna").doc(datadaftar.user.uid).set({
            "email":data.email,
            "nama":data.nama,
            "nomorkelompok": data.alamat,
            "id":datadaftar.user.uid
            "role":"client"
        })
        res.send("Data Berhasil Didaftarkan")
    }).catch(function (error){
        // let errorcode = error.code;
        // let errorMessage = error.message;
        // if(errorcode === ""){
        console.log(error)
        // }
        res.send("ADA KESALAHAN SILAHKAN COBA LAGI")
    })
    // // await User.auth().createUserWithEmailAndPassword(data.nama, data.alamat).catch(function(error){
    // //    res.send(error)
    // //    console.log(error)

    // // });
})

app.listen(4000, ()=>console.log("App Running port 4000"))


