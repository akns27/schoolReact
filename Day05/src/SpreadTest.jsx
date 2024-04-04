export default function SpreadTest() {
  const user = {
    id: 1,
    name: "박가이",
  };

  const userAdd = {
    ...user,
    email: "abc@gmail.com",
  };

  console.log(userAdd);

  const fruits = ["딸기", "바나나", "복숭아"];
  const fruitsAdd = ["블루베리", ...fruits];
  console.log(fruitsAdd);

  // document.write(userAdd.id);
  // document.write(userAdd.name);
  // document.write(userAdd.email);

  return (
  <div>
    userAdd의 값은 <p>{userAdd.id}<br/>{userAdd.name}<br/>{userAdd.email}</p>
    fruitsAdd의 값은 <p>{fruitsAdd}</p>
  </div>
  );
}
