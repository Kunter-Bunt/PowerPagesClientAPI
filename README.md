# PowerPagesClientAPI
A replication attempt of the Dataverse MDA Client API for Power Pages

# Videos
- getValue and setValue 
[![getValue and setValue](https://img.youtube.com/vi/WsAlsFYZZ_Q/0.jpg)](https://www.youtube.com/watch?v=WsAlsFYZZ_Q)
- setVisible and getVisible
[![setVisible and getVisible](https://img.youtube.com/vi/5xqsCy1k5NQ/0.jpg)](https://www.youtube.com/watch?v=5xqsCy1k5NQ)

# API State
In general the project is not in a production ready state. But we will keep working on it!

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

## Controls
- :x: addCustomFilter
- :x: addCustomView
- :x: addEventHandler
- :x: addNotification
- :x: addOnLookupTagClick
- :x: addOnOutputChange
- :x: addOnPostSearch
- :x: addOnResultOpened
- :x: addOnSelection
- :x: addOption
- :x: addPreSearch
- :x: clearNotification
- :x: clearOptions
- :white_check_mark: getAttribute
- :x: getContentWindow
- :x: getControl
- :x: getControlType
- :x: getData
- :x: getDefaultView
- :x: getDisabled
- :x: getEntityTypes
- :x: getInitialUrl
- :x: getLabel
- :x: getName
- :x: getObject
- :x: getOptions
- :x: getOutputs
- :x: getParent
- :x: getSearchQuery
- :x: getSelectedResults
- :x: getShowTime
- :x: getSrc
- :x: getState
- :x: getTotalResultsCount
- :x: getValue
- :white_check_mark: getVisible
    Tested only for Attribute Controls
- :x: openSearchResult
- :x: refresh
- :x: removeOnLookupTagClick
- :x: removeOnOutputChange
- :x: removeOnPostSearch
- :x: removeOnResultsOpened
- :x: removeOnSelection
- :x: removeOption
- :x: removePreSearch
- :x: setData
- :x: setDefaultView
- :x: setDisabled
- :x: setEntityTypes
- :x: setFocus
- :x: setLabel
- :x: setNotification
- :x: setSearchQuery
- :x: setShowTime
- :x: setSrc
- :white_check_mark: setVisible
    Tested only for Attribute Controls
