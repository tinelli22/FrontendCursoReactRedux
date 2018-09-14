import React from 'react'
import Grid from '../layout/grid'


//o Field do redux forma vai passar umas props
export default props => (

    <Grid cols={props.cols}>
        <div className='form-group'>
            <label htmlFor={props.name}>{props.label}</label>
            {/* ...props.input -> todas as propriedades do ...props.input seja colocado no input tag */}
            <input { ...props.input } className='form-control' placeholder={props.placeholder} 
                readOnly={props.readOnly} type={props.type} />
        </div>
    </Grid>

)