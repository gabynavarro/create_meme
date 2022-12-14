import html2canvas from "html2canvas";
import React, {useState} from "react";


const ImgMeme=()=>{
    //un parametro y una setfuction
    const [imgMeme, setImgMeme]=useState(1);
  
    const selectImg=(e)=>{
        setImgMeme(e.target.value);
        console.log(e.target.value);

    }
    return (
     <div className="text-center">
        <h1 className="mt-3 mb-3 text-center">
            Edita tu propio MeMe
        </h1>
        <h3 className="mt-3 mb-3 text-center" >Ingresa texto</h3>
        <input className="form-control w-50 m-50 m-auto d-block " placeholder="Ingresa Frase" name="meme" aria-label="default input example" type="text"></input>
        <h3 className="mt-3 mb-3 text-center" >Tu imagen</h3>
        
        <select onChange={selectImg} className="form-select form-select-lg mb-3 w-50 m-auto"  aria-label=".form-select-lg example">
            <option value={1}>Imagen 1</option>
            <option value={2}>Imagen 2</option>
            <option value={3}>Imagen 3</option>
            <option value={4}>Imagen 4</option>
        </select>
        <figure className="text-center" id="importimg">
            <p className="w-100 px-30 position-absolute top-50 start-30 h1 text-center"> </p>
            <img src={'./img/img${imgMeme}.jpg'} className="figure-img img-fluid mt-3 d-block m-auto" alt="meme"/>
        </figure>
    <button type="button" className="btn btn-primary mt-4 mb-4">Descargar </button>
        
     </div>
    )
}
export default ImgMeme