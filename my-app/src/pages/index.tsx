import { useEffect, useState } from 'react';
import { getAPI } from "./getAPI";

interface Prefecture {
  prefCode: number;
  prefName: string;
}

export default function Home() {
  getAPI();
  // const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
  // useEffect(() => {
  //   const fetchPrefectures = async () => {
  //     try {
  //       const result = await getAPI();
  //       console.log(result);
  //       setPrefectures (result);
  //     }
  //     catch (error){
  //       console.error('Faild to fetch Prefectures');
  //     }
  //   }

  //   fetchPrefectures();
  // }, [])

  // return (
  //   <>
  //   <div>都道府県一覧</div>
  //   <ul>
  //     {prefectures.map((item) => (
  //       <li key={item.prefCode}>{item.prefName}</li>
  //     ))}
  //   </ul>
  //   </>
  // );
}
