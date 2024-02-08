console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

console.log(myCollection);

function addToCollection(collection, title, artist, yearPublished) {
  var album = {};
  album.title = title;
  album.artist = artist;
  album.yearPublished = yearPublished;
  collection.push(album);
  return album;
}

console.log(addToCollection(myCollection, 'The Idler Wheel', 'Fiona Apple', 2012));
console.log(addToCollection(myCollection, 'Have One On Me', 'Joanna Newsom', 2010));
console.log(addToCollection(myCollection, 'Tidal', 'Fiona Apple', 1996));
console.log(addToCollection(myCollection, 'Butterfly', 'Mariah Carey', 1997));
console.log(addToCollection(myCollection, 'Homogenic', 'Bjork', 1997));
console.log(addToCollection(myCollection, 'songs', 'Adrianne Lenker', 2020));

console.log(myCollection);





// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
