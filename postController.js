const posts = [
    {id: 1, title: 'Post One'},
    {is: 2, title: 'Post Twoe'},
];

function square(number) {
    return number * number;
}

const getPosts = () => posts;
const getSquare = (number) => square(number);

export {getPosts, getSquare}