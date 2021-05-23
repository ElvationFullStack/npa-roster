class NpaRoster{
    constructor(){this.input = $('input');}
    getTeam(){
    $.get(`getTeam/${this.input.val()}`, function (data) {
        render.renderPlayers(data);
    })}
    getDreamTeam(){
        $.get("/dreamTeam", function (response) {
            render.renderPlayers(response)
        })
    }
    addToDreamTeam(id){
        $.ajax({
            url: `roster/`,
            data: { "id": id },
            method: "POST", success: function (response) {
            }
        })
    }



}