import { CommentViewModel } from "../entities/viewmodels/CommentVM";

export const mockComments: CommentViewModel[] = [
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
            content: "This is the first comment.",
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
            content: "This is another comment.",
            createdAt: "2023-01-02T12:00:00Z",
        },
    ];