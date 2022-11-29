import React from 'react';
import { ListContact, Button } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ListContact>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}
        <Button type="button" onClick={() => onDeleteContact(id)}>
          delete
        </Button>
      </li>
    ))}
  </ListContact>
);

export default ContactList;

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { ListContact, Button } from './ContactList.styled';
// import { getContacts, getFilter } from 'redux/selectors';

// const ContactList = () => {
//   const contacts = useSelector(getContacts);
//   const filter = useSelector(getFilter);
//   const dispatch = useDispatch();
//   const visibleContacts = contacts.filter(
//     contact => contact.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
//   );
//   <ListContact>
//     {visibleContacts.map(({ contact }) => (
//       <li key={contact.id}>
//         {contact.name}: {contact.number}
//         {/* <Button type="button" onClick={() => onDeleteContact(id)}>
//           delete
//         </Button> */}
//       </li>
//     ))}
//   </ListContact>;
// };

// export default ContactList;
