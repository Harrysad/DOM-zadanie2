document.addEventListener( 'DOMContentLoaded', function () {

    const button = document.getElementById('button');
    const list = document.getElementById('items');

    button.addEventListener('click', function () {
        const items = document.querySelectorAll('#items .item');
        const itemCount = items.length;
        
        const newItem = document.createElement('li');
        newItem.className = 'item';
        newItem.textContent = `Item ${itemCount +1}`;

        list.appendChild(newItem);
    });
});