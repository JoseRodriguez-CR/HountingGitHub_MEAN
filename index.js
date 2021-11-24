$(document).ready(function(){
    $('.btn').click(function(){
        $.get("https://api.github.com/users/JoseRodriguez-CR", displayName)
        function displayName(data) {
            document.getElementById('name').innerHTML = data.name;
            console.log(data);
        }
    })
})  