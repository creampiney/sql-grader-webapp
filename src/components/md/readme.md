# Discord SonarSlime Bot (Sound Effect Bot)
This bot will show sound effects which are added in server. Python is mainly used in the project.
## Installation
- Download [this project's zip file](https://github.com/creampiney/discord-sfx-sonarslime/blob/main/discord-sfx-sonarslime.zip?raw=true), put all files in one folder.
- Create `config.json` in the same folder and write as the following: 
    ```json
    {"DISCORD_TOKEN":"<YOUR_BOT_TOKEN>"}
    ```
    replace `<YOUR_BOT_TOKEN>` with your bot's token id from [discord developer portal](https://discord.com/developers).
- Install python and related packages/libraries which are labelled in `requirements.txt`
- Run `bot.py`, don't forget to invite your bot in your server.
## Usage
### Sound Effect Board
To open sound effect board, type `-sf` on the discord chat and sound effect board will appear.
For the server which newly use this bot, there will be 5 initial sound effects:

|   Sound Effect  |                     Link                    |
|:---------------:|:-------------------------------------------:|
| Illuminati      | https://www.youtube.com/watch?v=sahAbxq8WPw |
| Quack           | https://www.youtube.com/watch?v=nucoyLwGsoY |
| Detective Conan | https://www.youtube.com/watch?v=RsyxFQ23Ezk |
| YEAY            | https://www.youtube.com/watch?v=kp42doFyeiM |
| Kahoot          | https://www.youtube.com/watch?v=hnnUD9-hD8A |

When you click on the blue button, sound effect will play. You can stop playing sfx by pressing red `Stop Sound Effect` button.
### Options Board
Press the green button labelled `Refresh / Add or Remove SFX`.
Five options will appears as following:
|   Button   |                                          Function                                          |
|:----------:|:------------------------------------------------------------------------------------------:|
| Refresh    | Refresh the sound effect board.                                                            |
| Add SFX    | Add sound effect in recent server's sfx board.                                             |
| Remove SFX | Remove sound effects in recent server's sfx board.                                         |
| Info       | List information of selected button, including name, link, adder, and date which is added. |
| Rename     | Rename the button.                                                                         |

### Adding Sound Effect
Press the green button labelled `Add SFX` in options board. The bot will ask for 2 steps.
- Name of the button that will be shown in the board.
- URL of the sound effect. Only YouTube URL will work.
    - In case of using mp3 file instead of YouTube URL, type file name without extension and put sound effect mp3 in the folder `sf`.

To cancel the process, type `sf_exit` to leave the process.

### Deleting Sound Effect
Press the red button labelled `Remove SFX` in options board. The bot will let you choose all sound effects you want to delete. (You can choose more than 1)

When you choose the sound effects you want to delete, the button will change color to green. To cancel the selected sfx, press the button again and the button will turn to original blue.

To deleted all selected sound effects, click on the red button `Remove SFXs`. The selected sound effects (Effects with green buttons) will be deleted.

### Information of Sound Effect
Press the grey button labelled `Info` in options board. The bot will ask for sound effect you want to see the information.

4 informations will shown after you choose sfx:
- Name : The name of the button
- Link : URL of sound effect (or file name in case you use mp3 file in folder `sf`)
- Adder : Name of adder (For the initial sound effects, the adder will be "SonarSlime")
- Date : Time which this effect was added to the board.

### Renaming Button
Press the grey button labelled `Rename` in options board. The bot will ask for sound effect you want to rename.

After you select the sound effect, type new button name for changing.

To cancel the process, type `rename_exit` to leave the process.

## Database
The data of this bot mainly kept on files in `data` directory.

### buttonlist
This directory will store data about buttons and sound effects in each server. One server will store in 1 file labelled `buttonlist<SERVER_ID>.sns`. In each of the files, the data will store in the format of 4 lines per 1 sound effect.

Example:
```
Illuminati                          # Sound Effect Name (Button Name)
sf_01                               # URL or file name (This will be prefixed with "sf_") -> This will be use as button's custom_id
SonarSlime                          # Adder
2022-02-21 12:20:37.765271          # Date which was added
```

### recover
This directory will store data about deleted sound effects in each server. Every deleted sound effects will be store in this directory. One server will store in 1 file labelled `recover<SERVER_ID>.sns`. In each of the files, the data will store in the format of 4 lines per 1 sound effect.

Example:
```
Detective Conan                                         # Sound Effect Name (Button Name)
sf_https://www.youtube.com/watch?v=RsyxFQ23Ezk          # URL or file name (This will be prefixed with "sf_")
Piney                                                   # Person who delete
2022-03-04 15:36:25.472733                              # Date which was deleted
```
