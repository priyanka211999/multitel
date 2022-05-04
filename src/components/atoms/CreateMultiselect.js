import React,{useState} from 'react'
import Creatable from 'react-select/creatable'

function CreateMultiselect() {
    const[tagInputValue,setTagInputValu]=useState('')
    const[tagValue,setTagValue] =useState('')

    const handleChange = (tags,value) =>{
       setTagValue(value)
       console.log("value",value)
    }
const handleKeyDown = (event) =>{
    if(!tagInputValue) return;
    switch(event.key) {
        case 'Enter':
        case 'Tab' :
            setTagValue([...tagValue,createOption(tagInputValue)])
            setTagInputValu('');
            event.preventDefault();
            break
            default:
            break
    }

}
const  createOption  = label =>({
    label,
    value:label
})

const handleInputChange = (value) =>{
    setTagInputValu(value);
    console.log("valueI",tagValue,value)
}

  return (
    <div> 
    <Creatable 
    isClearable
    isMulti
    components={
        {DropdownIndicator:null}
    }
    inputValue={tagInputValue}
    onChange={(value) => handleChange('tags',value)}
    onInputChange = {handleInputChange}
    placeholder='Please enter the tags and Click Enter'
    onKeyDown={handleKeyDown} 
    menuIsOpen={false}
    value={tagValue}
    />
    </div>
  )
}

export default CreateMultiselect