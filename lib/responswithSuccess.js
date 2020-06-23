// reusable function to respond to requests with an success in a consistent data format
module.exports = ({res, status = 200, message = 'success', data = null}) => {
    res.status(status).json({
        message,
        data
    });
}; 