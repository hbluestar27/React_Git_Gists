This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). <br/>

Using the API below, which will fetch Github gists, display each user’s avatar (owner.avatar_url) and files name (files.xxx) in a list. <br/>
<br/>
The list needs to be high performance, well structured, and easy to maintain. <br/>
You can use start will ReactJS template project using CLI: create-react-app TestOne <br/>
    In each row: <br/>
        ● Profile Image is from (array[n].owner.avatar_url) <br/>
        ● File Name is from (array[n].files.xxx) <br/>

API: https://api.github.com/gists/public <br/>
API Doc: ​https://developer.github.com/v3/gists/#list-all-public-gists <br/>

Page query options: <br/>
    ● since=YYYY-MM-DDTHH:MM:SSZ <br/>
    ● per_page=30 <br/>
    ● page=2 <br/>
<br/>
Requirements: <br/>
    ● Scroll 30 items then go to the next page using pagination <br/>
    ● Scrolling the list should be smooth <br/>
    ● Indicator to show loading state while the next page data is being fetched <br/>
    ● Scroll to the top when the next page is loaded <br/>
    ● When a row is clicked, the corresponding title should change its color, and picture should get darker to indicate a pressed state <br/>