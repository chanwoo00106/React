# export의 의미

> export는 영어로 수출한다는 뜻으로 export를 사용하여 전달하면 해당 변수 안에 있는 객체 안에 담아 전달할 수 있다.
> 다른 파일에서는 import를 사용해 export 한 파일의 객체를 볼 수 있다.

```javascript
/*export 파일*/

let a = 'hello';
export { a };
```

```javascript
/*improt 파일*/

import a from './export';
consol.log(a);
// 출력 : hello
```

> 2개도 export 할 수 있음

# export default의 의미

> export default는 변수뿐만 아니라 함수, 오브젝트, 클래스도 보낼 수 있다
> default는 기본이라는 뜻을 갖고 있으며 괄호 같은 것을 생략한다.

```javascript
/*export_default 파일*/

export function sayHi(user) {
  console.log('Hello, ${user}');
}
```

```javascript
/*import 파일*/

import sayhello from './exprot_default';
sayhello('Teemo');
//출력 : Hello, Teemo
```

> 만약 export default 할 때 전달하는 데이터를 {}로 감싸서 보내면 객체 형태로 값을 받는다