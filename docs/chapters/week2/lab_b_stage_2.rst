.. role:: console(code)
   :language: console

.. role:: python(code)
   :language: python

.. _lab_b_stage_2:

Starting commands
=================
In the first part of Lab B we did quite a lot of setup, and not a lot of coding. This was to start forming good habits early on, in terms of using version control, virtual environments, and so on.

In this part we'll look at some basic Python code to get us started with Python.

#. Make a new Jupyter Notebook, following the same steps as :ref:`in the previous part of the lab <lab_b1>`. Go to the command palette, that is, the search box at the top of the VSCode window. Click :console:`Show and Run Commands`.

   .. figure:: ./images/vscode_show_and_run_commands.png
      :width: 800
      :align: center
      :alt: The VSCode command palette

      Screenshot of VSCode, software from `Microsoft <https://code.visualstudio.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.


   Search for :console:`Create: New Jupyter Notebook` and click on this option. Or, scroll down and select it from the list of available commands.

   .. figure:: ./images/vscode_create_new_notebook.png
      :width: 800
      :align: center
      :alt: Create new notebook command

      Screenshot of VSCode, software from `Microsoft <https://code.visualstudio.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.


   This opens a blank file, like that shown below. 

   .. figure:: ./images/blank_notebook.png
      :width: 800
      :align: center
      :alt: An empty Jupyter Notebook

      Screenshot of VSCode, software from `Microsoft <https://code.visualstudio.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.


   Save this to give it a name by clicking on :console:`File / Save As...`. Pick any name that you would like. Make sure you save it in your :console:`lab_b` folder. 


#. Copy and paste the code below into a cell and run the cell. To do this, you may need to tell VSCode which Python virtual environment you want to use, in which case you should select :console:`.venv`, the one we made :ref:`in the previous part of the lab <lab_b1>`.

   .. code-block:: python

      # Example for loop
      mult = 11
      lim_low = 0
      lim_high = 5
      for i in range(lim_low, lim_high):
          print(i * mult)

   .. figure:: ./images/python_for_loop.png
      :width: 800
      :align: center
      :alt: Example of a Python for loop

      Screenshot of VSCode, software from `Microsoft <https://code.visualstudio.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.


   Notice how :python:`print(i * mult)` is indented. This is how Python determines which parts of the code *belong* to the :python:`for` loop.

   Does the code do as you would expect? Ask a demonstrator to help explain the operation if it would be useful.

   .. admonition:: Solution
      :class: dropdown

      This code will display the numbers 0, 11, 22, 33, and 44. 
      
      :python:`lim_low` is 0, and :python:`lim_high` is 5. :console:`range(lim_low, lim_high)` makes a list of numbers between these, i.e. 0, 1, 2, 3, and 4. 5 is the stopping point, this isn't included. :python:`for` is a loop which goes through each of these numbers in turn, putting them in the variable :python:`i`. The code then carries out the multiplication :python:`i * mult`.

      Even in this simple example, there are no *hard coded* values. It's tempting to write :python:`range(0, 5)` or similar. However, this can give very fragile code. If we want to use the 5 somewhere else in the code as well as here, it's better to put the number in a variable and use the variable everywhere. That way, if the number changes at some point in the future the new value will automatically be used everywhere that the variable is used.


#. Add a new *Markdown cell* by clicking on the :console:`+ Markdown` button.

   Enter the text below in the the cell that's made. When you've finished editing, click on the :console:`✓` button (the :console:`Stop Editing Cell` button).

   .. figure:: ./images/markdown1.png
      :width: 800
      :align: center
      :alt: VSCode button to make a Markdown cell

      Screenshot of VSCode, software from `Microsoft <https://code.visualstudio.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.


   .. code-block:: python

      # Introduction
      This is an example of a *Markdown comment*. It allows simple formatting to be added to comments such as **making things bold**. 

      ## More information
      Not every code editor will display this with the formatting, but it can help make your comments more readable.

   This is a `comment <https://uom-eee-eeen11202.github.io/notes-part1/chapters/software_development_tools/comments.html>`_, but as it's flagged as being in a markdown cell VSCode has displayed it with formatting. Markdown is a simple way of taking plain text, and indicating which parts should be displayed with some formatting. You can find a full list of Markdown formatting options at `Markdown Cheatsheet <https://www.markdownguide.org/cheat-sheet/>`_.

   .. figure:: ./images/markdown2.png
      :width: 800
      :align: center
      :alt: A formatted comment using Markdown

      Screenshot of VSCode, software from `Microsoft <https://code.visualstudio.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.


   Not every code editor will display the text with the formatting, some will just display the text. Nevertheless, it's a nice feature for adding emphasis or structure to your comments.


#. In Electronic Engineering it's very common that we work with sine waves. Mathematically, this is :math:`V_{out}(t) = A \sin (2\pi f t)` where :math:`A` is the amplitude, :math:`f` is the frequency of the wave in Hz, and :math:`t` is the time in seconds. This is known as a *time series*, as to see a sine wave we need to know the value of :math:`V_{out}(t)` at multiple different points in time, not just at one time.

   Make a new cell and copy and paste the below into it. 

   .. code-block:: python

      # Make a sine wave
      sample_start = 0
      sample_stop = 100
      t = range(sample_start, sample_stop)  # interpret as representing 1 s, 2 s, 3 s, ...

   :python:`t` will produce numbers 0, 1, 2, 3, up to :python:`sample_stop-1`, and we as humans can think of these as representing time points, 0 second, 1 second, and so on. 

   .. danger::

      There is a better way of doing this! The :python:`range` function can only make integer time points (1 s, 2 s, 3 s, and so on). In :ref:`Lab E <lab_e>` we'll use :python:`numpy` arrays to do the same thing, with a number of other benefits. Using :python:`numpy`  is probably nearly always what you should actually do. We've included this example here to give an Electronic Engineering example early on, even if you learn better ways of achieving the same functionality later. 

   To implement the equation :math:`V_{out}(t) = A \sin (2\pi f t)` we need a :math:`\sin` function, and the number :math:`\pi`. These are available in the Python :python:`math` module. This is the part of the Python `standard library <https://uom-eee-eeen11202.github.io/notes-part1/chapters/software_development_tools/libraries.html#standard-library>`_. This is a built-in part of Python, but you need to explicitly add it to your code with the :python:`import` function.

   Add the code below to your function. 

   .. code-block:: python
      
      # Calculate the sine wave
      import math

      A = 1  # Volts
      f = 0.1  # Hz
      v_out = [A * math.sin(2 * math.pi * f * time) for time in t]
    
   :python:`math.pi` contains 3.1415..., the value of :math:`\pi`. Here there is a small :python:`for` loop which goes through each value in :python:`t`, puts it in a `list <https://uom-eee-eeen11202.github.io/notes-part1/chapters/programming_fundamentals/variables.html#lists>`_ called :python:`time`, and calculates the value of :python:`v_out` for each value of :python:`time`.

   Run the code. In the variable explorer you should be able to see a range of values for :python:`time` and :python:`v_out`.

   .. figure:: ./images/variable_explorer.png
      :width: 800
      :align: center
      :alt: Variables in the variable explorer

      Screenshot of VSCode, software from `Microsoft <https://code.visualstudio.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.


#. The variable explorer is very useful for examining the results of calculations, checking that variables contain the correct thing, and so on. It has more functionality, but we need to install a Python `module <https://uom-eee-eeen11202.github.io/notes-part1/chapters/software_development_tools/libraries.html#packages-from-online-repositories>`_ called Pandas to add this functionality. Pandas is very widely used, but it's not part of the `standard library <https://uom-eee-eeen11202.github.io/notes-part1/chapters/software_development_tools/libraries.html#standard-library>`_ so we need to ensure it's in the virtual environment by installing it ourselves.

   Click on the :console:`Terminal` tab in VSCode. It should look like the below. You should see that :console:`(.venv)` is present, indicating the virtual environment we're working in is active. (If not, make sure the terminal is in the :console:`lab_b` folder, and then activate the :console:`.venv` with :console:`source .venv/bin/activate`.) You should also see that the command prompt looks like :console:`$`, indicating that this is the computer's terminal, not a Python terminal (which would be :console:`>>>`).

   .. figure:: ./images/vscode_integrated_terminal.png
      :width: 800
      :align: center
      :alt: The integrated terminal in VSCode used to install modules

      Screenshot of VSCode, software from `Microsoft <https://code.visualstudio.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.


   At the computer terminal enter

   .. prompt::
      :language: python
   
      uv pip install pandas

   This will install Pandas into the virtual environment. It may take a minute. It's only been installed in the virtual environment that's currently active. When you make or use a new or different virtual environment, you may need to install it again. (Which is one of the aims of using virtual environments, we could install different versions of Pandas in different virtual environments if we wanted to.)

   .. admonition:: Aside
      :class: dropdown

      In the next lab we'll look at how to list *dependencies* in a file so we have a list of what needs to be installed in order for our code to run. 

   VSCode won't pick up the installation of Pandas automatically if you install it while VSCode is running. Click on the :console:`Restart` button, and then :console:`Restart` again to confirm. This restarts the Python kernel so that it will pick up any changes to the virtual environment.
   
   Then press :console:`Run All` to re-run the code and it will be picked up.

   .. figure:: ./images/restart_kernel.png
      :width: 800
      :align: center
      :alt: Restarting the Python kernel to pick up the new installed module

      Screenshot of VSCode, software from `Microsoft <https://code.visualstudio.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.


   Click on the :console:`Jupyter` tab in VSCode. Then double click on :python:`v_out` to open a more detailed view of what's stored in the variable. (You may need to scroll down in the variable explorer to see :python:`v_out`.) You should have a view similar to the below. Check some of the values using your calculator to check that they're what you expect. 

   .. figure:: ./images/data_wrangler.png
      :width: 800
      :align: center
      :alt: More detailed view of the variable in VSCode

      Screenshot of VSCode, software from `Microsoft <https://code.visualstudio.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.


#. For this example, probably an even better way to exploring the data is to plot it. Again, we need internal an external module to do this.

   .. admonition:: Note

      We're going to look at data visualization more in :ref:`Lab F <lab_f>`. There are lots of options beyond what we're going to look at here. This example is just something to get started with.

   At the computer terminal enter

   .. prompt::
      :language: python
   
      uv pip install plotly jupyterlab anywidget
    
   Then restart the Python kernel as before. 

   In your code cell add 

   .. code-block:: python
   
      # Plot the sine wave
      import plotly.express as px

      fig = px.line(x=t, y=v_out, labels={'x': 'Time [s]', 'y': 'Voltage [V]'})
      fig.show()

   This adds a module called :python:`plotly` to your code, and asks it to plot :python:`t` on the x-axis and :python:`v_out` on the y-axis. When you run the code, it will display a plot similar to the below. There are a number of controls to zoom in and out, and similar. Explore these. 

   Try changing the values of :python:`A` and :python:`f` to see how the plot changes. In particular, try :python:`f = 0.01` and :python:`f = 10`. Do you see what you expect?

   .. admonition:: Solution
      :class: dropdown

      When :python:`f = 0.01` you see a sine wave as you expect. It's quite a low frequency sine wave, and so we don't see many oscillations present in 100 seconds. When :python:`f = 10` we don't see a sine wave. :python:`f = 10` means were expecting 10 oscillations per second. However our time points are only at 0 s, 1 s, 2 s, and so on. (We're sampling at 1 Hz.) We're not sampling quickly enough to see the oscillations. Indeed in this case we're sampling so slowly that we get a very strange shape indeed. 
      
      You'll learn about the *Nyquist theory* later in your degree. In general, we need the sampling frequency to be at least twice as fast as the highest frequency we want to plot. (This is nothing to do with Python, it applies to all cases of plotting a waveform.) If we're sampling at 1 Hz, the largest :python:`f` we can have is 0.5 Hz. In practice, the ratio needs to be more like 10-30 times the highest frequency to get a good plot. 

   Set

   .. code-block:: python
   
      A = 1  # Volts
      f = 0.1  # Hz
    
   again and re-run the code before proceeding.


#. We can use an :python:`if` statement to check whether a condition is true or not. Make a new cell and enter to the code

   .. code-block:: python

      # Find zero crossings
      for i, v in enumerate(v_out):
          if v == 0:
              print("Zero crossing at time:", i)

   This is intended to display the times at which the sine wave crosses zero. It passes through each value in :python:`v_out`, puts it in a temporary variable called :python:`v` and checks whether this is equal to 0. 
   
   Run the code. Does it display what you expect? If not, why not?

   .. admonition:: Solution
      :class: dropdown

      In the plot we can clearly see the sine wave crossing 0. Have a look in the variable explorer however. You'll see it's only 0 at the time point 0. After this, it gets very close to 0, for example :math:`1.22 \times 10^{-16}`. This is a very small number, but it's not exactly 0! The :python:`== 0` is checking for exactly zero. We're seeing the impact of `floating point numbers <https://uom-eee-eeen11202.github.io/notes-part1/chapters/programming_fundamentals/floating_point_numbers.html>`_. Rather than getting exactly 0 were getting a little bit of rounding error. This is negligible in any practical sense (if this was a voltage we've measured from a circuit, it's very hard to measure :math:`1.22 \times 10^{-16}` Volts. However it means that our code doesn't do what we want in this case. Try

      .. code-block:: python

         # Find zero crossings
         for i, v in enumerate(v_out):
             if v < 1e-15 and v > -1e-15:
                 print("Zero crossing at time:", i)

      This is a bit more generous in its checking and should work as you want. 


#. Python can also do complex maths, as we commonly need for circuit analysis. There is a module :python:`cmath` in the standard library which adds functions for working with complex numbers. Make a new cell and enter the code below.

   .. code-block:: python

      # Examples of complex sums
      import cmath

      # Simple sums
      a = 1 + 1j
      b = 2 * cmath.exp(4j)
      c = a * b

      d = abs(c)
      e = cmath.phase(c)
      g = c.real
      h = c.imag
      k = c.conjugate()

   :python:`a` is :math:`1 + 1j`. :python:`b` is :math:`2 e^{4j}`. That is, :python:`a` is in Cartesian form, and :python:`b` is in polar form. This is fine. Python can work with either, and automatically convert between the two as needed. You can enter a complex number in whichever form is easiest for you. There are then built in functions to find the magnitude (the :python:`abs` function), and then for the phase, the real part, the imaginary part, and the complex conjugate. Run the code and view these results in the variable explorer and check they are what you expect. 

   .. figure:: ./images/complex_numbers.png
      :width: 800
      :align: center
      :alt: Example of doing complex sums in Python

      Screenshot of VSCode, software from `Microsoft <https://code.visualstudio.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.


#. The examples so far have focused on processing numbers. Python can process text as well.

   Make a new cell and enter the code below.

   .. code-block:: python

      # Make bill of materials
      r1 = {"component_number": 1, "type": "resistor", "value": 1000, "units": "ohm"}
      r2 = {"component_number": 2, "type": "resistor", "value": 10e3, "units": "ohm"}
      c1 = {"component_number": 3, "type": "capacitor", "value": 1e-6, "units": "F"}
      bom = (r1, r2, c1)
   
   This makes a simple Bill Of Materials (BOM), for example for if we were making a circuit. The BOM is stored in a `tuple <https://uom-eee-eeen11202.github.io/notes-part1/chapters/programming_fundamentals/variables.html#tuples>`_. A tuple is `immutable <https://uom-eee-eeen11202.github.io/notes-part1/chapters/programming_fundamentals/mutability.html>`_ so we can't accidentally change the components. The details on each component are stored in a `dictionary <https://uom-eee-eeen11202.github.io/notes-part1/chapters/programming_fundamentals/variables.html#dictionaries>`_. This lets us store a range of information about the component, both text and numbers. 
   
   We can then start to automatically process this list. Add the code below to the cell and run it.

   .. code-block:: python

      # Count components in the BOM
      resistors = 0
      capacitors = 0
      for component in bom:
          if component["type"] == "resistor":
              resistors += 1
          elif component["type"] == "capacitor":
              capacitors += 1
          else:
              print("Unexpected component. Was expecting only resistors or capacitors")
      print(f"{resistors} resistors and {capacitors} capacitors are in the BOM.")

   This code combines a :python:`for` loop with an :python:`if` statement to count the number of resistors and capacitors in the BOM. Make sure you understand how this works before you move on. Note the different levels of indentation to show which code belongs to which part of the structure.
   
   The syntax in :python:`print(f"{resistors} resistors and {capacitors} capacitors are in the BOM.")` is known as an *f-string*. Notice that the string starts :python:`f"`. In an f-string, items in curly brackets :python:`{}` are replaced with their values. So with :python:`{resistors}` the value of the variable :python:`resistors` is displayed rather than the word resistors. 


Electronic engineering problems
===============================

#. Resistors in parallel add following the equation

   .. math::

      \frac{1}{R_{T}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + \ldots 

   where :math:`R_{T}` is the total resistance and :math:`R_{1}` (and similar) are the value of each individual resistor being connected in parallel.
   
   .. figure:: ./images/resistors_in_parallel.png
      :width: 500
      :align: center
      :alt: Drawing of three resistors in parallel

   You are given 10 resistors connected in parallel, values: 10 k :math:`{\Omega}`, 20 k :math:`{\Omega}`, 30 k :math:`{\Omega}`, 40 k :math:`{\Omega}`, 50 k :math:`{\Omega}`, 60 k :math:`{\Omega}`, 70 k :math:`{\Omega}`, 80 k :math:`{\Omega}`, 90 k :math:`{\Omega}`, and 100 k :math:`{\Omega}`. Write a code cell to calculate :math:`R_{T}`, the total effective resistance present. View your calculated value in the variable explorer.

   .. admonition:: Solution
      :class: dropdown

      .. code-block:: python

         # Calculate the total resistance
         r_values = range(10, 100, 10)  # kOhm values
         r_intermediate = [1 / r for r in r_values]  # broken into two lines for readability
         r_t = 1 / sum(r_intermediate)  # kOhm values


#. A potential divider is made when the output voltage is taken from a point between two impedances, labelled :math:`Z_{1}` and :math:`Z_{2}` in the figure below.

   .. figure:: ./images/potential_divider.png
      :width: 500
      :align: center
      :alt: Drawing of a potential divider
 
   Recall from your circuit analysis course that the relationship between the input and output voltages is given by

   .. math::

      V_{out} = \frac{Z_{2}V_{in}}{Z_{1} + Z_{2}}

   If both impedances are resistors, :math:`Z_{1}` and :math:`Z_{2}` will be real numbers. Use the Python code below to calculate the output voltage for the case when:
	
   * :math:`V_{in}` = 10 V (d.c.).
   * :math:`Z_{1}` = 1 k :math:`{\Omega}`.
   * :math:`Z_{2}` = 10 k :math:`{\Omega}`.

   .. code-block:: python
    
      # Potential divider example
      v_in = 10
      z1 = 1  # kOhm
      z2 = 10  # kOhm
      v_out = (z2 * v_in) / (z1 + z2)  # Volts


#. :math:`Z_{1}` is kept as a resistor of value 1 k :math:`{\Omega}`, and :math:`Z_{2}` is replaced by a capacitor. 

   A capacitor has an impedance (in :math:`{\Omega}`)

   .. math::

      Z = \frac{1}{j\omega C}

   where :math:`\omega` is the angular frequency

   .. math::

      \omega = 2\pi f

   :math:`f` is the frequency of the a.c. source in Hz, and :math:`C` is the capacitance in Farads. When considering the impedance of the capacitor (not its capacitance in Farads, its impedance in Ohms) the same potential divider equation as in Step 2 is valid without modification. 

   Make a copy of your code from Step 2. Change the definition of :math:`Z_{2}` to be a complex number:

   .. code-block:: python

      z2 = 1 / (1j * w * c)
    
   where :python:`w` is the angular frequency and :python:`c` is the value of the capacitance. Make suitable variables for these, assuming a capacitor of value 1 nF and frequency of 160 kHz.

   Modify the :python:`v_in` in your code to be an a.c., sinusoidal signal with a frequency of 160 kHz, phase of 0, and amplitude of 5 V. Mathematically, you can represent this as a phasor, that is, a complex exponential. Recall that from your circuit theory you would represent such an input as :math:`5e^{j\omega}` where :math:`\omega = 2\pi \times 160,000`.

   In Python you can represent this as 

   .. code-block:: python

      v_in = 5 * cmath.exp(1j * 2 * math.pi * 160000)

   (assuming that you already have :python:`import cmath` and :python:`import math` in your code).

   With these two changes, find the magnitude and phase of the output voltage, :math:`V_{out}`. You can do this with the :python:`abs` and :python:`cmath.phase` commands.

   .. admonition:: Solution
      :class: dropdown

      .. code-block:: python
         
         import cmath
         import math

         # Potential divider where z2 is a capacitor
         f = 160000  # Hz
         w = 2 * math.pi * f  # rad/s

         v_in = 5 * cmath.exp(1j * w)

         z1 = 1  # kOhm
         c = 1e-9  # Farads
         z2 = 1 / (1j * w * c)

         v_out = (z2 * v_in) / (z1 + z2)  # Volts
         vout_mag = abs(v_out)
         vout_phase = cmath.phase(v_out)


#. Using your code from above, change the frequency of the input (and the one used in the :python:`z2` equation). Pick some frequency values and see how the magnitude of :math:`V_{out}` changes. (We suggest making quite big steps in frequency, go up and down from 160 kHz by factors of 10, and then 100.)

   Based on the results of your simulation, does this circuit act as a high pass filter (where low frequency signals are blocked but high frequency signals passed through) or a low pass filter (where low frequency signals are passed through but high frequency signals are blocked)?

   .. admonition:: Solution
      :class: dropdown

      Low pass filter.