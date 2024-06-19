import {
    Form,
    Navigate,
    useActionData,
} from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../hooks/auth'

export default function SignInPage() {
    console.log("Render SignIn")
    const signedInUser = useActionData()
    const auth = useAuth()

    if (auth.user.isAuthenticated) {
        return <Navigate to="/" />
    }

    if (signedInUser) {
        const token = signedInUser.token
        auth.signin(token)
        return <Navigate to="/" />
    }


    return (
        <div className="relative w-[100vw] h-[100vh] flex flex-col justify-center items-center">
            <h3 className="font-semibold mb-[20px]">Sign In</h3>
            <Form method="post" action="/signin" className="relative w-fit flex flex-col justify-center">
                <label htmlFor="username" className='flex flex-col'>
                    Username
                    <input className="border-[2px] rounded-[4px] h-10 border-grey my-4 px-5" id="username" type="text" name="username" />
                </label>
                <label htmlFor="password" className='flex flex-col'>
                    Password
                    <input className="border-[2px] rounded-[4px] h-10 border-grey my-4 px-5" id="password" type="password" name="password" />
                </label>
                <button className="rounded-[4px] h-10 bg-black text-white my-4 px-5" type="submit">Login</button>
            </Form>
        </div >
    )
}

export async function action({ request, params }) {
    const formData = await request.formData()
    const username = formData.get('username')
    const password = formData.get('password')
    const res = axios.post('http://localhost:3000/signin', {
        username: username,
        password: password,
    }).then((res) => {
        return res.data
    }).catch(() => {
        return null
    })
    return res
}