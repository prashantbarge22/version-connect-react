import { useHistory } from "react-router-dom";
import "../css/company_items.css"
import services from "../services/services";

function CompanyItems () {
    
        let history = useHistory();

        const onSubmit= (props)=>{
            props.preventDefault();
         const formData = new FormData();
         formData.append("title",props.target.title.value);
         formData.append("category",props.target.category.value);
         formData.append("duration",props.target.duration.value);
         formData.append("discounted_amount",props.target.discounted_amount.value);
         formData.append("actual_amount",props.target.actual_amount.value);
         formData.append("max_time",props.target.max_time.value);
         formData.append("file",props.target.filename.files[0]);
         formData.append("description",props.target.description.value);
        //title:req.body.title,
        //category:req.body.category,
        //duration:req.body.duration,
        //discounted_amount:req.body.discounted_amount,
        //actual_amount:req.body.actual_amount,
        //max_time:req.body.max_time,
        //filename:req.file.filename,
        //file_path:req.file.path,
        //description:req.body.description,
        console.log(formData);
       services.registerItems(formData).then(result=>{
           console.log(result);
          if(result.data.error){
              alert(result.data.data);
          }else{
              history.push("/company/login")
          }
       }).catch(err=>{
           console.log(err);
       })
    }
    return (
        
        <div class="bg-img">
              <div className = "ibox-double">
               
              <form className="form" onSubmit={(props)=>{onSubmit(props)}}>
                <div className = "itm">
                    ITEM DETAILS
                    </div>
                <div className="mb-3">
                        
                        <input type="text" className="form-control" id="title" name="title" placeholder="Title"/>
                </div>
                <div className="mb-3">
                        <input type="text" className="form-control" id="category" name="category" placeholder="Item Category"/>
                </div>
                <div className="mb-3">
                        <input type="number" className="form-control" id="duration" name="duration" placeholder="Duration"/>
                </div>
                <div className="mb-3">
                        <input type="number" className="form-control" id="discounted-amount" name="discounted_amount" placeholder="Discounted-amount"/>
                </div>
                <div className="mb-3">
                        <input type="number" className="form-control" id="actual-amount" name="actual_amount" placeholder="Actual-amount"/>
                </div>
                <div className="mb-3">
                        <input type="number" className="form-control" id="max-time" name="max_time" placeholder="Maximum-time"/>
                </div>
                <div className="mb-3">
                             <input id="inputGroupFile01" type="file" id="filename" name="filename" className="custom-file-input" />
                              <label className="custom-file-label" htmlfor="inputGroupFile01">Choose file</label>
                </div>
                <div className="mb-3">
                        <input type="text" className="form-control" id="description" name="description" placeholder="Description"/>
                </div>

                <button type="submit" id="submit"className="btn btn-primary">Submit</button>
            </form>
            </div>
            </div>
            
            
           
        

    );
};

export default CompanyItems;