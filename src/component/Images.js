import React, {useState} from 'react';
import './Images.css';
import axios from 'axios';

function Images() {
    const [template, setTemplate] = useState();
    const [merging, setMerging] = useState();
    const [result, setResult] = useState();
    const APIkey = '1ltOS1IXZ1VTu_UyqY3S0HbV_DK3EJwA';
    const APISecret = '2h4nPYp5Hs8qUAsfOM3H8TzQTKuoMZKZ';


    const templateImageChange = (e) => {
        let templateInput = e.target;
        const reader = new FileReader();
        // console.log(reader);
        reader.onload = function(){
            const dataURL = reader.result;
            setTemplate(dataURL);
            // console.log(dataURL);
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
            // console.log(dataURL);
          };
          if (templateInput.files[0]){
            reader.readAsDataURL(templateInput.files[0]);
          }    
    }

    const submitAPI = () => {
        // axios.post('https://api-us.faceplusplus.com/facepp/v3/detect', {
        //     api_key: APIkey,
        //     api_secret: APISecret,
        //     image_base64: template, 
        // })
        // .then((response) => {
        //     console.log(response);
        // }, (error) => {
        //     console.log(error);
        // })

        fetch('http://localhost:8000/',{
            method : 'post',
            headers: {'Content-type': 'application/json'},
            body : JSON.stringify({
                template: template
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }
    return (
            
            <div className='Images mx-auto mt-5 d-flex align-items-center'>
                <div className="card" style={{width: '20rem', height : '25rem'}}>
                    <h5 className="card-title text-center">Template Image</h5>
                    <div className='m-auto pt-3' style={{width: '60%', height : '15rem'}}>
                        {(template) && <img src={template} className="card-img-top "  alt="template pic"/>}
                    </div>
                    <div className="card-body d-flex flex-column justify-content-end">
                        <div className="custom-file">
                            <input type="file" className="input-group-text w-100 bg-transparent border border-dark "   id="customFile1" accept="image/jpeg" onChange={templateImageChange}/>
                        </div>
                    </div>
                </div>
                <div className="card" style={{width: '20rem', height : '25rem'}}>
                    <h5 className="card-title text-center">Merging Image</h5>
                    <div className='m-auto pt-3' style={{width: '12rem', height : '15rem'}}>
                        {(merging) && <img src={merging} className="card-img-top "  alt="template pic"/>}
                    </div>
                    <div className="card-body d-flex flex-column justify-content-end">
                        <div className="custom-file">
                            <input type="file" className="input-group-text w-100 bg-transparent border border-dark "   id="customFile1" accept="image/jpeg" onChange={mergingImageChange}/>
                        </div>
                    </div>
                </div>
                <button className='btn btn-primary btn-lg h-25 align-self-center mx-auto' onClick={submitAPI}>Merge</button>
                <div className="card " style={{width: '28rem', height : '35rem'}}>
                    <h5 className="card-title text-center">Result Image</h5>
                    <div className='m-auto pt-3' style={{width: '60%'}}>
                        {(result) && <img src={result} className="card-img-top "  alt="template pic"/>}
                    </div>
                    {/* <div className="card-body d-flex flex-column justify-content-end">
                    </div> */}
                </div>
                
                
            </div>
    )
}

export default Images;
