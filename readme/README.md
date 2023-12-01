# fed-assignment1
This is my FED Assignment 1 project.
Note: 
For video walkthrough, please refer to the submission on BrightSpace.
Please extract the file from the zip file to prevent errors.

# Loops and Love, a nonprofit committed to contributing to the community through crocheting.

My project, Loops and Love, is a fictional website for a nonprofit that is established by a group of crochet enthusiasts during the COVID-19 lockdowns. As there were extra time during the lockdowns, they decided to establish Loops and Love to spread love and kindness through crocheting. As their cause gain support over time, they offer free crochet patterns contributed by volunteers of the nonprofit and also conduct events like yarnbombing, plushy-giving and yarn donations.

This purpose of this website is to provide a place where users can access free crochet patterns to kickstart their project and create awareness on how to contribute back to the community with their passion in crocheting. Users of the website that were keen are also encouraged to sign up as a volunteer of the nonprofit to join the cause of spreading love and kindness as well as giving back to the community. It also aims to spread their cause to more people through social media and the website to recruit more volunteers to expand their cause to other parts of the country and hopefully empower people from across the globe to join their cause.
 
## Design Process

This website is for people who are interested in crocheting, no matter their experience or skill level (beginner, intermediate or even experts!). 

The goals of the users of this website is to explore their passion in crocheting, find crochet patterns to start a project, discover how they can contribute to the society through crocheting and if they are keen, joining Loops and Love's volunteer group to spread love and kindness through crocheting for the community. 

The implementation and the design of the website, which is colourful with an easy navigation contains services like crochet archives, yarnbombing, yarn donation and volunteering. This website is suitable for all kinds of users, to kickstart their journey in crocheting and contributing to the community with their skills and passion in crocheting.

- As a beginner in crocheting, I want to find an easy pattern to kickstart my journey in crocheting, so that I can get familiar with crocheting and handle harder projects in the future.

- As an individual who is intermediate in crocheting skills, I want to find crochet patterns that are slightly more complex. I want to attempt more bigger projects as a hobby or gift for a friend/family, so that I can be more proficient at crocheting to attempt complicated crochet projects with better accuracy.

- As an expert in crocheting, I want to find patterns that are challenging and requires the usage of different materials (wires, buttons etc.). I want to explore more about what I can do with crocheting and look around the website to take a look at what the nonprofit offers, so that I can be a part of the community to contribute to the community.

- As an individual who is just looking around, I want to explore what is it exactly that the nonprofit is about and what services does the website offer, so that I can see if I am interested in crocheting and volunteering with the nonprofit in the future.

The wireframe of this website is done in desktop, tablet and mobile view using Figma. The link to the Figma page is provided as follows and the wireframe with explanation and rationale (a Word document) can be accessed in GitHub.

Note that the wireframe in Figma does not have any explanation and it is only the layout of the website in different size views.

Link to the Figma wireframe: 
https://www.figma.com/file/VIWox7Us74AJvXMJfrAwyZ/FED-Assignment-1-Low-Fidelity-Wireframe?type=design&node-id=0%3A1&mode=design&t=o9vX1bnDl0Tee69i-1

## Features

- In every page of the website, there will be a navigation bar which contains the Loops and Love logo, which has the function to bring user back to the landing page upon clicking, and other navigation items to navigate to the other pages easily.

- In every page of the website (except the landing page), there will be a simple footer which contains three social media logos that intends to bring users to Loops and Love's social media page. Since the nonprofit is a small and fictional one, a simple footer is enough as not to overwhelm the users with loads of information. Note that the social media logos does not lead to the nonprofit's page, but to the social media login page instead as this is a fictional company and its website.

- The first part of the website is the landing page (index.html). It has a background image slideshow which showcases some of the projects that Loops and Love have done, with a title, some description and a clear explore button for the user to navigate through contents in the other pages.

- The second part of the website is the about us page (about.html). It has an image of the founders of Loops and Love and a brief explanation of how the nonprofit came to be, what they offer and what are their aspirations in the near future.

- The third part of the website is the our projects page (project.html). This page consists of three projects that the nonprofit is managing, with an image, title as well as a brief description to explain to the user before they delve deeper into the selected project.

- The last part of the website is the contact us page (contact.html). It contains a crochet image with some contact information of the nonprofit, and a sign up form to be a volunteer for users that are interested and passionate about the cause of the nonprofit.
 
### Existing Features

- Navigation bar - Allows every users to navigate through the website with ease when they press the corresponding pages that they wish to visit. Landing page can be accessed by pressing the logo on the navigation bar.

- Background image slideshow - Allows every users to take a look at projects that has been done by Loops and Love in the past when they are at the landing page.

- Explore button at landing page (index.html) - Allows every users to explore to about us page by pressing the button.

- Special selection boxes (project.html) - Allows every users to navigate to the respective project page by pressing the selection (image or text).

- Image enlarge (project.html) - Allows every users to enlarge the image for them to inspect it better by hovering on the image.

- Form validation - Allows every users to enter the right format for name and email by looking at the placeholder for the format and alerting them if they did not follow the format specified.

Additional features to be implemented in the future:

- Chatbot - Allows every users to enquire about more diverse problems by interacting with the chatbot.

- Pop up interactions (feature exists, more to styling) - Allows users that are interested in signing up to know that if their input is correct by having a pop up message alerting them.

- Custom cursor - Allows users to interact with website elements and explore its functionalities by pointing/hovering over an element, where the cursor changes accordingly.

Note: In JavaScript, each features are separated and written in its own event listener to make code more maintainable and readable.

### Features Left to Implement

- Chatbot - Allows every users to enquire about more diverse problems by interacting with the chatbot.

- Custom cursor - Allows users to interact with website elements and explore its functionalities by pointing/hovering over an element, where the cursor changes accordingly.

## Technologies Used

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
    - The project uses **HTML** to make the framework of the website.

- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
    - The project uses **CSS** to style the website to be more aesthetic and user-friendly.

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    - The project uses **JavaScript** to add interactive elements and input validations to the input boxes in the website.

- [Font_Awesome](https://fontawesome.com/)
    - The project uses **Font_Awesome** to get access to the social media logos used for navigating to the social media pages.

- [Figma](https://www.figma.com/)
    - The project uses **Figma** to plan and make the wireframe of the website in different screen sizes.

- [GitHub](https://github.com/)
    - The project uses **GitHub** to store and share the website.

## Testing

1. Sign up form:
    1. Go to the "Contact Us" page.
    2. Try to submit the empty form and verify that an error message about the required fields appears.
    3. Try to submit the form with invalid name (not 5-20 letters) and verify that a relevant error message appears.
    4. Try to submit the form with invalid email format and verify that a relevant error message appears.
    5. Try to submit the form with all inputs valid and verify that a success message appears.

Project looks

- On desktop and tablet, the div blocks containing the contents are aligned horizontally across the webpage.

- On mobile, the div blocks containing the contents are aligned vertically as the mobile screen size is smaller than the desktop and tablet screen size and viewed vertically as opposed to horizontally on the desktop and tablet screen size.

## Credits

### Content
- As it is a fictional website, the text for all the webpages are self-crafted.

### Media
- The photos used in this site were obtained from ...

- Background slideshow image 1
    - (https://www.tinycurl.co/wp-content/uploads/2022/05/blog-frog-amigurumi1.jpg)

- Background slideshow image 2
    - (https://idsb.tmgrup.com.tr/ly/uploads/images/2020/07/28/48860.jpg)

- Background slideshow image 3
    - (https://curiouspapaya.com/cdn/shop/articles/2_413d2269-83fe-4aa4-b6cf-2ef4987ba50a.png?v=1683949534)

- Image on about.html
    - (https://www.cambridgeindependent.co.uk/_media/img/750x0/8I5BY42FKF41Y4TINB4W.jpg)

- Image 1 on project.html
    - (https://i.etsystatic.com/18200874/r/il/89b24d/3633608213/il_1080xN.3633608213_dciv.jpg)

- Image 2 on project.html
    - (https://laughingsquid.com/wp-content/uploads/2013/10/SquidTree.jpg)

- Image 3 on project.html
    - (https://images.prismic.io/lc-yarn/794439b2-d737-42a3-8479-aeaf92c7bccf_kfi+indulgence+kettle+dyed+fingering.jpg?auto=compress,format&rect=0,0,1000,590&w=1000&h=590)

- Image on contact.html
    - (https://i.insider.com/60352a14bed5c50011a2c0c9?width=700)

### Acknowledgements

- I received inspiration for this project from my sister who likes to create cute crochet projects and give it to others as a gift.
