# React chat app

In this application you can send messages, images, create and delete chat rooms, add people to rooms, view the history of messages and images.

All backend functions comes from this [API](https://chatengine.io/). User data is saved on your local storage.

## Test the app

You can login to the app with these users

- user1 - 123
- user2 - 123
- user3 - 123
- user4 - 123

There is no logout button, to logout you need to delete your local storage.

    > 1. Open Google Chrome Console by pressing F12 key.
    > 2. Select “Application” in the top menu of the console.
    > 3. Select "Local Storage" from the menu on the left of the console.
    > 4. Right click on your site(s) and click delete to remove local storage.
    > 5. Reload the page

## Things Learned

While doing this project I learned useful concepts and ways to make things with react. For example, local storage is a good way to save the user data to make a simple login, new ways and cases to use spread and ternary operators, I learned how to split my code into react components to have the code logic in one place.

## Things to improve

This code was made following a youtube tutorial, if I had time I would improve the duration it takes for the app to switch between each room, convert the css styles into styled components or css modules and I would also add a logout button.