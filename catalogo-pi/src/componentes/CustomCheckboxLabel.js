export default function CustomCheckBoxLabel(props){
    return (
        <div className={`col-md-${props.col} mb-3`}>
        <input className="form-check-input" id={props.id} onChange={props.onChange} type="checkbox" />
        <label className="form-check-label ms-1" htmlFor={props.id}>{props.texto}</label>          
      </div>  
        )
       
    }
 