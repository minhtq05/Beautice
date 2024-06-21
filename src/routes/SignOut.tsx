import {
    Form,
    useNavigate,
    useActionData,
} from 'react-router-dom'
import { useEffect } from 'react'
import { useAuth } from '../hooks/auth'

type SignoutData = {
    status: "success" | "fai1"
}

export default function SignOut(): JSX.Element {
    const userSignedOut = useActionData() as SignoutData
    const auth = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (userSignedOut.status === "success") {
            auth.signout()
            navigate("/")
        }
    }, [userSignedOut, auth, navigate])

    useEffect(() => {
        console.log(auth.user)
        if (!auth.user.isAuthenticated) {
            navigate("/")
        }
    }, [auth, navigate])

    return (
        <div className="relative w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-gradient-24 from-[#FF64AE] to-[#FFFFFF]">
            <div className="flex flex-col justify-center items-center bg-[white] rounded-[20px] md:w-[400px] sm:w-[300px] h-[300px] shadow-2xl">
                <h3 className="font-semibold text-navy-blue text-3xl mb-[20px]">Sign Out</h3>
                <Form method="post" action="/signout" className="relative max-w-[300px] flex flex-col justify-center">
                    <label htmlFor="signout" className='flex flex-row'>
                        Sign out of this account?
                        <input className="border-[2px] rounded-[4px] border-grey ml-[5px] mt-[5px] w-[15px] h-[15px]" id="signout" name="signout" type="checkbox" />
                    </label>
                    <button className="rounded-[10px] h-[50px] font-semibold tracking-widest bg-pink text-white my-4 px-5" type="submit">Save</button>
                </Form>
            </div>
        </div >
    )
}


// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }: { request: Request }) {
    const formData = await request.formData()
    return Object.fromEntries(formData)
}