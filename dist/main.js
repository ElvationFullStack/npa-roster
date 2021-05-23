const input = $('input');
// setTimeout(,3000)
const render=new Render();
const npa_roster=new NpaRoster();

$('#getTeam').on('click',function () { npa_roster.getTeam()})

$('#dreamTeam').on('click',function () {npa_roster.getDreamTeam(); })

$("body").on('click', ".add-to-dream", function(){
    let id = $(this).data().id;
    npa_roster.addToDreamTeam(id)
  
})



// 