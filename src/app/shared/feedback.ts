export class Feedback {
    firstname: string;
    lastname: string;
    telnum: number;
    email: string;
    agree: boolean;
    contacttype: string;
    message: string;
    id: number;
};

export const ContactType = ['None', 'Tel', 'Email'];