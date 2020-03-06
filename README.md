# Project 1: Wat weet de OBA van jou.
A project for the public library of Amsterdam. The tool is made in dutch. 

[![Screenshot of my project](/docs/screenshot.png)](https://gijslaarman.github.io/project-1-1920/)
> Click image for demo.
> **For the sake of this prototype use the ID: 348074.**

For this I created my own API endpoint: https://obaapi.gijsbertcharles.com/member/15
_(With a MongoDB database behind it, currently consists of ~20k users.)
Did I need to do this? No. Did I want to? Yes._

## Table of contents
- [Why I created this](#why)
    - [How does it work](#how)
- [Installation](#installation)
    - [Technical](#technical)
        - [My own utilites](#utils)

<a id="why"></a>
## ❓Why I created this 
It's kind of scary how easily you can make assumptions based of someone's loan History for books. The example I am using in my project, well very sensitive data. She has a child & either she's addicted to sex or her relationship isn't going too well. _(These are assumptions)._

<a id="how"></a>
#### How does it work
The OBA saved a lot of loan history data for every loan. I grouped all the loan data for each person to show you that you can make a lot of assumptions based on the books/dvd's.

<a id="installation"></a>
## Installation
**Clone/Fork this repo & you're good to go. No NPM packages used.** Only HTML/CSS & vanilla javascript used.

### Technical
Libraries used (found in HTML `<script>` tag.):
- 📚[FontAwesome](https://fontawesome.com/): ~~Being lazy~~, wanted to use some icons.
- 📚[Dayjs()](https://github.com/iamkun/dayjs): for formatting the Date objects.

<a id="utils"></a>
#### My own utilities I wrote:
- SearchFormHandler: A class that handles forms client side.
- render: function to render the templates.
- onInputChange: adds eventlistener to input field for the dropdown effect when empty.
- Some API calls:
    - My own API: 🧰 https://obaapi.gijsbertcharles.com/member/:idnumber
    - OBA's book API.

### Featured data
- For each person:
    - **memberId:** _Number_
    - **gender:** _String_
    - **yearOfBirth:** _Number_
    - **placeOfLiving:** _String_
    - **dateOfEnrolling:** _String_

- For each book (stored in array per person):
    - **ISBN:** _Number_ > Used to make a request to the OBA Api, fetch this book.
    --> Done fetching -->
    - **title:** _String_
    - **imgSrc:** _String_
    - **Authors:** _Array_ > _String_
    - **Genre(s):** _String_
    - **Language:** _String_
