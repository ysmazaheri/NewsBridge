import { CommentViewModel } from "../entities/viewmodels/CommentVM";

export const mockComments: CommentViewModel[] = [
        {
            id: 1,
            user: {
                id: 1,
                fullName: "User1",
                email: "user1@example.com",
                profilePicUrl: "/person.svg",
                role: "user",
                createdAt: "2023-01-01T12:00:00Z",
            },
            content: "This is the first comment.",
            createdAt: "2023-01-01T12:00:00Z",
        },
        {
            id: 2,
            user: {
                id: 2,
                fullName: "User2",
                email: "user2@example.com",
                profilePicUrl: "/person.svg",
                role: "user",
                createdAt: "2023-01-02T12:00:00Z",
            },
            content: "This is another comment.",
            createdAt: "2023-01-02T12:00:00Z",
        },
    ];