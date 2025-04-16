# PowerPagesClientAPI
A replication attempt of the Dataverse MDA Client API for Power Pages

# Videos
- getValue and setValue 
[![getValue and setValue](https://img.youtube.com/vi/WsAlsFYZZ_Q/0.jpg)](https://www.youtube.com/watch?v=WsAlsFYZZ_Q)
- setVisible and getVisible
[![setVisible and getVisible](https://img.youtube.com/vi/5xqsCy1k5NQ/0.jpg)](https://www.youtube.com/watch?v=5xqsCy1k5NQ)

# API State

## FormContext
- :white_check_mark: getAttribute  
- :white_check_mark: getControl  
  - Tested only for Attribute Controls
- :x: data  
- :x: ui  

## Attributes
- :x: addOnChange  
- :x: fireOnChange  
- :x: getAttributeType  
- :x: getFormat  
- :white_check_mark: getInitialValue  
    Only implemented on Boolean
- :x: getIsDirty
- :x: getIsPartyList
- :x: getMax
- :x: getMaxLength
- :x: getMin
- :x: getName
- :x: getOption
- :x: getOptions
- :x: getParent
- :x: getPrecision
- :x: getRequiredLevel
- :x: getSelectedOption
- :x: getSubmitMode
- :x: getText
- :x: getUserPrivilege
- :white_check_mark: getValue
- :x: isValid
- :x: removeOnChange
- :x: setIsValid
- :x: setPrecision
- :x: setRequiredLevel
- :x: setSubmitMode
- :white_check_mark: setValue