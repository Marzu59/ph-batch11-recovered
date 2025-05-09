// set an evenhandler on button
document.getElementById('button-post-comment')
.addEventListener('click', function(){
    // get text written  in the comment text area
    const textbox = document.getElementById('comment-text-box');
    
    const newComment = textbox.value
    // step 3 comment khotay bosahabo
    const main = document.getElementById('comment-container')
    console.log(main)
    //  4 create a comment pragrap tag

    const  innercommmentel = document.createElement('p')
    innercommmentel.classList.add('comment')
     innercommmentel.innerText = newComment;

     main.appendChild(innercommmentel)

     textbox.value = '';


})