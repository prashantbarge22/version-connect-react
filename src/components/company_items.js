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
        <div className="wrapper-9">
        <div class="blp">
       <p class="bnm">Vision Upkaran</p>
       <p class="man">For Companies</p>
       <p>Rent out machinary and tools.</p>
       </div>
     
           
           <form className="form-wrapper-9" onSubmit={(props)=>{onSubmit(props)}}>
           <div class="god">
           <h2  >Item Detail</h2>
           
           </div>
           
           <div >
                <label htmlfor="title">Title</label>
                        <input type="text" className="title" id="title" name="title" placeholder="Title"/>
                </div>
           <div className="category">
           <label htmlfor="category">Category</label>
                   <input type="category"  id="category" name="category" placeholder="Category"/>
           </div>
           
               
        
               
              
                
               
                <div >
                <label htmlfor="duration">Duration</label>
                        <input type="numberr" className="duration" id="duration" name="duration" placeholder="Duration"/>
                </div>
                <div>
                <label htmlfor="discounted_amount">Discounted-Amount</label>
                        <input type="number" className="discounted_amount" id="discounted-amount" name="discounted_amount" placeholder="Discounted-amount"/>
                </div>
                <div >
                <label htmlfor="actual_amount">Actual Amount</label>
                        <input type="number" className="actual_amount" id="actual-amount" name="actual_amount" placeholder="Actual-amount"/>
                </div>
                <div >
                <label htmlfor="max_time">Maximum Time</label>
                        <input type="number" className="max_time" id="max-time" name="max_time" placeholder="Maximum-time"/>
                </div>
                <div >
                <label htmlfor="choose_file">Choose File</label>
                             <input id="inputGroupFile01" type="file" id="filename" name="filename" className="custom-file-input" />
                              
                </div>
                <div >
                <label htmlfor="description">Description</label>
                        <input type="description" className="description" id="description" name="description" placeholder="Description"/>
                </div>

                <button type="submit" id="submit"className="btn btn-primary">Submit</button>
            </form>
            </div>
            
            
            
           
        

    );
};

export default CompanyItems;