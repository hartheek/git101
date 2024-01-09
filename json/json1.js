const fs= require('fs');
const buffer=fs.readFileSync('json.json');
const parse=buffer.toString();
const user= JSON.parse(parse)

user.title='the swamp';
user.author='hartheek';

const userJSON= JSON.stringify(user);
fs.writeFileSync('json.json',userJSON);
