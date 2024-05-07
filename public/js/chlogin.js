app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Sjekk om brukeren eksisterer i databasen
    const user = await client.db('your-database').collection('users').findOne({ username, password });

    if (user) {
        res.send('Innlogging vellykket');
        console.log("Innlogging vellykket");
    } else {
        res.status(401).send('Feil brukernavn eller passord');
        console.log('Feil brukernavn eller passord');
    }
});
