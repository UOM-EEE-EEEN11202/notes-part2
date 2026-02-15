.. role:: console(code)
   :language: console

.. role:: python(code)
   :language: python

.. _lab_d_stage_1:

Tools and techniques for catching coding issues
===============================================

Initial setup for the Lab
-------------------------

#. There are no pre-downloaded files needed for Lab D. Sometimes this means that the Lab D folder isn't downloaded automatically (because it's empty). 

   If you don't have a Lab D folder make one, either by pressing the :console:`New Folder` button in the VSCode file explorer, or by using the command line command :console:`mkdir lab-d`.

#. In your Lab D folder, make a new Python project:

   .. prompt::
      :language: bash
   
      uv init .

   This will make the a :console:`pyproject.toml` file, a :console:`main.py` file, and a number of others. 

   We're now going to add a bit more structure to our code folder, as we discussed in the `theory part for Week 3 <https://uom-eee-eeen11202.github.io/notes-part2/chapters/week3/theory.html>`_. We're just going to:

   #. Make a folder called :console:`src`, and put our code files (just :console:`main.py` at the moment) in there. 
   #. Make a folder called :console:`tests`. At the moment this will be empty, but we'll put some unit tests in there in :ref:`the second part of the lab <lab_d_stage_2>`.
   #. Make a folder called :console:`docs`. This is where the documentation for the code will live. We're going to keep this empty, as we won't focus on writing documentation in this lab. Nevertheless, we're going to make it to help remind you that for actual projects there should be some documentation files to accompany your code.
   #. Make an empty :console:`__init__.py` file in the :console:`tests` folder. This is needed for the unit testing setup later on.
   #. Run the boilerplate :console:`main.py` file so that a virtual environment gets made. 
   
   Make sure that your terminal is in your Lab D folder, and then enter:

   .. prompt::
      :language: bash
   
      mkdir src tests docs
      mv main.py src
      uv run src/main.py
      touch tests/__init__.py

   .. admonition:: Aside
      :class: dropdown

      To keep our setup slightly simpler, we're going to put our code directly in the :console:`src` folder. It's common to actually put the code in a sub-folder within :console:`src` with the same name as the project, e.g. :console:`lab_d`. This helps to avoid potential naming conflicts with other packages, but for this lab we'll keep it simple.

   When done, your VSCode should look like the below. 

   .. figure:: ./images/lab_d_setup1.png
      :width: 800
      :align: center
      :alt: Changing the Python interpreter 

      Screenshot of VSCode, software from `Microsoft <https://code.visualstudio.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.


   Once you've opened a Python file, make sure that VSCode says it's using the :console:`lab-d` virtual environment. This will be shown in the bottom right hand corner of the screen. If it's picked a different virtual environment, you can click on the environment name and select the correct one, as shown below.

   .. figure:: ./images/lab_d_setup2.png
      :width: 800
      :align: center
      :alt: Changing the Python interpreter 

      Screenshot of VSCode, software from `Microsoft <https://code.visualstudio.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.


   .. figure:: ./images/lab_d_setup3.png
      :width: 800
      :align: center
      :alt: Selecting the wanted interpreter  

      Screenshot of VSCode, software from `Microsoft <https://code.visualstudio.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.



Static code analysis
--------------------
You've probably already seen the `static code analysis <https://uom-eee-eeen11202.github.io/notes-part1/chapters/software_development_tools/static_code_analysis.html>`_ at work. It underlines pieces of your code, like a spell checker does, to help spot issues before you run the code. In our `devcontainer <https://uom-eee-eeen11202.github.io/notes-part1/chapters/software_development_tools/environment_control.html>`_ we automatically installed the `Ruff <https://docs.astral.sh/ruff/>`_ analyser for you. We'll just look at static code analysis very briefly here. 

#. Replace the code in your :console:`main.py` file with the code below. 

   .. code-block:: python

      def main()
          print(Hello from lab-d!")
          x == 9
          y = 5
          if x > y:
              print(f"x is greater than {y}")
          else if x == y
              print(f"x is {y}")
          elsif x < y:
              print(f"x is less than {y}")
          else:
              raise ValueError("Unexpected comparison result")


      if __name__ == "__main__":
          main()

   This code has quite a few mistakes in it! If you hover over the red underlined sections, VSCode will display help, to try and help you identify the issue(s) with the code. 
   
   Fix this code.

   .. _static_code_analysis_solution:

   .. admonition:: Solution
      :class: dropdown

      .. code-block:: python

         def main():
             print("Hello from lab-d!")
             x = 9
             y = 5
             if x > y:
                 print(f"x is greater than {y}")
             elif x == y:
                 print(f"x is {y}")
             elif x < y:
                 print(f"x is less than {y}")
             else:
                raise ValueError("Unexpected comparison result")


         if __name__ == "__main__":
             a = 56  # used in the next part of the lab
             x = 3.54  # used in the next part of the lab
             main()
   

The debugger
------------
The debugger lets the program pause during its execution. We can then examine the state of the program, the variables and similar, to see whether they are what we would expect. We can use this to help track down issues with the code. In :ref:`the second part of Lab C <lab_c_stage_2>` we used the Jupyter variable explorer to similarly look at variables, but the debugger is more versatile and flexible for when you move on to more complicated programs. 

.. admonition:: Advanced notes
   :class: dropdown

   This is because the Jupyter variable explorer can only show what's in the `current scope <https://uom-eee-eeen11202.github.io/notes-part1/chapters/programming_fundamentals/scope.html>`_. It can't show the values of variables inside different functions, whereas the debugger can. You can turn on a debugger within a Jupyter notebook if you want to, but we won't look into it here. 


General debugging
^^^^^^^^^^^^^^^^^
To use the debugger, you add a *breakpoint*. Execution of the program proceeds as usual, until it reaches a breakpoint. It then stops, and shows a debugging view. You can have as many breakpoints as you would like in different places in your code, we'll just use one below. 

#. Copy the solution :ref:`given above <static_code_analysis_solution>` into your code file. (We suggest you use our given solution rather than your own code because we'll refer to some line number below, which might be different in your code.)

#. Add a breakpoint on Line 5 of the code (assuming you've copied the solution given above). To do this, click next to the line number. A red circle should appear, indicating that the code will stop running when it gets to this point. 

#. Ask VSCode to debug the Python file. Click the down arrow next to the :console:`Run` button, and then select :console:`Python Debugger: Debug Python File`. 

   .. figure:: ./images/starting_the_debugger.png
      :width: 800
      :align: center
      :alt: Setting a breakpoint and starting the debugger

      Screenshot of VSCode, software from `Microsoft <https://code.visualstudio.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.


#. You'll be presented with a view, highlighting Line 5. Line 5 hasn't been run yet, all of the code up to this point has been run. Remember, the code doesn't necessarily run from top-to-bottom. Here the code starts with the :python:`if __name__ == "__main__":` block, which then called the function :python:`main()`. 

   The values of :python:`x` and :python:`y` are shown. You can compare these against what would you expect them to be.

   .. figure:: ./images/the_debugger.png
      :width: 800
      :align: center
      :alt: The VSCode debugger

      Screenshot of VSCode, software from `Microsoft <https://code.visualstudio.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.


#. You'll also see a set of controls presented. Hover the mouse over these to see what each button does. Briefly:

   - :console:`Continue` resumes execution of the program. It will run until it reaches another breakpoint, or until it reaches the end of the program, whichever is sooner. 
   - :console:`Step over` advances the execution by 1 line. This is really helpful for stepping through the code line by line to find issues.
   - :console:`Step into` advances the execution, and if there's a function, moves the debugger into the function. Otherwise, :console:`Step over` just runs the function and puts the results into the debugger without looking inside the function. 
   
   There are also buttons to :console:`Restart` the debugger and to :console:`Stop`. 

   Spend some time exploring these different options. Stop the debugger when you're ready.


Changing the value of a variable
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
#. The debugger is an interactive tool, to help us understand our programs (and why they might not be working). Right click on the :python:`x` variable that's displayed in the debugger. Click on :console:`Set Value`, and you'll be able to change the value of :python:`x`.

   .. figure:: ./images/debugger_setting_a_value.png
      :width: 800
      :align: center
      :alt: Changing values in the VSCode debugger

      Screenshot of VSCode, software from `Microsoft <https://code.visualstudio.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.


#. Set the value of :python:`x` to 5 and then press the :console:`Step Over` button. You should see that the :python:`if` statement now goes down a different route. This can be very useful for checking different options, without having to re-run all of the code. 

   .. figure:: ./images/debugger_setting_a_value2.png
      :width: 800
      :align: center
      :alt: Changing values in the VSCode debugger

      Screenshot of VSCode, software from `Microsoft <https://code.visualstudio.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.



Examining the call stack
^^^^^^^^^^^^^^^^^^^^^^^^
#. Stop the debugger and start it again (so that we have the right value for :python:`x`). 

#. We put our breakpoint on Line 5. This is in a function called :python:`main()`, which is called on Line 18 of the code. The debugger lets us view the status of the program when it was stopped (Line 5), and the status of when :python:`main()` was called (Line 18).

#. Click on :console:`<module>` in the :console:`CALL STACK` area. This lets us switch the view of the debugger to where the function was called. If you have a breakpoint in a function, which was called by another function, which was called by another function, there might be several layers to this stack. Here we just have one, with the top layer called :console:`<module>` by default. 

   .. figure:: ./images/call_stack.png
      :width: 800
      :align: center
      :alt: Changing the scope of the variables shown

      Screenshot of VSCode, software from `Microsoft <https://code.visualstudio.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.


   The debugger now shows which line we're paused at (in yellow) and where the containing function was called from (in green). As we're looking at :console:`<module>`, the variables shown are the ones that it sees. That is, the value of the variables before we started :python:`main()`. You can see that :python:`x = 3.54` in the debugger. Inside :python:`main()` :python:`x = 9`. Both variables have the same name, but as they are in `different scopes <https://uom-eee-eeen11202.github.io/notes-part1/chapters/programming_fundamentals/scope.html>`_ they don't conflict with one another. The debugger can be moved between different scopes to help with our debugging. 



Conditional breakpoints
^^^^^^^^^^^^^^^^^^^^^^^
We can also have breakpoints that only trigger in certain conditions. This is very useful for tracking down bugs that only occur in some instances.

#. Replace the code in your file with that given below. 

   .. code-block:: python

      def countdown(x):
          countdown = range(x,-1,-1)
          for i in countdown:
              print(f"{i}")
          print("Blast off")
      

      def main():
          print("Hello from lab-d!")
          x = 9
          y = 5
          if x > y:
              print(f"x is greater than {y}")
          elif x == y:
              print(f"x is {y}")
          elif x < y:
              print(f"x is less than {y}")
          else:
             raise ValueError("Unexpected comparison result")

          countdown(x)


      if __name__ == "__main__":
          a = 56  # used in the next part of the lab
          x = 3.54  # used in the next part of the lab
          main()

   This calls a function :python:`countdown()` once the :python:`if` statement has completed.

#. Put a breakpoint on the line :python:`print(f"{i}")`. Then right click on the red circle, and you'll be given the option to :console:`Edit Breakpoint...`

   .. figure:: ./images/conditional_breakpoint.png
      :width: 800
      :align: center
      :alt: Setting a conditional breakpoint

      Screenshot of VSCode, software from `Microsoft <https://code.visualstudio.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.


#. You can then set an expression that determines whether the breakpoint triggers. You use the same syntax as in an :python:`if` statement. Type in :python:`i == 1` and then press :console:`Enter` on the keyboard. (Make sure you understand why we're triggering on :python:`i` and not on :python:`x`.) Here we're using a simple conditional statement, but you can build up more complicated ones if you would like.

   .. figure:: ./images/conditional_breakpoint2.png
      :width: 800
      :align: center
      :alt: Setting a conditional breakpoint

      Screenshot of VSCode, software from `Microsoft <https://code.visualstudio.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.


#. You should see that the debugger has paused the program when :python:`i = 1`. All of the :python:`for` loop iterations before this have been run. There are now also 3 functions on the call stack.

   .. figure:: ./images/conditional_breakpoint3.png
      :width: 800
      :align: center
      :alt: The debugger paused after a conditional breakpoint

      Screenshot of VSCode, software from `Microsoft <https://code.visualstudio.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.


There's lots that can be done with the debugger, we've just shown a few key features here. Spend some time exploring different options before moving on. We won't refer back to the debugger again so much in the rest of course, but assume you'll make use of it to help fix issues in your code and to help check that your code is working as expected.


Logging
-------
The debugger is a very powerful tool when we want to interactively work with our code - typically when we want to see the values of particular items and see whether they are what we expect. However, sometimes we just want to run the code, have it do everything, and then have a look at the end at what happened. For example, maybe the code takes a long time to run, and so we'll leave it running overnight rather than sitting at our computing and waiting for it to reach a breakpoint.  

We can make a *log file* to store values from our program run for later inspection. 

.. admonition:: Note

   You could just use :python:`print` commands to display the values of variables at different points, e.g. :python:`print(f"{i}")`, and even save this display to a file. There's nothing wrong with this per-se, except that:

   #. Python has built in logging functions to make this process smoother and with more power options without having to do everything yourself. 
   #. If you have lots of :python:`print` commands for debugging, when you've finished debugging you need to remember to remove or comment out all of the :python:`print` commands. Otherwise your code will be creating a load of unnecessary output, and displaying stuff to the screen actually takes a relatively long time which could slow down the program execution. In contrast, logging functions have the ability to be turned on and off via a setting. The code can stay the same regardless of whether you're debugging it or actually using it, just the setting changes.

As with the debugger, there's lots of depth that we could go into on logging. We're just going to touch on a few items, so that you have familarity if you need it, and so you don't always have to resort to using :python:`print` statements. 

We're going to use the :python:`logging` library, which is part of the `standard library <https://uom-eee-eeen11202.github.io/notes-part1/chapters/software_development_tools/libraries.html#standard-library>`_. This means it is avaiable with all Python installations. Logging is such a common need that there are external libraries, such as `loguru <https://loguru.readthedocs.io/en/stable/>`_ which add more functionalty, but we won't look in to these here.


#. Make a new Python file, with any suitable name, stored in your :console:`src` folder for Lab D. Put the code below into it.

   .. code-block:: python

      import logging

      logger = logging.getLogger(__name__)


      def countdown(x):
          countdown = range(x, -1, -1)
          for i in countdown:
              print(f"{i}")
          print("Blast off")


      def check_x():
          logger.info("Hello from lab-d!")
          x = 9
          y = 5
          if x > y:
              logger.info(f"x is greater than {y}")
          elif x == y:
              logger.info(f"x is {y}")
          elif x < y:
              logger.info(f"x is less than {y}")
          else:
              raise ValueError("Unexpected comparison result")

          countdown(x)


      def main():
          # Set up logging
          log_filename = "log.txt"
          logging.basicConfig(filename=log_filename, level=logging.INFO)
          logger.info("Started")

          # Run wanted functions
          a = 56  # used in the next part of the lab
          x = 3.54  # used in the next part of the lab
          check_x()

          # Tidy up logging
          logger.info("Finished")


      if __name__ == "__main__":
          main()

   This code is fundamentally the same as we've been developing so far in this lab, but the functions are now in :python:`check_x()` rather than :python:`main()`. We've also added logging commands. For the logging:

   - :python:`import logging` and :python:`logger = logging.getLogger(__name__)` at the top of the code set up the logging library for use. 
   - :python:`log_filename = "log.txt"` and :python:`logging.basicConfig(filename=log_filename, level=logging.INFO)` in :python:`main()` configure the logging. Here we've asked it to store the log in a file called :console:`log.txt`. We've also set the logging level to :python:`INFO`. We'll discuss this in a minute. 
   - :python:`logger.info()` sets what we record into the log file. We've added some start and stop messages, and otherwise replaced various :python:`print` commands with :python:`logger.info()` commands.
         
#. Run this code. You will find that it creates a file called :console:`log.txt` in your Lab D folder. If it doesn't show up straight away, press the :console:`Refresh` button in the VSCode file explorer.

   .. figure:: ./images/log_file.png
      :width: 800
      :align: center
      :alt: A log file created by the logging library

      Screenshot of VSCode, software from `Microsoft <https://code.visualstudio.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.


   Rather than being displayed to the screen, our messages are now being logged in a file for us to inspect later on. 

   If you run the code again, you'll find that the second run is appended to the end of the log file. 

#. Delete the file :console:`log.txt` to start afresh. 

   Change the code line :python:`logging.basicConfig(filename=log_filename, level=logging.INFO)` to :python:`logging.basicConfig(filename=log_filename, level=logging.WARNING)`, and run the code again. 

   The log file is now blank. This is because we've now asked for only :python:`WARNING` level messages to be recorded. Our current code only has :python:`INFO` level messages, and so nothing is recorded. We can thus get control over how detailed or otherwise we want our logging to be, without having to make lots of changes to the code. 

   The logging library has different levels of logging. From highest to lowest these are:

   - :python:`CRITICAL`
   - :python:`ERROR`
   - :python:`WARNING`
   - :python:`INFO`
   - :python:`DEBUG`

   When setting the logging level, only messages at that level and above are recorded. 

#. In the code you copied for this part of the lab there is a function :python:`countdown()`. Change this so that rather than using :python:`print` statements the countdown is logged at level :python:`WARNING`, and the blast off is logged at level :python:`CRITICAL`. Run the code with the logging level set to :python:`WARNING`. You should see that only the countdown numbers are recorded in the log file. 

   .. admonition:: Solution
      :class: dropdown

      .. code-block:: python

         def countdown(x):
             countdown = range(x, -1, -1)
             for i in countdown:
                 logger.warning(f"{i}")
             logger.critical("Blast off")

   There are lots of ways in which you can customize the log file, but we won't look into these here. The important point is that, generally, :python:`print` statements should be reserved for when you want to display information to the user. For debugging, logging gives more flexibility and control. 

#. Check your files into Git before moving on. 