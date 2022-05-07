export const WorkDataList = [
  {
    id: 'Age_BreakBlockKitiku',
    title: '3Dブロック崩し (鬼畜Edit)',
    date: '2020-09-30',
    creater: 'Age',
    initial: 'A',
    image: '/WorkImages/Age_BreakBlockKitiku.png',
  },
  {
    id: 'Sage_OthelloAI',
    title: 'オセロと敵AI',
    date: '2022-03-20',
    creater: 'Sage',
    initial: 'S',
    image: '/WorkImages/Sage_OthelloAI.png',
  },
  {
    id: 'Age_ReBreakBlockKitiku',
    title: 'Re:3Dブロック崩し (鬼畜Edit)',
    date: '2021-07-15',
    creater: 'Age',
    initial: 'A',
    image: '/WorkImages/Age_ReBreakBlockKitiku.png',
  },
]

export type WorkSheetStruct = {
  id: string // (作者名orイニシャル)_(任意の文字列)
  title: string // 作品名
  date: string // 公開日
  creater: string // 作者名
  initial: string // 作者名のイニシャル
  image: string // サムネイル画像のファイルパス idと同じ名前にする
}
