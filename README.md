Angular Front to back from dsinz technology
===========================================

1. Development Environment setup
   
   * Nodejs
   * NPM
   * Typescript  -- npm install -g typescript
   * Angular CLI -- npm install -g @angular/cli

2. Package.json and package-lock.json

   * Package.json file contain project dependencies and DEV dependencies files.
   * Package-lock.json It stores an exact, versioned dependency tree rather than using starred versioning like package.json itself (e.g. 1.0.*).

3. Modules

   In Angular, a module is a container to group components, directives, pipes and services.

4. Decorators

   * Decorator is simple typescript function. 
   * Decorator are start with @ symbol.
   * Decorator function supply metadata to angular such as property, value and method
    
       # Some common decorators in angular

         * @NgModule() define module
         * @Component() define component
         * @Injectable() define service
         * @Input() and @Output() communicating data from parent to child and child to parent

       # Types of decorators

         * Class decorator ( @Component and @NgModule )
         * Property decorator ( @Input and @Ouput )
         * Method decorator ( @HostListener )
         * Parameter decorator ( @Injectable )

5. Components

    * Component is piece of function which will take the responsibility for render the view. Which means angular is expecting atleast one component.
    * Component contain logic for views, data, view design ( HTML )
    * All components must be registered with root module

6. Directives

    * Directive are elements which change the apperance, behavior of the DOM elements
    * 3 types of directive available in angular
      * Components directive
      * structural directive
          * ngfor ( Index, first, last, odd, even, trackby, group )
          * ngif, then, else
          * ngswitch
      * Attribute directive  
          * ngStyle
          * ng class

7. Bindings

    * Oneway binding 
        * Interpolation binding ( component to view )
        * Property binding ( component to view )
        * Attribute binding ( component to view )
        * Event binding ( view to component )
    * Twoway binding

    

    