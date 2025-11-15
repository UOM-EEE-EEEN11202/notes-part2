.. role:: console(code)
   :language: console

.. role:: python(code)
   :language: python

Theory
======

Python functions and testing
----------------------------
This week we're going to look at topics such as `functions <https://uom-eee-eeen11202.github.io/notes-part1/chapters/programming_fundamentals/functions.html>`_, and testing approaches such as `static code analysis <https://uom-eee-eeen11202.github.io/notes-part1/chapters/software_development_tools/static_code_analysis.html>`_, `debugging <https://uom-eee-eeen11202.github.io/notes-part1/chapters/software_development_tools/debugger.html>`_, and `unit testing <https://uom-eee-eeen11202.github.io/notes-part1/chapters/software_development_tools/automated_testing.html>`_. The theory for these is all covered in `Part 1 of the Notes <https://uom-eee-eeen11202.github.io/notes-part1/>`_. We don't have any new theory to introduce for these, over and above these notes, here. 


Python projects
---------------

Motivation
^^^^^^^^^^
In :ref:`Lab B <lab_b>` we made our virtual environemnt *by hand*. That is, we installed modules into it by using a command like :console:`uv pip install pandas`, essentially to install one module at a time. (Although you can pass the names of multiple modules if you wanted to.) This is fine, but it's not very scalable. Say we move to a different computer, we need to have a list of all the modules we need to install, and their versions, so that we can recreate the environment. This is where Python projects come in. There are tools to help us manage this. 

We also just stored our code in a single file, placing this wherever we wanted. This is also fine, but it's not very scalable. Quite quickly we will have multiple files in any project. There are standards for how we organise these multiple files. It's not necessarily mandatory to follow these standards, but in most cases it is likely good practice. For simple projects it's possible, and tempting, to skip some of this structure. We're going to introduce it so that you have experience and can make an informed choice on how much structure is needed for any given project. 

We also used a Jupyter Notebook to store our Python code in, a file with a :console:`.ipynb` extension. They act as a *wrapper* around core Python code, for example allowing us to have a plot in the same file. Jupyter Notebooks are widely used, particularly in data science and machine learning. For the rest of this course, however, we'll focus on writing plain text Python code, in a text file with a :console:`.py` extension. This is also a very common way to writing Python code, particularly for code that it to be run in :ref:`batch mode <python_modes>`. It's then also easier to into a :ref:`package or module <python_modes>`. We used Jupyter Notebooks in Lab B because it's important you're familar with them, but we don't want to jump around between different approaches too much, and so we'll be consistent with writing plain :console:`.py` files for the rest of the course. We won't cover it, but it's easy to convert between Jupyter Notebooks and plain text Python files, using automated tools.


What's needed for a Python project
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Most of our programming focuses on writing the code file. That is, entering Python functions in order to obtain our wanted functionality. This ends up with one, or more, :console:`.py` files that contains the code. However, just this code file, while it's undoubtedly the core what we want to do, isn't enough to fully define our Python code. For any non-trivial project there are 2 items that are needed to fully define the Python code, and probably more like 4.

#. The Python code file, one with a :console:`.py` extension as noted above.

#. A file that defines the virtual environment that's required to run the Python code. The code may need a particular version of Python, with particular versions of external modules. We need a file to write down what these are. Traditionally this information was stored in a file called :console:`requirements.txt`. Today, a file called :console:`pyproject.toml` is used, and indeed it can include a wide range of information about the project, not only the Python modules needed. We could just share the entire virtual environment along with the code, but this is quite inefficient, a virtual environment can use quite a bit of disc space, and indeed the internals of a virtual environment may not automatically work on a different computer if it's using a different operating system. Rather, the standard practice it is have a simple text file that defines the environment, which can then be used to build the environment whenever it's needed. 

We would argue that any Python code is not complete without the two above items.

.. admonition:: Aside

   Technically, the use of a :console:`pyproject.toml` file implies that the code will be installed as a Python package at some point, rather than being a standalone script, or being for interactive use. We'll ignore this and use it as a general project configuration file. We're not going to cover creating and installing packages in this course.

In addition, to fully define any Python code you likely need:

#. Your tests that were used to show the code does what it was meant to do. You might not send these tests to a user of your code, but you as a developer need them alongside the core code. It's easy to write code that *looks correct*, but isn't. Or, code that is correct in many cases, but has *corner cases* where it doesn't do the right thing. A set of tests is needed to as part of the project. 

#. Your `documentation <https://uom-eee-eeen11202.github.io/notes-part1/chapters/software_lifecycle/documentation.html>`_ which explains what the code is for, how to use it, and so on. `There are tools to help with this <https://uom-eee-eeen11202.github.io/notes-part1/chapters/software_development_tools/documentation_tools.html>`_. By and large we wont' cover these in this course. We'll assume that you're going to write some documentation to accompany your code. 


Python project structure
^^^^^^^^^^^^^^^^^^^^^^^^
A Python project is defined in a :console:`pyproject.toml` file. We can make and maintain this file by using :console:`uv`. We'll see how to do this in the Labs this week and won't look into it further here.

In addition to the `pyproject.toml` file, a Python project typically includes the following directory structure:

.. code-block: console
   project/
   │
   ├── src/                   # Source code
   │   └── my_package/        # Your package code
   │       ├── __init__.py
   │       └── main.py
   │
   ├── tests/                 # Your tests
   │   └── test_main.py
   │
   ├── docs/
   │   └── documentation      # Your documentation (this may be quite a few different files/folders)
   |
   ├── README.md              # Bare minimum project documentation
   ├── LICENSE                # Information on permissions and usage conditions of the code
   └── pyproject.toml         # Project metadata and dependencies

You can see an example of this structure `from Microsoft <https://github.com/microsoft/python-package-template>`_. (They include a few other items too.)

For a Python project, having this sort of structure is optional. When we get to Rust, later in the course, you'll find that the tools mandate having some of this project structure. 

.. admonition:: Aside

   In the diagram above you'll see there is a :console:`__init__.py` file. As we're not going to make a Python package we'll ignore this, but it's important to learn about if you go deeper into Python development. 

