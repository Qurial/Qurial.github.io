import ProfileReducer, { addPost } from "../ProfileReducer";
let state = {
    postData: [
        {
            image: 'http://www.culturaeculture.it/wp-content/uploads/2014/05/Michael-Jackson-ai-tempi-di-Bad.jpg',
            name: 'Michael',
            text: "Hee! Hee!",
            likes: "46321",
            id: 1,
        },
        {
            image: 'https://t4.ftcdn.net/jpg/01/29/43/85/360_F_129438556_1ugKA7Fk1EiR7uar9ZGaQ3wYfaWSM25E.jpg',
            name: 'Maria',
            text: "Hi! Usually nothing, it's not a real social network, and we are not even real people",
            likes: "6",
            id: 2,
        },
        {
            image: 'https://i.pinimg.com/originals/39/e9/b3/39e9b39628e745a39f900dc14ee4d9a7.jpg',
            name: 'Andrew',
            text: "Hi! I am new here, what are you usually doing here?",
            likes: "2",
            id: 3,
        },
    ],
    profile: {
        photos: {
            small: null,
            large: null,
        },
        fullName: null
    }
};
describe('profile reducer tests', () => {
    it('new post should be added', () => {
        let action = addPost('new post');
        let newState = ProfileReducer(state, action);

    expect(newState.postData.length).toBe(4);
    })

    it('new post test should be correct', () => {
        let postText = 'new post';
        let action = addPost(postText);
        let newState = ProfileReducer(state, action);

    expect(newState.postData[0].text).toBe(postText);
    })
})

