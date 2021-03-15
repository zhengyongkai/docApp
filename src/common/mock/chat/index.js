let Mock = require("mockjs");
// let Random = Mock.Random;
Mock.mock(
  "/chat/chatMessage",
  "get",
  Mock.mock({
    "chatmessage|15": [
      {
        name: "@name",
        img: "@image(200x100,@color,@name)",
        text: "@cparagraph(2)",
        time: "2021-03-04 14:@integer(10,23):@integer(10,23)",
      },
    ],
  })
);

Mock.mock("/friend/friendList", "get", [
  {
    title: "A",
    item: Mock.mock({
      "object|7": [
        {
          name: "@name",
          img: "@image(200x100,@color,@name)",
          text: "@cparagraph(2)",
          time: "2021-03-04 14:@integer(10,23):@integer(10,23)",
        },
      ],
    }),
  },
  {
    title: "B",
    item: Mock.mock({
      "object|23": [
        {
          name: "@name",
          img: "@image(200x100,@color,@name)",
          text: "@cparagraph(2)",
          time: "2021-03-04 14:@integer(10,23):@integer(10,23)",
        },
      ],
    }),
  },
  {
    title: "C",
    item: Mock.mock({
      "object|20": [
        {
          name: "@name",
          img: "@image(200x100,@color,@name)",
          text: "@cparagraph(2)",
          time: "2021-03-04 14:@integer(10,23):@integer(10,23)",
        },
      ],
    }),
  },
  {
    title: "E",
    item: Mock.mock({
      "object|8": [
        {
          name: "@name",
          img: "@image(200x100,@color,@name)",
          text: "@cparagraph(2)",
          time: "2021-03-04 14:@integer(10,23):@integer(10,23)",
        },
      ],
    }),
  },
  {
    title: "F",
    item: Mock.mock({
      "object|8": [
        {
          name: "@name",
          img: "@image(200x100,@color,@name)",
          text: "@cparagraph(2)",
          time: "2021-03-04 14:@integer(10,23):@integer(10,23)",
        },
      ],
    }),
  },
  {
    title: "G",
    item: Mock.mock({
      "object|8": [
        {
          name: "@name",
          img: "@image(200x100,@color,@name)",
          text: "@cparagraph(2)",
          time: "2021-03-04 14:@integer(10,23):@integer(10,23)",
        },
      ],
    }),
  },
  {
    title: "H",
    item: Mock.mock({
      "object|8": [
        {
          name: "@name",
          img: "@image(200x100,@color,@name)",
          text: "@cparagraph(2)",
          time: "2021-03-04 14:@integer(10,23):@integer(10,23)",
        },
      ],
    }),
  },
  {
    title: "I",
    item: Mock.mock({
      "object|8": [
        {
          name: "@name",
          img: "@image(200x100,@color,@name)",
          text: "@cparagraph(2)",
          time: "2021-03-04 14:@integer(10,23):@integer(10,23)",
        },
      ],
    }),
  },
  {
    title: "J",
    item: Mock.mock({
      "object|8": [
        {
          name: "@name",
          img: "@image(200x100,@color,@name)",
          text: "@cparagraph(2)",
          time: "2021-03-04 14:@integer(10,23):@integer(10,23)",
        },
      ],
    }),
  },
  {
    title: "K",
    item: Mock.mock({
      "object|8": [
        {
          name: "@name",
          img: "@image(200x100,@color,@name)",
          text: "@cparagraph(2)",
          time: "2021-03-04 14:@integer(10,23):@integer(10,23)",
        },
      ],
    }),
  },
  {
    title: "L",
    item: Mock.mock({
      "object|8": [
        {
          name: "@name",
          img: "@image(200x100,@color,@name)",
          text: "@cparagraph(2)",
          time: "2021-03-04 14:@integer(10,23):@integer(10,23)",
        },
      ],
    }),
  },
  {
    title: "M",
    item: Mock.mock({
      "object|8": [
        {
          name: "@name",
          img: "@image(200x100,@color,@name)",
          text: "@cparagraph(2)",
          time: "2021-03-04 14:@integer(10,23):@integer(10,23)",
        },
      ],
    }),
  },
  {
    title: "N",
    item: Mock.mock({
      "object|8": [
        {
          name: "@name",
          img: "@image(200x100,@color,@name)",
          text: "@cparagraph(2)",
          time: "2021-03-04 14:@integer(10,23):@integer(10,23)",
        },
      ],
    }),
  },
  {
    title: "O",
    item: Mock.mock({
      "object|8": [
        {
          name: "@name",
          img: "@image(200x100,@color,@name)",
          text: "@cparagraph(2)",
          time: "2021-03-04 14:@integer(10,23):@integer(10,23)",
        },
      ],
    }),
  },
  {
    title: "P",
    item: Mock.mock({
      "object|8": [
        {
          name: "@name",
          img: "@image(200x100,@color,@name)",
          text: "@cparagraph(2)",
          time: "2021-03-04 14:@integer(10,23):@integer(10,23)",
        },
      ],
    }),
  },
  {
    title: "Q",
    item: Mock.mock({
      "object|8": [
        {
          name: "@name",
          img: "@image(200x100,@color,@name)",
          text: "@cparagraph(2)",
          time: "2021-03-04 14:@integer(10,23):@integer(10,23)",
        },
      ],
    }),
  },
]);
