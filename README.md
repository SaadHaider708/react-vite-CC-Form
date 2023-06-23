# Hey Guys!

Welcome to my project repository, this project is actually a task given to me for an evaluation and in return it is a very good learning step for me as well so I put my all into this app and hope you guys like it.

I am open to any feedback, additional ideas.

So let's go ahead and let me give you a brief overview about it.

## React-vite Credit Card Form
I have deployed the app here, feel free to check it out: https://react-vite-cc-form.netlify.app/

If the link dosn't work for some reason then shoot me an email which I will link at the end of this document.

## What is it?

An application that allows users to enter their credit or debit card details through a user-friendly and responsive interface. The app includes 5 input fields which offer validation, and upon entering the card details, an attractive card UI is displayed, filling in the corresponding data for each input field.

#### Features

- **Input Fields:** The app provides 5 input fields for users to enter their card details, ensuring perfect validation.

- **Card UI:** Upon entering the card details, a visually appealing card UI is displayed, dynamically filling in the data based on the input fields.

- **User-Friendly:** The app focuses on providing a seamless user experience, making it easy for users to enter their card details.

- **Responsive Design:** The app is designed to adapt to different screen sizes and devices, ensuring a consistent experience across platforms.

- **Form-Validation:** The app offers users friendly error messages if the user enters any invalid input based on the type of data to be entered 

## What Tools I Used?

- **React.js:** I used React as the main tool for development of this project, its created using **Vite** which helps a great deal in the build processand is light-weight and easy to get started with on a project of this level. 

- **Redux:** The use of redux was very much needed for this as there was a lot of state managent to take a look into, I tried using hooks like *useState* or *useRef* for the state managment but they were a lot jumbled up and almost unmanageable for anyone new looking at the code so I opted to use redux for this as it provides a pretty lean component file.

- **React-bootstrap**:I used bootstrap for the main layout of the UI, I used the npm version of Bootstrap asit was easy to setup and the best candidate to desing the layout of this specific app.

- **CSS Modules:** The main styling tool used was good old CSS but with a twist because it keeps your Styling scoped to the component you care using it it which is way better than to have overlapping styles especialy when you build your app

## How can I set it up?

You can just clone it by copying the git command below:

```bash
git clone https://github.com/SaadHaider708/react-vite-cc-form.git
```


or just download the zip file, extranct it and open the project folder with your IDE then proceed to the next step.



When your project is cloned you can open it up using your IDE and run this command in your terminal which will install all the required dependencies
```bash
npm install or npm i
```

## How to Run it?

After the dependencies are installed you can go ahead and run it using the command below:

```bash
npm run dev
```

After doing its thing, it should open up a new browser window, otherwise if you check your terminal (VSCode) it should give you the address to go to in my case it was **localhost:5171**

##### Bonus:

In case you wish to bundle the project, it is just as simple as setting it up, no Webpack, no Parcel,no configuration needed just use the following command when ready.

```bash
npm run build
```

Once its done building, it will create a **dist** in you project directory which will contain your bundled code all in one file ready for deployment.


***That's it you're good to go***


## What's missing?

I tried to add the feature to persist the user inputs on page reloads but that is still a work in progress, otherwise it should work as expected I am open to feedback and or any questions.

# Contact

## Saad Haider

Email : saad.haider708@gmail.com
