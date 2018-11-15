var uploadImg = document.getElementById("uploadImg");
    var upload= document.getElementById("upload");
    //文件域选择文件时, 执行readFile函数
    uploadImg.addEventListener('change',readFile,false);
    function readFile(){ 
        var file = this.files[0]; 
        upload.innerHTML=file.name;
    }
    