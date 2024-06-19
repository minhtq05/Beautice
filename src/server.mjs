import express from 'express'
import jwt from 'jsonwebtoken'
import bodyParser from 'body-parser'
import cors from 'cors'
import bcrypt from 'bcrypt'

const app = express()
const port = 3000
const users = []

const JWT_SECRET = 'your_secret_refresh_token_here'

app.use(bodyParser.json())
app.use(cors())
app.use((req, res, next) => {
    console.debug(req.method, req.url)
    next()
})

app.post('/register', async (req, res) => {
    const { username, password } = req.body
    const userExisted = users.find(user => user.username == username)

    if (userExisted) {
        console.log('Username already existed.')
        return res.status(400).send('Username already existed.')
    }

    if (!username || !password) {
        console.log('Username and password are required.')
        return res.status(400).send('Username and password are required.')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    users.push({ username, password: hashedPassword })

    console.log('New user created.')
    res.status(201).send('User created')
})

app.post('/signin', async (req, res) => {
    const { username, password } = req.body
    const user = users.find(user => user.username == username)

    if (!user) {
        console.log("User not found.")
        return res
            .status(400)
            .json({
                message: 'User not found'
            })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
        console.log("Invalid Password.")
        return res
            .status(400)
            .json({
                message: 'Invalid Password'
            })
    }

    const jwtToken = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: 15 * 60 })
    res.status(200).json({ token: jwtToken })
    console.log("Login successfully!")
})

app.get('/protected', (req, res) => {
    const token = req.headers['authorization']
    if (!token) {
        console.log("Access denied.")
        return res.status(401).send('Access Denied')
    }

    try {
        const verified = jwt.verify(token, JWT_SECRET)
        req.user = verified
        console.log("User verified")
        res.status(200).send('User verified')
    } catch (err) {
        console.error(err)
        console.log("Invalid token.")
        res.status(401).send('Invalid token.')
    }
})

app.listen(port, () => {
    console.debug('App listening on port ' + port)
})