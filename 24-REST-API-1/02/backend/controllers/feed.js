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
// ========================================
// [01: #363 @ ~5:28]
exports.createPost = (req, res, next) => {

    console.log('createPost()');
    console.log(req.body);

    const title = req.body.title;
    const content = req.body.content;

    

    // Create post in db
    res.status(201);
    res.json({
        message: 'Post created successfully',
        post: {
            id: new Date().toISOString(), 
            title: title,
            content: content
        }
    });
};