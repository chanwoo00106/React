# callback function

파라미터 값이 주어지면 1초 뒤에 10을 더해서 반환하는 함수가 있다고 가정하자<br>
해당 함수가 처리된 직후 어떠한 작업을 하고 싶다면 다음과 같이 콜백 함수를 활용해서 작업한다

```js
function increase(number, callback) {
    setTimeout(() => {
        const result = number + 10;
        if (callback) callback(result);
    }, 1000);
}

increase(0, result => {
    console.log(result);
})
```

1초에 걸쳐서 10, 20, 30, 40과 같은 형태로 여러 번 순차적으로 처리하고 싶다면 콜백 함수를 중첩하여 구현할 수 있습니다.

```js
function increase(number, callback) {
    setTimeout(() => {
        const result = number + 10;
        if (callback) callback(result);
    }, 1000);
}

increase(0, result => {
    console.log(result);
    increase(result, result => {
        console.log(result);
        increase(result, result => {
            console.log(result);
            increase(result, result => {
                console.log(result);
                console.log('작업 완료');
            });
        });
    });
});
```

이러한 형태의 코드를 `콜백 지옥`이라고 부르는데 웬만하면 지양해야 할 형태의 코드이다

# Promise

Promise는 콜백 지옥 같은 코드가 형성되지 않게 하는 방안으로 ES6에 도입된 기능이다.

```js
function increase(number) {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = number + 10;
            if (result >= 50) {
                const e = new Error("NumberTooBig");
                return reject(e)
            }
            resolve(result);
        }, 1000);
    });
    return p;
}

increase(0)
    .then(number => {
        console.log(number);
        return increase(number)
    })
    .then(number => {
        console.log(number);
        return increase(number)
    })
    .then(number => {
        console.log(number);
        return increase(number)
    })
    .then(number => {
        console.log(number);
        return increase(number)
    })
    .catch(e => {
        console.log(e);
    });
```

.then을 사용하여 그다음 작업을 설정하기 때문에 콜백 지옥이 형성되지 않는다.

# async/await

async/await은 Promise를 더욱 쉽게 사용할 수 있도록 해 주는 ES8 문법이다.<br>\
이 문법을 사용하려면 함수의 앞부분에 async 키워드를 추가하고, 해당 함수 내부에서 Promise의 앞부분에 await 키워드를 사용합니다.

```js
function increase(number) {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = number + 10;
            if (result >= 50) {
                const e = new Error("NumberTooBig");
                return reject(e)
            }
            resolve(result);
        }, 1000);
    });
    return p;
}

async function runTasks() {
    try {
        let result = await increase(0);
        console.log(result);
        result = await increase(result);
        console.log(result);
        result = await increase(result);
        console.log(result);
        result = await increase(result);
        console.log(result);
        result = await increase(result);
        console.log(result);
    } catch (e) {
        console.log(e);
    }
}
```