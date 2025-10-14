# AngularWorks(2025)
This is only for learning
As we know **AngularJS** is a framework of ***Javascript***, by using that we can create standalone application and many more. and it is working in the priciple of **MVC (Model-View-Controller)** architecture.


##Module

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AngularJS</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.32/angular.min.js"></script>
    <script type="text/javascript">
      angular.module("sample", []);
    </script>
  </head>
  <body ng-app="sample">
    Sum of 1 and 3 is {{1+2}}
  </body>
</html>

```

from the above html code if we want to use angular in our  application we need to add that in the header tag of our code with script tag
```bash
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.32/angular.min.js"></script>
```
To create a model we need to write our script after the script, why we are using the script in the ***header*** tag because we want that everything should be done before page loads.
so inside a ***script*** tag we need to write the creation code for the module
```bash
<script type="text/javascript">
      angular.module("sample", []);
</script>
```
here **angular** is the instance from the *CDN* which we are using in the above tag, by the help of this we can create a module.
module is taking two parameters one is its **name** another one is **[]**, why empty square barces we will discuss later.

we have provided the ***View*** for the body tag
in the body tag, we have **ng-app** attribute which is takes angular module refernce as input so that it can instantiate the module for the body
```bash
  <body ng-app="sample">
    Sum of 1 and 3 is {{1+2}}
  </body>
```
if we will notice in body tag **ng-app="sample"** the name of the ng-app and the module which we have already created above both are same, so the ng-app is able to instantiate the module for our application