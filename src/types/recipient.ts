import type { messageStatus } from "./message";
import type { UserDetail } from "./user";

export interface Recipient {
  recipient_id: string | string[];
  message_id: string;
  status: messageStatus | string;
  recipient: UserDetail;
}


export interface RecipientOutput {
  id : string
  message_id : string
  recipient_id : string
}

// New shemes
export interface RecipientMessageStatus {
  id: string;
  status: "RECEIVED" | "READ" | "DELETED" | string;
  read_at: string; 
  message: MessageSummary[];
  recipient: User;
}

export interface MessageSummary {
  id: string;
  subject: string;
  body: string;
  sender: User;
  attachments: Attachment[];
}

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  classe_id: string;
}

export interface Attachment {
  id: string;
  message_id: string;
  filename: string;
  filepath: string;
  filetype: string;
  filesize: number;
  uploaded_at: string; // ISO date string
}
