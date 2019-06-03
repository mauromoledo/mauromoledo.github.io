# 2019's version of my personal website

1. [Description](#description)
2. [Technologies](#technologies)
3. [Development](#development)
4. [Build your own version](#build-your-own-version)
5. [Demo](#demo)
6. [Screenshots](#screenshots)
7. [Themes](#themes)

### Description

For the 2018's version of my website I wanted to build something simpler with clear info and that was easy to read. I also wanted to build it in React, so I came up with this, a template for a personal website.

### Technologies

To build the website, I used [Gatsby.js](https://www.gatsbyjs.org/), a tool that eases up the process of extracting the static files of a React application and let them ready to be deployed to Github. As well as react, es6, webpack, html5 and styled-components.

### Build your own version

I wanted to build something that could easily be reused by someone else, developers or even people with no coding skills at all, so I've created a [config](https://github.com/thiagoloschi/thiagoloschi.github.com/blob/develop/src/config.json) file that gives you full control over the site's content. By changing this file, you can adapt the template to your own experiences and whithin some minutes, build your own personal website.

```js
  "personalInfo": {
    "name": {
      "firstName": "Thiago",
      "lastName": "Loschi"
    },
    "jobTitle": "Senior Front End Engineer",
    "location": "Ottawa, Canada",
    "contacts": [
      {
        "name": "linkedin",
        "url": "https://linkedin.com/in/thiagoloschi"
      },
      {
        "name": "github",
        "url": "https://github.com/thiagoloschi"
      }
    ]
  },
  "education": [
    {
      "period": {
        "beginDate": "2015",
        "endDate": "2016"
      },
      "school": "California State University East Bay",
      "major": "Computer Science",
      "type": "Non-degree continuing education",
      "place": "Hayward, United States",
      "badge": "https://media.licdn.com/dms/image/C510BAQGtl_-oVAWDfA/company-logo_400_400/0?e=1551916800&v=beta&t=NLbSN7SCrikdQJ_Vf1IL2HwGUYoWSdubFYrL7qe-NYg",
      "url": "https://www.csueastbay.edu"
    }
   ]
  },
  "experiences": [
    {
      "period": {
        "beginDate": "August 2018",
        "endDate": "current"
      },
      "jobTitle": "Senior Front End Engineer",
      "company": "Farfecth",
      "location": "Sao Paulo, Brazil",
      "description": "Working in a multidisciplinary global team, I'm currently helping to build what we consider to be the store of the future. My team is responsible for creating world class connected devices that will boost shoppers experience from the moment they walk in the store until they're ready to leave, making it also possible for them to continue shopping from home.\n\n There are two main React applications we're building and they're mostly being built using Redux, Nextjs, Electron, Webpack, Jest and Enzyme. The main one will be used on our fitting room's smart mirrors.\n\n I'm currently working on two product lines, the Store of The Future and the Black and White platform. Our core clients are huge and well known fashion brands like Chanel, Thom Browne and Browns and we always keep in mind the idea of having our products ready to be used for new clients in the future.",
      "url": "https://farfetch.com",
      "image": "https://i.amz.mshcdn.com/VWqhqdBXySHLqXPwYFLJOa3aJ54=/950x534/filters:quality(90)/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F446429%2Fa86e424d-51cc-447c-831b-a4b076a9a955.jpg",
      "color": "#fafafa",
      "text": "#333"
    }
  ],
  "theme": {
    "color": "#fff",
    "fontUrl": "https://fonts.googleapis.com/css?family=Montserrat",
    "fontName": "'Montserrat', sans-serif",
    "fontColor": "#000"
  }
}
```

To develop your own website, clone the project and follow these [instructions to set up your own github pages](https://guides.github.com/features/pages/), then read [gatsby docs on starting the project](https://www.gatsbyjs.org/docs/quick-start). Note that if you're cloning an existing project, you can jump to [starting the development server](https://www.gatsbyjs.org/docs/quick-start#start-development-server), after [installing the dependencies](https://www.gatsbyjs.org/docs/quick-start#install-gatsbys-command-line-tool). Once you're done with editting the config file, follow this article on how to easily [deploy your website to github pages](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/). You should then be ready to go! 

### Development

This time I decided not to open pull requests as I usually do. Instead, the code was written to the [develop](https://github.com/thiagoloschi/thiagoloschi.github.com) branch and deployed to the [master](https://github.com/thiagoloschi/thiagoloschi.github.com/tree/master) branch. New features and issues resolution will come in a form of PRs. Collaboration is welcome!

### Demo

A demo can be seen live at my own personal website: [thiagoloschi.com](https://thiagoloschi.com)

And there's also Monique's fork at <a href="https://monimoledo.github.io" target="_blank" >monimoledo.github.io</a>, which is an example of the template being used for the first time. :)

I'll edit this document with more use cases when there are any.

### Screenshots

<br />

**Desktop:** Scroll down for experience cards

<img width="1678" alt="screen shot 2018-12-07 at 6 48 22 pm" src="https://user-images.githubusercontent.com/10034981/49673144-95aadd80-fa54-11e8-81fd-b60b452b1515.png">
<img width="1679" alt="screen shot 2018-12-07 at 6 48 41 pm" src="https://user-images.githubusercontent.com/10034981/49673153-9c395500-fa54-11e8-8b65-26af3cf3e1e3.png">
<img width="1678" alt="screen shot 2018-12-07 at 6 48 59 pm" src="https://user-images.githubusercontent.com/10034981/49673163-a4919000-fa54-11e8-9db4-6c839b29dc36.png">

<br />

**Mobile:**

<img width="334" alt="screen shot 2018-12-07 at 6 49 22 pm" src="https://user-images.githubusercontent.com/10034981/49673154-9d6a8200-fa54-11e8-9e8f-67d5cd573beb.png">

<br />

**Tablet:**

<img width="399" alt="screen shot 2018-12-07 at 6 49 59 pm" src="https://user-images.githubusercontent.com/10034981/49673159-a0657280-fa54-11e8-9f5d-91d3747ad75a.png">

### Themes
You can also set a different theme and style it the way you want:

```js
  "theme": {
    "color": "#333",
    "fontUrl": "https://fonts.googleapis.com/css?family=Roboto",
    "fontName": "'Roboto', sans-serif",
    "fontColor": "#fff"
  }
```

![image](https://user-images.githubusercontent.com/10034981/53262645-efb35a80-36b5-11e9-944e-35dfb7e03bee.png)

