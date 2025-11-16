import type { Attachment } from "./attachement";
import type { Recipient } from "./recipient";
import type { UserDetail } from "./user";
export type messageStatus = "SENT" | "READ" | "ARCHIVED" | "DELETED" | "FAVORITE" | "FOLLOW" | "RECEIVED"


export interface Message {
    id: string;
    subject: string | null;
    body: string | null;
    sender: UserDetail;
    attachments: Attachment[] | null;
}

export interface ReceivedMessage {
    id: string;
    status: messageStatus | string;
    read_at: string | null;
    message : Message;
    recipient: UserDetail;
}  
export interface SendedMessage {
    id: string | null;
    subject: string | null;
    sender_id: string;
    status_by_sender: messageStatus | string;
    body: string | null;
    is_group: boolean;
    recipients: Recipient[];
    sender: UserDetail;
    attachments: Attachment[] | null;
}   
export interface SendMessagePayload {
  subjet: string;
  body: string;
  is_group: boolean;
  recipient_id: string | string [];
//   class_id: string;
}