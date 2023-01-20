import React, {useState} from "react";

export default function Image_Chooser(){

    const [image, setImage] = useState("")

    return(
        <div className="card mb-4">
            <div className="card-header">
                <i className="fas fa-location me-1"></i>
                Selecione a Imagem do Evento
            </div>
            <div className="card-body">
                <input className="form-control" type="file" id="formFile" onChange={(e) => setImage((e.target.value).substr(12))}/>
                <br/>
                {/* https://stackoverflow.com/questions/46609385/passing-reactjs-variable-to-image-and-link-tags */}
                {image !== "" ? <img src={"../../img/" + image} id="imageChooser"/> : <img src="" />}
            </div>
        </div>
    )
}