import html2canvas from "html2canvas";
import React, {useState} from "react";
import './imputStyle.css';

const ImgMeme=()=>{
    //un parametro y una setfuction
    const path="./img/img"
    const [imgMeme, setImgMeme]=useState(1);
    const [text, setTextMeme]=useState("text");
  
    const textMeme=(e)=>{
        setTextMeme(e.target.value)
    }
    const selectImg=(e)=>{
        setImgMeme(e.target.value);
        console.log(e.target.value);

    }
    const descargar=(e)=>{
        html2canvas(document.querySelector("#importimg")).then(function(canvas) {
            let img=canvas.toDataURL("meme/jpg") //donde estamos y formato de archivo a exportar
            //link de descarga  
            let link=document.createElement("a")
            link.download="mymeme.jpg" //nombre archivo
            link.href=img //link de descargar
            link.click()
        });
    }
    return (
     <div className="text-center">
        <h1 className="mt-3 mb-3 text-center">
            Edita tu propio MeMe
        </h1>
        <h3 className="mt-3 mb-3 text-center" >Ingresa texto</h3>
        <input  onChange={textMeme} className="form-control w-50 m-50 m-auto d-block " placeholder="Ingresa Frase" name="meme" aria-label="default input example" type="text"></input>
        <h3 className="mt-3 mb-3 text-center" >Tu imagen</h3>
        
        <select onChange={selectImg} className="form-select form-select-lg mb-3 w-50 m-auto"  aria-label=".form-select-lg example">
            <option value={1}>Imagen 1</option>
            <option value={2}>Imagen 2</option>
            <option value={3}>Imagen 3</option>
            <option value={4}>Imagen 4</option>
        </select>
        <figure className="text-center" id="importimg">
            <p className="text-top w-50  px-30  top-30 start-30 h1">{text} </p>
            <img src={path+imgMeme+".jpg"} className="figure-img img-fluid  d-block m-auto my-img" alt="meme"/>
        </figure>
    <button onClick={descargar} type="button" className="btn btn-primary mt-4 mb-4">Descargar </button>
        
     </div>
    )
}
export default ImgMeme