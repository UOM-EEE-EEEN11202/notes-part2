Formative quiz 5
================

.. quizdown::

   ## What is the difference between a method and a function?

   1. [ ] A method is for storing data, a function is for processing data.
       > That's not correct. Both methods and functions can process data.
   1. [x] A method is a function that is associated with an object.
       > That's correct!
   1. [ ] A method is for processing data, a function is for storing data.
       > That's not correct. Both methods and functions can process data.
   1. [ ] A function is a method that is associated with an object.
       > That's not correct. It's the other way round.
   1. [ ] The two are the same.
       > That's not correct. Both are defined with def statements, but a method sits inside a class definition while a function does not.

   ## What is the intention of using a single underscore _ at the start of a method name in a class?
   
   1. [x] It indicates the method is for the class itself to use, not for users of the class.
       > That's correct! This is a common convention in Python.
   1. [ ] It has no special meaning. 
       > That's not correct. You can use underscores for any method if you want, but by convention this has a special meaning. Try again.
   1. [ ] It indicates this is a method that Python provides automatically for the class.
       > That's not correct. There are special methods, these use two underscores.
   1. [ ] It indicates this method is a prototype and hasn't been fully tested yet.
       > That's not correct. Try again.
   1. [ ] It indicates that this method can only work with numerical data. 
       > That's not correct. Try again.


   ## What is the first argument given to a method?

   1. [x] self
       > That's correct!
   1. [ ] me
       > That's not correct.
   1. [ ] this
       > That's not correct.
   1. [ ] a
       > That's not correct.
   1. [ ] Any name you want
       > That's not correct.


   ## What case do we usually use to indicate a class name in Python?

   1. [ ] camelCase
       > That's not correct.
   1. [ ] snake_case
       > That's not correct.
   1. [ ] kebab-case
       > That's not correct.
   1. [ ] ALLCAPS
       > That's not correct.
   1. [X] PascalCase
       > That's correct!


   ## Re-arrange the below to import a function called `check_email()` from a file called `funcs.py` stored in a folder called `lib`.
   
   1. from 
   2. lib
   3. .
   4. funcs 
   5. import 
   6. check_email


   ## Which term is `...` representing in the `try`-`except` block below?

   `try:` <br />
    `    x = 101` <br />
    `except:` <br />
    `    x = 100` <br />
    `...:` <br />
    `    print("No exceptions were raised.")` <br />
    `finally:` <br />
    `    print(f"x is {x}")` <br />

   1. [ ] if
       > That's not correct.
   1. [x] else
       > That's correct!
   1. [ ] then
       > That's not correct.
   1. [ ] except
       > That's not correct. You can have more than one except block to catch different exceptions, but the first except block in this example already catches all exceptions. 
   1. [ ] continue
       > That's not correct.

   ## Re-arrange the below to raise a `ValueError` exception with the message "Invalid input".

   1. raise 
   2. ValueError
   3. (
   4. "
   5. Invalid input
   6. "
   7. )


   ## Which of the below are built in exceptions in Python? Select all that apply.

   > [See the Python documentation](https://docs.python.org/3/library/exceptions.html)

   - [x] ValueError
   - [x] FileNotFoundError
   - [x] IndexError
   - [x] ZeroDivisionError
   - [x] ImportError



   ## In a `try`-`except` block you can only have exactly one `except` statement.

   1. [ ] True
       > That's not correct. You can have multiple except statements to catch different exceptions.
   1. [ ] False
       > That's correct!


   ## In Git, combining two branches together is known as

   1. [ ] Fetching
       > That's not correct. This is a different operation, not related to branches. 
   1. [ ] Branching
       > That's not correct. This is making a new branch.
   1. [ ] Rebasing
       > That's not correct. This is a valid git operation, but not the correct answer here.
   1. [x] Merging
       > That's correct!
   1. [ ] Combining
       > That's not correct. This isn't the name of an operation in git.


   ## Which of the below makes a custom exception called `NotNumberError`?

   1. [ ] def NotNumberError(Exception):
       > That's not correct. You need to use class, not def, to make a custom exception.
   1. [x] class NotNumberError(Exception):
       > That's correct!
   1. [ ] class NotNumberError(Error):
       > That's not correct. You need to inherit from Exception, not Error.
   1. [ ] class NotNumberError():
       > That's not correct. You need to inherit from Exception.
   1. def Exception(NotNumberError):
       > That's not correct. You need to use class, not def, to make a custom exception.
