import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

import {FiSearch} from 'react-icons/fi' 

export const Searchbar = ({onSubmit}) => {
  return (
    <SearchbarHeader>
      <SearchForm onSubmit={onSubmit}>
        <SearchFormButton type="submit">
          <FiSearch />
        </SearchFormButton>

        <SearchFormInput
          name='query'
          type="text"
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarHeader>
  );
};
