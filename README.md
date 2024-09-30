## Standalone Components
 - In Angular, a standalone component is a type of component that is not part of any Angular module (i.e., it does not need to be declared in an NgModule). Instead, it can be directly imported and used in other components, directives, or services. This feature was introduced in Angular 14 to simplify module management and reduce the overhead of having to declare components in NgModules.

## Property Binding (User- Profile Component)
 - In Angular, property binding is a mechanism used to bind data from the component class to the HTML element properties. It allows dynamic values to be assigned to the properties of an HTML element or a directive.

 - The syntax for property binding involves enclosing the element property in square brackets [] and assigning it a template expression that resolves to the value in the component.

 ## Event Binding (User- Profile Component)
 - In Angular, event binding is used to capture events from the DOM (like clicks, key presses, etc.) and execute specific methods in the component. It allows communication from the template (view) to the component (controller) by listening to DOM events and binding them to methods in the component.
 - One-Way Communication: Unlike property binding, which flows from the component to the view, event binding works in the reverse direction, sending data from the view to the component.

 ## Two Way Data Binding (User- Profile Component)
 - Two-way data binding in Angular allows data to flow both from the component to the view (template) and from the view back to the component, keeping the two in sync. This means that changes in the view are automatically reflected in the component, and vice versa.

 ## Structural Directives
 - Structural Directives are responsible for altering the DOM layout by adding or removing elements. These directives typically modify the structure of the DOM by adding, removing, or manipulating elements in the document.

 - They are denoted by a leading * in the template.
Common Structural Directives:
   - *ngIf: Conditionally includes or excludes a part of the DOM based on an expression.
   - *ngFor: Iterates over a list and generates a template for each item.
   - *ngSwitch: Switches between different templates based on a matching expression.

## Attribute Directives
   - Attribute Directives are used to change the appearance or behavior of an element, component, or another directive. Unlike structural directives, they do not alter the DOM structure but simply update the element’s properties or styles.

 - Common Attribute Directives:
    - ngClass: Adds or removes a set of CSS classes dynamically.
    - ngStyle: Adds or removes inline styles dynamically.
[disabled]: Disables an element (e.g., a button).


## Key Differences:
   - Structural Directives alter the structure of the DOM by adding or removing elements.
   - Attribute Directives change the appearance or behavior of an existing DOM element without altering its structure.

## Custom Directives:
  - You can also create your own custom structural and attribute directives in Angular by using @Directive.

## Input Decorator: 

- In Angular, the @Input() decorator is used to pass data from a parent component to a child component. It allows a child component to receive input values or data from its parent, enabling communication and dynamic behavior between components.
- Key Points:
    - Input binding enables a parent component to pass data to its child component.
    - The @Input() decorator is applied to a property of the child component to designate that this property can receive values from the parent component.
    - This is particularly useful for breaking down complex user interfaces into smaller, more reusable components.


## Output Decorators:

- In Angular, the @Output() decorator is used to pass data or events from a child component to a parent component. This is commonly used when a child component needs to notify or send data back to its parent when an event occurs, such as a button click.

 - The @Output() decorator works with an Angular class called EventEmitter, which is used to emit events. The parent component can listen for these events using event binding.

 - Key Concepts:
   - @Output(): Marks a property in the child component that will emit an event to the parent.
   - EventEmitter: Used to create and emit custom events.
   - Event Binding: The parent component listens for the event and executes a function when the event is emitted.

   


