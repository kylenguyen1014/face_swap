import React, {useState} from 'react';
import './Images.css';
import axios from 'axios';

function Images() {
    const [template, setTemplate] = useState('');
    const [merging, setMerging] = useState('');
    const [result, setResult] = useState();
    const APIkey = '1ltOS1IXZ1VTu_UyqY3S0HbV_DK3EJwA';
    const APISecret = '2h4nPYp5Hs8qUAsfOM3H8TzQTKuoMZKZ';


    const templateImageChange = (e) => {
        setTemplate(e.target.value);
        // let templateInput = e.target;
        // const reader = new FileReader();
        // console.log(reader);
        // reader.onload = function(){
        //     const dataURL = reader.result;
        //     setTemplate(dataURL);
        //     // console.log(dataURL);
        //   };
        //   if (templateInput.files[0]){
        //     reader.readAsDataURL(templateInput.files[0]);
        //   }
    }

    const mergingImageChange = (e) => {
        setMerging(e.target.value);
        // let templateInput = e.target;
        // const reader = new FileReader();

        // reader.onload = function(){
        //     const dataURL = reader.result;
        //     setMerging(dataURL);
        //     // console.log(dataURL);
        //   };
        //   if (templateInput.files[0]){
        //     reader.readAsDataURL(templateInput.files[0]);
        //   }    
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
        // const pic1 = template.replace("data:image/jpeg;base64,", "");
        // const pic2 = merging.replace("data:image/jpeg;base64,", "");
        // console.log(template);

        // fetch('http://localhost:8000/image',{
        //     method : 'post',
        //     headers: {'Content-type': 'application/json'},
        //     body : JSON.stringify({
        //         template: template,
        //         merging: merging
        //     })
        // })
        // .then(response => response.json())
        // .then(data => setResult('data:image/jpeg;base64,' + data.result))
        // .then(data => setResult(data))

        const params = {
            api_key: APIkey,
            api_secret: APISecret,
            // template_base64: template,
            template_url:template,
            // template_rectangle: template_rectangle,
            // merge_base64 : merging
            merge_url : merging
        };
        axios({
            method : 'post',
            url :'https://us.faceplusplus.com/imagepp/v1/mergeface',
            // headers: {'Content-type': 'application/json'},
            params : params
        })
        .then(response1 => {
            const data = 'data:image/jpeg;base64,' + response1.data.result;
            // const data =  response1.data;
            // res.send(data);
            setResult(data);
        })
        .catch(err1 => console.log(err1))
    }
    return (
            <div>
                <div className="row w-75 mx-auto mt-3 justify-content-between">
                    <div className="col-md-6 col-sm-10">
                        <input type="url" name='template' className="form-control"  placeholder="Link to 1st face" value={template} onChange={templateImageChange}/>
                    </div>
                    <div className="col-md-6 col-sm-10">
                        <input type="url"  name='merging' className="form-control"  placeholder="Link to 2nd face" value={merging} onChange={mergingImageChange}/>
                    </div>
                    {/* <div className="col">
                        <button className='btn btn-primary'>Merge</button>
                    </div> */}
                </div>
                <div className='mt-5 d-flex align-items-center '>
                    <div className="card ml-auto mr-2" style={{width: '20rem', height : '25rem'}}>
                        <h5 className="card-title text-center">Template Image</h5>
                        <div className='m-auto p-3' >
                            {(template) && <img src={template} className="card-img-top "  alt="template pic"/>}
                        </div>
                        {/* <div className="card-body d-flex flex-column justify-content-end">
                            <div className="custom-file">
                                <input type="file" className="input-group-text w-100 bg-transparent border border-dark "   id="customFile1" accept="image/jpeg" onChange={templateImageChange}/>
                            </div>
                        </div> */}
                    </div>
                    <div className="card mr-auto" style={{width: '20rem', height : '25rem'}}>
                        <h5 className="card-title text-center">Merging Image</h5>
                        <div className='m-auto p-3'>
                            {(merging) && <img src={merging} className="card-img-top "  alt="template pic"/>}
                        </div>
                        {/* <div className="card-body d-flex flex-column justify-content-end">
                            <div className="custom-file">
                                <input type="file" className="input-group-text w-100 bg-transparent border border-dark "   id="customFile1" accept="image/jpeg" onChange={mergingImageChange}/>
                            </div>
                        </div> */}
                    </div>
                    <button className='btn btn-primary btn-lg h-25 ' onClick={submitAPI}>Merge</button>
                    <div className="card  mx-auto" style={{width: '28rem', height : '32rem'}}>
                        <h5 className="card-title text-center">Result Image</h5>
                        <div className='m-auto p-3'>
                            {(result) && <img src={result} className="card-img-top "  alt="template pic"/>}
                        </div>
                        {/* <div className="card-body d-flex flex-column justify-content-end">
                        </div> */}
                    </div>
                </div>
            </div>
    )
}

export default Images;
