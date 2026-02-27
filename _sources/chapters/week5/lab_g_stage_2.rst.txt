.. role:: console(code)
   :language: console

.. role:: python(code)
   :language: python

.. _lab_g_stage_2:

Multi-file scripts
==================
This is a smaller topic, to be helpful as we start to write longer code.

So far, we've essentially written all of our Python code to be in a single file. (Apart from the unit tests which were in their own files.) It's fine in principle to have all of our code in one file, but as the code gets longer and longer it can get hard to manage. Remember that practical coding problems can easily have thousands, or even millions, of lines of code. 

There are no hard rules for when to split code into multiple files. Similarly, for what to put in which files. You could group all of your functions into one file and classes in another, or you could group related functionality together into files. Here we'll just look at an example to build some familiarty, so that you can start splitting up your code as/when you want to. 

Our two code files
------------------
We'll continue to use the :python:`StudentMarksEEEN11202` example from :ref:`the first part of the lab <lab_g_stage_1>`. We'll split the code into two files. 

#. In your Lab G :console:`src` folder make one code file and call it :file:`my_lib.py`. Enter the code below into it.

   .. code-block:: python

      import numpy as np


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
              self.exam_mark = mark
              self._set_overall_mark()

          def set_assignment_mark(self, assignment_letter, mark):
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


      def display_student_info(student):
          print(
              f"Student Name: {student.name}\n"
              f"ID: {student.id}\n"
              f"Assignment marks: {student.assignment_marks}\n"
              f"Exam mark: {student.exam_mark}\n"
              f"Overall mark: {student.overall_mark}\n"
          )


#. Make another code file and call it :console:`process_student_marks.py`. Enter the code below into it. 

   .. code-block:: python

      def main():
          # Create instance of StudentMarksEEEN11202
          student1 = StudentMarksEEEN11202("Alex", "12345")
          student2 = StudentMarksEEEN11202("Casson", "67890")

          # Set  marks for student1
          student1.set_assignment_mark("A", 2)
          student1.set_assignment_mark("b", 5)
          student1.set_exam_mark(65)

          # Print contents
          for student in (student1, student2):
              display_student_info(student)


      if __name__ == "__main__":
          main()

   This code is exactly the same as what we had in :ref:`the first part of the lab <lab_g_stage_1>`, except that we've added a function called :python:`display_student_info()` to make the display to the screen slightly more tidy. 


#. In VSCode, in :console:`process_student_marks.py` you'll see that various parts are underlined in red by the `static code analysis <https://uom-eee-eeen11202.github.io/notes-part1/chapters/software_development_tools/static_code_analysis.html>`_. Although the two code files are in the same folder they can't automatically see each other. We have to explicitly :python:`import` what we want. We'll look at a few different ways of doing this. 

   .. figure:: ./images/static_code_analysis.png
      :width: 800
      :align: center
      :alt: Static code analysis in VSCode

      Screenshot of VSCode, software from `Microsoft <https://code.visualstudio.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.


#. At the top of :console:`process_student_marks.py`, add the line below to import the whole of :console:`my_lib.py`. 

   .. code-block:: python

      from my_lib import *

   If you now run :console:`process_student_marks.py` it should work as before. This command imports everything from :console:`my_lib.py` into the current file.

   The problem with this approach is that if :console:`my_lib.py` and :console:`process_student_marks.py` both have functions or classes with the same names, there will be a conflict. Python won't know which one to use.


#. Change the import statement to be

   .. code-block:: python

      from my_lib import StudentMarksEEEN11202, display_student_info

   We're now being more explicit about what we want to import. The code should work as before, and the static code analysis will complain less. 
   
   Note that we haven't imported :python:`NoSubmission`. None of the code in :console:`process_student_marks.py` uses :python:`NoSubmission`. Code in :console:`my_lib.py` does use :python:`NoSubmission`, and that's fine because they're in the same file. 

   In the same way, :console:`process_student_marks.py` doesn't need to import numpy. It doesn't use numpy directly, only the functions in :console:`my_lib.py` do. As long as :console:`my_lib.py` imports numpy, it will be fine. 


#. Change the import statement to be 

   .. code-block:: python

      from my_lib import StudentMarksEEEN11202

   :console:`process_student_marks.py` now won't work. It needs :python:`display_student_info()`, and we haven't given access to it. 

#. As a last approach, change the import statement to be

   .. code-block:: python

      import my_lib as my

   This has imported everything from :console:`my_lib.py`, and put it into a `namespace <https://uom-eee-eeen11202.github.io/notes-part1/chapters/programming_fundamentals/scope.html#namespaces>`_ called :python:`my`. To access things from :console:`my_lib.py` we now have to use the namespace. 
   
   So, :python:`StudentMarksEEEN11202` becomes :python:`my.StudentMarksEEEN11202`, and :python:`display_student_info()` becomes :python:`my.display_student_info()`. This is very useful when we're importing lots of functions and classes from different sources which might have similar names. 

   Make these changes and check the code still runs as before.

   .. admonition:: Aside
      :class: dropdown

      :python:`import ... as ...` and :python:`from ... import ... as ...` actually do slightly different things if the file you're importing has code at the global level in it, not just function and class definitions. We won't worry about this here though.


#. Make a folder in your :console:`src` folder called :console:`lib` and move :console:`my_lib.py` into it. At the command line (assuming you're in the :console:`lab-g` folder rather than :console:`lab-g/src`) you can do this with

   .. code-block:: console

      mkdir -p src/lib
      mv ./src/my_lib.py ./src/lib/

   When done correctly, VSCode should look like the below.

   .. figure:: ./images/lib_in_folder.png
      :width: 800
      :align: center
      :alt: Setup of VSCode with my_lib.py in a folder

      Screenshot of VSCode, software from `Microsoft <https://code.visualstudio.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.


#. The import statements now need a fuller address to where to find :console:`my_lib.py`. Python uses dots :python:`.` to separate folder names. Try both of the below import statements in :console:`process_student_marks.py` to check that they work. 

   .. code-block:: python

      from lib.my_lib import StudentMarksEEEN11202, display_student_info

   or 

   .. code-block:: python

      import lib.my_lib as my

#. Using these approaches, you can organise your code into as many files and folders as you would like. 

   The main approach we're going for is to have one file, :console:`process_student_marks.py` which is the main script that runs the code for the specific case that we want to solve. It is very factual, with clear names. 

   .. code-block:: python
   
      student1.set_assignment_mark("b", 5)
      student1.set_exam_mark(65)
      display_student_info(student1)

   so that we can look at it, and see it's what we want. Functions, classes and similar are then in a library which contains more complicated code, but also code which we have written `unit tests <https://uom-eee-eeen11202.github.io/notes-part1/chapters/software_development_tools/automated_testing.html#unit-tests>`_ for to check they work was wanted. 