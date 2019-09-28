class DeezerService {
    constructor() {
        this.Config = require('../config');
        this.express = require('express');
        this.request = require('request');
        this.app = this.express();
        this.deezerAuthApi = require('node-deezer');
        this.deezerApi = require('deezer-api');
        this.deezerAuthInstance = new this.deezerAuthApi();
        this.deezerInstance = new this.deezerApi();

    }

    getDeezerAccessToken() {
        // TODO
        this.login();
    }

    login() {
        // stubb
    }
}

module.exports = DeezerService;
