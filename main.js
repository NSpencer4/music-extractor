const Config = require('./config');
const SpotifyService = require('./services/spotify.service');
const DeezerService = require('./services/deezer.service');
const SpotifyServiceInstance = new SpotifyService();
const DeezerServiceInstance = new DeezerService();

// SpotifyServiceInstance.getSpotifyAccessToken().then(
//     function(data) {
//         SpotifyServiceInstance.setSpotifyAccessToken(data);
//         Config.playlists.forEach((playlist) => {
//             SpotifyServiceInstance.getPlaylistTracks(playlist);
//         })
//     },
//     function(err) {
//         console.log(
//             'Something went wrong when retrieving an access token',
//             err.message
//         );
//     }
// );

DeezerServiceInstance.getDeezerAccessToken();
