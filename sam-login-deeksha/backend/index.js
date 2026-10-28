exports.handler = async (event) => {
    let body = {};

    try {
        body = event.body ? JSON.parse(event.body) : {};
    } catch (error) {
        return {
            statusCode: 400,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: "Invalid JSON body" })
        };
    }

    if (!body.username || !body.password) {
        return {
            statusCode: 400,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                message: "Username and password are required"
            })
        };
    }

    return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            message: "Login endpoint is working"
        })
    };
};
