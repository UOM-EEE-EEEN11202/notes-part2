.. role:: console(code)
   :language: console

.. role:: python(code)
   :language: python


Formative quiz 2
================

.. quizdown::

   ## Why do we use a virtual environment with our Python code?

   1. [ ] To help the code run faster. 
       > That's not correct. Virtual environments are not about performance.
   1. [x] To manage dependencies and control which version of Python and external libraries are used.
       > That's correct!
   1. [ ] To use a virtual computer in the cloud rather than a physical computer. 
       > That's not correct. You can run a virtual environment on a cloud computer, but *virtual* doesn't mean it can only be on the cloud.
   1. [ ] To obscure the code so that it can't be read be copied by others.
       > That's not correct. In general virtual environments help make the code easier for others to use, as they know exactly which versions of Python and external libraries are needed to make it work. 
   1. [ ] To provide an Integrated Development Environment (IDE) for writing and running Python code.
       > That's not correct. An IDE brings together all of the different tools we use for writing, testing, and running our code. A virtual environment is one of the tools we access, from within VSCode (the IDE) in our case. 


   ## Which command activates a virtual environment called `venv`?
   
   1. [x] `source .venv/bin/activate` 
       > That's correct! This assumes the terminal is in the same folder as the virtual environment. It also assumes you're using Linux or macOS as the development environment (which we do in the devcontainer). If using Windows, the command is a bit different. e 
   1. [ ] `start .venv` 
       > That's not correct.


   ## Python code will work without a virtual environment.

   1. [x] True
       > That's correct! Python code will work as long as you have a Python interpreter installed on the computer. You'll find lots of examples and tutorials that don't go very deep into virtual environments, or assume you've already activated one. While you don't have to have a virtual environment, for all but very trivial projects you will almost certainly have lots of external libraries that you need to install, and a virtual environment is the best way to manage these.
   1. [ ] False
       > That's not correct. Python code will work without a virtual environment, but it's not good practice in general. 


   ## Why can we use `import math` in our Python code directly, whereas to use `import pandas` we first need to add a module to the virtual environment?

   1. [ ] This is incorrect. Both `import math` and `import pandas` can be used without any further actions.
       > That's not correct. The statement in the question is right Try again. 
   1. [ ] This is incorrect. Both `import math` and `import pandas` need to be added to a virtual environment before they can be used.
       > That's not correct. The statement in the question is right Try again. 
   1. [ ] `import math` doesn't actually do anything, the same functions are present even without this line of code.
       > That's not correct. `import math` adds the ability for Python to use a wide number of common mathematical functions, such as `math.sin()`, which couldn't be used in the code without this statement.
   1. [ ] `pandas` is only available on some computer platforms.
         > That's not correct. `pandas` is available on all platforms that support Python, but it is not part of the standard library.
   1. [X] `math` is part of the standard library installed with Python, and `pandas` is not.
       > That's correct! 


   ## What does the `print()` function do?

   1. [x] It displays a string that's within the brackets to the standard output, usually the terminal.
       > That's correct!
   1. [ ] It displays text that's within the brackets to the standard error, usually the terminal.
       > That's not correct. The standard error and standard output are conceptually different. One is for displaying output from code, the other is for displaying error messages. We may set them to be the same, but they are different. `print()` displays text to the standard output by default. It requires additional arguments to display text to the standard error.
   1. [ ] It displays anything that's within the brackets to the standard output, usually the terminal.
       > That's not correct. In general `print()` displays text. TO display something else it first needs to be converted to text, for example with `str()` or an f-string.
   1. [ ] It displays anything that's within the brackets to the standard error, usually the terminal.
       > That's not correct. The standard error and standard output are conceptually different. One is for displaying output from code, the other is for displaying error messages. We may set them to be the same, but they are different. `print()` displays text to the standard output by default. It requires additional arguments to display text to the standard error.
   1. [ ] If a printer is connected to the computer, it prints out the Python file.
       > That's not correct. `print()` doesn't have any relationship with using a physical printer. 


   ## Why will the code below not run?

   `mult = 11` <br />
   `lim_low = 0` <br />
   `lim_high = 5` <br />
   `for i in range(lim_low,lim_high):` <br />
   `    print(i*mult)`

   1. [ ] It is not valid Python to do the sum `i*mult` within the `print()` statement.
       > That's not correct. You can nest commands like this, as long as you think the code is sufficiently readable.
   1. [x] The print statement is not indented. In Python, indentation is used to define blocks of code, such as the body of a loop or function.
       > That's correct!
   1. [ ] There should not be a colon `:` at the end of the `for` statement.
       > That's not correct. This is required Python syntax. 
   1. [ ] `range()` is not a built-in Python function and so an `import` statement is needed.
       > That's not correct. `range()` is a core Python function and can be used without an `import` statement.
   1. [ ] `i` represents a complex number, it can't be used to represent something else.
       > That's not correct. `1i` represents a complex number, to differentiate it from `i` which can be the name of a variable if you want. Indeed `i` is commonly used to count how many times a loop has run. 


   ## Is the data below stored in a tuple or in a list?

   `v = (1, 2, 3, 4, 5)`
       
   1. [ ] List
       > That's not correct. Refresh yourself on storing multiple values.
   1. [x] Tuple
       > That's correct!


   ## What type of data structure is being used in the code below?

   `l1 = {"component_number": 4, "type": "inductor", "value": 1e-3, "units": "H"}`

   1. [ ] List
       > That's not correct. Refresh yourself on storing multiple values.
   1. [ ] Tuple
       > That's not correct. Refresh yourself on storing multiple values.
   1. [x] Dictionary
       > That's correct!
   1. [ ] DataFrame
       > That's not correct. Refresh yourself on storing multiple values.
   1. [ ] Object
       > That's not correct (for the purposes of this quiz). This code defines a dictionary, which is the answer we want. A dictionary is a type of object, and has methods that can be applied to the data stored in the dictionary. Object is a less specific answer than dictionary for this example though. 


   ## How do you enter a complex number in Python? Select all that apply.

   - [x] `1i`
   - [x] `1j`
   - [x] `complex(0,1)`
   - [x] `cmath.exp(1i)`
   - [x] `cmath.exp(1j)`


   ## What will be the output of the code below? Select all that apply.

   `x = 1` <br />
   `if x < 0:` <br />
   `   x = 2` <br />
   `print("x is less than 0")`

   - [x] It will display "x is less than 0"
      > That's correct! It's probably not what the writer wanted the code to do, because `x` is 1 here! The print statement should probably be indented to make it part of the if statement. At the moment the if statement only contains the `x = 2` command.
   - [ ] It won't display anything
      > That's not correct It's probably what the writer wanted the code to do, because `x` is 1 here! The print statement should probably be indented to make it part of the if statement. At the moment the if statement only contains the `x = 2` command.
   - [ ] It will set `x` to 2.
      > That's not correct. `x = 2` is within the if statment, which won't run in this case because `x = 1`. 
   - [x] The value of `x` will stay at 1
      > That's correct!
   - [ ] It will set `x` to a number less than 0.
      > That's not correct. `if x < 0` compares `x` to 0, but doesn't change the value of `x`

