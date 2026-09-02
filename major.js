function change(){

    var element = document.getElementById('pageheading2');
    // alert(element);
    element.firstChild.nodeValue = 'New Heading';
}

document.addEventListener('click',change);


