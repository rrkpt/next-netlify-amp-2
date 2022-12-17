export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body

    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)

    if (!body.phone) {
        // Sends a HTTP bad request error code
        return res.status(400).json({ data: 'Phone not found' })
    }

    const endpoint = 'https://karpaty-energy.monday.com/api/'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjE0MDM2MTY3NCwidWlkIjoyMzQ2MTQ4MywiaWFkIjoiMjAyMi0wMS0xMVQxOTowMzozNC4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6OTUyODI3OSwicmduIjoidXNlMSJ9.BwcFQEMGgb0Wdwq5NtkyPIOmPJoBZkQZoPPUUlyvtP0'
        },
        body: body
    }
    fetch(endpoint, options)
        .then((response) => console.log(response))

    // Found the name.
    // Sends a HTTP success code
    res.status(200).json({ data: `${body.name} ${body.phone}` })
}