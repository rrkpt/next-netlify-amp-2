export default function QuoteForm() {
    // Handles the submit event on form submit.
    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
        }

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)

        // API endpoint where we send form data.
        const endpoint = '/api/mondayForm'

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        }

        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)

        console.log(response)
        if (response.ok) {
            alert(`Дякуємо, ми звʼяжимось з Вами якнайшвидше`)
        } else {
            alert(`УПС, щось пішло не так, спробуйте знову`)
        }
    }
    return (
        // We pass the event to the handleSubmit() function on submit.
        <form onSubmit={handleSubmit}>
            <label htmlFor="name"> Name</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">Last Name</label>
            <input type="text" id="email" name="email" required />

            <button type="submit">Submit</button>
        </form>
    )
}