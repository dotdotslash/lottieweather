# lottieweather

A react weather app with 5-day forecast utilizing Lottie/Bodymovin animations. Search for a city and get some stylish weather forecasts. 




## Build & Run

Please run ```npm install``` to download appropriate packages.

Then use ```npm start``` to start up dev project.

```npm run build``` for prod.


## Thoughts & Process

Using an API and displaying info such as a five day forecast is typical and straight forward. I wanted to build something I haven't seen before. Forecasts are pretty simple. The data, requests, and layout quite standardize. I could have explored and innovated more on the layout and interaction of the app, but I had other interests. Most weather apps utilize static and plain iconography to convey weather. I wanted to up the graphics of a weather app and create animated graphics.

I built the mockup in React, something I am still novice in as I generally focus on creative coding. I created the app with a simple layout and utilized Lottie and Bodymovin for creating the animations.
As a technical test most of my time was spend in building the React app, but ideally I would have enjoyed focusing on the design and animation of the weather illustrations. I went for a minimal, geometric design of the illustrations. Animations were kept simple and straight forward for production time. However with the use of After Effects and Bodymovin the animations could be quite complex and smooth without any additional performance issues. 


##  Tradeoffs 

The API from OpenWeatherMap was more difficult/time consuming than I originally thought. The free 5 day api provides detail weather every three hours for each day for five days. This made getting the average highs or lows for a day in particular more difficult. Easy solve would be using the 16 Day API as it would provide you with the desired information right away. Otherwise you would need to use the datetime information from 5 Day API to loop through the list of forecasts, group the days together, get the 3 hour average or high from block of info and average it to calculate the days high or average temperature to display. For time sake I forwent this calculation and just displayed one temp from each day. This completed the prototype while not being completely accurate as weather displayed would depend on what time of day the weather was read.

This is my first use of Lottie. I haven't explored performance issues, but seems to perform well. While the animation files are small, Lottie is a decent size and having a lot of animations on the page at once could be a problem. However for this use case the animations perform really well.  
    
	
## Further versions 

I left off some error handling and other UX features like deleting a row of city weather. I would have liked to add these features in. The over all visual design app is underwhelming as primary focus was on the animations. The clean simple layout helps focus on the colorful illustrations though. In further versions I would focus more on the UX and visual design of the app.