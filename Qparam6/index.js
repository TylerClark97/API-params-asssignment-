'use strict'

let username = 'placeholder'; 
console.log(username); 
const searchURL = 'https://api.github.com/users/'



function formatQueryParams(username){
    console.log('FormatQueryParameters running')
    const fullURL = searchURL + username + '/repos'; 
    console.log(fullURL); 
    return fullURL; 
}

function displayRepos(responseJson){
    console.log('displayRepos running'); 
    $('.results').removeClass('hidden'); 
    $('.display').empty(); 
    console.log(responseJson); 
    console.log(`${responseJson[0].name}`);
    
    
    for ( let i = 0; i < responseJson.length; i++){
        $('.display').append(`
        
        <P> Name: ${responseJson[i].name}</p> <p> Url: ${responseJson[i].url}</p> <br> 


        `);
    console.log(responseJson[i].name)
    }
    

}


function getRepos(username){
    console.log("getRepos Running");

    const url = formatQueryParams(username); 

    fetch(url)
        .then(response => response.json())
        .then(responseJson => displayRepos(responseJson))
        .catch(error => alert('an error was encountered')); 
}



function watchForm(){
    console.log('watchForm is running'); 
    $('form').submit(function(event){
        username = $('#userChosen').val();
        console.log('username'); 
        console.log(username);
        event.preventDefault(); 
        getRepos(username); 
    });
}




$(function (){
    console.log('app loaded waiting for a submit'); 
    
    watchForm(); 
})