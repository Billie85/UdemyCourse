import axios from "axios";

// 都道府県一覧を取得する関数
export const getAPI = async () => {
    const response = await fetch("https://opendata.resas-portal.go.jp/api/v1/prefectures/", {headers: {"X-API-KEY": "scLC3NvRgfv9XvTuCQDhVaAWOhDCJLZNsrBjzgmL"}})
    const hoge = await response.json()
    const hokkaidou = hoge.result[0]
    console.log(hokkaidou);
    // .then ((value) => value.json()).then ((value) => console.log(value.result[0]));
}

// .thenをつけてあげる事で、サーバーに対してリクエストを送信してあげた後にレスポンシブルを待って待機してくれる。
// thenをつけないで const res = axios.get('http://localhost:3003/Love')とだけ記述してしまうと、
// 返事を待たないで次の処理に移ってしまう。

// もしくは　await asyncをつけるやり方もある。->UseEffectに使用はできない

// わからないことオブジェクトの状態でデータを取得できるって何？


// 基本的に一番最初にデータを一括で取得してくる。->やりやすい