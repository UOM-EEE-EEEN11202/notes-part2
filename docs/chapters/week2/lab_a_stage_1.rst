.. role:: console(code)
   :language: console

Stage 1
=======

Launching the terminal
----------------------
On a desktop/laptop type device you will already have a command line interface installed. Start this, following the instructions given below for your operating system.

.. tab-set::
    :sync-group: os

    .. tab-item:: :fab:`windows` Windows
        :sync: key1

        The terminal is called *PowerShell*. You have a **choice** for how to start this. 
        
        (1) You can start it directly by typing in :console:`powershell` to the search box in the start menu.

        .. figure:: windows_powershell_start.png
           :width: 800
           :align: center
           :alt: A Windows start menu search for the PowerShell app

        (2) You can first install *Windows terminal*. Launch the *Microsoft Store* and then search for :console:`terminal`. Then install *Windows Terminal*.

        .. figure:: windows_terminal_store.png
           :width: 800
           :align: center
           :alt: The Microsoft Store for installing Windows Terminal

        Then launch it by typing in :console:`terminal` to the search box in the start menu.

        .. figure:: windows_terminal_start.png
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

        .. figure:: windows_terminal.png
           :width: 800
           :align: center
           :alt: Windows terminal

    .. tab-item:: :fab:`apple` macOS / :fab:`linux` Linux
        :sync: key2

        .. figure:: unix_terminal.png
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

        .. figure:: windows_get_location.png
           :width: 800
           :align: center
           :alt: Windows terminal showing the Get-Location command


    .. tab-item:: :fab:`apple` macOS / :fab:`linux` Linux
        :sync: key2

        :console:`$ pwd`

        Remember, you don't type in the :console:`$`, that just to show you where the command prompt is.

        :console:`$ pwd` stands for print working directory. This will display something like 

        .. figure:: unix_get_location.png
           :width: 800
           :align: center
           :alt: Unix terminal showing the pwd command


The address shown will different depending on your computer settings and user name. Here the user name is alex. You should be able to open File Explorer/Finder/similar and find the same location on your computer. 

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

        .. figure:: windows_ls.png
           :width: 800
           :align: center
           :alt: Windows terminal showing the Get-ChildItem command


    .. tab-item:: :fab:`apple` macOS / :fab:`linux` Linux
        :sync: key2

        :console:`$ ls`

        This will display something like 

        .. figure:: unix_ls.png
           :width: 800
           :align: center
           :alt: Unix terminal showing the ls command

Again, you should be able to open File Explorer/Finder/similar and find the same location on your computer.


Changing folder
^^^^^^^^^^^^^^^


Command switches
^^^^^^^^^^^^^^^^


Further commands
^^^^^^^^^^^^^^^^




Shell scripts
-------------