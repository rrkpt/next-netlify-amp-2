export default async function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body

    if (!body.phone) {
        return res.status(400).json({ data: 'Phone not found' })
    }

    let query = "mutation ($itemName:String, $columnValues:JSON!) { create_item (board_id: 2439635456, item_name: $itemName, column_values: $columnValues) { id }}";
    const response = await fetch("https://api.monday.com/v2", {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjE0MDM2MTY3NCwidWlkIjoyMzQ2MTQ4MywiaWFkIjoiMjAyMi0wMS0xMVQxOTowMzozNC4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6OTUyODI3OSwicmduIjoidXNlMSJ9.BwcFQEMGgb0Wdwq5NtkyPIOmPJoBZkQZoPPUUlyvtP0'
        },
        body: JSON.stringify({
            query: query,
            variables: JSON.stringify({
                itemName: body.name,
                columnValues: "{\"phone_1\" : {\"phone\" : \"" + body.phone + "\"}}"
            })
        })
    });
    
    if (response.ok)
        res.status(200)
    res.status(500)
}