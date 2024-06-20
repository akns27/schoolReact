import { NavItem, Table, Button } from "react-bootstrap"; //1-1
import { useSelector, useDispatch } from "react-redux";
import Router from "../Router";
import { changeName, changeAge, increase, decrease } from "../store";

export default function Cart() {
  let { user, cart } = useSelector((state) => state);
  let dispatch = useDispatch();

  // cart가 undefined인 경우 빈 배열로 설정
  const cartItems = cart || [];

  return (
    <div>
      <Router />
      {user.name}
      {user.age}의 장바구니
      <Button variant="outline-primary" onClick={() => dispatch(changeAge(10))}>
        나이변경
      </Button>
      <Table>
        {" "}
        {/*  1-2 .테이블 레이아웃 만들기 */}
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td>
                <Button
                  variant="outline-secondary"
                  onClick={() => dispatch(increase(index))}
                >
                  +
                </Button>
                {""}
                <Button
                  variant="outline-secondary"
                  onClick={() => dispatch(decrease(index))}
                >
                  -
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
