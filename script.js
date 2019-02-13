var meme = 5;

var futureMemes = 20;

var simpleMemes;

$("button").click(function() {
    simpleMemes = $(".something").val();
    var memes = ( simpleMemes * futureMemes ) / meme;    
    $(".clap").show();
    $("img").attr("src" , "http://31.media.tumblr.com/b5237659b9591cf1489ae73f8b5a326c/tumblr_nr24hvvHNn1uu7rcro1_400.gif");
    $("#Memestuff").text("The amount of memes you would see in this week is " + memes + " memes!");
});
$("button").dblclick(function() {
    $("doggo").show();
    $("img").attr("src" , "http://worldwideinterweb.com/wp-content/uploads/2017/06/dog-computer-meme-7.jpg");
});







