.. role:: console(code)
   :language: console

.. _lab_a:

Theory
======

We don't have a lot of new theory to introduce in Week 2. Most of what we need we'll see practically, by actually working in the lab. There is one important factor, around security settings.


Security settings
-----------------
In :ref:`Lab A <lab_a>` we will look at *shell scripts*. These let us collect together multiple commands for the `command line <https://uom-eee-eeen11202.github.io/notes-part1/chapters/computer_software/gui_and_cli.html>`_ to run them all at once, rather than one command at a time. 

For security purposes, your computer will almost certainly block scripts from running by default. We need to take some additional steps to tell the computer the script is OK to run. This is important, because otherwise anything you download from the Internet could have a script hidden inside it. If they weren't blocked from running by default, they might try and do nefarious things to your computer. 

To prevent this, there is a process known as the `active control list <https://en.wikipedia.org/wiki/Access-control_list>`_ which set what permissions a user has for working with any particular file. Briefly (and there can be more verbose settings which are not important here), a user may:

- Have permission to *read* a file. That is, to view the contents, but not do anything else.
- Have permission to *write* to a file. That is, to edit the contents of the file. Note you don't necessarily need read permissions to have write permissions, you can just forcefully overwrite whatever is present. 
- Have permission to *execute* a file. That is, to run the file if it is a script or program. 

You can have any mixture combination of these permissions. 

The permissions are also separated out per-user. You can give one user specific permissions. Or set the same permissions for a group of users. Or give a default level of permissions for everyone. As you're working by yourself we won't worry about anything other that giving permissions so that you can run our scripts. 

If you type:

.. tab-set::
    :sync-group: os

    .. tab-item:: :fab:`windows` Windows
        :sync: key1

        .. code-block:: console

           > Get-ChildItem
           > Get-Acl *

    .. tab-item:: :fab:`apple` macOS / :fab:`linux` Linux
        :sync: key2

        .. code-block:: console

           % ls -la

into the command line you will get a display of the permissions that are present. (Remember the :console:`>` or :console:`$` is displayed by the terminal for you. You don't need to enter it, it's to show you each command.) This display is slightly different depending on your operating system. Examples are shown below. We won't worry about the exact syntax of these here.

.. tab-set::
    :sync-group: os

    .. tab-item:: :fab:`windows` Windows
        :sync: key1

        .. figure:: windows_permissions.png
           :width: 800
           :align: center
           :alt: Windows terminal showing file permissions

    .. tab-item:: :fab:`apple` macOS / :fab:`linux` Linux
        :sync: key2

        .. figure:: linux_permissions.png
           :width: 800
           :align: center
           :alt: Linux terminal showing file permissions

In order to run a script directly at the command line the user must have execute permissions for that file. They don't necessarily need other permissions. We won't go into any more depth on this here. We'll see how to give our scripts the permissions they need to run as part of the lab.

Note that we generally only need to worry about permissions when looking at shell scripts. With other programming files, they are automatically given execute permissions behind the scenes because they're not started directly from the command line, due to the details of how a program is `compiled <https://uom-eee-eeen11202.github.io/notes-part1/chapters/programming_fundamentals/scripts.html>`_.