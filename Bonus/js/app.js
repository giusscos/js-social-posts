function createPost(id, nameProf, surNameProf, imgProf, day, month, year, desc, imgPost, likes){
    const post = {
        id,
        aut: {
            nameProf,
            surNameProf,
            imgProf
        },
        date: {
            day,
            month,
            year
        },
        desc,
        imgPost,
        likes
    };
    return post
}

const currentDay = new Date().getDate();
const currentMonth = new Date().getMonth() + 1;
const currentYear = new Date().getFullYear();

const desc = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In fugiat officiis qui consectetur a magnam?';

const posts = [
    createPost(1, 'Gianni', 'Colombo', '', 10, 08, 2022, desc, 'https://picsum.photos/600/540', 100),
    createPost(2, 'Marco', 'Schiaccio', 'https://picsum.photos/70/70', 20, 05, 2022, desc, 'https://picsum.photos/600/540', 77),
    createPost(3, 'Fiero', 'Palladina', '', 30, 03, 2022, desc, 'https://picsum.photos/600/540', 23),
    createPost(4, 'Ciacco', 'Resto', 'https://picsum.photos/70/70', 20, 03, 2022, desc, 'https://picsum.photos/600/540', 99),
]

const containerPost = document.getElementById('container');

function createPostHeader(nameProf, surNameProf, imgProf, day, month, year){
    let nameIn, surNameIn;
    const postHeader = document.createElement('div');
    postHeader.classList.add('post__header');
    const date = [day, month, year].join('/');

    if(!imgProf){
        nameIn = nameProf.split('');
        surNameIn = surNameProf.split('');
        const imgProf = nameIn[0] + surNameIn[0];
        postHeader.innerHTML = 
    `
        <div class="post-meta">                    
                <div class="post-meta__icon">
                    <span class="profile-pic-name">
                        ${imgProf}
                    </span>                 
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${nameProf} ${surNameProf}</div>
                    <div class="post-meta__time">${date}</div>
                </div>                    
            </div>
        </div>
    `;
    } else{
        postHeader.innerHTML = 
        `
            <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${imgProf}" alt="${nameProf} ${surNameProf}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${nameProf} ${surNameProf}</div>
                        <div class="post-meta__time">${date}</div>
                    </div>                    
                </div>
            </div>
        `;
    }

    return postHeader;
}

function createPostContent(desc, imgPost){
    const descPost = document.createElement('div');
    descPost.classList.add('post__text');
    descPost.innerHTML = desc;

    const imagePost = document.createElement('div');
    imagePost.classList.add('post__image');
    imagePost.innerHTML = `<img src="${imgPost}" alt="">`;
    
    return descPost, imagePost;
}

function createPostFooter(id, likes){
    const postFooter = document.createElement('div');
    postFooter.classList.add('post__footer');

    const likesFooter = document.createElement('div');
    likesFooter.classList.add('likes', 'js-likes');

    const likeCta = document.createElement('div');
    likeCta.classList.add('likes__cta');

    const likeButton = document.createElement('a');
    likeButton.classList.add('like-button',  'js-like-button');
    likeButton.dataset.postid = id;
    likeButton.innerHTML = 
    `
        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
        <span class="like-button__label">Mi Piace</span>
    `;
    const addLike = likeButton.addEventListener('click', function() {
        if(!postLiked.includes(id)){
            postLiked.push(id);
            likeButton.classList.add('like-button--liked');
            likeCounter.innerHTML = 
            `
                Piace a <b id="like-counter-1" class="js-likes-counter">${++likes}</b> persone
            `;
        } else{
            postLiked.shift(id);
            likeButton.classList.remove('like-button--liked');
            likeCounter.innerHTML = 
            `
                Piace a <b id="like-counter-1" class="js-likes-counter">${--likes}</b> persone
            `;
        }
    });

    const likeCounter = document.createElement('div');
    likeCounter.classList.add('likes__counter');
    likeCounter.innerHTML = 
    `
        Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
    `;

    likeCta.append(likeButton);
    likesFooter.append(likeCta);
    likesFooter.append(likeCounter);
    postFooter.append(likesFooter);

    return postFooter;
}


const postLiked = []

for(let key in posts){
    const value = posts[key];

    const headerPost = createPostHeader(value.aut.nameProf, value.aut.surNameProf, value.aut.imgProf, value.date.day, value.date.month, value.date.year);
    const contentPost = createPostContent(value.desc, value.imgPost);
    const footerPost = createPostFooter(value.id, value.likes);

    const postContainer = document.createElement('div');
    postContainer.classList.add('post');
    postContainer.append(headerPost, contentPost, footerPost);

    containerPost.append(postContainer);
}