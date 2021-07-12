exports.getPosts = (req, res, next) => {
    // Set status code
    res.status(200);

    // Set up object
    res.json({
        posts: [
            {
                title: 'First Post',
                content: 'This is the first post'
            }
        ]
    });  
};