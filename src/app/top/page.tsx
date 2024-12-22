'use client';

import { useEffect, useState } from 'react';

const Top = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const handleClick = (e: any) => {
    console.log(e.target.value)
    // setCount(count => count + 1);
    setError('エラーが発生しました');
  }

  useEffect(() => {
    // document.body.style.backgroundColor = 'red';
  }, [])

  useEffect(() => {
    // ログアウト処理
  }, [isLogin])

  return (
    <div>
      <h1>トップページ</h1>
      {error && <p className="text-red-500">{error}</p>}
      <button type="button" value="apple" onClick={handleClick}>ボタン</button>
    </div>
  )
}

export default Top;
