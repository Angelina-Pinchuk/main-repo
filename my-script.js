window.addEventListener('DOMContentLoaded', () => {
    function printDOMTree(node, indent = '') {
        // Выводим текущий элемент
        console.log(indent + node.nodeName);

        // Рекурсивно обходим дочерние узлы
        node.childNodes.forEach(child => {
            printDOMTree(child, indent + '  ');
        });
    }

// Запускаем с корневого элемента документа
    printDOMTree(document.documentElement);

});
