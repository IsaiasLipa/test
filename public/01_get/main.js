/** Your job:
  1. Fetch all of the artists
  2. Generate an unordered list where the name of each artist
     is listed. Example:
       <ul>
            <li>Beyonce</li>
            <li>Thelma Houston</li>
            ...
        </ul>
  3. Append this unordered list to the container with 
     the id of "artists." 
 **/

fetch('/artist')
  .then(request => request.json())
  .then(artists => {
    console.log(artists)
    artists.forEach(element => {
      document.querySelector('artists').innerHTML += `
        <li>${element.name}</li>
      `
    });
  })