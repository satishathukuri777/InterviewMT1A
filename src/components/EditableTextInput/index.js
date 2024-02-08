import React, {Component} from 'react'

import {
  EditableTextInputContainer,
  Heading,
  CardContext,
  InputButton,
  Para,
  Input,
  Button,
} from './styledComponents.js'

class EditableTextInput extends Component {
  state = {
    inputText:"Initial Text",
    inputValue:'',
    toggleButton:false,

  }
  onChangeInput  = event => {
    this.setState({
      inputValue: event.target.value,

    })
  }

  onCilckButton = () => {
    const {inputValue} = this.state
    this.setState(prev => ({
      toggleButton : !prev.toggleButton,
      inputText: inputValue,
    }))
  }


  render() {
    const {inputText,toggleButton,inputValue} = this.state 
    const mode = toggleButton ? 'Edit' : 'Save' 
    

    return (
      <EditableTextInputContainer>
        <CardContext onSubmit={this.onSubmitForm}>
          <Heading>Editable Text Input</Heading>
          <InputButton>
            {toggleButton ? (
              <Para>{inputText}</Para>
            ) : (
              <Input
                type="text"
                onChange={this.onChangeInput}
                value={inputValue}
              />
            )}
            <Button onClick={this.onCilckButton}>{mode}</Button>
          </InputButton>
        </CardContext>
      </EditableTextInputContainer>
    )
  }
}
export default EditableTextInput
