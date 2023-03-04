$('.search_btn').click(function(){
    const api_key = "ef0234df"
    const value = $(".search").val()
    axios.get(`http://www.omdbapi.com/?apikey=${api_key}&t=${value}`).then((res)=>{
        const data = res.data
        console.log(data)
        $('.movie_card h1').text(data.Title)
        $('.movie_card h2').text(data.Actors)
        $('.movie_card h3').text(data.Year)
        $('.movie_card h4').text(data.Genre)
        $('.movie_card h5').text(data.Country)
        $('.movie_card h6').text(data.Language)
$(".movie_card img").attr("src",data.Poster)

    })
})