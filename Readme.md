Answer the following questions : 

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById() takes a unique id as input and outputs a single element. It cannot use CSS selectors. getElementsByClassName() takes a class name  as input and returns multiple elements. It can't use CSS selectors. querySelector() takes HTML element tag and atributes as input and returns first matching element. It doesn't return multiple elements. And querySelectorAll() takes also HTML element tag and atributes as input and returns a nodelist of all matching elements.

2. How do you create and insert a new element into the DOM?

Ans: 
const (name) = document.createElement(HTML element tag);
name.innerText = (...);

const (newName)= document.getElementById(id's name);
newName.appendChild(name);

3. What is Event Bubbling and how does it work?

Ans: Event bubbling is a DOM process where when an event occurs in a nested element, it first propagates from the target element to its parent elements. When an event occurs on an element, that event is first triggered on the target element.
Then that event propagates upwards to its parent → its grandparent → the last document.

4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation is where you place an event listener on a parent element, and that event automatically works for its child elements as well. It is useful, because - 
1.There is no need to set a separate event for each child.
2.If you add a new <li> later, the parent's event will still work.
3.Since the event is on one parent, there is no need to have separate listeners for multiple child elements.

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: The default action (link, form submission, etc.) does not occur in PreventDefault() and The event is no longer propagated to the parent or ancestor element in stopPropagation().