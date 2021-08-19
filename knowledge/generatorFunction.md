# generator Function

이 문법의 핵심 기능은 함수를 작성할 때 함수를 특정 구간에 멈춰 놓을 수도 있고, 원할 때 다시 돌아오게 할 수도 있다는 것입니다.

아래와 같은 함수가 있다고 하면

```js
function weirdFunction() {
    return 1;
    return 2;
    return 3;
    return 4;
    return 5;
}
```

하나의 함수에서 값을 여러 개 반환하는 것은 불가능하므로 이 코드는 제대로 작동하지 않습니다.<br>
정확히는 호출할 때마다 맨 위에 있는 값인 1이 반환됩니다.

하지만 제너레이터 함수를 사용하면 값을 순차적으로 반환할 수 있습니다.

아래와 같은 함수가 있다고 하면

```js
function* generatorFunction() {
    console.log('hi');
    yield 1;
    console.log('captain');
    yield 2;
    console.log('Teemo');
    yield 3;
    return 4;
};
```

제너레이터 함수를 만들 때는 function* 키워드를 사용합니다.

함수를 작성한 뒤에는 다음 코드를 사용해 제너레이터를 생성합니다.

```js
const generator = generatorFunction();
```

제너레이터가 처음 만들어지면 함수의 흐름은 멈춰 있는 상태입니다.<br>
`next()`가 호출되면 다음 `yield`가 있는 곳까지 호출하고 다시 멈춥니다.

```js
generator.next();
// hi
// {value: 1, done: false}
generator.next();
// captain
// {value: 2, done: false}
generator.next();
// Teemo
// {value: 3, done: false}
generator.next();
// {value: 4, done: true}
generator.next();
// {value: undefined, done: true}
```

제너레이터 함수를 사용하면 함수를 도중에 멈출 수도 있고, 순차적으로 여러 값을 반환시킬 수도 있습니다.<br>
`next()` 함수에 파라미터를 넣으면 제너레이터 함수에서 `yield`를 사용하여 해당 값을 조회할 수도 있습니다.

아래와 같은 코드가 있다면

```js
function* sumGenerator() {
    console.log('sumGenerator가 만들어졌습니다.');
    let a = yield;
    let b = yield;
    yield a + b;
}

const sum= sumGenerator();
sum.next();
// sumGenerator가 만들어졌습니다.
// {value: undefined, done: false}
sum.next(1);
// {value: undefined, done: false}
sum.next(2);
// {value: 3, done: true}
sum.next();
// {value: undefined, done: true}
```