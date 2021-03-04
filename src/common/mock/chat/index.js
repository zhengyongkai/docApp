let Mock = require("mockjs");
// let Random = Mock.Random;
Mock.mock(
  "/chat/chatMessage",
  "get",
  Mock.mock({
    "chatmessage|15": [
      {
        name:"@name",
        img: '@image(200x100,@color,@name)',
        text: "@cparagraph(2)",
        time: '2021-03-04 14:@integer(10,23):@integer(10,23)',
      },
    ],
  })
);
