import axios from 'axios'

type Video = {
    nowm: string;
    wm: string;
    music: string;
}
  
export async function tiktokDL(url:string): Promise<Video> {
    const domain = 'https://www.tikwm.com';
    // 👇️ const data: tiktokDLResponse
    const { data } = await axios.post(
        domain+'/api/',
        { url, count: 12, cursor: 0, web: 1, hd: 1 },
        {
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            Accept: 'application/json, text/javascript, */*; q=0.01',
            },
        },
        );

        return {
            nowm: domain+data.data.play,
            wm: domain+data.data.wmplay,
            music: domain+data.data.music
        };
}