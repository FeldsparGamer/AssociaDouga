// jogo do tigrinho

function submitComment() {
    const commentText = document.getElementById('comment-text').value;
    
    if (commentText.trim() !== '') {
        const commentsList = document.querySelector('.comments');
        
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        
        const commentContent = document.createElement('p');
        commentContent.textContent = commentText;
        
        commentElement.appendChild(commentContent);
        commentsList.appendChild(commentElement);
        
        document.getElementById('comment-text').value = '';
    } else {
        alert("Por favor, escreva um comentário!");
    }
}

document.getElementById('submit-button').addEventListener('click', submitComment);

document.getElementById('addTagButton').addEventListener('click', function() {
    const tagInputContainer = document.getElementById('tagInputContainer');
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.placeholder = 'Digite a nova tag';
    inputField.id = 'newTagInput';
    tagInputContainer.innerHTML = '';
    tagInputContainer.appendChild(inputField);
    inputField.focus();

    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const newTag = inputField.value.trim();
            if (newTag) {
                addTag(newTag);
            }
            restoreAddButton();
        }
    });

    inputField.addEventListener('blur', restoreAddButton);
});

function addTag(tagName) {
    const tagButton = document.createElement('button');
    tagButton.classList.add('tag');
    tagButton.textContent = tagName;

    const tagInputContainer = document.getElementById('tagInputContainer');
    tagInputContainer.parentNode.insertBefore(tagButton, tagInputContainer);
}

function restoreAddButton() {
    const tagInputContainer = document.getElementById('tagInputContainer');
    tagInputContainer.innerHTML = '<button id="addTagButton" class="tag">+</button>';
    document.getElementById('addTagButton').addEventListener('click', function() {
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.placeholder = 'Digite a nova tag';
        inputField.id = 'newTagInput';
        tagInputContainer.innerHTML = '';
        tagInputContainer.appendChild(inputField);
        inputField.focus();

        inputField.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                const newTag = inputField.value.trim();
                if (newTag) {
                    addTag(newTag);
                }
                restoreAddButton();
            }
        });

        inputField.addEventListener('blur', restoreAddButton);
    });
}
