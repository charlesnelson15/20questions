type Role_t = 'user' | 'developer' | 'assistant';


export interface Message_t {
    role: Role_t;
    content: string;
}