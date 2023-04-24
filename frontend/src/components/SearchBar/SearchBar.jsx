import React from 'react';


const SearchBar = ({ searchTerm ='', setSearchTerm, handleSubmit })=> {
    return(
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}
                style={{ marginRight: '1em' }}
            />
            <button type='submit' className='searchButton'>Get All Books</button>
        </form>
     );
}
 
export default SearchBar;