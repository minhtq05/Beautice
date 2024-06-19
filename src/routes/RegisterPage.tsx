import {
    Form,
    Navigate,
    useActionData,
} from 'react-router-dom'
import axios from 'axios'

export default function RegisterPage() {
    const newUser = useActionData()

    if (newUser) {
        return <Navigate to="/signin" />
    }

    return (
        <div className="relative w-[100vw] h-[100vh] flex flex-col justify-center items-center">
            <h3 className="font-semibold mb-[20px]">Register</h3>
            <Form id="sign-up" method="post" action="/register" className="relative w-fit flex flex-col justify-center">
                <label htmlFor="username">Username</label>
                <input className="border-[2px] rounded-[4px] h-10 border-grey my-4 px-5" id="username" type="text" name="username" />
                <label htmlFor="password">Password</label>
                <input className="border-[2px] rounded-[4px] h-10 border-grey my-4 px-5" id="password" type="password" name="password" />
                <button className="rounded-[4px] h-10 bg-black text-white my-4 px-5" type="submit">Sign Up</button>
            </Form>
        </div >
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }: { request: Request }) {
    const formData = await request.formData()
    const user = Object.fromEntries(formData)
    const username = user.username || null
    const password = user.password || null
    const res = await axios.post('http://localhost:3000/register', {
        username: username,
        password: password,
    }).catch(() => {
        return null
    })
    return res
}