const request=require('postman-request');
const temp = (address ,callback)=>{
    const url= 'http://api.weatherstack.com/current?access_key=54156e233c649ecd16ea4ec6ce143dd0&query='+ address;
    request({ url:url, JSON: true},(error,response)=>{
        if(error){
            callback("unable to connect",undefined);
        }
        else{
            callback(undefined,JSON.parse(response.body).current.temperature);
        }
    })
}
temp('New%20York',(error,data)=> {
    console.log('Error',error);
    console.log('Data',data);
})
temp('New%20Jersey',(error,data)=>{
    console.log('Data',data);
})