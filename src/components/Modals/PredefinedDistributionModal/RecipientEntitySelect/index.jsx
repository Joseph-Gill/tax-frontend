// import React from 'react'
// import DropdownInternalContainer from '../../../Dropdowns/DropdownComponents/DropdownInternalContainer'
// import ModalDropdownSearchField from '../../../Dropdowns/DropdownComponents/ModalDropdownSearchField'
// import {getEntityInfo, renderEntitiesForModalDropdowns} from '../../../../helpers'
// import {ErrorMessage} from '../../../../style/messages'
// import {ActiveInputLabel} from '../../../../style/labels'
// import {ModalDropdownButton, ModalDropdownContentContainer} from '../../../Dropdowns/styles'
// import {EntityErrorContainer} from '../../styles'
//
//
// const RecipientEntitySelect = ({availableRecipients, entities, error, filteredRecipients, handleSelectRecipientChange,
//                                    targetDistributor, searchRecipientTerm, setFilteredRecipients, setShowRecipientDropdown,
//                                    showRecipientDropdown, targetRecipient}) => {
//     return (
//         <div>
//             <ActiveInputLabel
//                 disabled={!targetDistributor}
//             >
//                 Recipient
//             </ActiveInputLabel>
//             <DropdownInternalContainer
//                 setDropdownView={setShowRecipientDropdown}
//                 showDropdownView={showRecipientDropdown}
//             >
//                 <ModalDropdownButton
//                     disabled={!targetDistributor}
//                     onClick={() => setShowRecipientDropdown(!showRecipientDropdown)}
//                 >
//                     {!targetRecipient ? 'Select a recipient' : getEntityInfo(entities, targetRecipient)}
//                 </ModalDropdownButton>
//                 <ModalDropdownContentContainer show={showRecipientDropdown ? 1 : 0}>
//                     <ModalDropdownSearchField
//                         filterStateSet={setFilteredRecipients}
//                         inputName='recipient_entity_search'
//                         inputPlaceholder='Search for recipient'
//                         inputRef={searchRecipientTerm}
//                         originalArray={availableRecipients}
//                         term={searchRecipientTerm}
//                     />
//                     {renderEntitiesForModalDropdowns(filteredRecipients, handleSelectRecipientChange)}
//                 </ModalDropdownContentContainer>
//             </DropdownInternalContainer>
//             <EntityErrorContainer>
//                 {error && <ErrorMessage>{error.recipient}</ErrorMessage>}
//             </EntityErrorContainer>
//         </div>
//     )
// }
//
// export default RecipientEntitySelect
