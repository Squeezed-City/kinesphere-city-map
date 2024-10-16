# Kinesphere city map
Experiments on mapping kinesphere infringement on the city scale


The most interesting are currently probably /extrudetile_24h_sqrt95 and extrudetile_logdensity_adjusted_gif/index7.html 
also hosted on https://rybakov.com/files/squeezed/extrudetile_24h_sqrt95/ and https://rybakov.com/files/squeezed/extrudetile_logdensity_adjusted_gif/index7.html

These maps show the expected amount of kinesphere infringement events on different sidewalks throughout the city. To approximate it, we used GPS data of people using their smartphones (a tiny slice of the population), used real world pedetrian counts to scale that tiny slice back up to the city population. Then we used the non-linear relationship between KI/s (kinesphere infringement per second) and density of people that we observed in the simulation, to display the expected KI/s throughout the city. 

For displaying the data we used mapbox techstack, and switched to custom GLSL shaders in the last iteration ( the contents of the extrudetile_logdensity_adjusted_gif folder) as mapbox toolset proved to limit expressivity. 
