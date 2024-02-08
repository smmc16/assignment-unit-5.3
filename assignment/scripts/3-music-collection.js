console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

console.log(myCollection);

function addToCollection(collection, title, artist, yearPublished, track1, track1Runtime, track2, track2Runtime, track3, track3Runtime) {
  let album = {};
  album.title = title;
  album.artist = artist;
  album.yearPublished = yearPublished;
  album.tracks = [[track1, track1Runtime],[track2, track2Runtime],[track3, track3Runtime]]
  collection.push(album);
  return album;
}

console.log(addToCollection(myCollection, 'The Idler Wheel', 'Fiona Apple', 2012, 'Every Single Night', '3:30', 'Daredevil', '3:28', 'Valentine', '3:33'));
console.log(addToCollection(myCollection, 'Have One On Me', 'Joanna Newsom', 2010, 'Easy', '6:03', 'Have One On Me', '11:02', '81', '3:51'));
console.log(addToCollection(myCollection, 'Tidal', 'Fiona Apple', 1996, 'Sleep to Dream', '4:10', 'Sullen Girl', '3:55', 'Shadowboxer', '5:24'));
console.log(addToCollection(myCollection, 'Butterfly', 'Mariah Carey', 1997, 'Honey', '5:00', 'Butterfly', '4:34', 'My All', '3:51'));
console.log(addToCollection(myCollection, 'Homogenic', 'Bjork', 1997, 'Hunter', '4:15', 'Joga', '5:05', 'Unravel', '3:22'));
console.log(addToCollection(myCollection, 'songs', 'Adrianne Lenker', 2020, 'Two Reverse', '3:33', 'Ingydar', '4:08', 'Anything', '3:22'));

console.log(myCollection);

function showCollection (collection) {
  for(let albums of collection) {
    console.log(albums.title + ' by '+ albums.artist + ', published in ' + albums.yearPublished + '\n' + '1. ' + albums.tracks[0][0]+ ': '+ albums.tracks[0][1] +'\n' + '2. ' + albums.tracks[1][0]+ ': ' +albums.tracks[1][1] + '\n' + '3. ' + albums.tracks[2][0] + ': '+ albums.tracks[2][1])
  }
}

showCollection(myCollection);

function findByArtist (collection, artist) {
  let foundAlbumsByArtist = [];
  for(let artists of collection) {
    if (artists.artist == artist)
    foundAlbumsByArtist.push(artists);
  }
  return foundAlbumsByArtist;
}

console.log(findByArtist(myCollection, 'Fiona Apple'));

function search(collection, searchCriteria) {
  let albumsFoundBySearch = [];
  if (searchCriteria.trackName){
    for(let i = 0; i <= 5; i++) {
      for (let j = 0; j <= 2; j++) { 
        for (let k = 0; k <= 1; k++) {
      if(collection[i].tracks[j][k] == searchCriteria.trackName) { 
          console.log(collection[i].tracks[j][k]);
          albumsFoundBySearch.push(collection[i].tracks[j]);
          return albumsFoundBySearch;
       } 
     }
    }
  }
    return albumsFoundBySearch;
  }
  if (searchCriteria && searchCriteria.yearPublished && searchCriteria.artist) {
  for(let albums of collection) {
     if (searchCriteria.artist === albums.artist && searchCriteria.yearPublished === albums.yearPublished) {
      albumsFoundBySearch.push(albums);
    }
    }
    return albumsFoundBySearch;
  } else {
  return collection;
  }
  }

  let searchObject = {
    trackName: 'Have One On Me',
    artist: 'Fiona Apple', 
    yearPublished: 2012
  }

console.log(search(myCollection, searchObject))



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
