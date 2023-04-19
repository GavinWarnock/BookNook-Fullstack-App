import React from 'react';
import "./BookDetailPage.css";

const BookDetailPage = ({ searchResults }) => {
    return (  
        <div className='resultsList'>
            <h2>Here is where your book search is displayed</h2>
            {searchResults.map((books,index)=>(
                <div key={index}>
                    {/* Need to check this name later */}
                    <h3>{books.book.name}</h3>
                </div>
            ))}
        </div>
    );
}
 
export default BookDetailPage;