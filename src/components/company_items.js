import "../css/company_items.css"

function CompanyItems () {
    return (
        
            <div className = "ibox-double">
                <div container="ibox">
            <form className="form">
                <div className = "itm">
                    <h1>Item Details</h1>
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
                        <input type="number" className="form-control" id="discounted-amount" name="discounted-amount" placeholder="Discounted-amount"/>
                </div>
                <div className="mb-3">
                        <input type="number" className="form-control" id="actual-amount" name="actual-amount" placeholder="Actual-amount"/>
                </div>
                <div className="mb-3">
                        <input type="number" className="form-control" id="max-time" name="max-time" placeholder="Maximum-time"/>
                </div>
                <div className="mb-3">
                        <input type="text" className="form-control" id="filename" name="filename" placeholder="File Name"/>
                </div>
                <div className="mb-3">
                        <input type="text" className="form-control" id="file_path" name="file_path" placeholder="File Path"/>
                </div>
                <div className="mb-3">
                        <input type="text" className="form-control" id="description" name="description" placeholder="Description"/>
                </div>
            </form>
            </div>
            </div>
           
        

    );
};

export default CompanyItems;