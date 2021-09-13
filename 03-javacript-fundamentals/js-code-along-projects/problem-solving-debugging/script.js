// 1. Let's do something with some headlines
const currentHeadline = "News in the world today"
const currentArticle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Habitant morbi tristique senectus et netus et malesuada. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. Turpis massa tincidunt dui ut ornare lectus sit amet. Ipsum dolor sit amet consectetur adipiscing. Lectus quam id leo in. Netus et malesuada fames ac turpis egestas. Laoreet sit amet cursus sit amet. Sagittis eu volutpat odio facilisis. Nunc sed blandit libero volutpat sed cras. Pharetra diam sit amet nisl suscipit adipiscing. Volutpat sed cras ornare arcu dui vivamus arcu. Lectus sit amet est placerat in egestas. Penatibus et magnis dis parturient. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor."

const hasPassedTest = true;
const amountOfWords = 957;

// 2. Before we start we need to make sure the headline isn't too long
if (currentHeadline.length > 15) {
    Headline = currentHeadline + "...";
}

// 3. Show it to the user
console.log("Nology Post 2021")
console.log(`Headline: ${Headline}`)
console.log(currentArticle);

// 4. Explame of meaningful function name.. getData() is vague
function getPost() {

}