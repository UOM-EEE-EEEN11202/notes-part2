Formative quiz 3
================

.. quizdown::

   ## What is the name of the file usually used to configure a Python project?

   1. [x] pyproject.toml
       > That's correct!
   1. [ ] requirements.txt
       > That's not correct. Some, mainly older, Python projects will use a requirements.txt file to list the packages they depend on, but this is not the main configuration file for a Python project.
   1. [ ] config.json
       > That's not correct.
   1. [ ] cargo.toml
       > That's not correct. This is the name of the configuration file used in Rust projects.
   1. [ ] Makefile
       > That's not correct. Make files are usually used with C/C++ projects.


   ## Which folder is typically used to store the source code of a Python project?
   
   1. [ ] `project_name/docs`
       > That's correct! This is usually where we would put the documentation. 
   1. [ ] `project_name/tests`
       > That's not correct. This is usually where we would put the tests. 
   1. [x] `project_name/src`
       > That's correct!
   1. [ ] `project_name/code`
       > That's correct! This is fine if you want to use it as a name, but `src` is more commonly used.
   1. [ ] `project_name/bin`
       > That's not correct. `bin` implies this folder compiled binary files rather than our source code. We don't have these when working with Python, but will with Rust and C/C++ later in the course. 



   ## Re-arrange the below to make the command to make a new virtual envuironment using `uv`

   1. init
   2. .
   3. uv
    > uv does first, then the subcommand init. The . represents the name of the project, here read automatically from the name of the folder. 


   ## You have a pyproject.toml file as below. It contains a blank entry `...`. What would be suitable entries for this line? Select all that apply.

   `[project]`<br />
   `name = "lab-c"`<br />
   `version = "0.1.0"`<br />
   `description = "Add your description here"`<br />
   `readme = "README.md"`<br />
   `...`<br />
   `dependencies = []`<br />

   - [ ] `pytest = "^7.2.0"`
    > That's not correct. This would be a dependency, and so should go in the dependencies list.
   - [x] `requires-python = ">=3.14"`
    > That's correct!
   - [ ] `pytest = "on"`
    > That's not correct. You can specify pytest as a dependency, and configure it in pyproject.toml, but but not here, with this syntax.
   - [x] `requires-python = ">=3.10.5"`
    > That's correct!
   - [ ] `if __name__ == "__main__":`
    > That's not correct. This is Python code, and so would not go in pyproject.toml.


   ## Re-arrange the below to place the logging levels into order from lowest to highest.

   1. DEBUG
   2. INFO
   3. WARNING
   4. ERROR
   5. CRITICAL
    > See the [logging notes](https://uom-eee-eeen11202.github.io/notes-part2/chapters/week3/lab_d_stage_1.html#logging)


   ## What is a benefit of using the `logging` library over using `print` statements for debugging? Select all that apply. 

   - [x] Logging statements can be left in production code, whereas print statements should be removed.
   - [x] Logging statements can be recorded to different levels of detail without changing the core code. 
   - [x] Logging statements are stored in a file by default allowing later inspection by others.
   - [x] Logging statements can automatically add additional information, such as timestamps.
   - [x] Logging statements are intended for debugging, whereas print statements are intended for user output, and so it's using the correct tool for the job.
    > All of these are correct! Possibly with some debate about the "correct tool for the job", but it's generally true.


   ## What prefix does Pytest expect test functions to have by default? (Although note that you can change this if needed.)

   1. [ ] myTest_
    > That's not correct. Try again. 
   1. [x] test_
    > That's correct!
   1. [ ] check_
    > That's not correct. Try again. 
   1. [ ] verify_
    > That's not correct. Try again. 
   1. [ ] unit_
    > That's not correct. Try again. 


   ## Which `assert` statement would be used with Pytest to check that the variable `result` is equal to 42?

   1. [ ] `assert(result, 42)`
    > That's not correct. This is not valid syntax for an assert statement.
   1. [ ] `assert result = 42`
    > That's not correct. A single equals sign is used for assignment, not for checking equality. An assert statement needs to evaluate to True or False.
   1. [ ] `assert != 42`
    > That's not correct. We check what we want the result to be, not that it isn't what we want it to be. 
   1. [ ] `assertEqual(result, 42)`
    > That's not correct. This is used in other testing frameworks, but not Pytest.
   1. [x] `assert result == 42`
    > That's correct!


   ## Re-arrange the below to make an `assert` statement that checks whether the length of a list `x` is greater than 10

   1. assert
   2. len
   3. (
   4. x
   5. )
   6. `>`
   7. 10
    > The correct order is: `assert len(x) > 10`


   ## What is meant by test coverage?

   1. [x] The percentage of lines of code tested by unit tests. 
    > That's correct! 
   1. [ ] The number of input cases used to test code.
    > That's not correct. Try again. 
   1. [ ] The number of bugs found by unit tests.
    > That's not correct. Try again.
   1. [ ] The percentage of functions tested by unit tests.
    > That's not correct. Try again.
   1. [ ] The percentage of tests that pass.
    > That's not correct. Try again.

