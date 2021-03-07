import React from "react"
import ModalSelector from 'react-native-modal-selector'
import PropTypes from 'prop-types'
import Style from "../../../assets/styles/Style"

const DSSelectInput =(props)=>{

    return (
        <ModalSelector
            data={props.data}
            initValue={props.placeholder}
            style={Style.SelectInput}
            selectStyle={Style.SelectInputContainer}
            selectTextStyle={Style.SelectInputText}
            initValueTextStyle={Style.SelectInputPlaceholder}
            cancelStyle={[Style.btn,Style.btnNormal,Style.btnDefault]}
            cancelTextStyle={[Style.btnLabel,Style.btnLabelNormal,Style.btnLabelDefault]}
            selectedKey={props.selectedKey}
            optionContainerStyle={Style.SelectInputOptionsContainer}
            optionTextStyle={Style.SelectInputOptionsText}
            onChange={(e)=>{props.onChange(e)}}
            visible={props.visible}
            onModalOpen={props.onModalOpen}
            onModalClose={props.onModalClose}
        />
    )

}

DSSelectInput.defaultProps={
    data:[],
    placeholder:"Select",
    selectedKey:-1,
    visible:false
}

DSSelectInput.propTypes={
    data:PropTypes.array,
    placeholder:PropTypes.string,
    selectedKey:PropTypes.number,
    onChange:PropTypes.func,
    visible:PropTypes.bool,
    onModalOpen:PropTypes.func,
    onModalClose:PropTypes.func,
}

export default DSSelectInput