export default function CustomTextAreaLabel(props){
    return (
        <div className={`col-md-${props.col} mb-3`}>
            <label className="form-label" htmlfor={props.id}>{props.text}</label>
            <textarea className="form-control" id={props.id} onChange={props.onChange} rows="3"></textarea>
     
     
        </div>
        )
       
    }