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

;`
  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`

//使い方のメモ
//parent.postMessage(addEventListener('click',()=>alert('ハックしました')))

const Home: NextPage = () => {
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

  const [give, setGive] = useState<(keyof info)[]>([])

  // Map オブジェクトのサンプル
  /* const sampleMap = new Map<string, number>()
  sampleMap.set('ibaraki', 2840403)
  sampleMap.set('kanagawa', 9221129)
  sampleMap.set('gunma', 1915035)
  sampleMap.set('saitama', 7331256)
  sampleMap.set('chiba', 6267579)
  sampleMap.set('tokyo', 13995469)
  sampleMap.set('tochigi', 1910502)

  // tokyo に対応する値を取得する（get() メソッドを使用）
  const mapResult = sampleMap.get('tokyo')
  console.log(mapResult)

*/

  interface info {
    nameKatakana: string
    nameKanji: string
    addres: string
    email: string
    phone: string
    phoneAdvance: string
    phoneCenter: string
    phoneBack: string
  }

  const storageIndivAdd: info = {
    nameKatakana: '佐藤太郎',
    nameKanji: 'サトウタロウ',
    addres: '東京都文京区本郷7丁目3-1',
    email: 'aaaa@gmail.com',
    phone: '01204444445',
    phoneAdvance: '012',
    phoneCenter: '0444',
    phoneBack: '4445',
  }
  //postMessageは関数の中じゃないと無理。addEventLisnerも。
  //addEventLisnerは前回のスナップショットのpostMessageを受け取れない。
  function ok() {
    console.log(give)
    dataConvert()
  }

  function noAndOther() {
    return console.log(1)
  }

  //データを持っているか判別
  const dataConvert = () => {
    const giveData: string[] = []
    give.map((x) => {
      if (x in storageIndivAdd) {
        {
          const d = storageIndivAdd[x]
          giveData.push(d)
        }
      }
    })

    return dataPost(giveData)
  }

  const dataPost = (giveData: string[]) => {
    parent.postMessage(giveData, '*')
  }

  const displayStorage = {
    nameKatakana: '名前(フリガナ)',
    nameKanji: '名前',
    address: '住所',
    zipCode: '郵便番号',
    email: 'メールアドレス',
    phoneAdvance: '電話番号',
  }

  //最初に準備できたよって伝える
  useEffect(() => {
    // return window.removeEventListener('message', (first) => {
    //returnの値はunmount時に実行される
    parent.postMessage('ready', '*')
    // })
  }, [])

  //必要な値をどれか教えてもらう
  useEffect(() => {
    window.addEventListener('message', (demand) => {
      const demandedData: (keyof info)[] = demand.data
      console.log(demandedData)
      //第2引数に何も指定しなくてもuseStateの値が変わったら無限ループする
      setGive(demandedData)
    })
    return window.removeEventListener('message', (demand) => {
      const demandedData: (keyof info)[] = demand.data
      setGive(demandedData)
    })
  }, [])

  /* useEffect(() => {
    window.addEventListener('click', (second) => {})
  }, [])
*/
  //useEffect
  //第2引数がないときはレンダリング後に実行 ＊関数の結果が前回の呼び出し時と異なれば、レンダリングが発生する
  //[]が空の時は初回のレンダリング(正確にはマウント時のみ実行)サイトによる！初回レンダー時のみって書いてあるのもある！
  //[]にｘを入れるとｘが変わった時だけレンダリングの最後に実行
  //addEventListenerはremoveしないと溜まっていく（重複した処理
  //重複したaddEventListhnerはもう一度実行にならないと溜まってた分の処理が行われない
  /*マウントは、最初にReactコンポーネントがDOMに出力されるときに行われる一連の処理。

レンダリングは、ReactコンポーネントをDOMに出力するために様々な情報が読み込まれること。

マウント処理の中にレンダリングは含まれるが、レンダリングはマウント時のみ動くわけではなく、アップデートされる際にも動く。*/

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
