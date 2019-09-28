class SpotifyService {
    constructor() {
        this.fs = require('file-system');
        this.Config = require('../config');
        this.SpotifyWebApi = require('spotify-web-api-node');
        this.spotifyApi = new this.SpotifyWebApi({
            clientId: this.Config.credentials.spotifyClientID,
            clientSecret: this.Config.credentials.spotifyClientSecret,
        });
    }

    getSpotifyAccessToken() {
        return this.spotifyApi.clientCredentialsGrant();
    }

    setSpotifyAccessToken(data) {
        // Save the access token so that it's used in future calls
        this.spotifyApi.setAccessToken(data.body['access_token']);
        console.log('The access token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);
    }

    getArtists() {
        //TODO
    }

    getArtistTracks() {
        //TODO
    }

    getPlaylistTracks(playlistID) {
        let self = this;
        this.spotifyApi.getPlaylistTracks(playlistID).then(
            function (data) {
                // console.log('Playlist tracks', data.body);
                self.fs.writeFile(`./spotify-extracts/playlists/${playlistID}/${Date.now()}/extract.json`,
                    JSON.stringify(data.body), () => {
                });
            },
            function (err) {
                console.error(err);
            }
        );
    }
}

module.exports = SpotifyService;
