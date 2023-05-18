export default function handler(req, res) {
    const { username, password } = req.body;

    // Check if the provided username and password match the expected values
    if (username === 'username' && password === 'password') {
        res.status(200).json({ success: true }); // Return success response
    } else {
        res.status(401).json({ success: false, error: 'Authentication failed.' }); // Return authentication failed response
    }
}
