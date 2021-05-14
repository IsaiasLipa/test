/**
 * Edit the processSave() function body
 * so that it issues a POST request to the
 * server with the data from the form.
 */

const processSave = ev => {
    // your code here:
    console.log('Save the artist!')

    fetch('/artists', {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "name": "BC",
            "spotify_id":"some id",
            "image_url":"blah",
            "genres": ['folk','country']
        })
    })

    // don't forget to prevent the default
    // submit button behavior from firing:
    ev.preventDefault();
};

document.querySelector('button').onclick = processSave;