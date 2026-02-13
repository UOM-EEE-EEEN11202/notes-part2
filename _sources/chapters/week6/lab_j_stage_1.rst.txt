.. role:: console(code)
   :language: console

.. role:: python(code)
   :language: python

.. _lab_j_stage_1:

What comes next
===============

Overview
--------
Python is an extremely widely used programming language, and there are many directions you could go in next. We've attempted to overview a wide number of areas in Python that we think you're likely to encounter as Electronic Engineers. It's deliberately broad, rather than deep, to give you a good foundation to build on, in the assumption that you can look into any individual topic in more depth later on if you need to, as long as you've got a good foundation and so know what to look for.

The topics to learn next depend on where you want to go. Python for the web, with tools such as `Django <https://www.djangoproject.com/>`_ and `Flask <https://flask.palletsprojects.com/en/latest/>`_ and `FastAPI <https://fastapi.tiangolo.com/>`_ is potentially quite different to Python for data science and machine learning where you could learn much more about `PyTorch <https://pytorch.org/>`_. Python is also used for scripting and automation, game development, desktop applications, and many other areas.

Below we highlight a few core Python areas that we haven't covered in the course, but which you might encounter sooner rather than later. 

Pathlib
-------
Throughout the course we've worked with a number of files, loading data into our Python code and saving results back out again. Generally we've just specified the filename in a string, like

.. code-block:: python

   fn = r"/workspaces/labs/lab-i/data/ecg.mat"

This is fine as far as it goes, but the standard library includes a module called :python:`pathlib` which provides a more powerful way of working with files and folders. It allows you to easily manipulate paths, check whether files or folders exist, create new folders, and so on. For example, the above code could be written as:

.. code-block:: python

   from pathlib import Path

   fn = Path("/workspaces/labs/lab-i/data/ecg.mat")
   if fn.exists():
       print("File exists")
   else:
       print("File does not exist")

If you're doing more than the bare minimum with files and folders, it's probably better to store them as :python:`Path` objects rather than as strings. The documentation is at `https://docs.python.org/3/library/pathlib.html <https://docs.python.org/3/library/pathlib.html>`_ if you want to read more.


Function arguments
------------------
We first covered functions in :ref:`Lab C <lab_c_stage_1>`, and have used them lots since. One area we haven't really covered is the different ways of passing inputs (arguments) to functions. So far we've just passed them as *positional* arguments, like this:

.. code-block:: python

   def add(a, b):
       return a + b

   result = add(1, 2)

This is fine when you only have a small number of inputs, but can get confusing when you have more. An alternative is to use *keyword* arguments, where you specify the name of the argument when you call the function:

.. code-block:: python

   def add(a, b):
       return a + b

   result = add(b=2, a=1)

This makes it clear which argument is which, and allows you to pass them in any order. You can also mix positional and keyword arguments, but positional arguments must come first. 

There are many more detailed rules for adding arguments, particularly using :python:`*args` and :python:`**kwargs` to pass variable numbers of arguments. It wouldn't be surprising for you to encounter code from others using :python:`*args` and :python:`**kwargs`, and this is what they're doing, exercising greater control over the inputs that a function (or method) can accept.

The documentation is at `https://docs.python.org/3/tutorial/controlflow.html#defining-functions <https://docs.python.org/3/tutorial/controlflow.html#defining-functions>`_ if you want to read more.

Type hints
----------
We mentioned type hints as an aside `in Part 1 of the notes <https://uom-eee-eeen11202.github.io/notes-part1/chapters/programming_fundamentals/data_types.html#dynamically-typed-vs-statically-typed>`_. Python is *dynamically* typed. It automatically detects the data type of a variable, and the type can change at runtime. This is very flexible, but can lead to errors if a function is called with the wrong type of argument.

Type hints let you indicate what data type a variable, or function input, or function output should have. For example:

.. code-block:: python

   def add(a: int, b: int) -> int:
       return a + b

   result = add(1, 2)

This indicates that :python:`a` and :python:`b` should be integers, and the function will return an integer. 

Importantly, Python doesn't enforce these hints. They'll be ignored when you run the code, but they can help you the programmer, and automated checking tools spot, any potential issues.

We haven't used them in this introductory course, because they make the code a bit more complex to read and so some of the key points possibility harder to see when starting out. Nevertheless, adding type hints to your code is probably best practice in most cases. The documentation is at `https://docs.python.org/3/library/typing.html <https://docs.python.org/3/library/typing.html>`_ if you want to read more.

When we get to `Part 3 of the course <https://uom-eee-eeen11202.github.io/notes-part3/>`_ we're going to work with *statically typed* languages. These use a similar approach to type hints where the data type is specified, but you have to have them and the compiler checks them for you. This can help catch errors earlier in the development process.