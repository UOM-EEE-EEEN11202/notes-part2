.. role:: console(code)
   :language: console

.. role:: python(code)
   :language: python

Theory
======

Common external libraries
-------------------------
So far, we've mainly made use of Python's `standard library <https://uom-eee-eeen11202.github.io/notes-part1/chapters/software_development_tools/libraries.html#standard-library>`_. This has lots of functions, but it's also very common to use external libraries which have been written by other people and which don't come bundled with Python by default. We've already used a number of these in different parts of the course, but haven't looked at any in depth, other than :python:`pytest`. 

We're going to briefly look at four common external libraries. Remember that most organizations will block arbitrary libraries from being installed on work computers for security reasons. The below are so common that they'll probably be available everywhere, but they might not be. 

We're going to cover these libraries in the order below, split across two labs. It's not quite ideal. For example, you often want to plot data to help explore it, but we need numpy to have some data to plot and so we need to cover numpy first. The plotting libraries work very well with `Dataframes <https://uom-eee-eeen11202.github.io/notes-part1/chapters/programming_fundamentals/dataframes.html>`_, but we need to cover Polars to introduce these and we want to do some plotting sooner than this. In a couple of cases, mainly around plotting, we might give some suggestions to look at the next topic before we've covered the current topic.

NumPy
^^^^^
`NumPy <https://numpy.org/>`_ is a library for numerical computing in Python. It provides lots of functions which are a bit similar to `Matlab <https://uk.mathworks.com/products/matlab.html>`_, which is still widely used in Engineering, but is a commercial product. We're going to use :python:`numpy` for *signal* and *system* *modelling*. We can create arrays that store models of sine waves, and other signals, and then perform operations on them.

SciPy
^^^^^
`SciPy <https://scipy.org/>`_ is a library which builds on numpy, and provides lots of additional functions for scientific computing. It includes functions for signal processing, statistics, and more. 

Plotly and Matplotlib
^^^^^^^^^^^^^^^^^^^^^
We've already used `plotly <https://plotly.com/python/>`_ for plotting. `Matplotlib <https://matplotlib.org/>`_ is another library for creating graphs. We're going to use both :python:`matplotlib` and :python:`plotly`. The exact split is probably one of personal preference. We're going to use :python:`plotly` for interactive plots, where we want to be able to zoom in and hover over points, and so on, and then :python:`matplotlib` for plots we save to a file for putting into a report or into a presentation. 

An important outcome from this course is being able to plot data using Python. When you get to your third year project, different supervisors might say different things, but for high quality plots I would expect most students to be producing them in Python rather than in other packages such as Excel. 

Polars
^^^^^^
`Polars <https://pypi.org/project/polars/>`_ is a library for data manipulation and analysis. It provides `Dataframe <https://uom-eee-eeen11202.github.io/notes-part1/chapters/programming_fundamentals/dataframes.html>`_ objects, which are a bit like a table in spreadsheet. Lots of operations that you might do by hand in, say, an Excel spreadsheet, can be done programmatically in Python by using Dataframes. We'll use it for loading in data and then doing some analysis on this data. 

.. admonition:: Note

   `Pandas <https://pandas.pydata.org/>`_ is another library for data manipulation and creating dataframes. It is extremely common. 
   
   We're going to focus on Polars because:

   - It has a reputation for being faster than Pandas, especially for larger datasets.
   - It has a reputation for being easier to use, with a more consistent interface than Pandas.
   - Polars also supports Rust, and so we can use the same dataframes and interface with the Rust code we'll develop later in the course.

   If you're joining an existing project which already uses Pandas, or you're using code from elsewhere which uses Pandas, essentially all of the concepts are the same as we'll cover here with Polars, just with a different syntax.


Managing dependencies
---------------------
There is nothing new this week about managing dependencies - we've already covered essentially everything when making a Python project :ref:`Lab C <lab_c>`. However, as we use more external libraries, managing dependencies becomes more important. 

As a reminder:

- We're going to be using the :console:`uv` package manager. You might see examples online that use :console:`pip` or :console:`conda` to achieve the same thing, as (essentially) older approaches.
- :console:`uv` is going to keep a record of our dependencies in a file called :file:`pyproject.toml`. You might see examples online that use a file called :file:`requirements.txt` instead, which is essentially an older way of doing the same thing. You might also see examples online which have no configuration file at all. This isn't good practice unless your Python code is very simple. Remember, we need two things for our Python code to run: the Python code, and a virtual environment with all the required dependencies installed with the correct versions.


Plotting
--------
Making a basic graph of data can be very easy. Making a good looking graph that highlights the key points you want to show, and is clear and easy to read, can be much more difficult. People have done lots of research into what makes a good visualization of data. Edward R. Tufte, "The Visual Display of Quantitative Information", 1983, is a classic book on this topic if you want to read more. We'll mainly focus on the practicalities of making plots in Python, but keep in mind that there is a lot more to making good plots than just knowing how to use the software.

Plot basics
^^^^^^^^^^^
The terminology of a making a graph is:

- The basic unit of a graphics element is a *figure*. 
- A figure can contain one or more *plots*. 
- If there is more than one plot in figure, each is known as a *subplot*. 
- Each plot contains one or more *axes*. 
- Onto an axes we can display whatever graph we want.

These are illustrated on the figure below. In practice, you might find that the terms *figure* and *plot* are used interchangeably, and similarly *axes* and *subplot* used interchangeably. In each case, the name of a figure, or plot, or axes can be store in an object, so we can modify it later.

.. figure:: ./images/example_figure.png
   :width: 800
   :align: center
   :alt: A matplotlib figure showing the terminology of figure, plot, subplot and axes.

   Screenshot of a figure made using `matlplotlib <https://matplotlib.org/>`_.


Plot style guide
^^^^^^^^^^^^^^^^
We've discussed our `code style guide <https://uom-eee-eeen11202.github.io/chapters/useful_information/style_guide.html>`_ previously. There are also some common conventions for styling plots. In general, as electronic engineers we tend to follow the `IEEE style <https://journals.ieeeauthorcenter.ieee.org/your-role-in-article-production/ieee-editorial-style-manual/>`_. 

Briefly we will use:

- Label all axes clearly, including units where appropriate.
- Units should be in square brackets, e.g. :console:`Voltage [V]`.
- Do not include a title in the figure - this is usually redundant with the caption in the report or paper.
- Ensure that different lines are differentiated by more than just color. For example, changing the color and the line style (solid, dashed, dotted etc.). This helps people with color blindness, and also helps if the figure is printed in black and white.
- Include a legend if (and only if) there are multiple data series in the figure.
- Use grid lines, but make them light and unobtrusive.
- Use a sans-serif font such as Arial or Helvetica.

We strongly recommend being in the habit of always making sure axes are labelled on a graph. In (say) third year project meetings, a lot of time can be wasted trying to decipher what a graph is showing if axes are not labelled. It is a sure route to losing marks. 


Plots for reports and presentations
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
As a last note, important to remember is that, by default, plots tend to be optimized for display on a screen and reading by the computer user. That is, for you to work with the plot to explore the data, such as zooming in and out on particular areas of interest, while sitting in front of a screen maybe 50 cm away. If you put a default style plot into a report, or presentation where you're viewing it from several meters aways
, the default plot settings will almost certainly be low resolution, and have axis labels that are too small to read. 

We won't go into the details of why we make some of recommendations below, but in general for good quality plots for reports and presentations:

- Increase the default font size. On a screen, a good report font size will probably look a bit too big. 
- When possible, save the figure in a vector format such as in a :console:`.svg` or :console:`.pdf` file. These can be scaled to any size without losing quality. 
- Otherwise, save the figure in a :file:`.png` file. Do not use :console:`.jpg` files for line art such as graphs. 
- When saving a figure to a :file:`.png` file, set the resolution to be 600 dpi (dots per inch).
