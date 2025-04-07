import { CommentViewModel } from "../entities/viewmodels/CommentVM";

export const mockComments: CommentViewModel[][] = [
  [
    {
      id: 1,
      user: {
        id: 1,
        firstName: "John",
        lastName: "Smith",
        fullName: "John Smith",
        email: "jsmith@example.com",
        profilePicUrl: "/person.svg",
        role: "user",
        createdAt: "2023-01-01T12:00:00Z",
      },
      content: "This is the first comment in section 1.",
      createdAt: "2023-01-01T12:00:00Z",
    },
    {
      id: 2,
      user: {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        fullName: "Jane Doe",
        email: "JaneTakesTheBlame@example.com",
        profilePicUrl: "/person.svg",
        role: "user",
        createdAt: "2023-01-02T12:00:00Z",
      },
      content: "This is another comment in section 1.",
      createdAt: "2023-01-02T12:00:00Z",
    },
  ],
  [
    {
      id: 3,
      user: {
        id: 3,
        firstName: "Alice",
        lastName: "Johnson",
        fullName: "Alice Johnson",
        email: "alice@example.com",
        profilePicUrl: "/person.svg",
        role: "user",
        createdAt: "2023-01-03T12:00:00Z",
      },
      content: "This is a comment in section 2.",
      createdAt: "2023-01-03T12:00:00Z",
    },
    {
      id: 4,
      user: {
        id: 4,
        firstName: "Bob",
        lastName: "Brown",
        fullName: "Bob Brown",
        email: "bob@example.com",
        profilePicUrl: "/person.svg",
        role: "user",
        createdAt: "2023-01-04T12:00:00Z",
      },
      content: "This is another comment in section 2.",
      createdAt: "2023-01-04T12:00:00Z",
    },
  ],
  [
    {
      id: 5,
      user: {
        id: 5,
        firstName: "Charlie",
        lastName: "Davis",
        fullName: "Charlie Davis",
        email: "charlie@example.com",
        profilePicUrl: "/person.svg",
        role: "user",
        createdAt: "2023-01-05T12:00:00Z",
      },
      content: "This is a comment in section 3.",
      createdAt: "2023-01-05T12:00:00Z",
    },
  ],
];
