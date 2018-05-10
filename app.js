console.log('have fun !');
function updateInfo()
{
    var infos=[$("#first_name").val(),$("#last_name").val(),$("#city").val()];
    console.log(infos);
    $("#username").text($("#first_name").val()+" "+$("#last_name").val());
    if($("#first_name").val() == "" && $("#last_name").val() == ""){
        $("#username").text("Stranger");
    }
}
$( "input" ).on ("change keyup paste",updateInfo);