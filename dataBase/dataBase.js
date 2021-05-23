

const request = require('request');
const api_url = 'http://data.nba.net/10s/prod/v1/2018/players.json';

class MyData {
    constructor() {
        this.dreamTeamArray = [];

        this.teamToIDs = {
            "lakers": "1610612747",
            "warriors": "1610612744",
            "heat": "1610612748",
            "suns": "1610612756"
        }
        request(api_url, (erroe, response, body) => {
            this._playersBase = JSON.parse(body).league.standard;
        })
    }
    getPlayers() {
        return this._playersBase;
    }
    addNewTeam(team) {
        this.teamToIDs[team.teamName] = team.teamId
    }




}
module.exports = { MyData }











