function createPost(id, nameAut, imgAut, date, desc, imgPost, likes){
    const post = {
        id,
        nameAut,
        imgAut,
        date,
        desc,
        imgPost,
        likes
    };
    return post
}

const date = '08-05-2022';
const desc = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In fugiat officiis qui consectetur a magnam?';

const posts = [
    createPost(1, 'Gianni Colombo', 'https://picsum.photos/70/70', date, desc, 'https://picsum.photos/600/540', 100),
    createPost(2, 'Marco Schiaccio', 'https://picsum.photos/70/70', date, desc, 'https://picsum.photos/600/540', 77),
    createPost(3, 'Fiero Palladina', 'https://picsum.photos/70/70', date, desc, 'https://picsum.photos/600/540', 23),
    createPost(4, 'Ciacco Resto', 'https://picsum.photos/70/70', date, desc, 'https://picsum.photos/600/540', 99),
]

console.log(posts)