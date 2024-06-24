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
axios.defaults.timeout = 5000

type signinData = {
    status: number | string
    token?: string
} | null

type Errors = {
    username_blank?: boolean
    password_less_than_8?: boolean
    invalid_credentials?: boolean
    internal?: boolean
    network?: boolean
}

const onSubmitError: Array<keyof Errors> = ["invalid_credentials", "network", "internal"]

const ErrorContent = {
    username_blank: "Username / Email cannot be blank",
    password_less_than_8: "Password cannot have less than 8 characters",
    invalid_credentials: "Username or password is incorrect",
    internal: "Sorry! We cannot log you in at the moment. Please try again later",
    network: "Oops! Something went wrong with the network connection. Please try again later"
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
            if (signedinUser.status === 200) {
                if (signedinUser.token) {
                    auth.signin(signedinUser.token)
                    navigate("/")
                } else {
                    signedinUser.status = 500
                    throw new Error("No token found")
                }
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
            const status = signedinUser.status
            if (status === 200) return null
            else if (status === 401) return { invalid_credentials: true }
            else if (status === "ERR_NETWORK") return { network: true }
            else return { internal: true }
        }
        return null
    }

    return (
        <SigninLayout>
            <SigninPanel errors={fetchData()} />
        </SigninLayout>
    )
}

const SigninPanel = ({ errors }: { errors: Errors | null }) => {
    const [_errors, setErrors] = useState<Errors>({})
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    useEffect(() => {
        if (errors) {
            if (_errors !== errors) {
                setErrors(errors)
            }
        }
    }, [errors])

    useEffect(() => {
        for (const err of onSubmitError) {
            if (_errors[err]) {
                setTimeout(() => {
                    removeError(err)
                }, 10000)
            }
        }
    }, [_errors])

    const removeError = (err: string) => {
        const newErrors = { ..._errors }
        newErrors[err as keyof Errors] = false
        setErrors(newErrors)
    }


    const addError = (err: string) => {
        const newErrors = { ..._errors }
        newErrors[err as keyof Errors] = true
        setErrors(newErrors)
    }

    const noError = () => {
        for (const [key, status] of Object.entries(_errors)) {
            const err = key as keyof Errors
            if (status && !onSubmitError.includes(err)) return false
        }
        return true
    }

    return (
        <Panel>
            <h3 className="font-semibold text-navy-blue text-3xl mb-[20px]">Sign In</h3>
            <Form method="post" action="/signin" className="relative flex flex-col justify-center w-full" onSubmit={(e) => {
                const errors: Errors = {}
                if (username.length === 0) errors["username_blank"] = true
                if (password.length <= 8) errors["password_less_than_8"] = true
                if (Object.keys(errors).length > 0) {
                    e.preventDefault()
                    setErrors(errors)
                }
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
        console.log(res)
        return {
            status: res.status,
            ...res.data,
        }
    }).catch((err) => {
        if (err.code === 'ERR_NETWORK') {
            return {
                status: 'ERR_NETWORK'
            }
        } else {
            return {
                status: err.response.status
            }
        }
    })
}