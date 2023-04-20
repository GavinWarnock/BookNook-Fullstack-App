import React from 'react';
import "./BookDetailPage.css";
import { useParams } from 'react-router-dom';

const BookDetailPage = ({ searchResults }) => {
    const {bookid} = useParams()
    return (  
        <div className='resultsList'>
            <h2>Here is where your book search is displayed</h2>
        </div>
    );
}
 
export default BookDetailPage;