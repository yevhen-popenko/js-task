// Normalization data task
// In this case we have array with users, needs normalize data to easy access to user

const usersMock = [
  {
    id: "id1",
    name: "John"
  },
  {
    id: "id2",
    name: "Tim"
  },
  {
    id: "id3",
    name: "Kate"
  },
];

const postMock = [
  {
    post: 1,
    title: "Best Football cup1",
    likes: "7"
  },
  {
    post: 2,
    title: "Best Football cup2",
    likes: "20"
  },
  {
    post: 3,
    title: "Best Football cup3",
    likes: "3"
  },
  {
    post: 4,
    title: "Best Football cup4",
    likes: "40"
  }
];

function normalize(arr, key) {

}

let normalizedUsers = normalize(usersMock, 'id');
let normalizedPosts = normalize(postMock, 'post');

console.log(normalizedUsers['id2'].name); // Tim
console.log(normalizedUsers['id3'].name); // Kate
console.log(normalizedPosts['2'].title); // Best Football cup2
console.log(normalizedPosts['3'].title); //Best Football cup3
