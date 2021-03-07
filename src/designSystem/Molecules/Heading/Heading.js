import React from "react"
import PropTypes from 'prop-types'
import DSLabel from "../../Atoms/DSLabel/DSLabel"
import Style from "../../../assets/styles/Style"

const Heading=(props)=>{

    let st=Style.h1
    if(props.type==="h2"){
        st=Style.h2
    }
    return(
        <DSLabel style={st}>
            {props.children}
        </DSLabel>
    )
}

Heading.defaultProps={
    type:"h1"
}

Heading.propTypes={
    type:PropTypes.string
}

export default Heading