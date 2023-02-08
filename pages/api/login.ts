import {NextApiRequest, NextApiResponse} from 'next';

const endpointLogin = (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'POST'){
        const {login, senha} = req.body;

        if(login === 'admin@admin.com' &&
        senha === 'Admin123'){
            return res.status(200).json({ msg: 'Usuário autenticado com sucesso'})
        }
        return res.status(400).json({ erro: 'Usuário ou senha inválida'})

    }
    return res.status(405).json({ erro: 'Método informado não é válido'})
}

export default endpointLogin;