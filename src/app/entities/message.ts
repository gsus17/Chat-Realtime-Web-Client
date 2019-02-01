
/**
 * Message entity.
 */
interface Message {
  id: string;
  to: string;
  message: string;
  sentByMe: boolean;
  date: Date;
}
