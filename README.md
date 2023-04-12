
# TheWiccaHouse
<!-- Repository Information & Links-->
<br />

![GitHub repo size](https://img.shields.io/github/repo-size/bee2805/TheWiccaHouse)
![GitHub watchers](https://img.shields.io/github/watchers/bee2805/TheWiccaHouse)
![GitHub language count](https://img.shields.io/github/languages/count/bee2805/TheWiccaHouse)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/bee2805/TheWiccaHouse)

<br/>

<!-- HEADER SECTION -->
<h5 align="center" style="padding:0;margin:0;">Bronwyn Potgieter</h5>
<h5 align="center" style="padding:0;margin:0;">200089</h5>
<h6 align="center">DV300 - Term 1 | 2023</h6>
</br>

<p align="center">

  <a href="https://github.com/bee2805/TheWiccaHouse">
    <img src="https://github.com/bee2805/TheWiccaHouse/blob/main/README_files/logo.png" alt="Logo" width="140" height="140">
  </a>
    
   <br />
   <br />
   <!-- TODO: Add demo video -->
   <a href="https://drive.google.com/file/d/13yYQyI_oNGEweU1Nftim3kCc0yPdMXoP/view?usp=sharing">View Demo</a>
    ·
    <a href="https://github.com/bee2805/TheWiccaHouse/issues">Report Bug</a>
    ·
    <a href="https://github.com/bee2805/TheWiccaHouse/issues">Request Feature</a>
</p>

<!-- TABLE OF CONTENTS -->
<!-- TODO: Edit table of contents -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Project Description](#project-description)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [How to install](#how-to-install)
* [Angular Know How](#angular-know-how)
* [Features and Functionality](#features-and-functionality)
* [Concept Process](#concept-process)
   * [Ideation](#ideation)
   * [Wireframes](#wireframes)
* [Development Process](#development-process)
   * [Implementation Process](#implementation-process)
        * [Highlights](#highlights)
        * [Challenges](#challenges)
   * [Future Implementation](#future-implementation)
* [Final Outcome](#final-outcome)
    * [Final Mockup](#final-mockup)
    * [Video Demonstration](#video-demonstration)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

<!--PROJECT DESCRIPTION-->
## About the Project
<!-- header image of project -->
![image1](https://github.com/bee2805/TheWiccaHouse/blob/main/README_files/Mockup1.png)

### Project Description

The Wicca House is the place to go to fulfill all your wicca needs! This MEAN stack application allowa users to track an inventory full of different ingredients and use their inventory to craft magical potions! All data is stored on MongoDB and dynamically displayed using angular components.

### Built With

* [MongoDb](https://www.mongodb.com/cloud/atlas/lp/try4?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_prosp-brand_gic-null_emea-za_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624560&adgroup=115749711783&cq_cmp=12212624560&gclid=CjwKCAjwrdmhBhBBEiwA4Hx5gwIGpkEruXr_caRUjW88LyJqH6PRomd6JRg8vT2zCXD2nG2yF58cwBoCmsQQAvD_BwE)
* [Express](https://expressjs.com/)
* [Angular](https://angular.io/)
* [Node](https://nodejs.org/en)
* [Typescript](https://www.typescriptlang.org/)
* [AngularMaterial](https://material.angular.io/)

## Getting Started
<!-- GETTING STARTED -->
The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
Ensure that you have GitHub desktop and Android Studio downloaded onto your machine.

### How to install

Here are a couple of ways to clone this repo:

1. GitHub Desktop </br>
Enter `https://github.com/bee2805/BattleofTheGenerations.git` into the URL field and press the `Clone` button.

2. Clone Repository </br>
Run the following in the command-line to clone the project:
   ```sh
   git clone https://github.com/bee2805/BattleofTheGenerations.git
   ```
    Open `Software` and select `File | Open...` from the menu. Select cloned directory and press `Open` button
<!-- Make sure to add appropriate information about what prerequesite technologies the user would need and also the steps to install your project on their own mashines -->
## Angular Know How

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.6.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

<!-- FEATURES AND FUNCTIONALITY-->
## Features and Functionality

### Landing Page

The landing page has appropriate information about The Wicca house, and lets the user know what to expect when using it.

![image2](https://github.com/bee2805/TheWiccaHouse/blob/main/README_files/Mockup2.png)

### Inventory

The inventory page showcases a list of all the ingredients in the inventory. These ingredients can be filtered based on their category (light magic, dark magic or the potions that have been, and can be crafted). The user can also update the amount of inventory if they need more to craft their desired potion, but they have to be verified before doing so.

![image3](https://github.com/bee2805/TheWiccaHouse/blob/main/README_files/Mockup3.png)

### Crafting Section

Here, the user (if verified) will be able to select a potion that they wish to craft. The potion can only be crafted if there are enough ingredients in the inventory. Once a potion is crafted, it can be found on the unventory page under 'potions', and the quantity of the used ingridients will be updated accordingly.

![image4](https://github.com/bee2805/TheWiccaHouse/blob/main/README_files/Mockup4.png)

<!-- CONCEPT PROCESS -->
## Concept Process

* I started off my ideation process by coming up with a few ideas for the theme. Once I had my theme in place, I thought about different ingredients and potions that could be included. Thereafter, I sketched my initial wifeframes and got to work!

### Ideation

![image5](https://github.com/bee2805/TheWiccaHouse/blob/main/README_files/Ideation.png)
<br>

### Wireframes

![image6](https://github.com/bee2805/TheWiccaHouse/blob/main/README_files/Wireframes.png)

<!-- DEVELOPMENT PROCESS -->
## Development Process

### Implementation Process
<!-- stipulate all of the functionality you included in the project -->
<!-- This is your time to shine, explain the technical nuances of your project, how did you achieve the final outcome!-->

* I started off my angular project by generating components and styling them using html and css
* I added routing and incuded all appropriate navigation links
* The next step was to then set up my back end with appropriate shemas routs for my CRUD functinality
* Got the data and displayed it dynamically in angular components

#### Highlights
* Overall, The theme of this project was really cool. It allowed me to be super creative and free with my design choices.
* I really enjoyed learning Angular and Typescript
* The crafting section was my favorite part. 

#### Challenges
<!-- stipulated the challenges you faced with the project and why you think you faced it or how you think you'll solve it (if not solved) -->
* I struggled with the select on the crafting page and inputting that data dynamically. At the end of the day I was successful, however I believe I would be able to achive the same functionality in a much simpler way and in less lines of code. I aim to acieve this in the future.
* I also struggled to have a defualt value on the select option because I used the value property to filter my data.


#### Above And Beyond

* I added modals that pop up once editing and crafting inventory with data passed to those modals that showcase what exactly was crafted/edited.
* The side nav was also implemented following a tutorial found on youtube.

### Future Implementation
<!-- stipulate functionality and improvements that can be implemented in the future. -->

* I'd like to get the select to have a default value
* I would love to make use of the potions that have been crafted, and maybe use them to craft other potions.

<!-- MOCKUPS -->
## Final Outcome

### Final Mockup

![image7](https://github.com/bee2805/TheWiccaHouse/blob/main/README_files/Mockup5.png)
<br>

<!-- VIDEO DEMONSTRATION -->
### Video Demonstration

To see a run through of the application, click below:

[View Demonstration](https://drive.google.com/file/d/13yYQyI_oNGEweU1Nftim3kCc0yPdMXoP/view?usp=sharing)


See the [open issues](https://github.com/bee2805/TheWiccaHouse/issues) for a list of proposed features (and known issues).

<!-- AUTHORS -->
## Authors

* **Bronwyn Potgieter** - [bee2805](https://github.com/bee2805)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.\

<!-- LICENSE -->
## Contact

* **Bronwyn Potgieter** - [bronwyn.potgieter@yahoo.co.za](mailto:bronwyn.potgieter@yahoo.co.zas) - [@bronns_designs](https://www.instagram.com/bronns_designs/) 
* **Project Link** - https://github.com/bee2805/TheWiccaHouse

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
<!-- all resources that you used and Acknowledgements here -->
* [Artstation Material Studies](https://www.artstation.com/search?sort_by=relevance&query=material%20study)
* [Artstation Potion Bottles](https://www.artstation.com/search?sort_by=relevance&query=potion%20bottles)
* [Heading Font](https://fonts.google.com/specimen/Press+Start+2P?query=Press+Start+2P)
* [Subheading + Paragraph Font](https://fonts.google.com/specimen/Courier+Prime?query=Courier+Prime)
* [Background Image](https://www.vecteezy.com/vector-art/16265381-stilt-house-in-swamp-in-forest-at-night)
* [Icons](https://fontawesome.com/)
* [Main Mockup](https://www.mockupworld.co/free/workspace-mit-imac-scene-creator-mockup-set/)
* [Clay Mockup](https://www.mockupworld.co/free/web-design-showcase-with-imac-macbook-and-iphone-mockup/)
* [Wireframe Mockup](https://www.mockupworld.co/free/website-or-presentation-template-mockup/)
