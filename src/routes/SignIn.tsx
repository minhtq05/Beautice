import {
    Form,
    Link,
    useActionData,
    useLocation,
    useNavigate,
} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../hooks/auth'
import { Layout as SigninLayout, Panel, Input } from '../components/Authentication'

type signinData = {
    status: "success"
    token: string
} | {
    status: "fail"
} | null

type Errors = {
    username_blank?: boolean
    password_less_than_8?: boolean
    signin_failed?: boolean
}

const ErrorContent = {
    username_blank: "Username / Email cannot be blank",
    password_less_than_8: "Password cannot have less than 8 characters",
    signin_failed: "Username or password is incorrect",
}

const ErrorInfo = ({ errors }: { errors: Errors }) => {
    return (
        <div>
            {Object.entries(errors).map(([err, status]: [err: string, status: boolean], i: number) => {
                if (status) {
                    return <p key={i} className="font-regular text-sm text-red-800 tracking-wider">{ErrorContent[err as keyof (typeof ErrorContent)]}</p>
                }
            })}
        </div>
    )
}

export default function SignIn(): JSX.Element {
    // console.log("Render SignIn")
    const signedinUser = useActionData() as signinData
    const navigate = useNavigate()
    const auth = useAuth()
    const location = useLocation()

    useEffect(() => {
        if (signedinUser) {
            if (signedinUser.status === "success") {
                auth.signin(signedinUser.token)
                navigate("/")
            }
        }
    }, [signedinUser])

    useEffect(() => {
        if (auth.user.isAuthenticated) {
            if (location?.state?.from) {
                navigate(location.state.from)
            } else {
                navigate("/")
            }
        }
    }, [auth])

    const fetchData = (): Errors | null => {
        if (signedinUser) {
            return signedinUser.status === "success" ? null : { signin_failed: true }
        }
        return null
    }

    return (
        <SigninLayout>
            <SigninPanel errors={fetchData()} />
        </SigninLayout>
    )
}

const SigninPanel = ({ errors }: { errors?: Errors | null }) => {
    const [_errors, setErrors] = useState<Errors>({})
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    useEffect(() => {
        if (errors) {
            if (_errors != errors) {
                setErrors(errors)
            }
        }
    }, [])

    useEffect(() => {
        if (_errors?.signin_failed) {
            setTimeout(() => {
                removeError("signin_failed")
            }, 3000)
        }
    }, [_errors])

    const removeError = (err: string) => {
        const newErrors = { ..._errors }
        newErrors[err as keyof Errors] = false
        setErrors(newErrors)
    }

    const noError = () => {
        for (const [err, status] of Object.entries(_errors)) {
            if (status && err !== "signin_failed") return false
        }
        return true
    }

    const addError = (err: string) => {
        const newErrors = { ..._errors }
        newErrors[err as keyof Errors] = true
        setErrors(newErrors)
    }

    return (
        <Panel>
            <h3 className="font-semibold text-navy-blue text-3xl mb-[20px]">Sign In</h3>
            <Form method="post" action="/signin" className="relative flex flex-col justify-center w-full" onSubmit={() => {
                setPassword('')
            }}>
                <label htmlFor="username" className='flex flex-col'>
                    <Input className="border-[2px] rounded-[4px] h-10 border-grey my-4 px-5" id="username" type="text" name="username" placeholder="Username / Email" value={username} onChange={e => {
                        setUsername(e.target.value)
                        if (e.target.value.length === 0 && !_errors.username_blank) {
                            addError("username_blank")
                        } else if (e.target.value.length > 0 && _errors.username_blank) {
                            removeError("username_blank")
                        }
                    }} />
                </label>
                <label htmlFor="password" className='flex flex-col'>
                    <Input className="border-[2px] rounded-[4px] h-10 border-grey my-4 px-5" id="password" type="password" name="password" placeholder="Password" value={password} onChange={e => {
                        setPassword(e.target.value)
                        if (e.target.value.length <= 8 && !_errors.password_less_than_8) {
                            addError("password_less_than_8")
                        } else if (e.target.value.length > 8 && _errors.password_less_than_8) {
                            removeError("password_less_than_8")
                        }
                    }} />
                </label>
                <ErrorInfo errors={_errors} />
                <button className="rounded-[10px] h-[50px] font-semibold tracking-widest bg-pink text-lg text-white my-4 px-5 disabled:bg-slate-400" type="submit" disabled={noError() ? false : true}>Login</button>
            </Form>
            <Link className="text-sm text-navy-blue" to="/register">Don't have an account? Register now.</Link>
        </Panel>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }: { request: Request }) {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    return axios.post('http://localhost:3000/signin', {
        username: data.username || null,
        password: data.password || null,
    }).then((res) => {
        return {
            status: "success",
            ...res.data,
        }
    }).catch((err) => {
        console.log(err)
        return {
            status: "fail",
        }
    })
}