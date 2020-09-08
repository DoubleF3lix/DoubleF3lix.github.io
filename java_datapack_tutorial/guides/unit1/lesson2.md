# Datapack Structure
It's important to know the structure/layout of datapacks before you work on them. This knowledge doesn't need to be extensive, but a basic overview of everything will make your development process much easier.

---
## Datapack Format
A full datapack format is as follows: 
```plaintext
.minecraft
  saves
    <WORLD NAME>
      datapacks
        <datapack name>
          pack.mcmeta
          data
            <namespace>
              advancements
              dimension
              dimension_type
              functions
              loot_tables
              predicates
              recipes
              structures
              tags
                blocks
                entity_types
                fluids
                functions
                items
              worldgen
                biome
                configured_carver
                configured_feature
                configured_structure_feature
                configured_surface_builder
                noise_settings
                processor_list
                template_pool   
            minecraft
              tags
                functions
                  load.json
                  tick.json 
```
We won't use the `dimension`, `dimension_type`, or `worldgen` folders for this course.

---
## Datapack Elements
A brief description of all datapack elements:
<table>
    <tr>
        <th>Element</th>
        <th>Description</th>
        <th>Format</th>
    </tr>
    <tr>
        <td>advancements</td>
        <td>Checks for a criteria and give a reward when that criteria is met</td>
        <td>JSON</td>
    </tr>
    <tr>
        <td>dimension</td>
        <td>Defines a custom dimension</td>
        <td>JSON</td>
    </tr>
    <tr>
        <td>dimension_type</td>
        <td>Defines how a custom dimension behaves</td>
        <td>JSON</td>
    </tr>
    <tr>
        <td>functions</td>
        <td>Defines commands to be run a single tick</td>
        <td>mcfunction</td>
    </tr>
    <tr>
        <td>loot_tables</td>
        <td>Defines how and what items should generate in various circumstances</td>
        <td>JSON</td>
    </tr>
    <tr>
        <td>predicates</td>
        <td>Defines condition(s) for various things</td>
        <td>JSON</td>
    </tr>
    <tr>
        <td>recipes</td>
        <td>Defines how items can be crafted in various containers</td>
        <td>JSON</td>
    </tr>
    <tr>
        <td>structures</td>
        <td>A saved group of blocks, ranging from sizes 1x1x1 to 48x48x48</td>
        <td>NBT</td>
    </tr>
    <tr>
        <td>tags</td>
        <td>Defines a group of blocks, entities, fluids, functions, or items</td>
        <td>JSON</td>
    </tr>
    <tr>
        <td>worldgen</td>
        <td>Defines how a world or dimension should generate</td>
        <td>JSON</td>
    </tr>
</table><br>

---
## Creating Functions
Functions can be created by creating a file with a `.mcfunction` extension in the `functions` folder of your datapack. For cleanliness and readability, you should sort unrelated functions into seperate folders, and related functions in sub-folders. For example, if you were to make a datapack for a minigame, you might organize your functions like so:
```plaintext
functions
  init.mcfunction
  main.mcfunction
  mechanics
    rocket_blaster
      summon.mcfunction
      deal_damage.mcfunction
    flamethrower
      set_on_fire.mcfunction
      burn_blocks.mcfunction
  menu
    start
      teleport_players.mcfunction
      start_countdown.mcfunction
    end
      clear_entities.mcfunction
      reset_map.mcfunction
```
Not only will this make your datapack cleaner, it will also help you when navigating functions themselves, since function calls will have more details.<br>
`function namespace:mechanics/rocket_blaster/summon` is much more clear than `function namespace:spawn_rocket`.

---
## Essential Commands
Commands will be covered more in Unit 3, but below are some functions that you need to know in order to use datapacks. Note that commands in functions cannot begin with a slash (`/`).
<br>
<br>
`reload` - This refreshes the datapack that is loaded in the game. If your datapack isn't working, always try `/reload` first.<br>
`tellraw <targets> <text-component>` - This displays a text-component to the targets<br>
`function namespace:path` - This runs a function defined in your datapack. (It has auto-complete, so don't worry about memorizing paths.)

---
## Looping and Load Functions
There are two special types of functions. The first is a "load" function. It does exactly what it says on the tin; it runs when the datapack is loaded, including `/reload`.
Load functions can be specified by modifying `load.json` in the minecraft namespace of your datapack.
```json
{
    "values": [
        "namespace:path/to/function1",
        "namespace:path/to/function2",
        "#namespace:function/tag"
    ]
}
```
Because the `values` parameter is a list, we can specify multiple functions to run on pack load. That last entry that begins with a hashtag (`#`) is called a function tag, which are discussed in Unit 5.
<br>
<br>
Looping functions are defined very similar to load functions. They run once per tick (ticks occur every 1/20th of a second. They are capped at 20 per second, but depending on lag or excessive operations, this can vary. This number is commonly called the TPS, or ticks per second. Unoptimized datapacks may cause TPS to drop.)<sup>1</sup>. 
Loop functions can be specified by modifying `tick.json` in the minecraft namespace of your datapack. The format for this is the exact same as `load.json`.

---
The next unit covers the fundamentals, or the parts of datapacks that don't relate to commands themselves but are required for many commands.<br>
To prepare for future units, create a function in your datapack now. We'll use this for learning purposes (referred to as a "playground").