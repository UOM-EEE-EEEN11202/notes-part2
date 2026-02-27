.. role:: console(code)
   :language: console

.. role:: python(code)
   :language: python

.. _lab_e_stage_1:


Numpy examples
==============

Initial setup for the Lab
-------------------------
#. In the VSCode terminal enter:

   .. prompt::
      :language: bash

      cd /workspaces/`ls /workspaces`/lab-e
      uv init . 

   Remember to enter these one at a time, not both together.

   This will make a new Python project in the current folder. It will be named automatically after the folder name.

   To analyze these lines:

   - :console:`cd /workspaces/\`ls /workspaces\`/lab-e` makes sure we are working in the lab-e folder.
   - :console:`uv init .` is the interesting command. This actually sets up our virtual environment.

   The above will make the a :console:`pyproject.toml` file, a :console:`main.py` file, and a number of others. 


#. Add some structure to your code folder by entering the commands:

   .. prompt::
      :language: bash
   
      mkdir tests docs
      mv main.py src
      uv run src/main.py
      touch tests/__init__.py

   - Here we've moved :console:`main.py` into the :console:`src` folder. You'll see that the :console:`src` folder already contains some code that we've written for you. 
   - We've made a :console:`tests` folder for any tests that we might want to write later, and a :console:`docs` folder for any documentation. We won't ask you to put anything into these as part of the lab instructions, but you might want to write some tests for your code to check that it's working!
   - In the files that were downloaded from Git automatically, you'll also see there's a folder called :console:`data`. This contains some files that we'll analyze during the lab.

#. Install the required dependencies for this lab by entering the command:

   .. prompt::
      :language: bash

      uv add numpy scipy pandas plotly

#. Run 

   .. prompt::
      :language: bash

      uv run src/main.py

   to make sure the virtual environment is built. 

#. When you open a Python file, make sure that the correct Python virtual environment is activated. See the instructions `in Lab D <https://uom-eee-eeen11202.github.io/notes-part2/chapters/week3/lab_d_stage_1.html#>`_ if you're unsure. 


Numerical analysis in Python
----------------------------
#. Make a new Python file with any suitable name. Put it in your Lab E :console:`src` folder.

#. In this file, copy the code below and run it. We suggest putting a breakpoint on the :python:`return` statement on Line 13 so you can view the results, or you can inset :python:`logging` commands if you prefer.

   .. code-block:: python

      import numpy as np


      def vector_and_matrix_multiplication():
          # Define vectors
          v1 = np.array([1, 2, 3])
          v2 = np.array([4, 5, 6])

          # Perform vector-matrix multiplication
          r1 = np.dot(v1, v2)  # dot product
          r2 = np.cross(v1, v2)  # cross product

          return


      if __name__ == "__main__":
          vector_and_matrix_multiplication()

   The view in the debugger will be like the below. 

   .. figure:: ./images/vector_products.png
      :width: 800
      :align: center
      :alt: View if the VSCode debugger

      Screenshot of VSCode, software from `Microsoft <https://code.visualstudio.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.


   From your Maths courses you should remember multiplying vectors, where you can use the dot product to get a scalar result, or the cross product to get another vector. :python:`numpy` makes this very easy. 

   To analyze the code briefly:

   - :python:`import numpy as np` adds the numpy library to the code. Functions have a `namespace <https://uom-eee-eeen11202.github.io/notes-part1/chapters/programming_fundamentals/scope.html#namespaces>`_, essentially an address to the function so that functions with the same name don't conflict with one another. By importing numpy as :python:`np`, we can use the shorter :python:`np` prefix to access functions in the numpy library.
   - :python:`np.array([...])` creates a numpy array. These are 1D arrays, and so they are representing vectors. :python:`np.array([...])` is not one of the built in `data types <https://uom-eee-eeen11202.github.io/notes-part1/chapters/programming_fundamentals/data_types.html>`_ in Python, numpy has added it. 
   - :python:`np.dot()` and :python:`np.cross()` are then the numpy functions for calculating the dot product and cross products respectively.


#. To work with matrices, we can make 2D arrays. Add the code below to the :python:`vector_and_matrix_multiplication()` function, and run it again.

   .. code-block:: python

      # Define matrices
      m1 = np.array([[1, 2, 3],
                     [4, 5, 6],
                     [7, 8, 9]])
      m2 = np.array([[9, 8, 7],
                     [6, 5, 4],
                     [3, 2, 1]])

      # Perform matrix multiplication 
      r3 = m1 @ m2  # matrix multiplication
      r4 = np.matmul(m1, m2)  # alternative method


   You should see the result of the matrix multiplication in the debugger view. 

   .. figure:: ./images/matrix_multiplication.png
      :width: 800
      :align: center
      :alt: View of the VSCode debugger

      Screenshot of VSCode, software from `Microsoft <https://code.visualstudio.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.


   This defines two 3x3 matrices, and then performs a matrix multiplication. There are two different syntaxes, both of which give the same result. :python:`@` is just a short hand as multiplying matrices is a common thing to want to do. 


#. In many engineering applications, we need to solve systems of linear equations. These are equations like the below. The aim is to find the value of :math:`x`.

   .. math::

      Ax = b

   where for example

   .. math:: 
     
      A &= \begin{bmatrix}
           1 & 2 & 3 \\
           1 & 0 & 1 \\
           3 & 1 & 3
           \end{bmatrix}, \\
       
       b &= \begin{bmatrix}
            5 \\
            3 \\
            3
            \end{bmatrix}
      
   By searching the Internet, asking AI, or similar, add code to your :python:`vector_and_matrix_multiplication()` function to work out the value of :math:`x` for the :math:`A` and :math:`b` given above.

   .. admonition:: Solution
      :class: dropdown

      .. code-block:: python

         # Solve linear equations
         A = np.array([[1, 2, 3], [1, 0, 1], [3, 1, 3]])
         b = np.array([5, 3, 3])
         x1 = np.linalg.solve(A, b)
         x2 = np.linalg.inv(A) @ b  # alternative method

      Again solving linear systems is quite a common thing to do, and so it's got it own dedicated function in numpy, :python:`np.linalg.solve()`. An alternative method is to calculate the inverse of :math:`A` using :python:`np.linalg.inv()`, and then multiply it by :math:`b`. Both methods give the same result.


#. What is the value of :math:`x` when

   .. math:: 
     
      A &= \begin{bmatrix}
           2 & 1 & 0 & 0 & 0 \\
           1 & 2 & 1 & 0 & 0 \\
           0 & 1 & 2 & 1 & 0 \\
           0 & 0 & 1 & 2 & 1 \\
           0 & 0 & 0 & 1 & 2
           \end{bmatrix}, \\
       
       b &= \begin{bmatrix}
            1 \\
            1 \\
            1 \\
            1 \\
            1
            \end{bmatrix}

   .. admonition:: Solution
      :class: dropdown

      .. math:: 
     
       x &= \begin{bmatrix}
            0.5 \\
            0 \\
            0.5 \\
            0 \\
            0.5
            \end{bmatrix}


Simulating signals in Python
----------------------------
#. In your Lab E :console:`src` folder we've placed a Python file called :console:`sine_plotting.py`. Open this file. 

   It contains a function called :python:`make_sine_wave()`, shown below. It's a minor variant on the code we introduced in `Lab B <https://uom-eee-eeen11202.github.io/notes-part2/chapters/week2/lab_b_stage_2.html>`_.

   .. code-block:: python

      def make_sine_wave():
          """
          Make a sine wave signal
          TO DO: replace range with a numpy array

          Returns: t: time samples
          v_out: voltage samples
          """
          sample_start = 0
          sample_stop = 100
          A = 1  # Volts
          f = 0.1  # Hz
          t = range(sample_start, sample_stop)  # interpret as representing 1 s, 2 s, 3 s, ...
          v_out = [A * math.sin(2 * math.pi * f * time) for time in t]
          return t, v_out

   This code is not ideal, because :python:`range()` can only generate whole numbers, which we have to interpret as representing seconds (1 s, 2 s, 3 s, ...). Now we can make numpy arrays that can have numbers that we like. Also, it uses a :python:`for` loop to calculate the value of sin at each time sample. Numpy can do this sort of operation much more efficiently without needing a loop.


#. In :console:`sine_plotting.py` there is also a function called :python:`make_sine_wave_numpy()`. This is a version of the same function, but using numpy arrays. The code is given below. 

   .. code-block:: python

      def make_sine_wave_numpy(A, f, start, stop):
          """
          Make a sine wave signal
          Returns: t: time samples
          v_out: voltage samples
          """
          step = 1 / (f * 30)
          t = np.arange(
              start, stop, step
          )  # interpret as representing 1 s, 2 s, 3 s, ...
          v_out = A * np.sin(2 * np.pi * f * t)
          return t, v_out
   
   The key changes are:

   - :python:`t` is now made using :python:`np.arange()`, which is similar to :python:`range()`, but can have any step size. Here the step size is set to 30 samples per cycle of the sine wave, which makes a nice plot whatever value of :python:`f` is used.
   - :python:`math.sin()` has been replaced with :python:`np.sin()`. This can take a numpy array as the input, and will calculate the sin of each element in the array automatically. We don't need a :python:`for` loop to cycle through every element in the array.

#. In :console:`sine_plotting.py` there is also a function called :python:`plot_sine_wave()`. Add code to :python:`if __name__ == "__main__":` to make a sine wave of amplitude 1 V, frequency 0.1 Hz, from time 0 s to 50 s, and then plot it. Do this using both :python:`make_sine_wave()` and :python:`make_sine_wave_numpy()` to see the difference. 

   .. admonition:: Solution
      :class: dropdown

      .. code-block:: python

         if __name__ == "__main__":
             # Put plotting code below here
             A = 1  # Amplitude in V
             f = 0.1  # Frequency in Hz
             start = 0  # Start time in s
             stop = 50  # Stop time in s
             t, v_out = make_sine_wave(A, f, start, stop)
             do_plots(t, v_out)
             t, v_out = make_sine_wave_numpy(A, f, start, stop)
             do_plots(t, v_out)
   
   You should see plots like the below, where the bottom one is made using numpy.

   .. figure:: ./images/sine_waves.png
      :width: 800
      :align: center
      :alt: Two plots of sine waves with plotly

      Screenshot of a web browser, software from `Brave <https://brave.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.


#. Experiment with different values of :python:`A` and :python:`f` to see the different signals produced. If you make the frequency :python:`f` very high you might want to decrease the stop time to see just a few cycles of the sine wave.


#. An important feature of numpy is that it can operate on whole arrays at once. This is called *vectorization*. It saves us from having lots of :python:`for` loops which, by definition, need to be run multiple times and so can make the code slower to run. 

   Add the below to your code

   .. code-block:: python
   
      # Settings for both sine waves - both need the same time base
      start = 0
      stop = 1
      fs = 500  # sampling frequency in Hz
      time = np.arange(start, stop, 1 / fs)

      # Make sine wave 1
      A1 = 1
      f1 = 10
      v1 = A1 * np.sin(2 * np.pi * f1 * time)

      # Make sine wave 2
      A2 = 0.4
      f2 = 50
      v2 = A2 * np.sin(2 * np.pi * f2 * time)

      # Make final sine wave
      vo = v1 + v2
      do_plots(time, vo)

   We can just add the two arrays, :python:`v1` and :python:`v2`, together directly. Numpy will automatically add the corresponding elements in each array together to make a new array, :python:`vo`. This is much simpler than needing to write a :python:`for` loop to do the addition element by element. We just need to make sure that the arrays have the same number of elements in them so that the addition makes sense.

#. You should see a plot like the below. This is a 10 Hz sine wave with a smaller 50 Hz sine wave superimposed on top of it. 50 Hz is the mains frequency in the UK, so this sort of trace could be representing a low frequency signal with some mains interference on top of it. In the lab, it's quite common that we see 50 Hz interference in our measurements. 

   .. figure:: ./images/sine_with_50hz.png
      :width: 800
      :align: center
      :alt: Two plots of sine waves with plotly

      Screenshot of a web browser, software from `Brave <https://brave.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.


#. We can make this signal model more realistic still by adding some random noise to it. Numpy provides a number of functions for this. We'll use :python:`np.random.normal()` to generate white Gaussian noise. 

   Add the below code to your file.

   .. code-block:: python

      # Add random noise
      noise_mean = 0
      noise_std = 0.2  # standard deviation of the noise, the peak-to-peak will be about 6 times this
      noise = np.random.normal(noise_mean, noise_std, size=vo.shape)
      vo_noisy = vo + noise
      do_plots(time, vo_noisy)

   This generates random noise with a mean of 0 and a standard deviation of 0.2, and then adds this to the signal. You should see a plot like the below.

   .. figure:: ./images/noisey_sine_wave.png
      :width: 800
      :align: center
      :alt: Sine wave with noise plotted with plotly

      Screenshot of a web browser, software from `Brave <https://brave.com/>`_. See `course copyright statement <https://uom-eee-eeen11202.github.io/chapters/about/copyright>`_.


#. Let's try another example. Using the time vector :python:`ts` defined below

   .. code-block:: python
   
      start = 0
      stop = 1
      fs = 500  # sampling frequency in Hz
      ts = np.arange(start, stop, 1 / fs)

   and :python:`f = 10`, make a signal that follows the equation below. Run your code for different values of :math:`n`. What does the signal look like as the value of :math:`n` gets bigger?

   .. math::

      v(t) = \frac{4}{\pi} \sum_{k=1}^{n} \frac{1}{(2k-1)}\sin((2k-1) \times 2 \pi f t)

   .. admonition:: Solution
      :class: dropdown

      .. code-block:: python

         f = 10  # frequency in Hz
         n = 10  # number of harmonics to add
         vs = np.zeros_like(
            ts
         )  # initialize v to be an array of zeros the same shape as t, lets us just add values to this in the for loop
         for k in range(1, n + 1):  #  range doesn't include stop value
            vs += (4 / (((2 * k) - 1) * np.pi)) * np.sin(((2 * k) - 1) * 2 * np.pi * f * ts)
         vs = (4 / np.pi) * vs  # scale the final result
         do_plots(ts, vs)

      As more terms are added, the signal looks more and more like a square wave. (This is an example of a Fourier series which you'll learn about in your Maths course. Briefly, any periodic signal can be approximated by adding together sine waves of different frequencies and amplitudes.)

      Numpy doesn't have a function to make square waves directly, but scipy does. You can use :python:`scipy.signal.square()` to make square waves more easily than the above.


Array slicing
-------------
It's common that we don't want to work with an entire numpy array. It might have thousands, or millions of elements in it. An array can be *sliced* to access just a few elements in it. This uses square brackets :python:`[]` and numbers to indicate which elements we want to access. A colon :python:`:` is used to indicate a range of elements.

#. Make a time vector using the code below.

   .. code-block:: python
   
      start = 0
      stop = 1
      fs = 500  # sampling frequency in Hz
      ts = np.arange(start, stop, 1 / fs)

#. Work out the values of each of the below:

   - :python:`ts[0]`
   - :python:`ts[1]`
   - :python:`ts[-1]`
   - :python:`ts[0:100]`
   - :python:`ts[-100:]`

   .. admonition:: Solution
      :class: dropdown
   
      - :python:`ts[0]` is the first element in the array, 0.
      - :python:`ts[1]` is the second element, 0.002.
      - :python:`ts[-1]` is the last element, 0.998.
      - :python:`ts[0:100]` is a new array containing the first 100 elements.
      - :python:`ts[-100:]` is a new array containing the last 100 elements. (If a number of either side of a colon :python:`:` is omitted Python takes all the values to or from the end of the array.)
