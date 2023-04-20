import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
//Need to import Results List Here//
import "./SearchPage.css";
import axios from "axios";
import ResultsList from "../../components/ResultsList/ResultsList";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("Harry Potter");
  const [searchResults, setSearchResults] = useState([       {
    "kind": "books#volume",
    "id": "L18VBQAAQBAJ",
    "etag": "YpQvn0tPPbs",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/L18VBQAAQBAJ",
    "volumeInfo": {
        "title": "The Psychology of Harry Potter",
        "subtitle": "An Unauthorized Examination Of The Boy Who Lived",
        "authors": [
            "Neil Mulholland"
        ],
        "publisher": "BenBella Books",
        "publishedDate": "2007-04-10",
        "description": "Harry Potter has provided a portal to the wizarding world for millions of readers, but an examination of Harry, his friends and his enemies will take us on yet another journey: through the psyche of the Muggle (and wizard!) mind. The twists and turns of the series, as well as the psychological depth and complexity of J. K. Rowling’s characters, have kept fans enthralled with and puzzling over the many mysteries that permeate Hogwarts and beyond: • Do the Harry Potter books encourage disobedience? • Why is everyone so fascinated by Professor Lupin? • What exactly will Harry and his friends do when they finally pass those N.E.W.T.s? • Do even wizards live by the ticking of the clock? • Is Harry destined to end up alone? And why did it take Ron and Hermione so long to get together? Now, in The Psychology of Harry Potter, leading psychologists delve into the ultimate Chamber of Secrets, analyzing human mind and motivation by examining the themes and characters that make the Harry Potter books the bestselling fantasy series of all time. Grab a spot on the nearest couch, and settle in for some fresh revelations about our favorite young wizard!",
        "industryIdentifiers": [
            {
                "type": "ISBN_13",
                "identifier": "9781932100884"
            },
            {
                "type": "ISBN_10",
                "identifier": "1932100881"
            }
        ],
        "readingModes": {
            "text": false,
            "image": false
        },
        "pageCount": 338,
        "printType": "BOOK",
        "categories": [
            "Literary Criticism"
        ],
        "averageRating": 3.5,
        "ratingsCount": 5,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.1.2.0.preview.0",
        "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
        },
        "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=L18VBQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=L18VBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=L18VBQAAQBAJ&printsec=frontcover&dq=Harry+Potter&hl=&cd=1&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=L18VBQAAQBAJ&dq=Harry+Potter&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/The_Psychology_of_Harry_Potter.html?hl=&id=L18VBQAAQBAJ"
    },
    "saleInfo": {
        "country": "US",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
    },
    "accessInfo": {
        "country": "US",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
            "isAvailable": false
        },
        "pdf": {
            "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=L18VBQAAQBAJ&hl=&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
    },
    "searchInfo": {
        "textSnippet": "Now, in The Psychology of Harry Potter, leading psychologists delve into the ultimate Chamber of Secrets, analyzing human mind and motivation by examining the themes and characters that make the Harry Potter books the bestselling fantasy ..."
    }
}]);
  //ToDo: Create Axios request to fetch book information based on search term
  const fetchBooks = async () => {
    try {
      let lowerCaseSearchTerm = searchTerm.toLowerCase();
      let response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${lowerCaseSearchTerm}&maxResults=35`
      );
      setSearchResults(response.data.items);
    } catch (error) {
      console.log("Error in fetchBooks request", error);
    }
  };
  //Hint: Use PostMan to confirm URL structure
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You searched for ${searchTerm}`);
    fetchBooks();
  };

  return (
    <div className="container search">
      <h1>Search Page!!!</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSubmit={handleSubmit}
      />
      <ResultsList searchResults={searchResults} />
    </div>
    
  );
};

export default SearchPage;
