
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';
import { GlobalStyle } from './GlobalStyle';

import {ContactForm} from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export default function App() {
  return (<> <ThemeProvider theme={theme}> <GlobalStyle />
    <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
    <Filter />
    <ContactList/>
  </ThemeProvider> </>  
  );
    
}