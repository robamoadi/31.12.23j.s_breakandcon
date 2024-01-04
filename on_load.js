// define doc elements 
let id, user_name, age , email, country, users_table 

window.onload = after_load

// get document elements from the HTML page AFTER page loaded
function after_load() {
    id = document.getElementById('id_txt')
    user_name = document.getElementById('id_name')
    age = document.getElementById('id_age')
    email = document.getElementById('id_email')
    country = document.getElementById('id_country')
    users_table = document.getElementById('users_table')  
      
}
