const fs=require('fs');
const axios=require('axios');
const url='http://api.weatherstack.com/current?access_key=54156e233c649ecd16ea4ec6ce143dd0&query=New%20York';
axios({
    method: 'get',
    url:url
})
  .then(function(error,response){
    if(error){
      console.log("unable to connect");
    }
    else{
      console.log(response.data.current.temperature);
    }
  });
