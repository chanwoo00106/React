import React, {useMemo, useCallback, useState} from 'react';

export default function UseCallback() {
    function getAverage(numbers) {
        console.log("평균값 계산중..");
        if (numbers.length === 0) return 0;
        const sum = numbers.reduce((a,b) => a+b);
        return sum / numbers.length;
    }

    const [list, setList] = useState([]);
    const [number, setNumber] = useState("");

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);
    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }, [number, list]);

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <h2>useCallback</h2>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값 : </b>{avg}
            </div>
        </div>
    );
}