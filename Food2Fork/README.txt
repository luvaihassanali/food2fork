Launch instructions:

1. Download and unzip/clone food2fork.zip. Navigate to folder in the terminal and run these commands:
- npm install (to install modules required by app - ignore depreceated warnings, packages unused
- npm start
At this point you should see this on your terminal:

> a3@1.0.0 start /home/luv/Desktop/a3
> node ./bin/www

2. Now point your browser to the url localhost:3000 or localhost:3000/recipes. A default load page will display showing the top 9 recipes on food2fork.com. If you prefer to get right into it you can use the url locahost:3000/reciples?ingredient= followed by the ingredients you have. (no spaces, seperated by commas). Ex. For stawberry and blueberry recipes you would enter into the url localhost:3000/recipes?ingredient=strawberry,blueberry. This will skip the default page and load recipes for you. 

3. On the default page, you can enter you ingredients into the textbox, followed by clicking the submit button. Again, while entering more than one ingredient do not use spaces and separate each ingredient by comma. Press enter/click submit and the page will be refreshed to display the top 9 recipes you can make with your ingredient(s). 

4. By clicking a recipe image a new tab will open to the food2fork webpage containing the specified recipe. 

Notes: 

- When searching use no spaces, only separate ingredients by commas, even when using url parameters

- App only works with ingredient (or ingredient combinations) which contains 9 or more entries on food2fork.com. For example, the combination watermelon,cheese only has 5 entries on food2fork so the app will not work. The combination watermelon, berry has 3 entries on food2fork so as well this will not work within this app. User will be asked to go back and try again with a different search query.
 
- Tested on Ubuntu 17.10 using Chrome Version 62.0.3202.89 (Official Build) (64-bit).

- optimal width for this app is >1400px 
