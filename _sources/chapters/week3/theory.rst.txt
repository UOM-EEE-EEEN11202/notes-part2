.. role:: console(code)
   :language: console

.. role:: python(code)
   :language: python

Theory
======

Python functions and testing
----------------------------
This week we're going to look at topics such as `functions <https://uom-eee-eeen11202.github.io/notes-part1/chapters/programming_fundamentals/functions.html>`_, and testing approaches such as `static code analysis <https://uom-eee-eeen11202.github.io/notes-part1/chapters/software_development_tools/static_code_analysis.html>`_, `debugging <https://uom-eee-eeen11202.github.io/notes-part1/chapters/software_development_tools/debugger.html>`_, and `unit testing <https://uom-eee-eeen11202.github.io/notes-part1/chapters/software_development_tools/automated_testing.html>`_. The theory for these is all covered in `Part 1 of the Notes <https://uom-eee-eeen11202.github.io/notes-part1/>`_. We don't have any new theory to introduce for these here, over and above those earlier notes. 


Python files vs. Jupyter Notebooks
----------------------------------
In :ref:`Lab B <lab_b>` we used a Jupyter Notebook to store our Python code in, a file with a :console:`.ipynb` extension. Jupyter Notebooks act as a *wrapper* around core Python code, for example allowing us to have a plot in the same file. Jupyter Notebooks are widely used, particularly in data science and machine learning. 

For the rest of this course, however, we'll focus on writing plain text Python code, in a text file with a :console:`.py` extension. We used Jupyter Notebooks in Lab B because it's important you're familiar with them, but we don't want to jump around between different approaches too much, and so we'll be consistent with writing plain :console:`.py` files for the rest of the course. 

We won't cover it, but if you want to it's easy to convert between Jupyter Notebooks and plain text Python files using automated tools.


Managing Python dependencies
----------------------------
In :ref:`Lab B <lab_b>`, even for fairly basic Python code we had to install a number of external modules. This is very common in Python code. As a result there are a wide range of tools and techniques for keeping track of which modules need to be installed, and whether there are any specific versions that are needed. A virtual environment is used for this. 

In :ref:`Lab B <lab_b>` we made our virtual environment *by hand*. That is, we installed modules into it by using a command like 

.. prompt::
   :language: bash

   uv pip install pandas

essentially to install one module at a time. (Although you can pass the names of multiple modules if you wanted to.) 

This is fine, but it's not very scalable. Say we move to a different computer, we need to have a list of all the modules we need to install, and their versions, so that we can recreate the environment. There are tools to help us manage this. 

Most of our programming focuses on writing the code file. That is, entering Python functions in order to obtain our wanted functionality. This ends up with one, or more, :console:`.py` files that contains the code. However, just this code file, while it's undoubtedly the core what we want to do, isn't enough to fully define our Python code. 

For any non-trivial project there are 2 items that are needed to fully define the Python code, and probably more like 4.

#. The Python code file, one with a :console:`.py` extension as noted above.

#. A file that defines the virtual environment that's required to run the Python code. The code may need a particular version of Python, with particular versions of external modules. We need a file to write down what these are. Traditionally this information was stored in a file called :console:`requirements.txt`. Today, a file called :console:`pyproject.toml` is used. Indeed it can include a wide range of information about the project, not only the Python modules needed. We could just share the entire virtual environment along with the code, but this is quite inefficient. A virtual environment can use quite a bit of disc space, and the internals of a virtual environment may not automatically work on a different computer if it's using a different operating system. Rather, the standard practice it is have a simple text file called :console:`pyproject.toml` that defines the environment, which can then be used to build the environment whenever it's needed. 

We would argue that any Python code is not complete without the two above items.

.. admonition:: Aside
   :class: dropdown

   In modern Python it is possible to specify dependencies inside the :console:`.py` file itself, so that you don't have to maintain both the :console:`.py` file and the :console:`pyproject.toml` file separately.

   There are two methods:

   1. Those following the macOS/Linux instructions in :ref:`Lab A <lab_a>` will have seen the use of a *shebang* line. It is the first line of a script, which has instructions telling the computer how to run the script.

      If you have a Python file called :console:`my_script.py` and set the start of Python file to be 

      .. code-block:: python

         #!/usr/bin/env -S uv run --script
         #
         # /// script
         # requires-python = ">=3.12"
         # dependencies = ["pandas, numpy"]
         # ///

      you can then run the script directly in the terminal by typing
      
      .. prompt::
         :language: bash
      
         ./my_script.py
         
      A virtual environment will automatically be made and used. You can add as many dependencies as are needed to this top block.
   
   2. If you have a Python file called :console:`my_script.py` and set the start of Python file to be 

      .. code-block:: python

         # /// script
         # requires-python = ">=3.12"
         # dependencies = ["pandas, numpy"]
         # ///

      you can then run the script directly in the terminal by typing
      
      .. prompt::
         :language: bash
      
         uv run ./my_script.py

      A virtual environment will automatically be made and used. You can add as many dependencies as are needed to this top block.

   We won't use these approaches in this course. We'll maintain two separate files, the code and the dependencies, to help keep our thinking focused on the fact that we need both, and we don't want to be using too many different approaches. In practice, small projects probably tend to combine both into the one file, while larger projects keep separate files.

   If you want to, you can start a new blank project which uses this in-line dependency approach by typing 

   .. prompt::
      :language: bash

      uv init --script my_script.py


In addition, to fully define any Python code you likely need:

3. Your tests that were used to show the code does what it was meant to do. You might not send these tests to a user of your code, but you as a developer need them alongside the core code. It's easy to write code that *looks correct*, but isn't. Or, code that is correct in many cases, but has *corner cases* where it doesn't do the right thing. A set of tests is needed to as part of the project. 

4. Your `documentation <https://uom-eee-eeen11202.github.io/notes-part1/chapters/software_lifecycle/documentation.html>`_ which explains what the code is for, how to use it, and so on. `There are tools to help with this <https://uom-eee-eeen11202.github.io/notes-part1/chapters/software_development_tools/documentation_tools.html>`_. By and large we won't cover these in this course. We'll assume that you're going to write some documentation to accompany your code. 


Python project structure
^^^^^^^^^^^^^^^^^^^^^^^^
For many of the examples we're going to look at in this course, the code is quite short and we'll just put into one :console:`.py` file. This is also fine, but it's not very scalable. Some projects may ultimately have thousands, or even millions, of lines of code, and its common to break these into multiple files. 

The result is that quite quickly we will have multiple files in any project. There are standards for how we organise these multiple files. It's not necessarily mandatory to follow these standards, but in most cases it is likely good practice. For simple projects it's possible, and tempting, to skip some of this structure. We're going to introduce it so that you have experience and can make an informed choice on how much structure is needed for any given project. 

A Python project is defined in a :console:`pyproject.toml` file. We can make and maintain this file by using :console:`uv`. We'll see how to do this in the Labs this week .

In addition to the :console:`pyproject.toml` file, a Python project typically includes the following directory structure:

.. code-block:: console

   project_name/
   │
   ├── src/                   # Source code
   │   └── my_python_name/    # Your Python code
   │       ├── __init__.py
   │       └── main.py
   │       └── support_functions.py
   │
   ├── tests/                 # Your tests
   |   ├── __init__.py
   │   └── test_main.py
   │   └── test_support_functions.py
   │
   ├── docs/
   │   └── documentation      # Your documentation (this may be quite a few different files/folders)
   |
   ├── README.md              # Bare minimum project documentation
   ├── LICENSE                # Information on permissions and usage conditions of the code
   └── pyproject.toml         # Project metadata and dependencies

You can see an example of this structure `from Microsoft <https://github.com/microsoft/python-package-template>`_. (They include a few other items too.)

For a Python project, having this sort of structure is optional. We won't cover them, but there are tools such as `cookiecutter <https://cookiecutter.readthedocs.io/en/stable/>`_ that can automated parts of setting up different project structures. When we get to Rust, later in the course, you'll find that the tools mandate having some of this project structure. 

We won't use all of this structure until we get to :ref:`Lab D <lab_d>` when we start writing tests for our code. For Lab C we'll just keep everything in the one folder for simplicity. 

.. admonition:: Aside
   :class: dropdown

   In the diagram above you'll see there some a :console:`__init__.py` files. As we're not going to make a Python *package* we'll largely ignore these. 
