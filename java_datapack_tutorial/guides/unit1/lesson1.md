# Enviroment Setup
Before you start creating datapacks, you'll need to setup your enviroment.

---
## Required Skills
You should be familiar with your system and file explorer, be comfortable with creating, renaming, opening, and editing both files and folders, and you should own a legal copy of Minecraft. If you don't own a copy of minecraft, you can get one [here](https://www.minecraft.net/en-us/store/minecraft-java-edition).

---
## Enabling File Extensions
Enabling file extensions will allow to you create functions that aren't secretly `.txt` files. On Windows 10, you can find this in the "View" tab. <br><br>![Enabling File Extensions](/images/enableFileExtensions.png)

---     
## Text Editors      
All text editors will work (yes, even notepad, but don't), but it is reccomended you use Visual Studio Code, which you can get [here](https://code.visualstudio.com/).

If you decide to use a different text editor, you can ignore this next section.

---
## Installing Visual Studio Code Extensions
Once you have Visual Studio Code (VSCode) installed, you'll need two extensions to make your development easier.
The first one is language-mcfunction by Arcensoth, which you can get [here](https://marketplace.visualstudio.com/items?itemName=arcensoth.language-mcfunction), or by clicking the extensions button in your toolbar (it looks like a grid of four with one block coming off) and searching for "language-mcfunction". This extension allows for syntax highlighting for minecraft functions.

The second extension is Datapack Helper Plus by SPGoding which you can get [here](https://marketplace.visualstudio.com/items?itemName=SPGoding.datapack-language-server), or by clicking the extensions button in your toolbar and searching for "data-pack helper plus". This extension helps with auto-completion, error tracking, command syntax, code snippets, and all sorts of other features.

---
## File Setup
Datapack structure will be discussed more in-depth in the next lesson, but here we'll setup the very basics.


First, go to your game files. For Windows users, by default, this is in `C:\Users\<USERNAME>\AppData\Roaming\.minecraft`. This directory can be accessed on Windows 10 by typing `%appdata%` in your search bar, and then going into the `.minecraft` folder. It is recommended you create a shortcut here and place it somewhere you'll remember for easy access later.
You should also create a new world for testing your datapacks, so it doesn't mess up anything in any important worlds you may have.

Go into your world and in the `datapacks` folder, create a new folder and call it whatever you like. Inside of that folder, create a new file named `pack.mcmeta`(make sure it doesn't have any other extensions) and a new folder which should be named `data`. The `data` folder holds all of the namespaces for your datapack. You can have as many namespaces as you'd like, but for this course, we'll only use the `minecraft` namespace and a single namespace with a name of your choosing.

Inside of `pack.mcmeta`, add the following lines:
```json
{
  "pack": {
    "pack_format": 6,
    "description": "Datapack description"
  }
}
```
Depending on your version, you may need to edit the `pack_format`. See the table below.
<table>
    <tr>
        <th>Version</th>
        <th>Pack Format</th>
    </tr>
    <tr>
        <td>1.13 to 1.14</td>
        <td>4</td>
    </tr>
    <tr>
        <td>1.15 to 1.16.1</td>
        <td>5</td>
    </tr>
    <tr>
        <td>1.16.2+</td>
        <td>6
    </tr>
</table>
Once your basic datapack is finished, load your world and type `/datapack list` in chat. Note that the `data` folder is not required to make a datapack, but it is required for all content. <br>
If you see something like `[vanilla (built-in)], [file/<DATAPACK NAME> (world)]`, then you did it! If not, you can download a sample datapack [here](/samples/unit1/lesson1.zip) to compare.