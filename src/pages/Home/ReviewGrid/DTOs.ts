export interface ClientSpeak {
  id: number;
  firstName: string;
  lastName: string;
  comments: string;
  image?: string;
}

export interface ClientSpeaksProps {
  limit?: number;
}

export interface ReviewCardProps {
  client: ClientSpeak;
}