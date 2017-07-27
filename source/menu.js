export default function(array, className) {
    var menu = document.createElement('ul');
    menu.className = className;
    var listItems = '';
    array.forEach(function(element) {
        listItems +='<li>' + item + '</li>';    
    }, this);
    menu.innerHTML = listItemss;
    return menu;
}