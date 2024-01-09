const request=require('postman-request');
const url='http://api.weatherstack.com/current?access_key=54156e233c649ecd16ea4ec6ce143dd0&query=New%20York'
request({ url: url, json:true}, (error, response)=>{
      if(error){
            console.log("unable to connect");
      }
      else{
            console.log(response.body.current.temperature);
      }
})

