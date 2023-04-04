function basicReturnObject (parameterString, parameterNumber, parameterObject){
  if( typeof(parameterString) !== 'string' && typeof(parameterNumber) !== 'number' && typeof(parameterObject) !== 'object'){
    throw new Error('파라미터 타입이 잘못 입력되었습니다.')
  }
  //로컬변수 객체 초기화
  let tempObject = {
    a : parameterString,
    b : parameterNumber,
    c : parameterObject
  };
return tempObject;
}

const abcde = basicReturnObject('이세민',1234,{name:'이세민',age:11,email:'dltpals@dltpals.com'})

const abcdeStringify = JSON.stringify(abcde,true,2);

console.log(abcdeStringify);

const abcdeParse = JSON.parse(abcdeStringify);

console.log(abcdeParse);