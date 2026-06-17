# Task Manager Application

A fully interactive Task Manager Application built using HTML, CSS, and Vanilla JavaScript.

## Features

- Add Tasks
- Edit Tasks
- Complete Tasks
- Delete Tasks
- Theme Toggle (Dark/Light Mode)
- Event Delegation
- Dynamic DOM Manipulation
- Custom Data Attributes

---

# Browser Rendering Pipeline

## 1. Parsing

Parsing is the process where the browser reads HTML and CSS code and converts it into structures that can be understood internally.

Example:

```html
<h1>Hello World</h1>
```

The browser reads and analyzes each tag and its content.

---

## 2. Tokenization

Tokenization breaks the HTML source code into smaller units called tokens.

Example:

```html
<h1>Hello</h1>
```

Tokens:

- Opening Tag: `<h1>`
- Text: `Hello`
- Closing Tag: `</h1>`

These tokens are then used to build the DOM Tree.

---

## 3. DOM Tree

DOM (Document Object Model) Tree is a tree-like structure created from HTML.

Example:

```html
<body>
  <h1>Hello</h1>
</body>
```

DOM Tree:

```

Document
|
Body
|
H1
|
"Hello"

```

JavaScript interacts with the webpage through the DOM.

---

## 4. CSSOM Tree

CSSOM (CSS Object Model) Tree is created from CSS rules.

Example:

```css
h1 {
  color: blue;
}
```

CSSOM stores style information for every element.

---

## 5. Render Tree

The browser combines:

- DOM Tree
- CSSOM Tree

to create the Render Tree.

Flow:

```

HTML
↓
Parsing
↓
Tokenization
↓
DOM Tree

CSS
↓
CSSOM Tree

DOM Tree + CSSOM Tree
↓
Render Tree

```

The Render Tree is used to paint elements on the screen.

---

# Event Propagation

Event propagation is the process by which events travel through the DOM.

There are two phases:

1. Capturing Phase
2. Bubbling Phase

---

## Event Bubbling

In bubbling, the event starts from the target element and moves upward.

Example Structure:

```html
<div id="grandparent">
  <div id="parent">
    <button id="child">Click</button>
  </div>
</div>
```

Output:

```

Child
Parent
Grandparent

```

Flow:

```

Child → Parent → Grandparent

```

---

## Event Capturing

In capturing, the event starts from the outermost element and moves inward.

Output:

```

Grandparent
Parent
Child

```

Flow:

```

Grandparent → Parent → Child

```

Capturing is enabled by passing `true` as the third argument to `addEventListener()`.

Example:

```javascript
element.addEventListener(
  "click",
  handler,
  true
);
```

---

## Event Delegation

Event Delegation is a technique where a single event listener is attached to a parent element instead of multiple child elements.

Instead of:

```javascript
editBtn.addEventListener(...)
deleteBtn.addEventListener(...)
completeBtn.addEventListener(...)
```

We use:

```javascript
taskContainer.addEventListener(
  "click",
  (e) => {
    // handle all actions
  }
);
```

### Advantages

- Better Performance
- Less Memory Usage
- Works with Dynamically Created Elements
- Easier to Maintain

This project uses Event Delegation to handle Edit, Complete, and Delete actions for task cards.

---

# Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

---

# Author

Mohit Soni