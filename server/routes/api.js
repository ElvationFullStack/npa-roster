const express = require('express');
const router = express.Router();
const my_data=require('../../dataBase/dataBase');
const data_instant=new my_data.MyData()
console.log(data_instant);
// console.log(data_instant.getPlayers())
//////////////////////////
// var playersBase;
// request(api_url, function (erroe, response, body) {
//     playersBase = JSON.parse(body).league.standard;
// })
/////////////////////////

router.get('/', function (req, res) {
    console.log('runing server')
})

// this is how we resive params in the route /path:params
// note bollean will always got send as string 
router.get('/getTeam/:teamName', function (req, res) {
    let team_id = data_instant.teamToIDs[req.params.teamName]
    let teams_arr = data_instant.getPlayers().filter(player => (player.isActive && player.teamId === team_id))
    res.send(teams_arr)
})

router.put('/putTeam', function (req, res) {

    let new_team = req.body;
    data_instant.addNewTeam(new_team)
    console.log(data_instant.teamToIDs);
    res.end()
})




///////////////////////////dreamTeam
router.get('/dreamTeam', function (req, res) {
    res.send(data_instant.dreamTeamArray);

})
router.post('/roster', function (req, res) {
    let resevedId = req.body.id;
    addPlayer(resevedId)
   res.send(data_instant.dreamTeamArray);
})

function addPlayer(id) {
    if (data_instant.dreamTeamArray.length >4) {
        return -1;
    }
    let found =data_instant.getPlayers().find(player => player.personId === id)
    
    data_instant.dreamTeamArray.push(found)
    console.log(data_instant.dreamTeamArray)
    return 0
}







module.exports = router