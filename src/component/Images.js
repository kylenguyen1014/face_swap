import React, {useState} from 'react';
import './Image.css';

function Images(props) {
    const [template, setTemplate] = useState('');
    const [merging, setMerging] = useState('');
    const [result, setResult] = useState();

    const { updateEntries, email } = props;
    const templateImageChange = (e) => {
        setTemplate(e.target.value);
    }

    const mergingImageChange = (e) => {
        setMerging(e.target.value);
    }

    const submitAPI = () => {

        fetch('https://face-swap-api.herokuapp.com/imageurl',{
            method : 'post',
            headers: {'Content-type': 'application/json'},
            body : JSON.stringify({
                template: template,
                merging: merging
            })
        })
        .then(response => response.json())
        .then(data => {
            setResult('data:image/jpeg;base64,' + data.result);
            fetch('https://face-swap-api.herokuapp.com/image',{
                method : 'put',
                headers: {'Content-type': 'application/json'},
                body : JSON.stringify({
                    email: email
                })
            })
            .then(response => response.json())
            .then(newEntries => updateEntries(newEntries))
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }
    return (
            <div>
                <div className="row w-100 mx-auto mt-3 justify-content-between">
                    <div className="col-md-6 col-12">
                        <input type="url" name='template' className="form-control"  placeholder="Link to 1st face" value={template} onChange={templateImageChange}/>
                    </div>
                    <div className="col-md-6 col-12">
                        <input type="url"  name='merging' className="form-control"  placeholder="Link to 2nd face" value={merging} onChange={mergingImageChange}/>
                    </div>
                </div>
                <div className='mt-1 mt-sm-5 container-fluid d-flex  justify-content-center '>
                    <div className='row w-100 align-items-center d-flex align-self-sm-center align-self-stretch'>
                        <div className='col-6 col-md-3 d-flex justify-content-center'>
                            <div className="card card-image" >
                                <h5 className="card-title text-center">Template Image</h5>
                                <div className='m-auto p-3' >
                                    {(template) && <img src={template} className="card-img-top "  alt="template pic"/>}
                                </div>                             
                            </div>
                        </div>

                        <div className='col-6 col-md-3 d-flex justify-content-center align-self-stretch align-self-sm-center'>
                            <div className="card card-image " >
                                <h5 className="card-title text-center">Merging Image</h5>
                                <div className='m-auto p-3'>
                                    {(merging) && <img src={merging} className="card-img-top "  alt="template pic"/>}
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-1 d-flex justify-content-center my-1'>
                            <button className='btn btn-primary btn-lg h-25 ' onClick={submitAPI}>Merge</button>
                        </div>
                        <div className='col-12 col-md-5 d-flex justify-content-center'>
                            <div className="card card-result " >
                                <h5 className="card-title text-center">Result Image</h5>
                                <div className='m-auto p-3'>
                                    {(result) && <img src={result} className="card-img-top "  alt="template pic"/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Images;
