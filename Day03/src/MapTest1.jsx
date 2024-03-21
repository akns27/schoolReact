import React from 'react'; 


let foo = ["one", "two", "three"];
let [red, yellow, green] = foo;
console. log (red); // "one" 
console. log (yellow); // "two" 
console. log (green); // "three"

let user = { name: "soma", age: 20 };
let { name, age } = user;
console. log (name); // "soma" 
console. log (age) ; // 20


function Foo (props) {
return ( 
<div>
  {
    <li>{props.data}</li>
  }

</div>
) ;
}

function MapTest1() {

return (
  <div>  
    <h1>foo 배열 출력하기</h1>
  <ul>
    {
      foo.map((item,index)=>{
        return <Foo data={item} key={index}/>
    })
    }
    
  </ul>
  </div>
  ) ;
}
export default MapTest1;


