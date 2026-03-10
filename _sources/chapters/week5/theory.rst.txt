Theory
======

Classes
-------
So far in the course we've *used* lots of `objects <https://uom-eee-eeen11202.github.io/notes-part1/chapters/programming_fundamentals/objects.html>`_. For example, if we have a list

.. code-block:: python

   x = [1, 2, 3]

:python:`x` is an instance of an object. It has data stored in it, and *methods* to work with the data in the object. For example

.. code-block:: python

   x.append(4)

adds a number to the list. 

We now want to look at how to create our own objects. That is, objects that are tailored to work with the particular data we have for whatever problem we're working on; and to have methods that are relevant to that data. Rather than relying only on the built-in Python data types, we can start to build our own to better fit whatever problem we're making code for. 

Objects are created from *classes*. A *class* defines the data that an object will hold, and the methods that the object will have. We can then create multiple *instances* of the class, :python:`x` in the example above, each with their own data. That is, to use a class :python:`ExampleClass` we can have

.. code-block:: python

   a = ExampleClass()
   b = ExampleClass()
   c = ExampleClass()

:python:`a`, :python:`b` and :python:`c` are are all different objects, made from the same class template. They might each have their own data, but the same methods to work with that data.

Using our own objects is thus just writing Python code as we have before. Making our own objects means learning how to make a class. There are two primary ways of doing this:

#. We can write a class from scratch. This is what we'll look at in :ref:`Lab G <lab_g>`.
#. We can write a class that takes an existing class, and builds on top of it to add more functionality. This is known as *inheritance*.

We're only going to look at writing classes from scratch here. This is mainly due to the length of the course. We're going to introduce classes so that you're familiar with them and can work with them when you see them in code (as you will for example in :ref:`Lab I <lab_g>`). Learning more about `object orientated programming <https://en.wikipedia.org/wiki/Object-oriented_programming>`_ is probably an important topic to look at in more depth, if/as/when you do more programming in the future.



Exceptions
----------
Different programming languages have different ways of handling errors. Python uses a mechanism called `exceptions <https://uom-eee-eeen11202.github.io/notes-part1/chapters/programming_fundamentals/asserts_and_exceptions.html>`_. We'll see how to work with these in :ref:`Lab H <lab_h>`.

The theory to introduce here is the concept of a *recoverable error* vs. a *non-recoverable error*.

- A *non-recoverable error* is an error which means that the program cannot continue. For example, if we try to open a file which does not exist, and we need that file, then this is a non-recoverable error. The program must stop.

- A *recoverable error* is an error which means that something has gone wrong, but the program can continue. For example, in :ref:`Lab F <lab_f_stage_2>`, we had an example where there was some missing data in a file we loaded in. There we could fill in the missing data with a default value and continue processing it. 

Sometimes, an error that is non-recoverable in one part of the program might be recoverable in another part of the program. For example, if we try and open a file that doesn't exist, that file open function will fail. Whatever's calling that function might be able to handle the failure. For example, it could prompt the use to enter a different filename. 

In error handling we can *try* and perform an action. If it works without issue, great. If something goes wrong, we can *raise* an *exception*. The user, or another bit of code, can then decide what to do, e.g. to just stop and display an error message to the user, or to run some more code to try and recover from the error in some way.