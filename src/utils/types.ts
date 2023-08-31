export type Message = {
  header: string;
  body: string;
  actionButton1?: { text: string; url: string };
  actionButton2?: { text: string; url: string };
};
