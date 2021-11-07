        /* My Bookshelf: Library Managment system with simple UI*/
        /* Designed by Bereket Lemma */


/* MY LIST OF BOOKS IN BOOKS OBJECT */
 
const books = [
        {
            author: "Lelisa Girma",
            title: "Netsebrak",
            category: "Non-fiction, Philosophy",
            publisher: "Lelisa Girma",
            yearPublished: "2012",
            edition: "1:2012",
            ISBN: "",
            language: "Amharic",
            searchName: 'lelisa girma'
        },
        {
            author: "Sibehat Gebre Igzabher",
            title: "Tikusat",
            category: "Fiction",
            publisher: "Sibehat Gebre Igzabher",
            yearPublished: "1990",
            edition: "11:2012",
            ISBN: "",
            language: "Amharic",
            searchName: 'sebehat gebre'
        },
        {
            author: "Adam Reta",
            title: "Giracha Kachiloch",
            category: "Fiction",
            publisher: "Adam Reta",
            yearPublished: "1983",
            edition: "",
            ISBN: "",
            language: "Amharic",
            searchName: 'adam reta'
        },
        {
            author: "Bealu Girma",
            title: "Hadis",
            category: "Fiction",
            publisher: "Bealu Girma",
            yearPublished: "1975",
            edition: "3:2010",
            ISBN: "",
            language: "Amharic", 
            searchName: 'bealu girma'
        },
        {
            author: "George Orwell",
            title: "Animal Farm",
            category: "Fiction, Politics",
            publisher: "Penguin Books Ltd.",
            yearPublished: "1945",
            edition: "35:1975",
            ISBN: "",
            language: "English",
            searchName: 'george orwell'
        },
        {
            author: "Nelson Mandela",
            title: "Long Walk to Freedom",
            category: "Non-fiction, Autobigraphy",
            publisher: "Nelson Mandela",
            yearPublished: "unknown",
            edition: "unknown",
            ISBN: "",
            language: "English",
            searchName: 'nelson mandela'
        }
    ];

// variables
const searchBook = document.querySelector('.input');
const resultsFound = document.querySelector('.result-found');
const searchResult = document.querySelector('.search-result');
const results = document.querySelector('.results');

// keyup event 
searchBook.addEventListener('keyup', search);

let mySearch,counter;
let node,textNode;

function search(){
    mySearch = searchBook.value.toLowerCase();
    if(mySearch !== ''){
        
        while(searchResult.hasChildNodes()){
            for(let i=0; i<searchResult.childNodes.length; i++){
                searchResult.removeChild(searchResult.childNodes[i]);
            }
        }

        counter = 0;

        for(let i=0; i<books.length; i++){
            let findByAuthor = books[i].searchName;
            let findByTitle = books[i].title.toLowerCase();
            let findByCategory = books[i].category.toLowerCase();
            
            if(findByAuthor.match(mySearch) !=null){
                node = document.createElement('p');
                textNode = document.createTextNode(`*
                ${books[i].author},
                ${books[i].title},
                ${books[i].category},
                ${books[i].yearPublished}`);
                node.appendChild(textNode);
                searchResult.appendChild(node);
                counter++
            }
            else if(findByTitle.match(mySearch) !=null){
                node = document.createElement('p');
                textNode = document.createTextNode(`*
                ${books[i].author},
                ${books[i].title},
                ${books[i].category},
                ${books[i].yearPublished}`);
                node.appendChild(textNode);
                searchResult.appendChild(node);
                counter++;
            }
            else if(findByCategory.match(mySearch) !=null){
                node = document.createElement('p');
                textNode = document.createTextNode(`*
                ${books[i].author},
                ${books[i].title},
                ${books[i].category},
                ${books[i].yearPublished}`);
                node.appendChild(textNode);
                searchResult.appendChild(node);            
                counter++;
            }
            resultsFound.innerHTML = `${counter} Books found`;
        }
    }
    
    else if(mySearch === ''){
        // clear the area if no result found
        counter = 0;
        searchResult.innerHTML = "";
        resultsFound.innerHTML = `${counter} Books found`;
    } 
}


