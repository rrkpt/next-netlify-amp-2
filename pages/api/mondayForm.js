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
            'Authorization': ''
        },
        body: JSON.stringify({
            query: query,
            variables: JSON.stringify({
                itemName: body.name,
                columnValues: "{\"phone_1\" : {\"phone\" : \"" + body.phone + "\"}}"
            })
        })
    });
    
    if (response.ok) res.status(200).json('Success')
    else res.status(500).json('Error')
}
