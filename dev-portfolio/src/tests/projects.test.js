const { projects } = require("../constants/projects");

test("Project details are correct", () => {
  expect(projects).toMatchInlineSnapshot(`
    Array [
      Object {
        "description": "Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
        "id": 0,
        "image": "/images/1.png",
        "source": "https://google.com",
        "tags": Array [
          "Mongo",
          "Express",
          "React",
          "Node",
        ],
        "title": "MERN Memories",
        "visit": "https://google.com",
      },
      Object {
        "description": "While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",
        "id": 1,
        "image": "/images/2.png",
        "source": "https://google.com",
        "tags": Array [
          "React",
          "JavaScript",
        ],
        "title": "E-Commerce",
        "visit": "https://google.com",
      },
      Object {
        "description": "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
        "id": 2,
        "image": "/images/3.jpg",
        "source": "https://google.com",
        "tags": Array [
          "React",
          "WebRTC",
        ],
        "title": "WebRTC App",
        "visit": "https://google.com",
      },
      Object {
        "description": "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
        "id": 3,
        "image": "/images/4.jpg",
        "source": "https://google.com",
        "tags": Array [
          "React",
          "ChatEngine",
          "Firebase",
        ],
        "title": "Unichat",
        "visit": "https://google.com",
      },
    ]
  `);
});
