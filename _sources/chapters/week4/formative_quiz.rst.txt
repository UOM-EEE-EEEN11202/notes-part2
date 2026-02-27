Formative quiz 4
================

.. quizdown::

   ## Which numpy function below creates a 2 x 3 array?

   1. [x] np.array([[1, 2, 3], [1, 0, 1]])
       > That's correct!
   1. [ ] np.array([[1, 2, 3]; [1, 0, 1]])
       > That's not correct. `;` is not valid syntax for creating numpy arrays. Use commas to separate elements in a row, and square brackets to separate rows.
   1. [ ] np.array([[1, 2], [1, 0], [3, 1]])
       > That's not correct. This is a 3 x 2 array. 
   1. [ ] np.array([1, 2, 3], [1, 0, 1])
       > That's not correct. Each row needs to be in square brackets `[]`, and the overall array also needs to be in square brackets.
   1. [ ] np.array([1, 2], [1, 0], [3, 1])
       > That's not correct. This code has multiple issues with it.


   ## You are given a numpy array `a = np.array([5, 6, 4, 6, 2, 2, 7])`. What is the value of `a[3]`?
   
   1. [ ] 2
       > That's not correct Remember that indexing starts counting at 0. 
   1. [ ] 4
       > That's not correct Remember that indexing starts counting at 0. 
   1. [ ] 5
       > That's not correct Remember that indexing starts counting at 0. 
   1. [x] 6
       > That's correct!
   1. [ ] 7
       > That's not correct Remember that indexing starts counting at 0.        


   ## You are given a numpy array `b = np.arange(0,100)`. What code slices the array to produce a smaller array containing only the values 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20? 

   1. [ ] b[9:20]
       > That's not correct. Remember that Python starts counting at 0, and that the end index is exclusive so needs to be 1 higher than the last index you want.
   1. [ ] b[9:21]
       > That's not correct. Remember that Python starts counting at 0, and that the end index is exclusive so needs to be 1 higher than the last index you want.
   1. [ ] b[10:20]
       > That's not correct. Remember that Python starts counting at 0, and that the end index is exclusive so needs to be 1 higher than the last index you want.
   1. [x] b[10:21]
       > That's correct!
   1. [ ] b[11:20]
       > That's not correct. Remember that Python starts counting at 0, and that the end index is exclusive so needs to be 1 higher than the last index you want.
   1. [ ] b[11:21]
       > That's not correct. Remember that Python starts counting at 0, and that the end index is exclusive so needs to be 1 higher than the last index you want.



   ## You are given a numpy array `c = np.arange(100,50,-2)`. What code slices the array to produce a smaller array containing only the values 74, 72, 70? 

   1. [x] c[13:16]
       > That's correct!
   1. [ ] c[74:70]
       > That's not correct. The numbers in the brackets are the index, the address of the numbers you want to extract from the array, not the numbers themselves.
   1. [ ] c[70:74]
       > That's not correct. The numbers in the brackets are the index, the address of the numbers you want to extract from the array, not the numbers themselves.
   1. [ ] c[13:15]
       > That's not correct. Remember that Python starts counting at 0, and that the end index is exclusive so needs to be 1 higher than the last index you want.
   1. [ ] c[15:13]
       > That's not correct. Remember that Python starts counting at 0, and that the end index is exclusive so needs to be 1 higher than the last index you want.


   ## You are given the code
   
   `t = np.linspace(0, 1, 200)` <br />
   `v = scipy.signal.square(2 * np.pi * 10 * t)` <br /><br />

   **What waveform does this produce? (i.e. what does it look like if you plot it?)**

   1. [ ] A straight line going up to 1
       > That's not correct. `linspace` here is used to create the timebase, from 0 to 1 second, with a sampling rate of 200 Hz.
   1. [ ] A straight line going up to 200
       > That's not correct. `linspace` here is used to create the timebase, from 0 to 1 second, with a sampling rate of 200 Hz.
   1. [ ] A square wave at 2 Hz
       > That's not correct. The 2 is part of 2*pi to convert the frequency in Hz into angular frequency in radians per second which signal.square expects. 
   1. [x] A square wave at 10 Hz
       > That's correct!
   1. [ ] A random signal
       > That's not correct.


   ## Move the below into the correct order to import the scipy `derivative` function for calculating numerical derivatives.

   1. from 
   2. scipy
   3. .
   4. differentiate
   5. import
   6. derivative
    > See the [scipy help](https://docs.scipy.org/doc/scipy/reference/generated/scipy.differentiate.derivative.html#scipy.differentiate.derivative) for more information on this function.


   ## Use Plotly to plot the signal below.

   `t = np.linspace(0, 1, 500)` <br />
   `v = np.sin((2 * np.pi * 10 * t) + np.pi/2)` <br /><br />

   **What is the value of `v` when `t` is 0.2 (or as close as possible to this)?**

   1. [ ] 1
       > That's not correct. We don't have a sample point at exactly t = 0.2, so you need to find the closest one, and so the result isn't exactly 1
   1. [x] 0.999683
       > That's correct!
   1. [ ] 0
       > That's not correct. Make sure you're looking at the correct time. 
   1. [ ] 0.000012
       > That's not correct. Make sure you're looking at the correct time. 
   1. [ ] -1
       > That's not correct. Make sure you're looking at the correct time. 


   ## Using matplotlib, which of the following commands would correctly label the x-axis of axes `ax` as "Time [s]"?

   1. [ ] `plt.label(x="Time [s]")`
       > That's not correct. This isn't valid syntax.
   1. [ ] `xlabel("Time [s]")`
       > That's not correct. This is how you set the x-axis label in Matlab. 
   1. [ ] `plt.set(xlabel="Time [s]")`
       > This will probably work if you want to be updating the current plot/you only have one plot open. It's probably better to explicitly say which axis you want to update the label of. 
   1. [ ] `set(xlabel="Time [s]")`
       > That's not correct. This isn't valid syntax unless you've brought the `set` function into the current namepsace. 
   1. [x] `ax.set(xlabel="Time [s]")`
       > That's correct!


   ## Which method is used to obtain one or more rows of a Polars dataframe?

   1. [ ] .select()
       > That's not correct. This is used to obtain columns.
   1. [x] .filter()
       > That's correct!


   ## Put the following code in order to calculate the mean of a column called "Voltage" in a Polars dataframe called `df`.

   1. df 
   2. .select(
   3. pl.col("Voltage")
   4. )
   5. .mean()
    > If you're struggling, see Lab F where there is an example doing this for a column called "Course 1 mark".

