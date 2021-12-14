$.ajax({
    url:`https://api.nasa.gov/planetary/apod?api_key=pT1hZQFNKloNpPDoLMhlEGNulYbfBC0g8dioyZ2c`,
    type: "GET",
    success: function (response){
        $("#titulo").text(response.title);
        $("#img").attr("src",response.hdurl);
        $("#legenda").text(response.explanation)
    }
})

$('#botao').click(

    function buscaApi(){
        const data = $("#data").val();

        $.ajax({
            url:`https://api.nasa.gov/planetary/apod?api_key=suCbOrU4VGq4l83o9PFWDZXnHsQRcCXLecOi8bRf&date=${data}`,
            type: 'GET',
            success: function (response){  
        $("#titulo").text(response.title);
        $("#img").attr("src",response.hdurl);
        $("#legenda").text(response.explanation)

    }
})
}
)