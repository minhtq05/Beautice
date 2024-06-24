import express from 'express'
import jwt from 'jsonwebtoken'
import bodyParser from 'body-parser'
import cors from 'cors'
import bcrypt from 'bcrypt'
import fs from 'fs'

const USERS_PATH = "./database/users.json"
const BLOGS_PATH = "./database/blogs.json"

const users_db = JSON.parse(fs.readFileSync(USERS_PATH))
const blogs_db = JSON.parse(fs.readFileSync(BLOGS_PATH))

const app = express()
const port = 3000

const JWT_SECRET = 'your_secret_refresh_token_here'

app.use(bodyParser.json())
app.use(cors())
app.use((req, res, next) => {
    console.debug(req.method, req.url)
    next()
})

app.post('/register', async (req, res) => {
    const { firstname, lastname, username, email, password } = req.body
    const userExisted = users_db.users.find(user => user.username === username || user.email === email)

    if (userExisted) {
        console.log('Username already existed.')
        res.status(400).json({
            message: 'Username already existed.'
        })
        return
    }

    if ((!username && !email) || !password) {
        console.log('Username and password are required.')
        res.status(400).json({
            message: 'Username and password are required.'
        })
        return
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    users_db.users.push({ firstname, lastname, username, email, password: hashedPassword })
    fs.writeFile(USERS_PATH, JSON.stringify(users_db), (err) => {
        if (err) {
            console.err(err)
            res.status(500).json({
                message: "Internal server error."
            })
        } else {
            console.log('New user created.')
            res.status(201).json({
                message: 'New user created.'
            })
        }
    })
})

app.post('/signin', async (req, res) => {
    const { username, password } = req.body
    const user = users_db.users.find(user => user.username === username || user.email === username)

    if (!user) {
        console.log("Invalid Credentials.")
        res.status(401).json({
            message: 'Invalid Credentials.'
        })
        return
    }

    console.log(user)
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
        console.log("Invalid Credentials.")
        res.status(401).json({
            message: 'Invalid Credentials.'
        })
        return
    }

    const jwtToken = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: 60 * 60 })
    res.status(200).json({ token: jwtToken })
    console.log("Login successfully!")
})

app.get('/protected', (req, res) => {
    const token = req.headers['authorization']
    if (!token) {
        console.log("Access denied.")
        res.status(401).json({
            message: 'Access Denied.'
        })
        return
    }

    try {
        const verified = jwt.verify(token, JWT_SECRET)
        console.log("User verified")
        res.status(200).json(verified)
    } catch (err) {
        console.error(err)
        console.log("Invalid token.")
        res.status(401).json({
            message: 'Invalid token.'
        })
    }
})

app.listen(port, () => {
    console.debug('App listening on port ' + port)
})