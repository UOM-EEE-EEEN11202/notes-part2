.. role:: console(code)
   :language: console


Theory
======

Security settings
-----------------
In :ref:`Lab A <lab_a>` we will look at *shell scripts*. These let us collect together multiple commands for the `command line <https://uom-eee-eeen11202.github.io/notes-part1/chapters/computer_software/gui_and_cli.html>`_ to run them all at once, rather than one command at a time. 

For security purposes, your computer will almost certainly block scripts from running by default. We need to take some additional steps to tell the computer the script is OK to run. This is important, because otherwise anything you download from the Internet could have a script hidden inside it. If they weren't blocked from running by default, they might try and do nefarious things to your computer. 

To prevent this, there is a process known as the `active control list <https://en.wikipedia.org/wiki/Access-control_list>`_ which sets what permissions a user has for working with any particular file. Briefly (and there can be more verbose settings which are not important here), a user may:

- Have permission to *read* a file. That is, to view the contents, but not do anything else.
- Have permission to *write* to a file. That is, to edit the contents of the file. Note you don't necessarily need read permissions to have write permissions, you can just forcefully overwrite whatever is present. 
- Have permission to *execute* a file. That is, to run the file if it is a script or program. 

You can have any mixture combination of these permissions. 

The permissions are also separated out per-user. You can give one user specific permissions. Or set the same permissions for a group of users. Or give a default level of permissions for everyone. As you're working by yourself we won't worry about anything other that giving permissions so that you can run our scripts. 

If you type:

.. tab-set::
    :sync-group: os

    .. tab-item:: :fab:`windows` Windows
        :sync: key1

        .. prompt::
           :language: powershell

           Get-ChildItem
           Get-Acl *

    .. tab-item:: :fab:`apple` macOS / :fab:`linux` Linux
        :sync: key2

        .. prompt::
           :language: bash

           ls -la

into the command line you will get a display of the permissions that are present. (Remember the :console:`>` or :console:`$` is displayed by the terminal for you. You don't need to enter it, it's to show you each command.) This display is slightly different depending on your operating system. Examples are shown below. We won't worry about the exact syntax of these here.

.. tab-set::
    :sync-group: os

    .. tab-item:: :fab:`windows` Windows
        :sync: key1

        .. figure:: ./images/windows_permissions.png
           :width: 800
           :align: center
           :alt: Windows terminal showing file permissions

    .. tab-item:: :fab:`apple` macOS / :fab:`linux` Linux
        :sync: key2

        .. figure:: ./images/linux_permissions.png
           :width: 800
           :align: center
           :alt: Linux terminal showing file permissions

In order to run a script directly at the command line the user must have execute permissions for that file. They don't necessarily need other permissions. We won't go into any more depth on this here. We'll see how to give our scripts the permissions they need to run as part of the lab.

Note that we generally only need to worry about permissions when looking at shell scripts. With other programming files, they are automatically given execute permissions behind the scenes because they're not started directly from the command line, due to the details of how a program is `compiled <https://uom-eee-eeen11202.github.io/notes-part1/chapters/programming_fundamentals/scripts.html>`_.


.. _virtual_environments:

Python virtual environments
---------------------------
In :ref:`Lab B <lab_b>` we will start looking at Python. We'll do this over multiple labs, as there are many different things to learn. :ref:`Lab B <lab_b>` will focus on getting up and running. To do this *virtual environments* are a key thing to understand. You can use Python without using virtual environments, but it makes it very hard to maintain your code and to share it with others. 

Your computer probably has Python already installed on it. It will be being used by various different programs that you have installed. *We don't want to use this Python*. It will be a particular version, whatever is needed to make your computer work. It will have a number of external libraries installed, again whatever is needed to make your computer work. If we change the version of one of these, say because we need a newer version for our code, then everything else on the computer might break. You'll quickly find that there are lots of different versions of Python, and lots of different external libraries that you might use. Having *one* installed copy of Python for everything you might want to do quickly leads to incompatibilities between different programs needing different versions. 

To overcome this, Python uses *virtual environments*. Essentially, having a different copy of Python installed in each different virtual environment. Different sets of Python code can thus be completely isolated from each other, and can have different versions of Python installed. The rule of thumb would be that you should never use the computer Python, you should always use one which is in a virtual environment.

We create these virtual environments with a command that involves :console:`venv`, which we'll see in the labs. In general, we have one virtual environment per *project*. There's no hard rule for what a project is. You could have one larger virtual environment you do all of your work in, or lots of smaller ones. We've set up the course such that one lab is one project. This gives you more chance to practice making and working with virtual environments, and less chance of having incompatibilities between the different labs if you want to install different versions of libraries for some reason.

Having a good understanding of virtual environments is the key first step in writing maintainable Python code, rather than just writing Python code that works but is hard to share with others.

.. _python_modes:

Different ways of running Python
--------------------------------
Writing Python refers to the process of entering Python commands into the computer, and getting the computer to run these commands. There are multiple different ways in which we can do this. We go over the four main ones below. In this course we're going to focus on (2) and (3). 

#. **Interactively**. Here we enter Python commands one at a time. You start Python at the command line with
   
   .. prompt::
      :language: bash

      python3 -I

   (This example is using Linux, as we'll use in the labs.) The :console:`-I` tells Python to start in interactive mode.) 
   
   If you enter this command, you'll see that the command prompt changes from :console:`$` to :console:`>>>` as shown in the figure below. This is the *Python command prompt*. It works much like the computer command prompt that you'll learn about in :ref:`Lab A <lab_a>`, but it accepts Python commands. 

   .. figure:: ./images/python_interactive.png
      :width: 800
      :align: center
      :alt: Python interactive mode command prompt

   Interactive mode can be extremely useful, but it's not very scalable entering one command at a time. 

#. **Jupyter mode interactively**. Here we store multiple commands in a `file <https://uom-eee-eeen11202.github.io/notes-part1/chapters/computer_software/files_and_folders.html#files>`_.

   The Python commands in the file are then automatically run one after another. We'll see how to do this in :ref:`Lab B <lab_b>`. Importantly, the *file* is still run interactively. That is, information in the file is displayed on the screen for us as it is being run. This lets us inspect the values of variables `variables <https://uom-eee-eeen11202.github.io/notes-part1/chapters/programming_fundamentals/variables.html>`_, and to re-run parts of the file if we want to. It's very useful, and widely used in data science applications of Python. Often data science analyses are *exploratory*. We don't necessarily know in advance exactly what we want to do, we need to load the data and have to look at it and explore different things. Nevertheless, in this mode the commands are saved in a file, so we can run lots of commands in sequence, and run the same sequence again if we come back to the data later. Some people refer to a *REPL* loop in Python: Read, Evaluate, Print, and Loop; that is, to interactive work with your data and changing the code to get the behavior you want.

   By convention Python code files have a :console:`.py` extension. When working in Jupyter mode interactively you may also encounter code stored in *Jupyter Notebooks*. These have a :console:`.ipynb` extension. The two are fundamentally the same, and VSCode has a number of different options/buttons for running both of these from the graphical interface. However, a Jupyter Notebook has additional features for formatting the code and adding text, images, and including results to explain what the code is doing. We'll see how to work with both :console:`.py` files and Jupyter Notebooks in :ref:`Lab B <lab_b>`, but in the course we'll mainly use plain :console:`.py` files.
   
#. **As a script**. Here the commands are stored in a file, and we just ask for all of the commands to be run and get the end result. This is useful once we've got our finalized code and, say, want to run it hundreds or thousands of time on different data sets. If your Python code is stored in a file called :console:`my_code.py`, then you can run it with:

   .. prompt::
      :language: bash

      python3 my_code.py

   or

      .. prompt::
      :language: bash

      uv run --no-project my_code.py

   Again, VSCode has a number of different buttons for starting this code from the graphical interface rather than the command line if that's what you prefer.
   
   You won't be able to view the intermediate results without using a debugger, but you can see the final result. (Unless there's an error and the script stops running part way through.)

#. **As a package or module**. For both (2) and (3) above our code will be in a file, with a :console:`.py` extension. We can share this file with others and they'll be able to run it (as long as their :ref:`virtual environment <virtual_environments>` has a suitable Python version and libraries installed). You'll find that we often use code from others, not by sharing a :console:`.py` file, but by installing it using a tool called :console:`pip`. This is a more formal way of sharing code, and adding it to a Python installation. It is an easier way of sharing code with lots of people, especially if the code is split into lots of different files. 

   There are repositories, such as `PyPI <https://pypi.org/>`_, where people have uploaded their code to be installed by others. To share code like this we need to make a *package* from the :console:`.py`. We won't cover how to make a Python package in this course, but you can find out more in the `Python documentation <https://packaging.python.org/tutorials/packaging-projects/>`_ if you are interested. 