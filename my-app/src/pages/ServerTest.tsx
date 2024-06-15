import { use, useEffect, useState } from "react";
import axios from "axios";


export default function ServerTest() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get('http://localhost:3003/Love')
      setUser(res.data);
    }
    getUser()
  }, [])

  return (
    <>
      <div>
        {
          user.map(user => {
            return (
              <>
                <div>{user.id}</div>
                <h2>{user.title}</h2>
              </>
            )
          })
        }
      </div>
    </>
  )
};


// .thenをつけてあげる事で、サーバーに対してリクエストを送信してあげた後にレスポンシブルを待って待機してくれる。
// thenをつけないで const res = axios.get('http://localhost:3003/Love')とだけ記述してしまうと、
// 返事を待たないで次の処理に移ってしまう。

// もしくは　await asyncをつけるやり方もある。->UseEffectに使用はできない

// わからないことオブジェクトの状態でデータを取得できるって何？