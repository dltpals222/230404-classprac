function restParameterExample(...properties){
  let tempObject = {
    id : "",
    name : "",
    password : "",
    email : ""
  };

  for (let key in tempObject){
    tempObject[key] = properties.shift();
  }
  return tempObject;
}

console.log(restParameterExample("leesemin","세민","1234@asdf.com"));