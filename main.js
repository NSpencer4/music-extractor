const SpotifyService = require('./services/spotify.service');
const spotifyServiceInstance = new SpotifyService();

spotifyServiceInstance.getSpotifyAccessToken().then(
    function(data) {
        spotifyServiceInstance.setSpotifyAccessToken(data);
    },
    function(err) {
        console.log(
            'Something went wrong when retrieving an access token',
            err.message
        );
    }
);
