

const commentForm = document.getElementById('comment-form');
const commentSection = document.getElementById('comment-section');

commentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // const authorInput = document.getElementById('author');
  const textInput = document.getElementById('text');

  const newComment = document.createElement('div');
  newComment.classList.add('comment');


  const image = document.createElement('img')
  image.src = 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739'
  const newIcon = document.createElement('div');
  newIcon.classList.add('icon');
  newIcon.appendChild(image);
  newComment.appendChild(newIcon);




  const del = document.createElement('img')
  del.src ="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643";
  const newDel = document.createElement('div');
  
  newDel.classList.add('delete');
  
  newDel.appendChild(del);
  
  newComment.appendChild(newDel);


 
  


  // const newAuthor = document.createElement('div');
  // newAuthor.classList.add('comment-author');
  // newAuthor.textContent = authorInput.value;
  // newComment.appendChild(newAuthor);

  const newText = document.createElement('div');
  newText.classList.add('comment-text');
  newText.textContent = textInput.value;
  newComment.appendChild(newText);


  const rep = document.createElement('img')
  rep.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619"
  const newrep = document.createElement('div');
  newrep.classList.add('reply');
  newrep.appendChild(rep);
  newComment.appendChild(newrep);

  commentSection.appendChild(newComment);

 // authorInput.value = '';
  textInput.value = '';
});



function delete_(e)
{
    e.parentNode.parentNode.removeChild(e.parentNode);
}


