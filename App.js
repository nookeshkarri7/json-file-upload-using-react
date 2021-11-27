import React, { Component } from 'react';
import axios from 'axios';
 
export default class FileUploadComponent extends Component {
  state={fileUpload:"",output:[]}
  
  

  onSubmitData=async(e)=>{
    e.preventDefault()
    const data=await axios.post("http://localhost:4000/upload",this.state.fileUpload)
    this.setState({output:data.data})
  
  }

  dataChanged=(e)=>{
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      this.setState({fileUpload:JSON.parse(fileReader.result)})
    }
  }

  render() {
    // console.log(this.state.fileUpload)
    const {output}=this.state
    console.log(output)
    return (
      <div className="container">
        <h3>React File Upload</h3>
        <hr/>
        <div className="row" style={{marginTop:'40px'}}>
        <div className="col-md-4 offset-md-4">
        <form onSubmit={this.onSubmitData}>
            <div className="form-group">
                <input type="file" accept=".json" onChange={this.dataChanged}/>
            </div>
            <div className="form-group">
                <button className="btn btn-primary" type="submit">Upload</button>
            </div>
          </form>
        </div>
        </div>
        {output.map(e=>e.testone.map(k=><p key={k.id}>{k.id} {k.q}</p>))}
      </div>
    )
  }
}
 