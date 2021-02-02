export const data = [
    {
      setName: "JavaScript Array Methods",
      setNumber: 1,
      tech: "JavaScript",
      icon: "fab fa-js-square",
      color: "rgb(239,216,29)",
      questions: [
          {number: 1, front: "Explain the function of the following array method:\nmyArray.push('new element');", back: "-It adds a new element to the end of the array.\n-Multiple elements can be added by separating them with commas.\n-This alters the original array and does not return anything.", article1: "https://kateeliza.co.uk", article2: "http://google.com"},
          {number: 2, front: "Explain the function of the following array method:\nmyArray.splice(2, 1, 'new element');", back: "-It changes the original array by removing and adding elements.\n-The first parameter is the index to start removing from.\n-The second parameter is the amount of entries to remove.\n-The third parameter is the element(s) you wish to insert in place of the removed ones.", article1: "https://kateeliza.co.uk", article2: "http://google.com"},
          {number: 3, front: "Explain the function of the following array method:\nmyArray.unshift('new element');", back: "-It adds a new element to the beginning of the array.\n-It alters the original array and does not return anything.", article1: "https://kateeliza.co.uk", article2: "http://google.com"},
          {number: 4, front: "Explain the function of the following array method:\nmyArray.pop()", back: "-It removes and returns the last element in the array.\n-It takes no arguments.", article1: "https://kateeliza.co.uk", article2: "http://google.com"},
          {number: 5, front: "Explain the function of the following array method:\nmyArray.shift();", back: "-It removes and returns the element at index 0 in the array\n-It takes no arguments.", article1: "https://kateeliza.co.uk", article2: "http://google.com"},
          {number: 6, front: "Explain the function of the following array method:\nmyArray.join();", back: "-It returns a string containing all elements in the array.\n-It can take a character as an argument that will be inserted between each element.", article1: "https://kateeliza.co.uk", article2: "http://google.com"},
          {number: 7, front: "Explain the function of the following array method:\nmyArray.from(arrayLikeObject);", back: "-It returns an array from an 'array like' iterable element.\n-It works on things like HTML collections, strings and node lists.", article1: "https://kateeliza.co.uk", article2: "http://google.com"},
          {number: 8, front: "Explain the function of the following array method:\nmyArray.sort();", back: "-It sorts the elements in the array in alphabetical order.", article1: "https://kateeliza.co.uk", article2: "http://google.com"},
          {number: 9, front: "Explain the function of the following array method:\nmyArray.toString();", back: "-It returns the array as a string.\n-It separates each element with a comma.", article1: "https://kateeliza.co.uk", article2: "http://google.com"},
          {number: 10, front: "Explain the function of the following array method:\nmyArray.length();", back: "-It returns the length of the array.", article1: "https://kateeliza.co.uk", article2: "http://google.com"},
          {number: 11, front: "Explain the function of the following array method:\nmyArray.reverse();", back: "-It returns the original array in reverse order.\n-It mutates the original array.", article1: "https://kateeliza.co.uk", article2: "http://google.com"},
          {number: 12, front: "Explain the function of the following array method:\nmyArray.indexOf('element');", back: "-It returns the index of the element passed as an argument.\n-If the passed element does not exist, the method will return '-1'.", article1: "https://kateeliza.co.uk", article2: "http://google.com"}   
        ],
    },
    {
        setName: "PHP",
        setNumber: 2,
        tech: "PHP",
        icon: "fab fa-php",
        color: "rgb(115,119,173)",
        questions: [
            {number: 1, front: "What extension is used for PHP files?", back: "fileName.php", article1: "https://kateeliza.co.uk", article2: "http://google.com"},
            {number: 2, front: "True or false- You can include PHP anywhere in an HTML file?", back: "True, although some developers consider this bad practice because of the theory of 'separation of concerns'.", article1: "https://kateeliza.co.uk", article2: "http://google.com"},
            {number: 3, front: "How should you format a single line comment?", back: "// or #", article1: "https://kateeliza.co.uk", article2: "http://google.com"},
            {number: 4, front: "How should you format a multi-line comment?", back: "//", article1: "https://kateeliza.co.uk", article2: "http://google.com"},
            {number: 5, front: "How should you concatenate?", back: "Use a full stop between clauses.\nFor example:\necho 'My name is ' . $nameVar ", article1: "https://kateeliza.co.uk", article2: "http://google.com"},
            {number: 6, front: "How can you output text or a variable to the console?", back: "'echo 'Text here' or 'print('Text here')'", article1: "https://kateeliza.co.uk", article2: "http://google.com"},
            {number: 7, front: "How can you print an array to the console?", back: "print_r($arrayName)", article1: "https://kateeliza.co.uk", article2: "http://google.com"},
            {number: 8, front: "What must a variable always start with?", back: "The dollar sign ($).", article1: "https://kateeliza.co.uk", article2: "http://google.com"},
            {number: 9, front: "How can you use a global variable inside a function?", back: "You must bring them inside the function by using the 'global' keyword and then the variable names you need.\nFor example:\nglobal $varOne, $varTwo;", article1: "https://kateeliza.co.uk", article2: "http://google.com"},
            {number: 10, front: "Explain the following variable assignment.\n$new_var = $old_var;", back: "This is assigned by value, meaning that $new_var holds a copy of $old_var. $new_var can be changed without affecting $old_var.", article1: "https://kateeliza.co.uk", article2: "http://google.com"},
            {number: 11, front: "Explain the following variable assignment.\n$new_var &= $old_var;", back: "This is assigned by reference. This means that both $new_var and $old_var point to the same location in memory. Changing one will change the other.", article1: "https://kateeliza.co.uk", article2: "http://google.com"},            
            {number: 12, front: "True or false- Convention states that PHP variables should be named using PascalCase?", back: "False. PHP variables are typically named using snake_case.", article1: "https://kateeliza.co.uk", article2: "http://google.com"},
            {number: 13, front: "True or false- In PHP, you cannot include variables within a string?", back: "False. This can be done using the following syntax:\n'Hello my name is $nameVar'", article1: "https://kateeliza.co.uk", article2: "http://google.com"}
        ],
    },
    {
        setName: "CSS Animations",
        setNumber: 3,
        tech: "JavaScript",
        icon: "fab fa-css3-alt",
        color: "rgb(1,108,180)",
        questions: [
            {number: 1, front: "True or false- 'transition-duration' can only take values in ms?", back: "False. It accepts seconds or milliseconds, as long as the units are defined.", article1: "https://kateeliza.co.uk", article2: "http://google.com"},
            {number: 2, front: "True or false- You can only specify one 'transition-property'?", back: "False. It can take multiple, separated by a comma, or it can take 'all', 'none', 'inherit' or 'initial'.", article1: "https://kateeliza.co.uk", article2: "http://google.com"},
            {number: 3, front: "True or false- 'transition-delay' specifies how long you have to wait before the transition can be triggered again?", back: "False. It specifies how long after the trigger the transition starts.", article1: "https://kateeliza.co.uk", article2: "http://google.com"},
            {number: 4, front: "What five values can 'transition-timing-function' take?", back: "ease\nease-in\nease-out\nease-in-out\nlinear", article1: "https://kateeliza.co.uk", article2: "http://google.com"},
            {number: 5, front: "The 'transition' property is shorthand. Which order should you specify values in it?", back: "property -> duration -> timing-function -> delay", article1: "https://kateeliza.co.uk", article2: "http://google.com"},
            {number: 6, front: "True or false- You can combine multiple transition rules using the shorthand 'transition' property.", back: "True. Separate the first set of transition instructions from the next using a comma.", article1: "https://kateeliza.co.uk", article2: "http://google.com"},
            {number: 7, front: "What's the difference between 'transition' and 'transform'?", back: "Transform changes the look or location of an element.\nTranssition smooths the journey between the two states.", article1: "https://kateeliza.co.uk", article2: "http://google.com"}
        ],
    },
    {
        setName: "React Basics",
        setNumber: 4,
        tech: "React",
        icon: "fab fa-react",
        color: "rgb(97,219,251)",
        questions: [
            {number: 1, front: "What's the JS Mr. Wolf?", back: "Three pm!", article1: "https://kateeliza.co.uk", article2: "http://google.com"},
            {number: 2, front: "What's the frontend Mrs. Wolf?", back: "Four pm!", article1: "https://kateeliza.co.uk", article2: "http://google.com"},
            {number: 3, front: "What's the pooface Ms. Wolf?", back: "Five pm!", article1: "https://kateeliza.co.uk", article2: "http://google.com"},
        ],
    },
  ];

  //Add in hints