# INFO6250
For assignment review


*New Update About Hit counter project*

About this Hit counter project, my understanding is that we should implement a counter function in our website. This counter function can provide us the visitors data of our website, by minute, by hour, by day or even a specific time period. And then business analyst can use these data to improve our website.

Considering the position of this visitor counter, the visitor counter should in the mainpage. As we have three web pages so far, they are mainpage, signup page and login page, when user come to our website, the mainpage is their first step. So we should count visitors in the mainpage.

Here are the steps that I implement this idea:

1. Based on the database(Redis) we used right now, add a new function called INCR in app.php;
2. Update app controller by adding new methods in mycontroller.js to get total visitor number, also add this view part(total visitor number) in mainpage;
3. Create a new web page to show a search function, which will display the visitor number based on your input time, it is convenient if user want to check specific time period;
4. Deploy this app in Google Compute Engine, here is the link http://104.155.145.67/eve.com/mainpage.html

After add this function to our website, I think about other problems we might have:

First, if our website have large number of user, the current function maybe need to do some update. Like change to other database.

Second, the user information should not appeared in the mainpage. This information should be viewed only by employees, if we create a employee entry of this website, then we can put these information in that entry.





