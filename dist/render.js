
class Render {
    constructor(){
    this.container_element = $('#container')
    this.source = $('#player-template').html();
    this.template = Handlebars.compile(this.source);
    }
    renderPlayers = function (players) {
        this.container_element.html('')
        const newHTML = this.template({ players: players });
        this.container_element.append(newHTML);
    }
}
