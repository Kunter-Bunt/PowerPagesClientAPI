# PowerPagesClientAPI
A replication attempt of the Dataverse MDA Client API for Power Pages

# Videos
- getValue and setValue 
[![getValue and setValue](https://img.youtube.com/vi/WsAlsFYZZ_Q/0.jpg)](https://www.youtube.com/watch?v=WsAlsFYZZ_Q)
- setVisible and getVisible
[![setVisible and getVisible](https://img.youtube.com/vi/5xqsCy1k5NQ/0.jpg)](https://www.youtube.com/watch?v=5xqsCy1k5NQ)

# API State
In general the project is not in a production ready state. But we will keep working on it!

Legend:
- :white_check_mark: Implemented
- :x: Pending
- :o: Not implementable/Not useful

## FormContext
- :white_check_mark: getAttribute  
- :white_check_mark: getControl  
  - Tested only for Attribute Controls
- :x: data  
- :white_check_mark: ui
  - Partial implementation only

## Attributes
- :white_check_mark: addOnChange  
- :white_check_mark: fireOnChange  
- :white_check_mark: getAttributeType  
- :x: getFormat  
- :white_check_mark: getInitialValue  
    - Only implemented on Boolean
- :white_check_mark: getIsDirty
- :x: getIsPartyList
- :x: getMax
- :x: getMaxLength
- :x: getMin
- :white_check_mark: getName
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
- :white_check_mark: removeOnChange
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
- :white_check_mark: getName
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
    - Tested only for Attribute Controls
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
    - Tested only for Attribute Controls

## formContext.data
- :x: addOnLoad
- :x: getIsDirty
- :x: isValid
- :x: refresh
- :x: removeOnLoad
- :x: save

## formContext.data.entity
- :x: addOnPostSave
- :x: addOnSave
- :x: getDataXml
- :x: getEntityName
- :x: getEntityReference
- :x: getId
- :x: getIsDirty
- :x: getPrimaryAttributeValue
- :x: isValid
- :x: removeOnPostSave
- :x: removeOnSave
- :x: save

## formContext.data.process
- :o: Will likely not be implemented as Business Process Flows are not rendered in Power Pages

## formContext.ui
- :x: addOnLoad
- :x: addLoaded
- :x: clearFormNotification
- :x: close
- :x: getFormType
- :x: getViewPortHeight
- :x: getViewPortWidth
- :x: refreshRibbon
- :x: removeOnLoad
- :x: removeLoaded
- :x: setFormEntityName
- :x: setFormNotification
- :white_check_mark: tabs

## formContext.ui.formSelector
- :o: Will likely not be implemented as the formSelector is not available in Power Pages

## formContext.ui.headerSection
- :x: getBodyVisible
- :x: getCommandBarVisible
- :x: getTabNavigatorVisible
- :x: setBodyVisible
- :x: setCommandBarVisible
- :x: setTabNavigatorVisible

## formContext.ui.navigation
- :x: getId
- :x: getLabel
- :x: getVisible
- :x: setFocus
- :x: setLabel
- :x: setVisible

## formContext.ui.process
- :o: Will likely not be implemented as Business Process Flows are not rendered in Power Pages

## formContext.ui.quickForms
- :x: getControl
- :x: getControlType
- :x: getDisabled
- :x: getLabel
- :x: getName
- :x: getParent
- :x: getVisible
- :x: isLoaded
- :x: refresh
- :x: setDisabled
- :x: setFocus
- :x: setLabel
- :x: setVisible

## formContext.ui.tabs
- :x: addTabStateChange
- :x: getContentType
- :x: getDisplayState
- :white_check_mark: getLabel
- :white_check_mark: getName
- :white_check_mark: getParent
- :white_check_mark: getVisible
- :x: removeTabStateChange
- :x: setContentType
- :x: setDisplayState
- :x: setFocus
- :white_check_mark: setLabel
- :white_check_mark: setVisible
- :white_check_mark: sections

### sections
- :white_check_mark: getLabel
- :white_check_mark: getName
- :white_check_mark: getParent
- :white_check_mark: getVisible
- :white_check_mark: setLabel
- :white_check_mark: setVisible
- :x: controls

## Grids and subgrids
### GridControl
- :x: addOnLoad
- :x: getEntityName
- :x: getFetchXml
- :x: getGrid
- :x: getGridType
- :x: getRelationship
- :x: getUrl
- :x: getViewSelector
- :x: openRelatedGrid
- :x: refresh
- :x: refreshRibbon
- :x: removeOnLoad

### Grid
- :x: getRows
- :x: getSelectedRows
- :x: getTotalRecordCount

### GridRow
- :x: getData

### GridRowData
- :x: getEntity

### GridEntity
- :x: getEntityName
- :x: getEntityReference
- :x: getId
- :x: getPrimaryAttributeValue

### GridAttribute
- :x: getName
- :x: getRequiredLevel
- :x: getValue
- :x: setRequiredLevel
- :x: setValue

### GridCell
- :x: clearNotification
- :x: getDisabled
- :x: getLabel
- :x: setDisabled
- :x: setNotification

### ViewSelector
- :x: getCurrentView
- :x: isVisible
- :x: setCurrentView

## Xrm.App
- :x: addGlobalNotification
- :x: clearGlobalNotification

### Xrm.App.sidePanes
- :x: createPane
- :x: getAllPanes
- :x: getPane
- :x: getSelectedPane

## Xrm.Device
- :x: captureAudio
- :x: captureImage
- :x: captureVideo
- :x: getBarcodeValue
- :x: getCurrentPosition
- :x: pickFile

## Xrm.Encoding
- :x: htmlAttributeEncode
- :x: htmlDecode
- :x: htmlEncode
- :x: xmlAttributeEncode
- :x: xmlEncode

## Xrm.Navigation
- :x: navigateTo
- :x: openAlertDialog
- :x: openConfirmDialog
- :x: openErrorDialog
- :x: openFile
- :x: openForm
- :x: openUrl
- :x: openWebResource

## Xrm.Panel
- :x: loadPanel

## Xrm.Utility
- :x: closeProgressIndicator
- :x: getAllowedStatusTransitions
- :x: getEntityMetadata
- :x: getEntityMainFormDescriptor
- :x: getGlobalContext
  - :x: client
    - :x: getClient
    - :x: getClientState
    - :x: getFormFactor
    - :x: isOffline
    - :x: isNetworkAvailable
  - :x: organizationSettings
    - :x: attributes
    - :x: baseCurrencyId
    - :x: baseCurrency
    - :x: defaultCountryCode
    - :x: isAutoSaveEnabled
    - :x: languageId
    - :x: organizationId
    - :x: isTrialOrganization
    - :x: organizationExpiryDate
    - :x: uniqueName
    - :x: useSkypeProtocol
    - :x: fullnameConventionCode
  - :x: userSettings
    - :x: dateFormattingInfo
    - :x: defaultDashboardId
    - :x: isGuidedHelpEnabled
    - :x: isRTL
    - :x: languageId
    - :x: roles
    - :x: securityRolePrivileges
    - :x: securityRoles
    - :x: transactionCurrency
    - :x: transactionCurrencyId
    - :x: userId
    - :x: userName
    - :x: getSecurityRolePrivilegesInfo
    - :x: getTimeZoneOffsetMinutes 
  - :x: getAdvancedConfigSetting
  - :x: getClientUrl
  - :x: getCurrentAppName
  - :x: getCurrentAppProperties
  - :x: getCurrentAppUrl
  - :x: getVersion
  - :x: getWebResourceUrl
  - :x: isOnPremises
  - :x: prependOrgName
- :x: getLearningPathAttributeName
- :x: getPageContext
- :x: getResourceString
- :x: invokeProcessAction
- :x: lookupObjects
- :x: refreshParentGrid
- :x: showProgressIndicator

## Xrm.WebApi
- :o: Xrm.WebApi.offline will not be implemented.
- :x: Xrm.WebApi.online is the same als Xrm.WebApi
- :x: createRecord
- :x: deleteRecord
- :x: retrieveRecord
- :x: retrieveMultipleRecords
- :x: updateRecord
- :x: isAvailableOffline
- :x: execute
- :x: executeMultiple