export interface Attachment {
    id: string;
    filename: string;
    url: string;
    mime_type: string;
    size: number; // size in bytes
    message_id: string;
    created_at: string;
    updated_at: string;
}