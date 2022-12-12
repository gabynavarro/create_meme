import html2canvas from "html2canvas";
const ImgMeme=()=>{
    return (
     <div className="text-center">
        <h1 className="mt-3 mb-3 text-center">
            Edita tu propio MeMe
        </h1>
        <h3 className="mt-3 mb-3 text-center" >Ingresa texto</h3>
        <input className="form-control w-50 m-50 m-auti d-block " placeholder="Ingresa Frase" name="meme" aria-label="default input example"></input>
        <h3 className="" >Tu imagen</h3>
        <select className="">
            <option value={1}>Imagen 1</option>
            <option value={2}>Imagen 2</option>
            <option value={3}>Imagen 3</option>
            <option value={4}>Imagen 4</option>
        </select>
        <figure className="" id="importimg">
            <p className=""> </p>
            <img src={'./images/1.jpg'} className="" alt="meme"/>
        </figure>
    <button type="button" className="">Descargar </button>
     
     </div>
    )
}
export default ImgMeme