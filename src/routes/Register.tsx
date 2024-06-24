import {
    Form,
    Navigate,
    useActionData,
    Link,
} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Layout as RegisterLayout, Panel, Input } from '../components/Authentication'
import axios from 'axios'
import { useAuth } from '@/hooks/auth'

type RegisterData = {
    status: "success" | "fail"
} | null

type Errors = {
    firstname_blank?: boolean
    lastname_blank?: boolean
    username_blank?: boolean
    email_invalid?: boolean
    password_less_than_8?: boolean
    register_failed?: boolean
}

const ErrorContent = {
    firstname_blank: "First name cannot be blank",
    lastname_blank: "Last name cannot be blank",
    username_blank: "Username / Email cannot be blank",
    email_invalid: "Email is invalid",
    password_less_than_8: "Password cannot have less than 8 characters",
    already_exists: "Username / Email already exists",
    register_failed: "Error: User already existed."
}

const ErrorInfo = ({ errors }: { errors: Errors }) => {
    return (
        <div>
            {Object.entries(errors).map(([err, status]: [err: string, status: boolean], i) => {
                if (status) {
                    return <p key={i} className="font-regular text-sm text-red-800 tracking-wider">{ErrorContent[err as keyof (typeof ErrorContent)]}</p>
                }
            })}
        </div>
    )
}

export default function Register() {
    const auth = useAuth()
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false)
    const newUser = useActionData() as RegisterData

    useEffect(() => {
        if (auth.user.isAuthenticated) {
            setIsSignedIn(true)
        }
    }, [auth])

    const fetchData = (): Errors | null => {
        if (newUser) {
            return newUser.status === "success" ? null : { register_failed: true }
        }
        return null
    }

    if (newUser) {
        if (newUser.status === "success") {
            return <Navigate to="/signin" />
        }
    }

    return (
        isSignedIn ?
            <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center gap-y-[10px]">
                <h1 className="text-5xl text-navy-blue font-semibold">You have already signed in.</h1>
                <Link to="/" className='text-base text-pink font-medium'>Go back to front page.</Link>
            </div>
            :
            <RegisterLayout >
                <RegisterPanel errors={fetchData()} />
            </RegisterLayout >
    )
}

const RegisterPanel = ({ errors }: { errors: Errors | null }) => {
    const [_errors, setErrors] = useState<Errors>({})
    const [firstname, setFirstname] = useState<string>('')
    const [lastname, setLastname] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    useEffect(() => {
        if (errors) {
            if (_errors !== errors) {
                setErrors(errors)
            }
        }
    }, [errors])

    useEffect(() => {
        if (_errors?.register_failed) {
            setTimeout(() => {
                removeError("register_failed")
            }, 10000)
        }
    }, [_errors])

    const removeError = (err: keyof Errors) => {
        const newErrors = { ..._errors }
        newErrors[err] = false
        setErrors(newErrors)
    }

    const addError = (err: keyof Errors) => {
        const newErrors = { ..._errors }
        newErrors[err] = true
        setErrors(newErrors)
    }

    const noError = () => {
        for (const [err, status] of Object.entries(_errors)) {
            if (status && err !== "register_failed") return false
        }
        return true
    }

    const checkBlank = (value: string, field: keyof Errors, cb?: () => void) => {
        if (value.length === 0 && !_errors[field]) {
            addError(field)
        } else if (value.length > 0 && _errors[field]) {
            removeError(field)
        }
        if (cb) cb()
    }

    const checkValidPassword = (value: string, field: keyof Errors, cb?: () => void) => {
        if ((value.length <= 8 || value.includes("@")) && !_errors[field]) {
            addError("password_less_than_8")
        } else if (value.length > 8 && _errors[field]) {
            removeError("password_less_than_8")
        }
        if (cb) cb()
    }

    return (
        <Panel>
            <h3 className="font-semibold text-navy-blue text-3xl mb-[20px]">Register</h3>
            <Form id="sign-up" method="post" action="/register" className="relative flex flex-col justify-center w-max" onSubmit={(e) => {
                const errors: Errors = {}
                if (firstname.length === 0) errors['firstname_blank'] = true
                if (lastname.length === 0) errors['lastname_blank'] = true
                if (username.length === 0) errors['username_blank'] = true
                if (email.length === 0 || !email.includes("@")) errors['email_invalid'] = true
                if (password.length <= 8) errors['password_less_than_8'] = true
                if (Object.keys(errors).length > 0) {
                    e.preventDefault()
                    setErrors(errors)
                }
            }}>
                <div className="flex flex-row gap-x-[20px]">
                    <label htmlFor="firstname">
                        <Input id="firstname" type="text" name="firstname" placeholder="First name" value={firstname} onChange={e => {
                            checkBlank(e.target.value, "firstname_blank", () => { setFirstname(e.target.value) })
                        }} />
                    </label>
                    <label htmlFor="lastname">
                        <Input id="lastname" type="text" name="lastname" placeholder="Last name" value={lastname} onChange={e => {
                            checkBlank(e.target.value, "lastname_blank", () => { setLastname(e.target.value) })
                        }} />
                    </label>
                </div>
                <label htmlFor="username">
                    <Input id="username" type="text" name="username" placeholder="Username" value={username} onChange={e => {
                        checkBlank(e.target.value, "username_blank", () => { setUsername(e.target.value) })
                    }} />
                </label>
                <label htmlFor="email">
                    <Input id="email" type="text" name="email" placeholder="Email" value={email} onChange={e => {
                        checkBlank(e.target.value, "email_invalid", () => { setEmail(e.target.value) })
                    }} />
                </label>
                <label htmlFor="password">
                    <Input id="password" type="password" name="password" placeholder="Password" value={password} onChange={e => {
                        checkValidPassword(e.target.value, "password_less_than_8", () => { setPassword(e.target.value) })
                    }} />
                </label>
                <ErrorInfo errors={_errors} />
                <button className="rounded-[10px] h-[50px] font-semibold tracking-widest bg-pink text-lg text-white my-4 px-5 disabled:bg-slate-400" type="submit" disabled={noError() ? false : true}>Register</button>
            </Form>
            <Link className="text-sm text-navy-blue" to="/signin">Already have an account? Sign in now.</Link>
        </Panel >
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }: { request: Request }) {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    return axios.post('http://localhost:3000/register', {
        firstname: data.firstname || null,
        lastname: data.lastname || null,
        username: data.username || null,
        email: data.email || null,
        password: data.password || null,
    }).then((res) => {
        return {
            status: res.status === 201 ? "success" : "fail"
        }
    }).catch((err) => {
        console.error(err)
        return {
            status: "fail"
        }
    })
}