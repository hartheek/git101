const fs= require('fs');
const book={
    title:'The swamp things',
    author:'Hartheek Reddy'
};
console.log(book.author);
const bookJSON= JSON.stringify(book);
fs.writeFileSync('json.json',bookJSON);

