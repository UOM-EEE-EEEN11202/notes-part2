Theory
======

AI in coding
------------
There are two different aspects to AI as we're going to look at it:

#. Writing our own code which makes uses AI models
#. Using AI tools to help us write code

We'll look at both of these in :ref:`Lab I <lab_i>`.

There is of course lots of theory behind AI itself, and there are lots of courses that cover AI in detail. We will only superficially consider this during the lab. AI isn't a single approach, there are lots of different techniques all coming under the same umbrella term. We're going to look at a *classification* problem. That is, attempting to identify which group, a class, a particular data item belongs to. For example, we might have pictures of cats and dogs, and use AI to classify whether a new picture is a picture of a cat or a dog. This is a two class classification problem. If we had pictures of cats, dogs and fish, that would be a three class classification problem. We're actually going to look at identifying flower species. 

Python is very commonly used for AI applications. There are lots of libraries available which make it easy to work with AI models. We're going to use `pyTorch <https://pytorch.org/>`_, which is one of the most popular AI libraries in Python.