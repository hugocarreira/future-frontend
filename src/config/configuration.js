const config = {
    ENV: process.env.NODE_ENV || 'dev',
    API_URI: process.env.NODE_ENV === 'dev' ? 'http://localhost:8000' : 'http://localhost:8000',
    API_URL: process.env.NODE_ENV === 'dev' ? 'http://localhost:8000/v1/' : 'http://localhost:8000/v1/'
}

export default config