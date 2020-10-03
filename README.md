This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Using the API below, which will fetch Github gists, display each user’s avatar (owner.avatar_url) and files name (files.xxx) in a list.

The list needs to be high performance, well structured, and easy to maintain.
You can use start will ReactJS template project using CLI: create-react-app TestOne
    In each row:
    ● Profile Image is from (array[n].owner.avatar_url)
    ● File Name is from (array[n].files.xxx)

API: https://api.github.com/gists/public
API Doc: ​https://developer.github.com/v3/gists/#list-all-public-gists

Page query options:
    ● since=YYYY-MM-DDTHH:MM:SSZ
    ● per_page=30
    ● page=2

Requirements:
    ● Scroll 30 items then go to the next page using pagination
    ● Scrolling the list should be smooth
    ● Indicator to show loading state while the next page data is being fetched
    ● Scroll to the top when the next page is loaded
    ● When a row is clicked, the corresponding title should change its color, and picture should get darker to indicate a pressed state