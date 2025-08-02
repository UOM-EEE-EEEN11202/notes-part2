.. role:: console(code)
   :language: console

.. _lab_1a:

Shell scripting
===============

For this first part of the lab, you only need access to VSCode. `Follow the instructions for getting this on your computer. <https://uom-eee-eeen11202.github.io/chapters/useful_information/install.html>`_. Other tools will already be on your computer. 


Launching the terminal
----------------------
On a desktop/laptop type device you will already have a command line interface installed. Start this, following the instructions given below for your operating system.

.. tab-set::
    :sync-group: os

    .. tab-item:: :fab:`windows` Windows
        :sync: key1

        The terminal is called *PowerShell*. You have a **choice** for how to start this. 
        
        (1) You can start it directly by typing in :console:`powershell` to the search box in the start menu.

        .. figure:: ./images/windows_powershell_start.png
           :width: 800
           :align: center
           :alt: A Windows start menu search for the PowerShell app

        (2) You can first install *Windows terminal*. Launch the *Microsoft Store* and then search for :console:`terminal`. Then install *Windows Terminal*.

        .. figure:: ./images/windows_terminal_store.png
           :width: 800
           :align: center
           :alt: The Microsoft Store for installing Windows Terminal

        Then launch it by typing in :console:`terminal` to the search box in the start menu.

        .. figure:: ./images/windows_terminal_start.png
           :width: 800
           :align: center
           :alt: A Windows start menu search for the terminal app

        We think that Windows Terminal provides a slightly nicer interface (to exactly the same thing) and so our screenshots will make us of it.


    .. tab-item:: :fab:`apple` macOS / :fab:`linux` Linux
        :sync: key2

        Click on the launchpad / start icon for your operating system and then search for :console:`terminal`.


You should be presented with a terminal command line interface that looks like the below. Note that we've combined the instructions for macOS and Linux in the below, as these terminals will take the same commands and it reduces the number of pictures needed. The only meaningful difference at this point is that macOS uses :console:`%` to indicate where to enter commands, while Linux uses :console:`$` by default. Widows uses :console:`>` to show where to enter commands.

.. tab-set::
    :sync-group: os

    .. tab-item:: :fab:`windows` Windows
        :sync: key1

        .. figure:: ./images/windows_terminal.png
           :width: 800
           :align: center
           :alt: Windows terminal

    .. tab-item:: :fab:`apple` macOS / :fab:`linux` Linux
        :sync: key2

        .. figure:: ./images/unix_terminal.png
           :width: 800
           :align: center
           :alt: macOS/Linux terminal




Simple terminal commands
------------------------
There are then a large number of different commands that you can enter at the prompt to interact with your computer. After a while you'll probably memorize some common ones, but in general you can look up or ask AI to help with any that you don't know. Important here isn't to memorize all of the different commands, but to have an understanding of how the command line works so that you can use it to interact with the computer.


Displaying the current folder
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
To display the `address of the current folder <https://uom-eee-eeen11202.github.io/notes-part1/chapters/computer_software/files_and_folders.html#file-systems>`_ enter

.. tab-set::
    :sync-group: os

    .. tab-item:: :fab:`windows` Windows
        :sync: key1

        :console:`> Get-Location`

        Remember, you don't type in the :console:`>`, that just to show you where the command prompt is.

        This will display something like 

        .. figure:: ./images/windows_get_location.png
           :width: 800
           :align: center
           :alt: Windows terminal showing the Get-Location command


    .. tab-item:: :fab:`apple` macOS / :fab:`linux` Linux
        :sync: key2

        :console:`$ pwd`

        Remember, you don't type in the :console:`$`, that just to show you where the command prompt is.

        :console:`pwd` stands for print working directory. This will display something like 

        .. figure:: ./images/unix_get_location.png
           :width: 800
           :align: center
           :alt: Unix terminal showing the pwd command


The address shown will be different depending on your computer settings and user name. Here the user name is alex. You should be able to open File Explorer/Finder/similar and find the same location on your computer. 

It's not that you can't use the graphical interface to view this, it's that entering written commands gives us precise control and a log of what we've done. If you press the up arrow :console:`↑` on the keyboard you can see previous commands that you've entered. Press it multiple times to see earlier commands. Or, enter 

.. tab-set::
    :sync-group: os

    .. tab-item:: :fab:`windows` Windows
        :sync: key1

        :console:`> Get-History`


    .. tab-item:: :fab:`apple` macOS / :fab:`linux` Linux
        :sync: key2

        :console:`$ history`

to see a log of all of the commands that you've run. This makes it easy to re-run them. 


Listing the files in the current folder
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
To get a list of the `files in the current folder <https://uom-eee-eeen11202.github.io/notes-part1/chapters/computer_software/files_and_folders.html#files>`_ enter

.. tab-set::
    :sync-group: os

    .. tab-item:: :fab:`windows` Windows
        :sync: key1

        :console:`> Get-ChildItem`
        
        This will display something like 

        .. figure:: ./images/windows_ls.png
           :width: 800
           :align: center
           :alt: Windows terminal showing the Get-ChildItem command


    .. tab-item:: :fab:`apple` macOS / :fab:`linux` Linux
        :sync: key2

        :console:`$ ls`

        This will display something like 

        .. figure:: ./images/unix_ls.png
           :width: 800
           :align: center
           :alt: Unix terminal showing the ls command

Again, you should be able to open File Explorer/Finder/similar and find the same location on your computer.


Folders
^^^^^^^
Make a folder called :console:`test` by entering the command

.. tab-set::
    :sync-group: os

    .. tab-item:: :fab:`windows` Windows
        :sync: key1

        :console:`> New-Item -ItemType Directory -Path test`

    .. tab-item:: :fab:`apple` macOS / :fab:`linux` Linux
        :sync: key2

        :console:`$ mkdir test`

Then move into the folder :console:`test` by entering the command

.. tab-set::
    :sync-group: os

    .. tab-item:: :fab:`windows` Windows
        :sync: key1

        :console:`> Set-Location -Path test`

    .. tab-item:: :fab:`apple` macOS / :fab:`linux` Linux
        :sync: key2

        :console:`$ cd test`

You can enter 

.. tab-set::
    :sync-group: os

    .. tab-item:: :fab:`windows` Windows
        :sync: key1

        :console:`> Get-ChildItem`

    .. tab-item:: :fab:`apple` macOS / :fab:`linux` Linux
        :sync: key2

        :console:`$ ls`

again to check the location. It should display something similar to 

.. tab-set::
    :sync-group: os

    .. tab-item:: :fab:`windows` Windows
        :sync: key1

        :console:`C:\Users\alex\test`


    .. tab-item:: :fab:`apple` macOS / :fab:`linux` Linux
        :sync: key2

        :console:`/Users/alex/test`
        or
        :console:`/home/alex/test`

depending on the location you started from. You can go *up* a level, that is to exit the :console:`test`, by entering

.. tab-set::
    :sync-group: os

    .. tab-item:: :fab:`windows` Windows
        :sync: key1

        :console:`> cd ..`


    .. tab-item:: :fab:`apple` macOS / :fab:`linux` Linux
        :sync: key2

        :console:`$ cd ..`


Command switches
^^^^^^^^^^^^^^^^
Lots of commands accept options that change their behavior. These are known as switches or as arguments. Generally these are entered with a hyphen :console:`-` or two hyphens :console:`--` after the main command. Try entering

.. tab-set::
    :sync-group: os

    .. tab-item:: :fab:`windows` Windows
        :sync: key1

        :console:`Get-ChildItem -Attributes Directory`

        This will display only folders, rather than everything that's in the current location.


    .. tab-item:: :fab:`apple` macOS / :fab:`linux` Linux
        :sync: key2

        :console:`$ ls -la`

        This lists the contents of the folder, together with additional information such as when the items were last changed. An example is below. What's shown will depend on what files and folders you have on your computer.

        .. figure:: ./images/unix_lsla.png
           :width: 800
           :align: center
           :alt: Example of output from ls -la


Combining commands
^^^^^^^^^^^^^^^^^^
There are a number of ways in which you can combine togethers, for example to send the output of one command as the input to another command. Enter 

.. tab-set::
   :sync-group: os

   .. tab-item:: :fab:`windows` Windows
      :sync: key1

      :console:`> Get-ChildItem | Out-File -FilePath list.txt`

      This will take the output from :console:`Get-ChildItem` and write it to a text file called :console:`list.txt` rather than displaying it to the screen. You can read the contents of this file using 

      :console:`Get-Content -Path list.txt`

   .. tab-item:: :fab:`apple` macOS / :fab:`linux` Linux
      :sync: key2

      :console:`$ ls -la | tee list.txt`

      This will take the output from :console:`ls -la` and write it to a text file called :console:`list.txt` rather than displaying it to the screen. You can read the contents of this file using 

      :console:`$ cat list.txt`

      .. admonition:: Aside

         You can also use the redirection operator :console:`>>` for a similar effect, but we won't cover that here.



Further commands
^^^^^^^^^^^^^^^^
There are many further command line commands that come by default with your computer. Most apps you install can also be controlled from the command line, even if you usually use the graphical interface. We won't aim to cover these here, but you'll encounter many such commands as you move through the course. 

For now, spend a bit of time moving between folders using the commands given above to get a feeling for how it works. 



Scripts
-------
The above commands work very well when working *interactively* with the computer. That is, entering one command, observing the output, then entering the next command; and so on. 

Often we need to carry out more complex processes though, which might need lots of commands. We might want to run these multiple times, once a day for example to run a series of steps repeatedly. We can collect together shell commands into a *shell script* to help us with this. A shell script is a file containing a list of commands to be run one-after-another.

.. admonition:: Aside

   You can probably accomplish the same automation, and more, using Python, which we'll meet later. However, for simple automation tasks that can be overkill. The shell commands are built into the operating system and so are always available. For simple automation tasks shell scripts are widely used. 

.. _make_onedrive_folder:

Getting started
^^^^^^^^^^^^^^^

Make a folder called :console:`eeen11202` to store your work for the course. Make a folder called :console:`lab_a` inside this. You can do this using the Windows interface, or using the commands given in the previous section. 

.. tab-set::
   :sync-group: os

   .. tab-item:: :fab:`windows` Windows
      :sync: key1
   
      We suggest you put this at :console:`C:\\Users\\alex\\OneDrive - The University of Manchester\\eeen11202\\lab_a` (using the equivalent for your username and OneDrive. This will mean your files are automatically backed up and will be available on any computer where you're logged in to OneDrive.) This will look similar to the below.

      .. figure:: ./images/windows_folder_structure.png
         :width: 800
         :align: center
         :alt: File explorer showing the asked for folders


   .. tab-item:: :fab:`apple` macOS / :fab:`linux` Linux
      :sync: key2

      You can do this using the graphical interface, or using the commands given in the previous section. 
         
      We suggest you put this at :console:`/Users/alex/OneDrive - The University of Manchester/eeen11202/lab_a` (macOS) or :console:`/home/alex/OneDrive - The University of Manchester/eeen11202/lab_a` (Linux), using the equivalent for your username and OneDrive. This will mean your files are automatically backed up and will be available on any computer where you're logged in to OneDrive.


Start VSCode. This will display the welcome page, similar to the below. Remember that VSCode is very configurable. Don't worry if your screen isn't exactly the same, as long as it's broadly similar it will be fine.  

.. figure:: ./images/vscode_open_folder.png
   :width: 800
   :align: center
   :alt: The VSCode welcome page

Click on :console:`Open Folder...` and select the :console:`lab_a` folder that you made in the previous step. You will be asked whether you trust the authors of this folder. This is a security setting. Letting code run on your computer can change settings, delete files, or do other nefarious things. It's our own code we're writing though, so select :console:`Yes, I trust the authors`.

.. figure:: ./images/vscode_trust_authors.png
   :width: 800
   :align: center
   :alt: VSCode trust authors security settings

You'll see that the :console:`lab_a` folder has been opened, but it may not contain any files yet. (See figure below.) To make a file to store your shell script, click :console:`New File...`. This will display a box to enter the file name. Enter the filename as

.. tab-set::
    :sync-group: os

    .. tab-item:: :fab:`windows` Windows
        :sync: key1

        :console:`my_script.ps1`


    .. tab-item:: :fab:`apple` macOS / :fab:`linux` Linux
        :sync: key2

        :console:`my_script.sh`

.. figure:: ./images/vscode_new_file.png
   :width: 800
   :align: center
   :alt: VSCode New File... interface

You'll need to press :console:`Enter` on the keyboard, and then :console:`Create File` in the dialogue box that appears.

Once successful, you'll have an area to start adding your shell commands to, as shown below. (This figure assumes you're using Windows, so the script has a :console:`.ps1` extension).

.. figure:: ./images/vscode_blank_script.png
   :width: 800
   :align: center
   :alt: A blank file in VSCode


A simple script
^^^^^^^^^^^^^^^
In your file, enter the code

.. tab-set::
   :sync-group: os

   .. tab-item:: :fab:`windows` Windows
      :sync: key1

      .. code-block:: console
           
         # Display a welcome message
         $name = "Alex"
         Write-Host "Hello $name!"

         # Display a different message depending on the value of $hour
         $hour = 13
         if ($hour -ge 12) {
             Write-Host "It is the afternoon."
         } else {
             Write-Host "It is the morning."
         }
        
        This is a very simple script. It:
        
        - Contains some `comments <https://uom-eee-eeen11202.github.io/notes-part1/chapters/software_development_tools/comments.html>`_, lines starting with :console:`#` to explain what's going on.
        - `Variables <https://uom-eee-eeen11202.github.io/notes-part1/chapters/programming_fundamentals/variables.html>`_ to store data in. In Powershell, variables start with a :console:`$`. 
        - :console:`Write-Host` is used to display output to the screen. 
        - There is then an `if statement <https://uom-eee-eeen11202.github.io/notes-part1/chapters/programming_fundamentals/conditionals_and_loops.html#if-else-statements>`_ to change what's displayed depending on the value of :console:`$hour`. Here :console:`-ge` means greater than or equal to.


   .. tab-item:: :fab:`apple` macOS / :fab:`linux` Linux
      :sync: key2

      .. code-block:: console
           
         
         #!/usr/bin/env sh

         # Display a welcome message
         name="Alex"
         echo "Hello $name!"

         # Display a different message depending on the value of $hour
         hour=13
         if [ "$hour" -ge 12 ]; then
             echo "It is the afternoon."
         else 
             echo "It is the morning."
         fi
        
      This is a very simple script.
        
      - The line starting :console:`#!` is known as a *shebang line*. This tells the computer which language to use to interpret the script. You may well have more than one installed. The :console:`sh` tells the computer to use whatever the system default is. 
      - There are then some some `comments <https://uom-eee-eeen11202.github.io/notes-part1/chapters/software_development_tools/comments.html>`_, lines starting with :console:`#` to explain what's going on.
      - `Variables <https://uom-eee-eeen11202.github.io/notes-part1/chapters/programming_fundamentals/variables.html>`_ store data. Here variables start with a :console:`$` when being used, but the :console:`$` isn't needed when putting a value in the console. 
      - :console:`echo` is used to display output to the screen. 
      - There is then an `if statement <https://uom-eee-eeen11202.github.io/notes-part1/chapters/programming_fundamentals/conditionals_and_loops.html#if-else-statements>`_ to change what's displayed depending on the value of :console:`$hour`. Here :console:`-ge` means greater than or equal to.

Save the file by selecting :console:`File / Save`.


Running the script
^^^^^^^^^^^^^^^^^^
To run the script, you have two options.

.. tab-set::
    :sync-group: os

    .. tab-item:: :fab:`windows` Windows
        :sync: key1

        1. Press the run button that appears in the VSCode GUI. This will run the script, and you'll see appropriate text in the terminal, as shown below.

        .. figure:: ./images/vscode_run_script.png
           :width: 800
           :align: center
           :alt: VSCode run button

        2. In a terminal enter the command

        .. code-block:: console

           > powershell.exe -noprofile -executionpolicy bypass -file .\\my_script.ps1

        .. figure:: ./images/terminal_run_script.png
           :width: 800
           :align: center
           :alt: Running a PowerShell script in the terminal

        :console:`.\\my_script.ps1` is a `relative address <https://uom-eee-eeen11202.github.io/notes-part1/chapters/computer_software/files_and_folders.html#absolute-vs-relative-addresses>`_. It assumes your terminal is in the same folder as the script. 

        By default, Windows blocks users from running arbitrary scripts for security reasons. The extra commands above tell Windows to ignore the security settings for this run of the script. This is fine for this lab, but of course you should take care when running script from others. You can change the Windows security settings so you don't need to give an override each time, but we won't cover that here.

        Change the values of :console:`$name` and :console:`$hour` and re-run the script to check it displays what you would expect. 

    .. tab-item:: :fab:`apple` macOS / :fab:`linux` Linux
        :sync: key2

        1. Press the run button that appears in the VSCode GUI. This will run the script, and you'll see appropriate text in the terminal, as shown below.

        .. figure:: ./images/vscode_run_script_unix.png
           :width: 800
           :align: center
           :alt: VSCode run button

        2. In a terminal enter the commands

        .. code-block:: console

           $ chmod u+x ./my_script.sh
           $ ./my_script.sh

        .. figure:: ./images/terminal_run_script_unix.png
           :width: 800
           :align: center
           :alt: Running a PowerShell script in the terminal

        :console:`./my_script.sh` is a `relative address <https://uom-eee-eeen11202.github.io/notes-part1/chapters/computer_software/files_and_folders.html#absolute-vs-relative-addresses>`_. It assumes your terminal is in the same folder as the script. 

        :console:`chmod u+x` changes the security settings, allowing the script to be run (executed :console:`x`) by the user (:console:`u`). You only need to set this once for each file, then the setting will be kept. :console:`./my_script.sh` actually runs the code. 
        
        Change the values of :console:`$name` and :console:`$hour` and re-run the script to check it displays what you would expect. 

As a challenge, get your script to automatically read the system time to determine which message to display. That is, rather than typing in a value for :console:`$hour`, use a command to set it for you. One Windows, read about the Get-Date command. On macOS/Linux, read about the date command. These give full dates by default, you'll need to add some switches for them to return only the current hour. Search the Internet or ask a chat bot for the options to provide.

.. admonition:: Solution
   :class: dropdown

   .. tab-set::
      :sync-group: os

      .. tab-item:: :fab:`windows` Windows
         :sync: key1

         .. code-block:: console
            
            # Display a welcome message
            $name = "Alex"
            Write-Host "Hello $name!"

            # Display a different message depending on the value of $hour
            $hour = Get-Date -Format HH
            if ($hour -ge 12) {
                Write-Host "It is the afternoon."
            } else {
                Write-Host "It is the morning."
            }


      .. tab-item:: :fab:`apple` macOS / :fab:`linux` Linux
         :sync: key2

         .. code-block:: console

            #!/usr/bin/env sh

            # Display a welcome message
            name="Alex"
            echo "Hello $name!"

            # Display a different message depending on the value of $hour
            hour="$(date +"%H")"
            if [ "$hour" -ge 12 ]; then
                echo "It is the afternoon."
            else 
                echo "It is the morning."
            fi


More scripts
^^^^^^^^^^^^
Many of the programming concepts introduced in Part 1, such as `loops <https://uom-eee-eeen11202.github.io/notes-part1/chapters/programming_fundamentals/conditionals_and_loops.html>`_ and `different data types <https://uom-eee-eeen11202.github.io/notes-part1/chapters/programming_fundamentals/data_types.html>`_ are possible in shell scripts if you need them. (Although if you're doing much more than simple computer automation you're likely better to use Python, as we'll learn about later in the course.) 

At the end of your script file from above add the code 

.. tab-set::
   :sync-group: os

   .. tab-item:: :fab:`windows` Windows
      :sync: key1

      .. code-block:: console

         # Display colours of the rainbow
         $colors = @("Red","Orange","Yellow","Green","Blue","Indigo","Violet")
         For ($i=0; $i -lt $colors.Length; $i++) {
             Write-Host $colors[$i]
         }

         # Display the contents of C:\ 
         Get-ChildItem -Path C:\ | ForEach-Object {
             Write-Host "$_"
         }

      Save the file and press the :console:`Run` button again. You should have an output like the below.

      .. figure:: ./images/vscode_loop_windows.png
         :width: 800
         :align: center
         :alt: Example of for loops in a Windows shell script

      This script now contains two different types of :console:`for` loop.

      1. The first has a list of colours. Each of these colours is accessed in turn, and :console:`Write-Host` is used to display them to the screen. 

      2. The second uses :console:`ForEach-Object`, and takes its input from :console:`Get-ChildItem`. That is, it looks up what what is in the folder asked for, :console:`C:\\` in this case. The results are passed to the for loop, so that each item can be used in turn, with the name of each item automatically stored in :console:`$_`. In the for loop, here we just display the name of each time. You could imagine carrying out more tasks, such as changing the name of files, or checking whether a file contains particular text, and so on. You would just add more lines of code between the curly brackers :console:`{}` of the :console:`ForEach-Object` command. 


   .. tab-item:: :fab:`apple` macOS / :fab:`linux` Linux
      :sync: key2

      .. code-block:: console

         # Display colours of the rainbow
         set -- "Red" "Orange" "Yellow" "Green" "Blue" "Indigo" "Violet"
         for a in "$@"; do 
           echo $a
         done

         # Display the contents of /
         for f in /*; do
           echo "/ contains $f"
         done

      Save the file and press the :console:`Run` button again. You should have an output like the below.

      .. figure:: ./images/vscode_loop_unix.png
         :width: 800
         :align: center
         :alt: Example of for loops in a shell script

      This script now contains two different types of :console:`for` loop.

      1. The first has a list of colours, stored using :console:`set` into a variable called :console:`$@`. Each of these colours is accessed in turn and put into a variable called :console:`$a`. :console:`echo` is used to display :console:`$a` to the screen. 

      2. The second uses :console:`/*` to find all of the files that are stored in :console:`/`. :console:`*` indicates find everything. These are put into a variable called :console:`$f`, and :console:`echo` is used to display :console:`$f` to the screen. 
      
      .. admonition:: Aside

         The above syntax, in particular the :console:`set` command is slightly awkward. Recall that our shebang line is :console:`#!/usr/bin/env sh`, and use the system's default. As we don't necessarily know what the default will be, we're restricted to a small set of commands that we know will work in every shell. There is a standard known as POSIX which defines this. For most Linux systems the default shell is bash, and so we could use :console:`#!/usr/bin/env bash` as the shebang line. The macOS the default shell is zsh, and so :console:`#!/usr/bin/env zsh`. Doing this allows many more commands and a much nicer array syntax. However, it would mean our code was no longer portable, able to run on any system. As we don't know what computer you're using, we went for the fully portable option. 

There are of course many more possible commands and things that you can investigate. That's not our aim here. Our aim is to give you a brief introduction and some insights into what's possible, so you can then build on this if you need to, or if you encounter shell scripts in your future work. 