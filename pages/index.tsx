import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  min-height: 100vh;
  padding: 0 0.5rem;
`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin-top: 3rem;
`
type Base = {
  nameKatakana?: string
  nameKanji?: string
  address?: string
  zipCode?: string
  email?: string
  phoneAdvance?: string
  phoneCenter?: string
  phoneBack?: string
}
;`
  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`

//使い方のメモ
//parent.postMessage(addEventListener('click',()=>alert('ハックしました')))

const Home: NextPage = () => {
  const [href, setHref] = useState('')
  const key = 'serviceX'
  /*const hash = {
    email: 'shintaniallen@gmail.com',
    nameKanji: '佐藤太郎',
    furigana: 'サトウタロウ',
  }
  */

  //iframeでokを押したら

  /*const ok = () => {
  }
 */

  /*function ok() {
    const 
    parent.postMessage(addEventListener('click', () => alert('aaaaa')))
    return*/

  /* obj = {
  last : tarou,
  first : satou
};
var obj = JSON.stringify(obj);
localStorage.setItem('aaa',obj)
*/

  const [prot, setProt] = useState('')

  parent.postMessage('ready', '*')

  function ok() {
    console.log(prot)
  }

  function noAndOther() {
    return console.log(1)
  }

  const displayStorage: Base = {
    nameKatakana: '名前(フリガナ)',
    nameKanji: '名前',
    address: '住所',
    zipCode: '郵便番号',
    email: 'メールアドレス',
    phoneAdvance: '電話番号',
  }

  useEffect(() => {
    window.addEventListener('message', (serve) => {
      const needData = serve.data
      setProt(needData)
    })
    console.log('a')
    return window.removeEventListener('message', (serve) => {
      const needData = serve.data
      setProt(needData)
    })
  }, [])
  //第2引数がないときは初回レンダー時のみ実行
  //[]が空の時は初回のレンダリングと毎回のレンダリング時に実行
  //[]にｘを入れるとｘが変わった時だけレンダリングの最後に実行
  //addEventListenerはremoveしないと溜まっていく（重複した処理
  //重複したaddEventListhnerはもう一度実行にならないと溜まってた分の処理が行われない

  return (
    <Container>
      {
        //後でdisplayStorage
      }
      <Grid>
        <h3>
          水道局に
          {
            //<ul></ul>
          }
          の情報の取得を許可しますか？
        </h3>
      </Grid>

      <Grid>
        <button onClick={ok}>
          <strong>ok</strong>
        </button>

        <button onClick={noAndOther}>
          <strong>no</strong>
        </button>
      </Grid>
    </Container>
  )
}
export default Home

/*----localstrageのメモ
注意したいのが複数の値（配列）を保存した場合は、JSON文字列に変換する必要があるということです。
*/

/*------localStrageの内容をページを読み込んだ時に再度表示される（消えない）
	var readMemo = function(){
		var memoObjs = getStorage(storageKey);
		if (memoObjs.length == null) return;
		for (var i = 0; i < memoObjs.length; i ++) {
			var memoObj = memoObjs[i];
			var ttl = memoObj.ttl;
			var bdy = memoObj.bdy;
			var memoObj = {
				ttl : ttl,
				bdy : bdy
			};
		memoArr.push(memoObj);
		saveStorage(storageKey,memoArr);
			addMemo(ttl,bdy);
		}
	};

	//ページ読込み時にメモ復帰
	readMemo();
  */
