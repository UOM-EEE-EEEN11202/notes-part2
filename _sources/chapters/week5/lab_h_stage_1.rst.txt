.. role:: console(code)
   :language: console

.. role:: python(code)
   :language: python

.. _lab_h_stage_1:

Initial setup for the Lab
=========================
#. In your Lab G folder, make a new Python project:

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

#. Install the required dependencies for this lab by entering the command:

   .. prompt::

      uv add numpy

#. Run 

   .. prompt::

      uv run src/main.py

   to make sure the virtual environment is built. 

#. When you open a Python file, make sure that the correct Python virtual environment is activated. See the instructions `in Lab D <https://uom-eee-eeen11202.github.io/notes-part2/chapters/week3/lab_d_stage_1.html>`_ if you're unsure. 


Raising exceptions
===================
#. In your Lab H :console:`src` folder, edit the file :console:`main.py`. To the :python:`def main()` function add the following code:

  .. code-block:: python

   You 


Handling exceptions
===================



Extending the student class example
===================================