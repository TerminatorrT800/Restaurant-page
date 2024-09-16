
const Home = function (contentDiv) {
    contentDiv.innerHTML = "";

    const headingContainer = document.createElement("div");
    headingContainer.classList.add("heading-container");

    const heading = document.createElement("div");
    heading.classList.add('heading');

    const h1Heading = document.createElement('h1');
    h1Heading.innerText = "Najbolji restorant";

    heading.appendChild(h1Heading);

    const review = document.createElement('div');
    review.classList.add('review');

    const reviewInner = document.createElement('div');
    reviewInner.classList.add('review-inner');

    const firstP = document.createElement('p');
    firstP.innerText = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."

    const secondP = document.createElement("p");
    secondP.classList.add('customer');
    secondP.innerText = "Zlatokosa";

    reviewInner.append(firstP, secondP);
    review.append(reviewInner);
    headingContainer.append(heading, review);

    const hours = document.createElement('div');
    hours.classList.add("hours");

    const hoursInner = document.createElement('div');
    hoursInner.classList.add('hours-inner');

    const hoursH1 = document.createElement('h1');
    hoursH1.innerText = "Hours";

    const days = document.createElement('div');

    var daysArr = ["Sunday: 8am-8pm", 'Monday: 6am-6pm', 'Thuesday: 6am-6pm', 'Wednesday: 6am-6pm', 'Thursday: 6am-6pm', 'Friday: 6am-6pm', 'Saturday: 8am-10pm'];

    for (let i = 0; i < daysArr.length; i++) {
        const p = document.createElement('p');
        p.innerText = daysArr[i];
        days.appendChild(p);
    }

    hoursInner.append(hoursH1, days)
    hours.appendChild(hoursInner);

    const location = document.createElement('div');
    location.classList.add('location');

    const innerLocation = document.createElement('div');
    innerLocation.classList.add('location-inner');
    innerLocation.insertAdjacentHTML('beforeend', '<h1>Location</h1>');
    innerLocation.insertAdjacentHTML('beforeend', '<p>123 Forest Drive, Forestville, Maine</p>');

    location.appendChild(innerLocation);

    contentDiv.append(headingContainer, review, hours, location);

}

export default Home;
