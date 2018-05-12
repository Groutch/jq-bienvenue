console.log('have fun !');
$("#first_name").val('');
$("#last_name").val('');
$("#city").val('');
function updateInfo()
{
    var infos=[$("#first_name").val(),$("#last_name").val(),$("#city").val()];
    console.log(infos);
    $("#username").text(infos[0]+" "+infos[1]);
    if(infos[0] == "" && infos[1] == ""){
        $("#username").text("stranger");
    }
}
$( "input" ).on ("change keyup paste",updateInfo);
