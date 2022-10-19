import { Application, Request, Response } from 'express';
import { tiktokDL } from './utils/tiktokDL';

export const loadApiEndPoints = (app: Application): void => {
    app.post('/tiktok', async (req: Request, res: Response) =>{
        let { videoUrl } = req.body;
        let { nowm, wm, music } = await tiktokDL(videoUrl)
        return res.status(200).send(JSON.stringify({ nowm, wm, music }))
    })
}