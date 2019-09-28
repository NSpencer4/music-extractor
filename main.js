import {Credentials} from "./creds";

const fs = require('file-system');
const SpotifyWebApi = require('spotify-web-api-node');
const creds = new Credentials();
const date = Date.now();

const playlists = [
    // Discover Weekly
    '37i9dQZEVXcWUWjvUhsYSD',
    // Release Radar
    '37i9dQZEVXbsnftHDncOwz'
];

var spotifyApi = new SpotifyWebApi({
    clientId: creds.spotifyClientID,
    clientSecret: creds.spotifyClientSecret,
});

// Retrieve an access token
spotifyApi.clientCredentialsGrant().then(
    function(data) {
        console.log('The access token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);

        // Save the access token so that it's used in future calls
        spotifyApi.setAccessToken(data.body['access_token']);
        // Get Elvis' albums
        playlists.forEach((playlistID) => {
            spotifyApi.getPlaylistTracks(playlistID).then(
                function(data) {
                    console.log('Playlist tracks', data.body);
                    fs.writeFile(`./spotify-extracts/playlist-tracks/${date}/extract.json`, JSON.stringify(data.body), (err) => {
                        // console.log(list);
                    });
                },
                function(err) {
                    console.error(err);
                }
            );
        });
    },
    function(err) {
        console.log(
            'Something went wrong when retrieving an access token',
            err.message
        );
    }
);

function getArtists() {

}

function getArtistTracks() {

}

function getPlaylistTracks() {

}