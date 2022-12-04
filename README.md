# falsk-ajax demo
This is a toy flask project with ajax following the description in [this article](https://towardsdatascience.com/using-python-flask-and-ajax-to-pass-information-between-the-client-and-server-90670c64d688).

## templages/index.html
[Bootstrap (CSS framework)](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
[Jinja (template engine)](https://jinja.palletsprojects.com/en/3.0.x/)

## Using Ajax requests
Ajax (Asynchronous JavaScript and XML) is used to send/retrieve data asynchronously in the background of an application without having to reload the entire page. This is often used when we want to just update part of an existing page without directing users to a new page or re-loading the existing page.  
Perform the calculation with JavaScript, client-side rather in server-side with Python.

Use the ajax method from the **jQuery** JavaScript library.  
Include in the head section of the HTML document: 
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
```