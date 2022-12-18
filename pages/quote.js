export default function QuoteForm() {
    // Handles the submit event on form submit.
    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data = {
            name: event.target.name.value,
            phone: event.target.phone.value,
        }

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)

        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch('/api/mondayForm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        })

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

            <label htmlFor="phone">Last Name</label>
            <input type="text" id="phone" name="phone" required />

            <button type="submit">Submit</button>
        </form>
    )
}