import {NextApiRequest,NextApiResponse} from 'next'

export default (request:NextApiRequest,response:NextApiResponse)=>{
    const users = [
        {id:0,name:'pedro'},
        {id:2,name:'guwd'},
        {id:3,name:'dwffgg'}
    ]
    return response.json(users)
}