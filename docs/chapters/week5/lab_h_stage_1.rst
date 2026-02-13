.. role:: console(code)
   :language: console

.. role:: python(code)
   :language: python

.. _lab_h_stage_1:


Exceptions and error handling
=============================

Initial setup for the Lab
-------------------------
#. In your Lab H folder, make a new Python project:

   .. prompt::
      :language: bash
   
      uv init .

   This will make a :console:`pyproject.toml` file, a :console:`main.py` file, and a number of others.

#. Add some structure to your folder by entering the commands:

   .. prompt::
      :language: bash
   
      mkdir tests docs
      mv main.py src
      uv run src/main.py
      touch tests/__init__.py

   - Here we've moved :console:`main.py` into the :console:`src` folder. You'll see that the :console:`src` folder contains some code that we've written for you. 
   - We've made a :console:`tests` folder for any tests that we might want to write later, and a :console:`docs` folder for any documentation. We won't ask you to put anything into these as part of the lab instructions, but you might want to write some tests for your code to check that it's working!
   - In the files that were downloaded from Git automatically, you'll also see there's a folder called :console:`data`. This contains some files that we'll analyze during the lab.

#. Run 

   .. prompt::
      :language: bash

      uv run src/main.py

   to make sure the virtual environment is built. 

#. When you open a Python file, make sure that the correct Python virtual environment is activated. See the instructions `in Lab D <https://uom-eee-eeen11202.github.io/notes-part2/chapters/week3/lab_d_stage_1.html>`_ if you're unsure. 


Raising exceptions
------------------
#. In your Lab H :console:`src` folder, edit the file :console:`main.py` to contain:

   .. code-block:: python

      class MyError(Exception):
          """An example custom exception"""

          pass


      def main():
          print("Hello from lab-h!")
          x = 101
          raise MyError("Message to display to the user")


      if __name__ == "__main__":
          main()

   Run this code.

#. You should see that the code runs, :console:`Hello from lab-h!` is displayed, and then the programs ends with an error. This error has a custom name and message, the ones we asked for in the code. This is shown in the screenshot below.

   .. figure:: ./images/raising_an_exception.png
      :width: 800
      :align: center
      :alt: VSCode showing a Python exception being raised

      Screenshot of VSCode, software from `Microsoft <https://code.visualstudio.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.


   To look at this code:

   - Remember that Python runs from the top to the bottom of the file. We :python:`raise()` the error on Line 9, so the program stops running at that point. Everything before this runs as usual. 
   - The terminology is that we are *raising* an exception. This means that something has gone wrong, and normal program execution cannot continue. There is a command called :python:`raise` to do this. 
   - Each exception has a *type*. This helps with debugging, we can have different types of exceptions for different problems. Here the code in :python:`class MyError(Exception):` makes a custom exception type called :python:`MyError`. We could give this any name we like, something informative for whoever is using the code to help them figure out what went wrong.
   - When the error is displayed to the user, a *traceback* is also shown. This shows where in the code the exception occurred, to help with debugging.

#. To a first approximation, that's it! You can make as many custom exceptions as you like. You can put the :python:`raise` command wherever you like in your code. It might be common to put it inside an :python:`if` statement, to check if something has gone wrong, and raise an exception if it has. There are a wide range of further behaviors that you can add to your custom exceptions, but we won't cover these here. For many cases, just giving a meaningful name and message is enough to help with debugging.

#. Add an :python:`if` statement to the code so that the exception is only raised if :python:`x` is greater than 100. Display the value of :python:`x` in the message to the user. Try running your code with different values of :python:`x` to check that it works.

   .. admonition:: Solution
      :class: dropdown

      .. code-block:: python

         def main():
         print("Hello from lab-h!")
         x = 101
         if x > 100:
             raise MyError(f"x was {x}. It should be 100 or less.")

#. In addition to using custom names for exceptions, there are a wide range of built in named exceptions that you can use without having to make your own. A list is available `online <https://docs.python.org/3/library/exceptions.html>`_, so we won't go through them all here. Probably the some of most common ones you might like to use early on are:

   - :python:`ValueError` when a value is not in the expected range.
   - :python:`TypeError` when the data types is wrong, such as you were expecting a string (say to represent a name) but got a number instead.
   - :python:`FileNotFoundError` when you try to open a file that can't be found in the location you specified.

   In your code, change :python:`raise MyError(...)` to raise :python:`raise ValueError(...)` instead. See how the output differs between the two types of exception. 


Raising warnings
----------------
#. Not every exception has to represent an error. You can also represent warnings. Add the code below somewhere in your :console:`main.py` file, and run it.

   .. code-block:: python

      raise DeprecationWarning("This code is deprecated and will be removed in future versions.")

   This type of warning is intended for other developers using your code. Sometimes we have methods and functions in, say version 1 of the code, that for whatever reason will be removed in version 2. You can add this warning to let other developers know that they should avoid using this code as it will be removed in future versions.

#. If you want a custom warning, or more control over built in warnings, there is a dedicated module in the standard library called :python:`warnings`. This module provides more control over how warnings are displayed to the user. Replace the code in your file with that given below.

   .. code-block:: python

      import warnings


      class MyError(Exception):
          """An example custom exception"""

          pass


      class MyWarning(UserWarning):
          """An example custom warning"""

          pass


      def main():
          print("Hello from lab-h!")
          x = 99
          if x > 100:
              raise ValueError(f"x was {x}. It should be 100 or less.")

          warnings.warn("This is a custom warning from lab-h.", MyWarning)


      if __name__ == "__main__":
          main()

   Here we've made a custom warning type with :python:`class MyWarning(UserWarning)`. We then called the warning with :python:`warnings.warn(...)`. Run this code, and see how the warning is displayed to the user.

#. Refer back to :ref:`Lab D <lab_d_stage_1>` where we covered the :python:`logging` module. If you add the line:

   .. code-block:: python

      logging.captureWarnings(True)

   (in addition to the other logging setup steps in Lab D) then your warnings will be automatically in the log file. 

   Add logging to your code and check that you can log your custom warning. 

   .. admonition:: Solution
      :class: dropdown

      .. code-block:: python

         import logging
         import warnings

         logging.captureWarnings(True)
         logger = logging.getLogger(__name__)


         class MyError(Exception):
             """An example custom exception"""

             pass


         class MyWarning(UserWarning):
             """An example custom warning"""

             pass


         def main():
             print("Hello from lab-h!")
             x = 99
             if x > 100:
                 raise ValueError(f"x was {x}. It should be 100 or less.")

             warnings.warn("This is a custom warning from lab-h.", MyWarning)


         if __name__ == "__main__":
             # Set up logging
             log_filename = "log.txt"
             logging.basicConfig(filename=log_filename, level=logging.WARNING)

             # Run main function
             main()


Handling exceptions
-------------------
Raising an exception is great, but you then need to decide what you want to do. This is known as *handling* the exception. In the examples above we just let the program terminate and display some debug information to the user. This might be what you want, particularly if the error is unrecoverable. However it might be that you want different behavior. For example, you might try and open a file with a particular name, and if it's not present you try and open a different file with a default name instead. Alternatively, you might have a rule saying that if a number is over 100, you just automatically reset it to 100 as that's the maximum it can be. 

#. You handle exceptions using a :python:`try` and :python:`except` block. Make a new code file and copy the code below into it. Run the code and see what happens with different values of :python:`x`.

   .. code-block:: python

      class Over100(Exception):
          """An example custom exception"""

          pass


      def print_x(x):
          """Print x, but only if it is less than 100"""
          if x > 100:
              raise Over100(f"x was {x}. It should be 100 or less.")
          print(f"x is {x}")

      def main():
          print("Hello from lab-h!")

          try:
              x = 101
              print_x(x)
          except Over100 as e:
              print(f"Caught an exception: {e}")
          else:
              print("No exceptions were raised.")
          finally:
              print(f"x is {x}")


      if __name__ == "__main__":
          main()
   
   To analyse this code:

   - :python:`try` is the code you want to run. It's in a :python:`try` block because, for whatever reason, you think it might cause an error that you need to detect and handle. Here it runs the :python:`print_x(x)` function which will raise an exception if :python:`x` is too large. 
   - :python:`except` gives the code for what you want to happen if there is an exception. Here we catch the :python:`Over100` exception, and puts the automatically generated traceback in to a variable :python:`e`. We can then use :python:`e` to write a nice message to the user, not the full traceback from the exception.
   - :python:`else` gives the code you want to run if there were no exceptions. Here we just print a message to say that everything was OK.
   - :python:`finally` gives code that will always run, whether there was an exception or not. Here we just print the value of :python:`x`.
   
   You don't have to have the :python:`else` and :python:`finally` blocks if you don't want to, but they help give a lot of control over what happens in different situations.

#. Change the code above so that if :python:`x` is greater than 100, it is automatically set to 100 instead of displaying anything to the user.

   .. admonition:: Solution
      :class: dropdown
   
      .. code-block:: python
         
         try:
             x = 101
             print_x(x)
         except Over100 as e:
             x = 100
         else:
             print("No exceptions were raised.")
         finally:
             print(f"x is {x}")

#. In the code above, we are specifically handling our custom :python:`Over100` exception. Try running the code with :python:`x = "hello"`.

   You'll find that the program still crashes, and Python displays a :python:`TypeError` because we tried to compare a string to a number in the :python:`print_x` function.

   .. figure:: ./images/multiple_exceptions.png
      :width: 800
      :align: center
      :alt: VSCode showing a different type of exception not being handled

      Screenshot of VSCode, software from `Microsoft <https://code.visualstudio.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.


   To handle this, you can do one of two things.

   #. You can change the :python:`except` block to be just :python:`except Exception as e:`. This will catch essentially all exceptions.
   #. (The better approach) you can add another :python:`except` block to handle the :python:`TypeError` specifically. 
   
   Change your :python:`try except` block to be:

   .. code-block:: python

      try:
          x = 101
          print_x(x)
      except Over100 as e:
          x = 100
      except TypeError as e:
          print("I was expecting x to be a number!")
      else:
          print("No exceptions were raised.")
      finally:
          print(f"x is {x}")   

   Then run your code with :python:`x = "hello"`, :python:`x = 99`, :python:`x = 101` and to :python:`x = "101"` to check it works as you expect.

   You can have as many :python:`except` blocks as you like. It depends on how comprehensive you want to be in catching and handling different errors your code might have. 
   
   .. admonition:: Note
      :class: dropdown

      :python:`x = "101"` has two errors in it. :python:`x` is too large, and it's a string rather than a number. Our code here will only match one of these. 
      
      If you need your code to be able to recover this from double error, you can put :python:`try` blocks inside other :python:`try` blocks, or in the :python:`except` block call the :python:`print_x` function again after fixing the first issue. There are many ways to handle this, depending on what behavior you want.


Extending the student class example
-----------------------------------
In your Lab H :console:`src` folder we've included two files, :console:`student_example.py` and :console:`my_classes.py`. These are a copy of the example in :ref:`Lab G <lab_g_stage_1>` where we made a class for representing student marks. Here we've split the code into two files for better organization.

#. Run :console:`student_example.py` and check it does what you expect. 

   There is a commented out line 

   .. code-block:: python

       # student1.set_assignment_mark("c", "apple")  # uncomment to test invalid input
    
   that you can uncomment to see what happens if invalid input is given.

#. In :console:`student_example.py` a number of the marks assignments are incorrect.

   - The mark for an exam must be between 0 and 100.
   - The exam is marked in whole numbers (integers) only.
   - The mark for an assignment must be between 0 and 5.
   - Assignments are marked in whole numbers (integers) only.

   Modify :python:`my_classes.py` to raise appropriate exceptions if any of these rules are broken. You can use built in exceptions such as :python:`ValueError` and :python:`TypeError`, or make your own custom exceptions.

   .. admonition:: Solution
      :class: dropdown

      .. code-block:: python

         import numpy as np


         # %% Set up custom exceptions and error checking functions
         # These are called from the object classes below
         class MarkIsText(Exception):
             """Error with exam mark not being a number"""

             pass


         class ExamMarkOutOfRange(Exception):
             """Error with exam mark not being between 0 and 100"""

             pass


         class AssignmentMarkOutOfRange(Exception):
             """Error with assignment mark not being 0, 1, 2, 3, 4, or 5"""

             pass


         def check_exam_mark_validity(mark):
             if isinstance(mark, str):
                 raise MarkIsText("Exam mark must be a number.")
             if mark < 0 or mark > 100:
                 raise ExamMarkOutOfRange("Exam mark must be between 0 and 100.")
             if not isinstance(mark, int):
                 raise ValueError("Exam mark must be an integer.")


         def check_assignment_mark_validity(mark):
             # This is basically the same as check_exam_mark_validity() but with different valid ranges
             # Probably better to put both into a single function with parameters, but this is clearer for now
             if isinstance(mark, str):
                 raise MarkIsText("Exam mark must be a number.")
             valid_marks = range(0, 6)  # end value not included, so is 6 rather than 5
             if mark not in valid_marks:
                 raise ExamMarkOutOfRange("Exam mark must be between 0 and 100.")
             if not isinstance(mark, int):
                 raise ValueError("Exam mark must be an integer.")


         # %% Object classes
         class NoSubmission:
             """
             Class to represent no submission made.
             """

             def __init__(self):
                 self.value = np.nan

             def __str__(self):
                 return "No Submission"

             def __repr__(self):
                 return "No Submission"


         class StudentMarksEEEN11202:
             """
             Docstring for StudentMarksEEEN11202
             """

             def __init__(self, name, id):
                 no_assignments = 20
                 self.name = name
                 self.id = id
                 self.assignment_marks = np.full((no_assignments,), NoSubmission())
                 self.exam_mark = NoSubmission()
                 self.overall_mark = NoSubmission()

             def set_exam_mark(self, mark):
                 check_exam_mark_validity(mark)
                 self.exam_mark = mark
                 self._set_overall_mark()

             def set_assignment_mark(self, assignment_letter, mark):
                 check_assignment_mark_validity(mark)
                 index = ord(assignment_letter.lower()) - ord("a")  # adjust for 0-based indexing
                 self.assignment_marks[index] = mark
                 self._set_overall_mark()

             def _set_overall_mark(self):
                 assignment_weight = 0.5
                 exam_weight = 0.5

                 # Set exam to zero if no submission
                 tmp_exam_mark = self.exam_mark
                 if isinstance(tmp_exam_mark, NoSubmission):
                     tmp_exam_mark = 0

                 # Set assignments to zero if no submission, and sum
                 tmp_assignment_mark = 0
                 for assignment_mark in self.assignment_marks:
                     if isinstance(assignment_mark, NoSubmission):
                         tmp_assignment_mark += 0
                     else:
                         tmp_assignment_mark += assignment_mark

                 # Calculate overall mark
                 self.overall_mark = (
                     assignment_weight * tmp_assignment_mark + exam_weight * tmp_exam_mark
                 )

                 return self.overall_mark

#. Further modify :python:`my_classes.py` to catch and handle any exceptions that are raised when setting marks. These should be corrected with the rules:

   - Any exam marks above 100 or below 0 should be set to 100 or 0 respectively.
   - Any assignment marks above 5 or below 0 should be set to 5 or 0 respectively.
   - Any non-integer marks should be rounded to the nearest integer.
   - Any non-numeric marks should cause the code to terminate and display a message to the user (not the full traceback).

   .. admonition:: Solution
      :class: dropdown

      .. code-block:: python

         import sys

         import numpy as np

         # %% Define constants for valid mark ranges
         EXAM_MARK_MIN = 0
         EXAM_MARK_MAX = 100
         ASSIGNMENT_MARK_MIN = 0
         ASSIGNMENT_MARK_MAX = 5


         # %% Set up custom exceptions and error checking functions
         # These are called from the object classes below
         class MarkIsText(Exception):
             """Error with exam mark not being a number"""

             pass


         class ExamMarkOutOfRange(Exception):
             """Error with exam mark not being between 0 and 100"""

             pass


         class AssignmentMarkOutOfRange(Exception):
             """Error with assignment mark not being 0, 1, 2, 3, 4, or 5"""

             pass


         def check_exam_mark_validity(mark):
             if isinstance(mark, str):
                 raise MarkIsText("Exam mark must be a number.")
             if mark < EXAM_MARK_MIN or mark > EXAM_MARK_MAX:
                 raise ExamMarkOutOfRange(
                     f"Exam mark must be between {EXAM_MARK_MIN} and {EXAM_MARK_MAX}."
                 )
             if not isinstance(mark, int):
                 raise ValueError("Exam mark must be an integer.")


         def check_assignment_mark_validity(mark):
             # This is basically the same as check_exam_mark_validity() but with different valid ranges
             # Probably better to put both into a single function with parameters, but this is clearer for now
             if isinstance(mark, str):
                 raise MarkIsText("Exam mark must be a number.")
             valid_marks = range(
                 ASSIGNMENT_MARK_MIN, ASSIGNMENT_MARK_MAX + 1
             )  # end value not included, so is 6 rather than 5
             if mark not in valid_marks:
                 raise AssignmentMarkOutOfRange(
                     f"Assignment mark must be between {ASSIGNMENT_MARK_MIN} and {ASSIGNMENT_MARK_MAX}."
                 )
             if not isinstance(mark, int):
                 raise ValueError("Exam mark must be an integer.")


         # %% Object classes
         class NoSubmission:
             """
             Class to represent no submission made.
             """

             def __init__(self):
                 self.value = np.nan

             def __str__(self):
                 return "No Submission"

             def __repr__(self):
                 return "No Submission"


         class StudentMarksEEEN11202:
             """
             Docstring for StudentMarksEEEN11202
             """

             def __init__(self, name, id):
                 no_assignments = 20
                 self.name = name
                 self.id = id
                 self.assignment_marks = np.full((no_assignments,), NoSubmission())
                 self.exam_mark = NoSubmission()
                 self.overall_mark = NoSubmission()

             def set_exam_mark(self, mark):
                 try:
                     check_exam_mark_validity(mark)
                 except MarkIsText as e:
                     print(
                         f"Error setting exam mark. Asked for value: {mark}. It should be a number."
                     )
                     sys.exit(1)  # stops the program
                 except ValueError:
                     mark = int(mark)
                     self.set_exam_mark(mark)  # try to set again with new mark
                 except ExamMarkOutOfRange:
                     if mark < EXAM_MARK_MIN:
                         mark = EXAM_MARK_MIN
                     else:
                         mark = EXAM_MARK_MAX
                     self.set_exam_mark(mark)  # try to set again with new mark
                 else:
                     self.exam_mark = mark
                     self._set_overall_mark()

             def set_assignment_mark(self, assignment_letter, mark):
                 try:
                     check_assignment_mark_validity(mark)
                 except MarkIsText as e:
                     print(
                         f"Error setting exam mark. Asked for value: {mark}. It should be a number."
                     )
                     sys.exit(1)  # stops the program
                 except ValueError:
                     mark = int(mark)
                     self.set_assignment_mark(
                         assignment_letter, mark
                     )  # try to set again with new mark
                 except AssignmentMarkOutOfRange:
                     if mark < ASSIGNMENT_MARK_MIN:
                         mark = ASSIGNMENT_MARK_MIN
                     else:
                         mark = ASSIGNMENT_MARK_MAX
                     self.set_assignment_mark(
                         assignment_letter, mark
                     )  # try to set again with new mark
                 else:
                     index = ord(assignment_letter.lower()) - ord(
                         "a"
                     )  # adjust for 0-based indexing
                     self.assignment_marks[index] = mark
                     self._set_overall_mark()

             def _set_overall_mark(self):
                 assignment_weight = 0.5
                 exam_weight = 0.5

                 # Set exam to zero if no submission
                 tmp_exam_mark = self.exam_mark
                 if isinstance(tmp_exam_mark, NoSubmission):
                     tmp_exam_mark = 0

                 # Set assignments to zero if no submission, and sum
                 tmp_assignment_mark = 0
                 for assignment_mark in self.assignment_marks:
                     if isinstance(assignment_mark, NoSubmission):
                         tmp_assignment_mark += 0
                     else:
                         tmp_assignment_mark += assignment_mark

                 # Calculate overall mark
                 self.overall_mark = (
                     assignment_weight * tmp_assignment_mark + exam_weight * tmp_exam_mark
                 )

                 return self.overall_mark

#. Optional task (no solution provided). Add logging statments so that any changes to marks are logged to a file so there is a record. (In practice we'd probably error out if we got any issues processing student marks rather than automatically correcting and logging as here, but there might be cases where an automatic correction, with a log of the correction, is appropriate.)