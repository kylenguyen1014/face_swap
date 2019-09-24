import React, {useState} from 'react';
import './Images.css';


function Images() {
    const [template, setTemplate] = useState();
    const [merging, setMerging] = useState();

    const templateImageChange = (e) => {
        let templateInput = e.target;
        const reader = new FileReader();
        console.log(reader);
        reader.onload = function(){
            const dataURL = reader.result;
            setTemplate(dataURL);
            console.log(dataURL);
          };
          if (templateInput.files[0]){
            reader.readAsDataURL(templateInput.files[0]);
          }
    }

    const mergingImageChange = (e) => {
        let templateInput = e.target;
        const reader = new FileReader();

        reader.onload = function(){
            const dataURL = reader.result;
            setMerging(dataURL);
            console.log(dataURL);
          };
          if (templateInput.files[0]){
            reader.readAsDataURL(templateInput.files[0]);
          }    }
    return (
        <div className='Images mx-auto '>
            <div className="card" style={{width: '20rem', height : '25rem'}}>
                <div className='m-auto pt-3' style={{width: '12rem', height : '15rem'}}>
                    {(template) && <img src={template} className="card-img-top "  alt="template pic"/>}
                </div>
                <div className="card-body d-flex flex-column justify-content-end">
                    <h5 className="card-title">Template Image</h5>
                    <div className="custom-file">
                        <input type="file" className="input-group-text w-100 bg-transparent border border-dark "   id="customFile1" accept="image/jpeg" onChange={templateImageChange}/>
                    </div>
                </div>
            </div>
            <div className="card" style={{width: '20rem', height : '25rem'}}>
                <div className='m-auto pt-3' style={{width: '12rem', height : '15rem'}}>
                    {(merging) && <img src={merging} className="card-img-top "  alt="template pic"/>}
                </div>
                <div className="card-body d-flex flex-column justify-content-end">
                    <h5 className="card-title">Template Image</h5>
                    <div className="custom-file">
                        <input type="file" className="input-group-text w-100 bg-transparent border border-dark "   id="customFile1" accept="image/jpeg" onChange={mergingImageChange}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Images;
